interface FooterProps {
  startsWithPurple?: boolean;
}

export default function Footer({ startsWithPurple = false }: FooterProps) {
  const background = startsWithPurple ? 'bg-purple-50' : 'bg-white';

  return (
    <footer className={`py-12 px-6 sm:px-8 lg:px-12 ${background}`}>
      <div className="max-w-4xl mx-auto text-sm text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
          <div>
            <p className="text-gray-400">
              Questions?{' '}
              <a
                href="mailto:tavi@purplecomputer.org"
                className="text-gray-500 hover:text-purple-primary transition-colors"
              >
                tavi@purplecomputer.org
              </a>
            </p>
            <p className="text-gray-400 mt-1">
              All source code is{' '}
              <a
                href="https://github.com/purplecomputerorg/purplecomputer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-primary transition-colors"
              >
                available on GitHub
              </a>
            </p>
          </div>
          <div className="text-gray-400">
            <p>
              <a href="/privacy" className="text-gray-500 hover:text-purple-primary transition-colors">Privacy</a>
              {' · '}
              <a href="/terms" className="text-gray-500 hover:text-purple-primary transition-colors">Terms</a>
            </p>
            <p className="text-gray-500 mt-1">
              {new Date().getFullYear()} Purple Computer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
