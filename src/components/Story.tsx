export default function Story() {
  return (
    <div className="relative z-20 max-w-3xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          Our story
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          How Purple came to be
        </h2>

        <div className="text-gray-600 leading-relaxed space-y-6 italic">
          <p>
            My 4-year-old wanted his own computer. He has his own rolling pin, his own
            kid-sized tools. Why not a computer?
          </p>

          <p>
            We'd been doing "computer code" together on my laptop for a while: typing words
            to see emojis, playing with colors and sounds. He loved it. So I took an old
            laptop and turned it into something that was fully his. Type "cat" and see 🐱.
            Press any key and hear a sound. Add text to speech so the computer reads back
            what you type.
          </p>

          <p>
            He's been helping me brainstorm new ideas for it ever since. Now we're working
            on bringing it to more kids, and giving more old laptops a reason to stay out
            of the junk drawer.
          </p>

          <p className="text-gray-500 mt-4 not-italic">
            — Tavi, Founder
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
              <a
                href="https://linkedin.com/in/tavinathanson"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-gray-900 text-lg hover:text-purple-primary transition-colors"
              >
                Tavi Nathanson
              </a>
              <p className="text-gray-500 mt-1">
                Software engineer and dad of two young kids.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
