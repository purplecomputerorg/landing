export default function PaintStroke() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden flex justify-center">
      <div className="h-full w-full max-w-6xl">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5c2d91" stopOpacity="0.02" />
            <stop offset="20%" stopColor="#5c2d91" stopOpacity="0.05" />
            <stop offset="40%" stopColor="#5c2d91" stopOpacity="0.02" />
            <stop offset="60%" stopColor="#5c2d91" stopOpacity="0.05" />
            <stop offset="80%" stopColor="#5c2d91" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#5c2d91" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path
          d="M 65 0
             Q 115 100, 65 200
             T 65 400
             T 65 600
             T 65 800
             T 65 1000"
          fill="none"
          stroke="url(#strokeGradient)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
      </div>
    </div>
  );
}
