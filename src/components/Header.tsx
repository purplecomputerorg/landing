import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-6 sm:px-8 lg:px-12 bg-white/80 backdrop-blur-sm z-50 border-b border-purple-100/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/bot-2-purple.svg"
            alt="Purple Computer"
            width={44}
            height={44}
            className="flex-shrink-0"
          />
          <span className="text-purple-primary font-display font-bold text-xl">
            Purple Computer
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-primary transition-colors text-sm font-medium">
            How it works
          </a>
          <a href="#story" className="text-gray-600 hover:text-purple-primary transition-colors text-sm font-medium">
            Our story
          </a>
          <a href="#preorder" className="text-purple-primary font-semibold text-sm">
            Pre-order
          </a>
        </nav>
      </div>
    </header>
  );
}
