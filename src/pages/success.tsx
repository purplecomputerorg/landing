import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function Success() {
  return (
    <>
      <Head>
        <title>Order Confirmed - Purple Computer</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Header />

      <main className="relative bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-500 mb-6"
            style={{ width: '4rem', height: '4rem' }}
          />

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-4">
            You're all set!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Thanks for pre-ordering Purple Computer. We'll email you when your USB installer is on its way.
          </p>

          <div className="bg-purple-50 rounded-2xl p-6 mb-8 text-left">
            <h2 className="font-bold text-gray-900 mb-2">What happens next?</h2>
            <ul className="text-gray-600 space-y-2">
              <li>You'll receive a confirmation email shortly.</li>
              <li>We'll notify you when we ship in April 2026.</li>
              <li>Questions? Email us at hello@purplecomputer.org</li>
            </ul>
          </div>

          <Link
            href="/"
            className="inline-block px-8 py-3 bg-purple-primary text-white rounded-full font-bold hover:bg-purple-dark transition-colors"
          >
            Back to home
          </Link>
        </div>

        <Footer startsWithPurple={false} />
      </main>
    </>
  );
}
