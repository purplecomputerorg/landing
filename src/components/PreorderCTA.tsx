import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';

export default function PreorderCTA() {
  return (
    <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
          Pre-order Purple Computer
        </h2>

        <p className="text-xl text-gray-500 mb-12">
          Get the USB installer delivered to your door.
        </p>

        <div className="bg-gradient-to-br from-purple-primary to-purple-dark text-white rounded-3xl p-10 sm:p-12 shadow-xl shadow-purple-primary/20">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-6xl font-display font-extrabold">$50</span>
              <span className="text-3xl text-purple-300 line-through">$80</span>
            </div>
            <p className="text-purple-200 mt-2">
              Pre-order price. Save $30.
            </p>
          </div>

          <a
            href="#preorder"
            className="inline-block px-10 py-4 bg-white text-purple-primary rounded-full font-bold text-lg hover:shadow-lg transition-all mb-8"
          >
            Pre-order now
          </a>

          <div className="text-purple-200 space-y-1">
            <p><span className="font-bold text-white">April 2026</span> for Intel Macs (2013 to 2018)</p>
            <p className="text-purple-300 text-sm">Other laptops coming soon after</p>
          </div>

          <div className="mt-8 pt-6 border-t border-purple-400/30 flex items-center justify-center gap-4 text-purple-100 text-left">
            <FontAwesomeIcon icon={faShieldHeart} className="flex-shrink-0" style={{ width: '1.75rem', height: '1.75rem' }} />
            <span>Full refund if it doesn't work for you. At any time. No questions, no returns needed.</span>
          </div>
        </div>
    </div>
  );
}
