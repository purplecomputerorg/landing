'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { laptopModels, LaptopModel } from '@/data/laptopModels';

interface ReadinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const yearOptions = [
  { value: '', label: 'Select year...' },
  { value: '2013-2015', label: '2013-2015' },
  { value: '2016-2018', label: '2016-2018' },
  { value: '2019-2020', label: '2019-2020' },
  { value: '2021+', label: '2021 or newer' },
  { value: 'older', label: 'Older than 2013' },
  { value: 'not-sure', label: "Not sure" },
];

export default function ReadinessModal({ isOpen, onClose }: ReadinessModalProps) {
  const [query, setQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState<LaptopModel | null>(null);
  const [isCustom, setIsCustom] = useState(false);
  const [yearRange, setYearRange] = useState('');
  const [email, setEmail] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredModels = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return laptopModels.filter(
      (m) =>
        m.label.toLowerCase().includes(lower) ||
        m.value.toLowerCase().includes(lower)
    ).slice(0, 6);
  }, [query]);

  const hasExactMatch = filteredModels.some(
    (m) => m.label.toLowerCase() === query.toLowerCase()
  );

  const showOtherOption = query.trim().length > 2 && !hasExactMatch;
  const totalOptions = filteredModels.length + (showOtherOption ? 1 : 0);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedModel(null);
      setIsCustom(false);
      setYearRange('');
      setEmail('');
      setSubmitted(false);
      setShowDropdown(false);
      setHighlightedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  const handleSelect = (model: LaptopModel) => {
    setSelectedModel(model);
    setIsCustom(false);
    setQuery(model.label);
    setShowDropdown(false);
  };

  const handleSelectOther = () => {
    setSelectedModel(null);
    setIsCustom(true);
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || totalOptions === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % totalOptions);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + totalOptions) % totalOptions);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex < filteredModels.length) {
        handleSelect(filteredModels[highlightedIndex]);
      } else if (showOtherOption) {
        handleSelectOther();
      }
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (!selectedModel && !isCustom) return;
    if (!yearRange) return;

    setSubmitting(true);

    const isPriorityMac = selectedModel?.category === 'mac' &&
      (yearRange === '2013-2015' || yearRange === '2016-2018');

    const payload = {
      laptopModel: selectedModel?.label || query,
      laptopValue: selectedModel?.value || 'custom',
      laptopCategory: selectedModel?.category || 'unknown',
      yearRange,
      isPriorityMac,
      wasSelected: !!selectedModel,
      email: email.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch('/api/readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Still show success even if API fails
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  const hasLaptopSelected = selectedModel || isCustom;
  const isPriorityMac = selectedModel?.category === 'mac' &&
    (yearRange === '2013-2015' || yearRange === '2016-2018');
  const isFormValid = email.trim() && hasLaptopSelected && yearRange;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 overflow-visible">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-1">
              Check your laptop
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              We're rolling out support in waves, starting with older Intel Macs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Laptop model autocomplete */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Laptop model
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedModel(null);
                    setIsCustom(false);
                    setShowDropdown(true);
                  }}
                  onFocus={() => {
                    if (query.trim()) setShowDropdown(true);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Start typing (e.g. MacBook Pro)"
                  className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-purple-primary focus:border-transparent outline-none transition-all text-sm ${
                    hasLaptopSelected ? 'border-green-400 bg-green-50' : 'border-gray-300'
                  }`}
                />

                {showDropdown && (filteredModels.length > 0 || showOtherOption) && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                    {filteredModels.map((model, index) => (
                      <button
                        key={model.value}
                        type="button"
                        onClick={() => handleSelect(model)}
                        className={`w-full text-left px-4 py-2.5 transition-colors first:rounded-t-xl text-sm ${
                          index === highlightedIndex ? 'bg-purple-50' : 'hover:bg-gray-50'
                        } ${!showOtherOption && index === filteredModels.length - 1 ? 'rounded-b-xl' : ''}`}
                      >
                        <span className="text-gray-900">{model.label}</span>
                      </button>
                    ))}
                    {showOtherOption && (
                      <button
                        type="button"
                        onClick={handleSelectOther}
                        className={`w-full text-left px-4 py-2.5 transition-colors border-t border-gray-100 rounded-b-xl text-sm ${
                          highlightedIndex === filteredModels.length ? 'bg-purple-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-purple-primary font-medium">"{query}"</span>
                        <span className="text-gray-400 ml-2">Not in list</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Year dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Approximate year
                </label>
                <select
                  value={yearRange}
                  onChange={(e) => setYearRange(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-purple-primary focus:border-transparent outline-none bg-white"
                >
                  {yearOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Priority Mac message */}
              {isPriorityMac && (
                <p className="text-sm text-green-600 font-medium bg-green-50 px-3 py-2 rounded-lg">
                  Great news: Intel Macs from {yearRange} are in our first wave, launching April 2026.
                </p>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-primary focus:border-transparent outline-none transition-all text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting || !isFormValid}
                className="w-full py-2.5 bg-white text-purple-primary border-2 border-purple-primary rounded-xl font-semibold text-sm hover:bg-purple-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-400"
              >
                {submitting ? 'Submitting...' : 'Notify me when ready'}
              </button>

              {/* Preorder CTA */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-sm text-gray-500">or</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-xs text-gray-600 text-center mb-2">
                  Lock in the $30 discount and help us prioritize your laptop.
                </p>
                <a
                  href="#preorder"
                  onClick={onClose}
                  className="block w-full py-2.5 bg-purple-primary text-white rounded-lg font-semibold hover:bg-purple-dark transition-all text-center text-sm"
                >
                  Pre-order for $50
                </a>
                <p className="text-xs text-gray-600 text-center mt-2">
                  Full refund if not supported or you change your mind.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center bg-green-100">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
              You're on the list!
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              We'll email you at <span className="font-medium text-gray-700">{email}</span> when your laptop is supported.
            </p>

            <div className="bg-purple-50 rounded-xl p-4 mb-4">
              <p className="text-purple-primary font-semibold text-sm mb-1">
                Want to lock in the $50 price?
              </p>
              <p className="text-gray-500 text-xs mb-3">
                Your preorder helps us prioritize which laptops to support. Full refund if yours isn't supported or you change your mind.
              </p>
              <a
                href="#preorder"
                onClick={onClose}
                className="inline-block px-5 py-2 bg-purple-primary text-white rounded-full font-semibold text-sm hover:bg-purple-dark transition-all"
              >
                Pre-order now
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              Maybe later
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
