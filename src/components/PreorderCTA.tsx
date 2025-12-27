'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import ReadinessModal from './ReadinessModal';

export default function PreorderCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
          Pre-order Purple Computer
        </h2>

        <p className="text-xl text-gray-500 mb-12">
          Get the USB installer delivered to your door.
        </p>

        <div className="bg-gradient-to-br from-purple-primary to-purple-dark text-white rounded-3xl p-10 sm:p-12 shadow-xl shadow-purple-primary/20">
          <div className="mb-8">
            <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              $50 now, $80 after launch
            </div>
            <div className="flex items-center justify-center">
              <span className="text-6xl font-display font-extrabold">$50</span>
            </div>
            <p className="text-purple-200 mt-2">
              Save $30 with pre-order pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#preorder"
              className="px-10 py-4 bg-white text-purple-primary rounded-full font-bold text-lg hover:shadow-lg transition-all"
            >
              Pre-order now
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Check my laptop
            </button>
          </div>

          <div className="text-purple-200 space-y-1 mb-8">
            <p><span className="font-bold text-white">April 2026</span> for older Intel Macs (2013 to 2018)</p>
            <p className="text-purple-300 text-sm">Perfect for that laptop in the closet. Other models coming soon.</p>
          </div>

          <div className="pt-6 border-t border-purple-400/30 flex items-center justify-center gap-4 text-purple-100 text-left">
            <FontAwesomeIcon icon={faShieldHeart} className="flex-shrink-0" style={{ width: '1.75rem', height: '1.75rem' }} />
            <span>Full refund if it doesn't work for you. At any time. No questions, no returns needed.</span>
          </div>
        </div>
      </div>

      <ReadinessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
