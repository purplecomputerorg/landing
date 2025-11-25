import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">💜</span>
                <span className="text-2xl font-display font-bold">Purple Computer</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                A joyful, kid-safe creativity computer for young children. Built with love
                for families everywhere.
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/purplecomputerorg/purplecomputer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-yellow-accent transition-colors"
                  >
                    Main Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/purplecomputerorg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-yellow-accent transition-colors"
                  >
                    GitHub Organization
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/purplecomputerorg/purplecomputer#installation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-yellow-accent transition-colors"
                  >
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/purplecomputerorg/purplecomputer/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-yellow-accent transition-colors"
                  >
                    Report Issues
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <p className="text-white/70 mb-4 text-sm">
                Purple Computer is open source and community-driven. Everyone is welcome to
                contribute, share ideas, and help make computing more joyful for kids.
              </p>
              <a
                href="https://github.com/purplecomputerorg/purplecomputer/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-yellow-accent text-purple-dark rounded-lg hover:bg-yellow-accent/90 transition-colors font-semibold text-sm"
              >
                Join Discussions
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Purple Computer. Open source and free forever.
              </p>
              <p className="text-white/60 text-sm">
                Built with love by{' '}
                <a
                  href="https://sequencesoftware.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-accent hover:underline"
                >
                  Sequence Software
                </a>
              </p>
            </div>
          </div>

          {/* Extra Love */}
          <div className="text-center mt-8 text-white/40 text-sm">
            Made with 💜 for curious kids everywhere
          </div>
        </div>
      </div>
    </footer>
  );
}
