import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  index: number;
  id?: string;
  className?: string;
}

export default function Section({ children, index, id, className = '' }: SectionProps) {
  // Even indices: white → purple, Odd indices: purple → white
  const gradient = index % 2 === 0
    ? 'bg-gradient-to-b from-white to-purple-50'
    : 'bg-gradient-to-b from-purple-50 to-white';

  return (
    <section
      id={id}
      className={`py-24 px-6 sm:px-8 lg:px-12 ${gradient} ${id ? 'scroll-mt-16' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
