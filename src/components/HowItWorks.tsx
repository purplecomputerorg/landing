export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-purple-50 to-purple-50 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          Simple setup
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-16 text-center tracking-tight">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-primary text-white flex items-center justify-center mx-auto mb-6 font-display font-bold text-2xl shadow-lg shadow-purple-primary/25">
              1
            </div>
            <h3 className="font-display font-bold text-gray-900 mb-3 text-xl">Get the USB</h3>
            <p className="text-gray-500 leading-relaxed">
              We mail you a pre-loaded USB drive with Purple Computer ready to install.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-primary text-white flex items-center justify-center mx-auto mb-6 font-display font-bold text-2xl shadow-lg shadow-purple-primary/25">
              2
            </div>
            <h3 className="font-display font-bold text-gray-900 mb-3 text-xl">Install on an old laptop</h3>
            <p className="text-gray-500 leading-relaxed">
              Plug in, follow the simple steps, and your old laptop becomes a Purple Computer.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-primary text-white flex items-center justify-center mx-auto mb-6 font-display font-bold text-2xl shadow-lg shadow-purple-primary/25">
              3
            </div>
            <h3 className="font-display font-bold text-gray-900 mb-3 text-xl">Hand it over</h3>
            <p className="text-gray-500 leading-relaxed">
              It's theirs now. No supervision required.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-16">
          No tech skills needed.
        </p>
      </div>
    </section>
  );
}
