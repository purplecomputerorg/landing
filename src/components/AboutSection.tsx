import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-purple-primary mb-6">
              What is Purple Computer?
            </h2>
            <div className="w-24 h-1 bg-yellow-accent mx-auto rounded-full"></div>
          </div>

          {/* Story Content */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div className="bg-purple-primary/5 rounded-2xl p-8 border-l-4 border-purple-primary">
              <p className="text-xl font-semibold text-purple-primary mb-4">
                The Origin Story
              </p>
              <p>
                Purple Computer was born from a simple moment: watching a curious four-year-old
                discover the joy of mashing keys on a keyboard. That pure delight, that fearless
                exploration, sparked an idea.
              </p>
            </div>

            <p>
              What if we could create a safe, joyful space where young children could explore
              computers on their own terms? A place where every keystroke brings wonder, where
              mistakes are impossible, and where creativity flows freely.
            </p>

            <p>
              Purple Computer is a Linux-based operating system that transforms any old laptop
              into a magical creativity machine. When it boots up, children are greeted by a
              fullscreen terminal with big, friendly text and a simple purple heart prompt.
            </p>

            <div className="bg-yellow-accent/10 rounded-2xl p-8 border-l-4 border-yellow-accent">
              <p className="text-xl font-semibold text-purple-dark mb-4">
                Safe, Joyful Exploration
              </p>
              <p>
                There are no files to delete, no settings to break, no internet to worry about.
                Just a kid, a keyboard, and endless possibilities for play and discovery.
              </p>
            </div>

            <p>
              Type &quot;cat&quot; and see emoji cats. Type &quot;rainbow&quot; and watch colors dance across the screen.
              Every word becomes an opportunity for delight. This is computing at its most joyful,
              most accessible, and most magical.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-purple-primary/5 rounded-xl">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold text-purple-primary mb-2">Creative Freedom</h3>
                <p className="text-sm text-gray-600">
                  No rules, no restrictions. Just pure creative exploration.
                </p>
              </div>
              <div className="text-center p-6 bg-purple-primary/5 rounded-xl">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-semibold text-purple-primary mb-2">Completely Safe</h3>
                <p className="text-sm text-gray-600">
                  No internet, no deletable files. Let them explore freely.
                </p>
              </div>
              <div className="text-center p-6 bg-purple-primary/5 rounded-xl">
                <div className="text-4xl mb-3">♻️</div>
                <h3 className="font-semibold text-purple-primary mb-2">Upcycled Hardware</h3>
                <p className="text-sm text-gray-600">
                  Give old laptops new life as creativity machines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
