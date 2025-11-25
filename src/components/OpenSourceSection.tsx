import React from 'react';

export default function OpenSourceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-primary/5 to-purple-primary/10">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🔓</div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-purple-primary mb-6">
              100% Open Source
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built in the open, for everyone to use, modify, and improve
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-primary mb-4 flex items-center gap-3">
                <span>💻</span>
                For Developers
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Purple Computer is built with standard, well-documented tools and technologies.
                  The entire codebase is available on GitHub.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Linux-based operating system</li>
                  <li>Python IPython REPL</li>
                  <li>Customizable emoji mappings</li>
                  <li>Extensible mode system</li>
                  <li>Easy to fork and modify</li>
                </ul>
                <div className="pt-4">
                  <a
                    href="https://github.com/purplecomputerorg/purplecomputer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-primary text-white rounded-lg hover:bg-purple-dark transition-colors font-semibold"
                  >
                    <span>→</span>
                    View Main Repository
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-primary mb-4 flex items-center gap-3">
                <span>🤝</span>
                Get Involved
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We welcome contributions from developers, educators, parents, and anyone
                  passionate about making technology more accessible to children.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Report bugs and suggest features</li>
                  <li>Add new emoji mappings</li>
                  <li>Create new interactive modes</li>
                  <li>Improve documentation</li>
                  <li>Share your Purple Computer experiences</li>
                </ul>
                <div className="pt-4">
                  <a
                    href="https://github.com/purplecomputerorg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-primary text-white rounded-lg hover:bg-purple-dark transition-colors font-semibold"
                  >
                    <span>→</span>
                    Browse All Projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Community Callout */}
          <div className="bg-gradient-purple text-white rounded-2xl p-10 text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Join the Community</h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Purple Computer is more than software—it&apos;s a community of people who believe
              technology should be joyful, accessible, and empowering for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/purplecomputerorg/purplecomputer/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-purple-primary rounded-lg hover:bg-yellow-accent hover:text-purple-dark transition-colors font-semibold"
              >
                Report an Issue
              </a>
              <a
                href="https://github.com/purplecomputerorg/purplecomputer/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-colors font-semibold"
              >
                Join Discussions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
