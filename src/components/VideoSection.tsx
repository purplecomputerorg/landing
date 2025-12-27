export default function VideoSection() {
  return (
    <div className="relative z-20 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          See it in action
        </h2>
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl flex items-center justify-center shadow-sm">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-primary ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-purple-primary/40 text-sm">Demo video</p>
          </div>
        </div>
    </div>
  );
}
