export default function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          {new Date().getFullYear()} Purple Computer
        </p>
        <a
          href="https://github.com/purplecomputerorg/purplecomputer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-purple-primary text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
