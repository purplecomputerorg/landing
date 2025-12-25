import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Header */}
      <header className="py-6 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <Image
            src="/bot-2-purple.svg"
            alt="Purple Computer"
            width={36}
            height={36}
          />
          <span className="text-purple-primary font-display font-bold text-lg tracking-tight">
            Purple Computer
          </span>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            A calm creativity computer{' '}
            <span className="text-purple-primary">they can call their own</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            Transform your old laptop into a distraction-free space for kids to explore, create, and play.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#preorder"
              className="group px-8 py-4 bg-purple-primary text-white rounded-full font-semibold text-lg hover:bg-purple-dark transition-all hover:shadow-lg hover:shadow-purple-primary/25"
            >
              Pre-order for $50
            </a>
            <span className="text-gray-400">
              <s className="text-gray-300">$80</s> early pricing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
