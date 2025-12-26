import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import VideoSection from '@/components/VideoSection';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Sustainability from '@/components/Sustainability';
import Story from '@/components/Story';
import PreorderCTA from '@/components/PreorderCTA';
import Footer from '@/components/Footer';

const sections = [
  { component: VideoSection, id: undefined },
  { component: ProblemSolution, id: undefined },
  { component: HowItWorks, id: 'how-it-works' },
  { component: Features, id: undefined },
  { component: Sustainability, id: undefined },
  { component: Story, id: 'story' },
  { component: PreorderCTA, id: 'preorder' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Computer - A calm creativity computer for kids</title>
        <meta
          name="description"
          content="Transform your old laptop into a calm, distraction-free creativity computer for kids ages 3-8. No internet, no ads, no apps to manage."
        />
        <meta property="og:title" content="Purple Computer" />
        <meta
          property="og:description"
          content="A calm creativity computer they can call their own"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <main className="bg-white">
        <Hero />
        {sections.map(({ component: Component, id }, index) => (
          <Section key={index} index={index} id={id}>
            <Component />
          </Section>
        ))}
        <Footer startsWithPurple={(sections.length - 1) % 2 === 0} />
      </main>
    </>
  );
}
