import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-white pt-20">
      <div className="px-6 sm:px-8 lg:px-12 pb-20">
        <div className="relative z-20 max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/bot-2-purple.svg"
              alt=""
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            A calm creativity computer{' '}
            <span className="text-purple-primary">they can call their own</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-500 mb-4 leading-relaxed max-w-2xl mx-auto">
            Transform your old laptop into a distraction-free space for kids to explore, create, and play.
          </p>
          <p className="text-purple-primary font-medium mb-12">
            Designed for ages 3-8
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="#preorder"
              className="px-8 py-4 bg-purple-primary text-white rounded-full font-semibold text-lg hover:bg-purple-dark transition-all hover:shadow-lg hover:shadow-purple-primary/25"
            >
              Pre-order for $50
            </a>
            <span className="text-sm text-purple-primary font-medium bg-purple-100 px-3 py-1 rounded-full">
              $50 now, $80 after launch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
