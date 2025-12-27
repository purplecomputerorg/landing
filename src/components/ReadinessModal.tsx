'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { laptopModels, LaptopModel } from '@/data/laptopModels';

interface ReadinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReadinessModal({ isOpen, onClose }: ReadinessModalProps) {
  const [query, setQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState<LaptopModel | null>(null);
  const [isCustom, setIsCustom] = useState(false);
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

    setSubmitting(true);

    const payload = {
      laptopModel: selectedModel?.label || query,
      laptopValue: selectedModel?.value || 'custom',
      laptopCategory: selectedModel?.category || 'unknown',
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

  const isFormValid = email.trim() && (selectedModel || isCustom);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 overflow-visible">
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
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Get notified about your laptop
            </h2>
            <p className="text-purple-primary font-medium mb-3">
              Purple works on most old laptops, Mac or PC.
            </p>
            <p className="text-gray-500 mb-6">
              We're rolling out support in waves, starting with Intel Macs (2013-2018). Tell us what you have and we'll personally let you know when yours is ready.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your laptop
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
                  placeholder="Start typing (e.g. MacBook Pro 2015)"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-primary focus:border-transparent outline-none transition-all ${
                    selectedModel || isCustom ? 'border-green-400 bg-green-50' : 'border-gray-300'
                  }`}
                />
                {(selectedModel || isCustom) && (
                  <p className="text-xs text-green-600 mt-1">
                    {selectedModel ? `Selected: ${selectedModel.label}` : `Custom: ${query}`}
                  </p>
                )}

                {showDropdown && (filteredModels.length > 0 || showOtherOption) && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
                    {filteredModels.map((model, index) => (
                      <button
                        key={model.value}
                        type="button"
                        onClick={() => handleSelect(model)}
                        className={`w-full text-left px-4 py-3 transition-colors first:rounded-t-xl ${
                          index === highlightedIndex ? 'bg-purple-50' : 'hover:bg-gray-50'
                        } ${!showOtherOption && index === filteredModels.length - 1 ? 'rounded-b-xl' : ''}`}
                      >
                        <span className="text-gray-900">{model.label}</span>
                        {model.category === 'mac-priority' && (
                          <span className="ml-2 text-xs text-green-600 font-medium">April 2026</span>
                        )}
                      </button>
                    ))}
                    {showOtherOption && (
                      <button
                        type="button"
                        onClick={handleSelectOther}
                        className={`w-full text-left px-4 py-3 transition-colors border-t border-gray-100 rounded-b-xl ${
                          highlightedIndex === filteredModels.length ? 'bg-purple-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-purple-primary font-medium">Use "{query}"</span>
                        <span className="text-gray-400 text-sm ml-2">Not in list? No problem.</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-primary focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-gray-400 mt-1">
                  We'll email you personally. No spam, no newsletter.
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting || !isFormValid}
                className="w-full py-3 bg-purple-primary text-white rounded-xl font-semibold hover:bg-purple-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Notify me when ready'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-purple-100">
              <svg className="w-8 h-8 text-purple-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
              You're on the list!
            </h3>
            <p className="text-gray-500 mb-6">
              We'll personally email you at <span className="font-medium text-gray-700">{email}</span> when support for your laptop is ready.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-purple-primary text-white rounded-xl font-semibold hover:bg-purple-dark transition-all"
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
