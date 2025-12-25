export default function Story() {
  return (
    <section id="story" className="py-24 px-6 sm:px-8 lg:px-12 bg-purple-50 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          Our story
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          How Purple came to be
        </h2>

        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            It started with a simple request: a kid who wanted his own computer. Not to
            watch videos or play games—just to explore the way he explores everything else.
            The same way he has his own rolling pin in the kitchen, his own tools in the
            garage. Real tools, not toys.
          </p>

          <p>
            So an old MacBook—one that was too slow for anything useful—became something
            new. Something built just for him.
          </p>

          <p>
            When he pressed a key and a sound came out, when he typed "cat" and saw 🐱,
            the look on his face made it clear: this was worth sharing.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-purple-200">
          <p className="text-purple-primary font-semibold mb-6 tracking-wide uppercase text-sm">
            Team
          </p>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-primary flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0">
              T
            </div>
            <div>
              <h3 className="font-display font-bold text-gray-900 text-lg">Tavi Nathanson</h3>
              <p className="text-gray-500 mt-1">
                Software engineer and father of two. Building Purple because his kids deserve better than tablets.
              </p>
              <a
                href="https://linkedin.com/in/tavinathanson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-purple-primary hover:text-purple-dark text-sm font-medium transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
