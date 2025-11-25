import React from 'react';

const features = [
  {
    icon: '💜',
    title: 'Big, Friendly Terminal',
    description: 'Large text, colorful output, and a welcoming purple heart prompt make every interaction delightful.',
  },
  {
    icon: '😊',
    title: 'Emoji Library',
    description: 'Type simple words like "cat", "sun", or "rainbow" and watch them transform into colorful emojis.',
  },
  {
    icon: '🎨',
    title: 'Creative Modes',
    description: 'Switch between different modes—emoji mode, color mode, shapes mode—each bringing its own magic.',
  },
  {
    icon: '🔊',
    title: 'Text-to-Speech',
    description: 'The computer can read words aloud, adding another layer of interactive fun.',
  },
  {
    icon: '🎯',
    title: 'No Wrong Answers',
    description: 'Every input creates something beautiful. There are no errors, only discoveries.',
  },
  {
    icon: '🌟',
    title: 'Instant Boot',
    description: 'Turn on the computer and jump straight into the magic. No login, no setup, just play.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-primary/5 to-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-purple-primary mb-6">
            Features That Spark Joy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every detail designed to delight and inspire young minds
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-primary/10 hover:border-purple-primary/30"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-accent/20 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-lg text-purple-dark">
              <span className="font-semibold">Built for ages 4-6:</span> Purple Computer grows
              with your child, offering simple interactions for the youngest users and more
              complex play as they develop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
