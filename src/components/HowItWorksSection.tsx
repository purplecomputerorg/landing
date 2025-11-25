import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Get an Old Laptop',
    description: 'Find an old laptop you have lying around. Almost any computer from the last 10 years will work perfectly.',
    icon: '💻',
  },
  {
    number: '2',
    title: 'Install Purple Computer',
    description: 'Download the Purple Computer USB installer, boot from the USB, and follow the simple installation process.',
    icon: '💿',
  },
  {
    number: '3',
    title: 'Boot & Play',
    description: 'Turn on the computer and watch it boot straight into the magical purple terminal. No login required.',
    icon: '✨',
  },
  {
    number: '4',
    title: 'Let Them Explore',
    description: 'Hand it to your little one and watch the magic happen. Every keystroke brings joy and discovery.',
    icon: '🎨',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-purple-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up Purple Computer is surprisingly simple
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-gradient-to-r from-purple-primary/5 to-transparent rounded-2xl p-8 hover:from-purple-primary/10 transition-all"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-purple-primary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-primary mb-2 flex items-center gap-3">
                    {step.title}
                    <span className="text-3xl">{step.icon}</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details Callout */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-purple-primary text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>🔧</span>
              What&apos;s Under the Hood?
            </h3>
            <div className="space-y-3 text-white/90">
              <p>
                Purple Computer is built on a lightweight Linux distribution, carefully tuned
                for simplicity and safety.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom IPython-based REPL with emoji mappings</li>
                <li>Text-to-speech integration for audio feedback</li>
                <li>Auto-boot to fullscreen terminal</li>
                <li>No network access by default</li>
                <li>Read-only filesystem prevents accidental changes</li>
                <li>100% open source and customizable</li>
              </ul>
              <p className="text-yellow-accent font-semibold mt-4">
                Everything is open source and available on GitHub!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
