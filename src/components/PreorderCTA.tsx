export default function PreorderCTA() {
  return (
    <div className="relative z-20 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">
          Pre-order Purple Computer
        </h2>

        <p className="text-xl text-gray-500 mb-12">
          Get the USB installer delivered to your door.
        </p>

        <div className="bg-gradient-to-br from-purple-primary to-purple-dark text-white rounded-3xl p-10 sm:p-12 shadow-xl shadow-purple-primary/20">
          <div className="text-6xl font-display font-extrabold mb-2">$50</div>
          <p className="text-purple-200 mb-8">
            $80 after launch
          </p>

          <a
            href="#preorder"
            className="inline-block px-10 py-4 bg-white text-purple-primary rounded-full font-bold text-lg hover:shadow-lg transition-all mb-8"
          >
            Pre-order now
          </a>

          <div className="text-purple-200 text-sm space-y-1">
            <p>Launching April 2026 for Intel Macs (2013 to 2018)</p>
            <p className="text-purple-300">Other laptops coming soon after</p>
          </div>
        </div>

        <p className="text-gray-400 mt-8">
          Full refund if it doesn't work for you. No questions asked.
        </p>
    </div>
  );
}
