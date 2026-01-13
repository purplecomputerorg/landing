'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faMusic, faFileLines } from '@fortawesome/free-solid-svg-icons';
import ScreenshotModal from './ScreenshotModal';

const features = [
  {
    icon: faCommentDots,
    title: 'Explore',
    description: 'Type a word, see an emoji, hear it spoken. Mix colors. Do math. Unlimited combinations to explore.',
    screenshot: '/explore_screenshot_cropped.png',
    bgSize: '200%',
    bgPosition: '15% 65%', // Left side, showing the text and emojis
  },
  {
    icon: faMusic,
    title: 'Play',
    description: 'Make music and draw with your keyboard. No wrong notes, just exploration.',
    screenshot: '/play_screenshot_cropped.png',
    bgSize: '250%',
    bgPosition: '50% 55%', // Zoomed into the colored keyboard letters
  },
  {
    icon: faFileLines,
    title: 'Doodle',
    description: 'No distractions, just doodling. Colors shift as you type.',
    screenshot: '/doodle_screenshot_cropped.png',
    bgSize: '220%',
    bgPosition: '15% 0%', // Upper left, showing the drawing
  },
];

export default function Features() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const screenshots = features.map((f) => ({
    src: f.screenshot,
    alt: `${f.title} screenshot`,
    title: f.title,
  }));

  return (
    <>
      <div className="relative z-20 max-w-6xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          What's inside
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-16 text-center tracking-tight">
          Built for curiosity
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => openModal(index)}
                className="w-full aspect-square relative overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-inset rounded-t-2xl"
                aria-label={`View ${feature.title} screenshot`}
              >
                {/* Zoomed-in crop of the screenshot */}
                <div
                  className="absolute inset-0 bg-cover transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${feature.screenshot})`,
                    backgroundSize: feature.bgSize,
                    backgroundPosition: feature.bgPosition,
                  }}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-purple-primary/0 group-hover:bg-purple-primary/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white bg-black/50 px-3 py-1.5 rounded-full text-sm font-medium">
                    Click to view
                  </span>
                </div>
              </button>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-purple-primary"
                    style={{ width: '1.75rem', height: '1.75rem' }}
                  />
                  <h3 className="font-display font-bold text-xl text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScreenshotModal
        screenshots={screenshots}
        currentIndex={currentIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </>
  );
}
