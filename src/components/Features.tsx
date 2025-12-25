export default function Features() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          What's inside
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-4 text-center tracking-tight">
          Three modes, endless play
        </h2>

        <p className="text-xl text-gray-500 mb-16 text-center">
          Simple keyboard controls. No mouse needed.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-primary rounded-lg font-mono text-sm font-semibold mb-4">
              F1
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Ask</h3>
            <p className="text-gray-500 leading-relaxed">
              Type a word, see an emoji. Type math, see the answer. A gentle first step into computing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-primary rounded-lg font-mono text-sm font-semibold mb-4">
              F2
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Play</h3>
            <p className="text-gray-500 leading-relaxed">
              Every key makes a sound and color. No wrong notes, no wrong moves. Just exploration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-primary rounded-lg font-mono text-sm font-semibold mb-4">
              F3
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Write</h3>
            <p className="text-gray-500 leading-relaxed">
              Large text, easy typing, colors that shift as you go. A space to put thoughts into words.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
