import React from 'react';
import TerminalDemo from './TerminalDemo';
import ComputerFrame from './ComputerFrame';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-purple">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-sky/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container py-20 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          {/* Logo/Badge */}
          <div className="inline-block mb-6">
            <div className="text-7xl mb-4">💜</div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6">
            Meet Purple Computer
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-4 font-light">
            A joyful, kid-safe creativity computer built from your old laptop
          </p>

          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Turn any computer into a magical terminal where little ones can explore, create, and play
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#try-demo"
              className="px-8 py-4 bg-yellow-accent text-purple-dark rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Try the Demo Below
            </a>
            <a
              href="https://github.com/purplecomputerorg/purplecomputer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all shadow-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Interactive Terminal Demo */}
        <div id="try-demo" className="scroll-mt-20 animate-fade-in">
          <ComputerFrame>
            <TerminalDemo />
          </ComputerFrame>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-bounce">
          <div className="text-white/60 text-sm mb-2">Scroll to learn more</div>
          <div className="text-white/60 text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
}
