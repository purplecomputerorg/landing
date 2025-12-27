'use client';

import Image from 'next/image';
import { useState } from 'react';
import ReadinessModal from './ReadinessModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-white pt-20">
        <div className="px-6 sm:px-8 lg:px-12 pb-20">
          <div className="relative z-20 max-w-4xl text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/bot-2-purple.svg"
                alt=""
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Give them a first computer{' '}
              <span className="text-purple-primary">you can feel good about</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-500 mb-4 leading-relaxed max-w-2xl mx-auto">
              Transform your{' '}
              <span className="relative inline-block">
                old laptop
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-purple-400/60 -rotate-1" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M2 7 Q30 3, 55 8 Q80 11, 98 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}into a distraction-free space for kids to explore, create, and play.
            </p>
            <p className="text-purple-primary font-medium mb-12">
              Designed for ages 3-8
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#preorder"
                  className="w-full sm:w-auto px-8 py-4 bg-purple-primary text-white rounded-full font-semibold text-lg hover:bg-purple-dark transition-all hover:shadow-lg hover:shadow-purple-primary/25 border-2 border-purple-primary hover:border-purple-dark text-center"
                >
                  Pre-order for $50
                </a>
                <span className="text-sm text-purple-primary font-medium bg-purple-100 px-3 py-1 rounded-full">
                  Save $30! $80 after launch
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-purple-primary border-2 border-purple-200 rounded-full font-semibold text-lg hover:border-purple-primary hover:bg-purple-50 transition-all"
                >
                  Will it work on my old laptop?
                </button>
                <span className="text-sm text-gray-500">
                  Rolling out support in waves
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Built by a software engineer and dad of two who wanted a calm first computer for his 4-year-old.
              {' '}
              <a href="#story" className="text-purple-primary hover:underline">
                Our story &rarr;
              </a>
            </p>
          </div>
        </div>
      </section>

      <ReadinessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
