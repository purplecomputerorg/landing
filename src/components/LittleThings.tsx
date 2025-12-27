const examples = [
  'yellow + blue',
  '3 x cat',
  'what is 7 + 8',
  'say hello',
  'rabbits + 7 carrots',
  'asdf + purple',
];

const ColorPill = ({ color, label }: { color: string; label: string }) => (
  <span
    className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
    style={{ backgroundColor: color, color: color === '#FACC15' ? '#713F12' : 'white' }}
  >
    {label}
  </span>
);

const colorMixSubtext = (
  <span className="flex items-center justify-center gap-1">
    <ColorPill color="#FACC15" label="yellow" /> + <ColorPill color="#3B82F6" label="blue" /> = <ColorPill color="#22C55E" label="green" />
  </span>
);

const details: { text: string; subtext: React.ReactNode }[] = [
  { text: 'Autocomplete suggestions', subtext: 'Less typing for small fingers' },
  { text: 'No error messages', subtext: 'Everything does something' },
  { text: 'No shift key needed', subtext: 'Double-tap for symbols' },
  { text: 'Forgiving math', subtext: "Typos don't break calculations" },
  { text: 'Colors mix like paint', subtext: colorMixSubtext },
  { text: 'Reads words aloud', subtext: 'Hear everything you type' },
];

export default function LittleThings() {
  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
        The little things
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-gray-900 mb-6 text-center tracking-tight">
        Built for little hands
      </h2>
      <p className="text-gray-600 text-center mb-8 text-lg max-w-2xl mx-auto">
        Try typing things like:
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-xl mx-auto relative z-20">
        {examples.map((example) => (
          <span
            key={example}
            className="bg-white border border-purple-200 rounded-full px-4 py-2 text-gray-700 font-mono text-sm shadow-sm"
          >
            {example}
          </span>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {details.map((detail) => (
          <div key={detail.text} className="text-center">
            <p className="text-gray-900 font-semibold mb-1">{detail.text}</p>
            <p className="text-gray-500 text-sm">{detail.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
