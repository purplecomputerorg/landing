interface FooterProps {
  startsWithPurple?: boolean;
}

export default function Footer({ startsWithPurple = false }: FooterProps) {
  const background = startsWithPurple ? 'bg-purple-50' : 'bg-white';

  return (
    <footer className={`py-12 px-6 sm:px-8 lg:px-12 ${background}`}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          {new Date().getFullYear()} Purple Computer
        </p>
        <p className="text-gray-400 text-sm">
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
    </footer>
  );
}
