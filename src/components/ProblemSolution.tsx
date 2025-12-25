export default function ProblemSolution() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          A different kind of screen time
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-6 text-center tracking-tight">
          Screen time without the guilt
        </h2>

        <p className="text-xl text-gray-500 mb-16 text-center leading-relaxed max-w-2xl mx-auto">
          Most kids' devices are designed to capture attention. Purple is designed to set it free.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">No internet</h3>
            <p className="text-gray-500">No ads, no algorithms, no rabbit holes. Just creativity.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">Nothing to break</h3>
            <p className="text-gray-500">No settings to mess up, no files to delete, no apps to manage.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">No login required</h3>
            <p className="text-gray-500">Power on and it's ready. Hand it over and walk away.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100/50">
            <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">Built to bore them eventually</h3>
            <p className="text-gray-500">Limited by design. They'll put it down when they're done.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
