import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Screenshot {
  src: string;
  alt: string;
  title: string;
}

interface ScreenshotModalProps {
  screenshots: Screenshot[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ScreenshotModal({
  screenshots,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ScreenshotModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
    } else if (e.key === 'ArrowRight') {
      onNavigate((currentIndex + 1) % screenshots.length);
    }
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const current = screenshots[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-5xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container with integrated header */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
          {/* Header bar */}
          <div className="bg-[#1a1025] px-4 py-3 flex items-center justify-between">
            <h3 className="text-white font-display font-bold text-xl">
              {current.title}
            </h3>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative aspect-[2870/1728]">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={() => onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length)}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Previous screenshot"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => onNavigate((currentIndex + 1) % screenshots.length)}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Next screenshot"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-white/50 text-sm mt-4">
          Use arrow keys to navigate, Esc to close
        </p>
      </div>
    </div>
  );
}
