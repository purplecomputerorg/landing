'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Can it run on my laptop?',
    answer:
      "Purple Computer runs on most laptops. We're rolling out support in waves, starting with Intel Macs from 2013-2018 in April 2026. Use the \"Check my laptop\" button to see where your model sits in the rollout and get notified when it's ready.",
  },
  {
    question: 'Can I undo it and restore the laptop?',
    answer:
      "Yes. The installation replaces what's on the laptop, but you can always reinstall macOS or Windows later if you want. We recommend using a laptop you're not using for anything else.",
  },
  {
    question: 'Will my kid actually use this?',
    answer:
      "Kids who like typing, drawing, or making sounds tend to love it. It's not a replacement for tablets or games. It's a calm creative tool. Some kids use it for 20 minutes a day; others go through phases. That's the point: it doesn't try to hook them.",
  },
  {
    question: 'How do updates work with no internet?',
    answer:
      "We'll send you a new USB drive with major updates, or you can download updates on another computer and transfer them. Most updates are optional since the core experience is simple and stable.",
  },
  {
    question: "What's the refund policy?",
    answer:
      "Full refund if it doesn't work for you. At any time. No questions, no returns needed. Just email us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative z-20 max-w-3xl mx-auto">
      <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
        Questions
      </p>
      <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-12 text-center tracking-tight">
        Common questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-purple-primary flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5">
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
