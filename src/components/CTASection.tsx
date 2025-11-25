import React from 'react';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="bg-gradient-purple text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-sky/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-6xl mb-6">💜✨💻</div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                Ready to Build Your Purple Computer?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Give an old laptop new purpose. Create a magical space for your child to explore,
                create, and discover the joy of computing.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href="https://github.com/purplecomputerorg/purplecomputer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-yellow-accent text-purple-dark rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Get Started Now
                </a>
                <a
                  href="https://github.com/purplecomputerorg/purplecomputer#installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all shadow-lg border-2 border-white/30"
                >
                  View Installation Guide
                </a>
              </div>

              <p className="text-sm text-white/70">
                Free and open source • No account required • Works on most laptops
              </p>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-primary/5 rounded-xl">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-semibold text-purple-primary mb-2">Quick Setup</h3>
              <p className="text-sm text-gray-600">
                Download, flash USB, install. You&apos;ll be up and running in under an hour.
              </p>
            </div>
            <div className="p-6 bg-purple-primary/5 rounded-xl">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-purple-primary mb-2">Kid-Safe</h3>
              <p className="text-sm text-gray-600">
                No internet, no deletable files, no worries. Let them explore freely.
              </p>
            </div>
            <div className="p-6 bg-purple-primary/5 rounded-xl">
              <div className="text-3xl mb-3">💝</div>
              <h3 className="font-semibold text-purple-primary mb-2">Always Free</h3>
              <p className="text-sm text-gray-600">
                Open source forever. No subscriptions, no hidden costs, no catch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
