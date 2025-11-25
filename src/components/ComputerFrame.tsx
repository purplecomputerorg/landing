import React from 'react';

interface ComputerFrameProps {
  children: React.ReactNode;
}

export default function ComputerFrame({ children }: ComputerFrameProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Computer Frame SVG Background */}
      <div className="relative">
        {/* Laptop Base */}
        <div className="relative bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl p-8 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-inner">
            {/* Screen Content */}
            <div className="relative bg-purple-primary rounded-lg overflow-hidden">
              {children}
            </div>
          </div>

          {/* Keyboard Area */}
          <div className="mt-4 h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg shadow-inner flex items-center justify-center gap-1 px-4">
            {/* Keyboard Keys Decoration */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-gray-800 rounded-sm opacity-50"
              ></div>
            ))}
          </div>

          {/* Trackpad */}
          <div className="mt-2 mx-auto w-32 h-16 bg-gray-700 rounded-lg shadow-inner"></div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-purple-primary/20 blur-3xl -z-10 rounded-full"></div>
      </div>

      {/* Floating Emoji Decorations */}
      <div className="absolute -top-10 -left-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
        💜
      </div>
      <div className="absolute -top-10 -right-10 text-6xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
        ✨
      </div>
      <div className="absolute -bottom-10 left-1/4 text-5xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        🌈
      </div>
    </div>
  );
}
