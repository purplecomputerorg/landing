import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faMusic, faFileLines } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  return (
    <div className="relative z-20 max-w-5xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          What's inside
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-16 text-center tracking-tight">
          Built for curiosity
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <span className="text-purple-primary/40 text-sm">Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FontAwesomeIcon icon={faCommentDots} className="text-purple-primary" style={{ width: '1.75rem', height: '1.75rem' }} />
                <h3 className="font-display font-bold text-xl text-gray-900">Ask</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Type a word, see an emoji. Type math, see the answer. A gentle first step into computing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <span className="text-purple-primary/40 text-sm">Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FontAwesomeIcon icon={faMusic} className="text-purple-primary" style={{ width: '1.75rem', height: '1.75rem' }} />
                <h3 className="font-display font-bold text-xl text-gray-900">Play</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Every key makes a sound and color. No wrong notes, no wrong moves. Just exploration.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <span className="text-purple-primary/40 text-sm">Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FontAwesomeIcon icon={faFileLines} className="text-purple-primary" style={{ width: '1.75rem', height: '1.75rem' }} />
                <h3 className="font-display font-bold text-xl text-gray-900">Write</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Large text, easy typing, colors that shift as you go. A space to put thoughts into words.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
