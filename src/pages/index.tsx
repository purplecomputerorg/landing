import Head from 'next/head';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import OpenSourceSection from '@/components/OpenSourceSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Computer - A joyful creativity computer for kids</title>
        <meta
          name="description"
          content="Purple Computer: A joyful, kid-safe creativity computer built from your old laptop. Turn any computer into a magical terminal for young children."
        />
        <meta
          name="keywords"
          content="purple computer, kids computer, children's computer, educational technology, kid-safe computing, open source, Linux for kids"
        />
        <meta property="og:title" content="Purple Computer - A joyful creativity computer for kids" />
        <meta
          property="og:description"
          content="Turn any old laptop into a magical, kid-safe creativity machine"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://purplecomputer.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Purple Computer" />
        <meta
          name="twitter:description"
          content="A joyful, kid-safe creativity computer for young children"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <OpenSourceSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
