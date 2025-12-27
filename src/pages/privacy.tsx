import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Purple Computer</title>
      </Head>

      <main className="min-h-screen bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-purple-primary hover:underline text-sm mb-8 inline-block">
            &larr; Back to home
          </Link>

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-gray">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What we collect</h2>
            <p className="text-gray-600 mb-4">
              When you pre-order or sign up for notifications, we collect your email address and laptop model information.
              When you complete a purchase, our payment processor (Stripe) handles your payment information directly.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How we use it</h2>
            <p className="text-gray-600 mb-4">
              We use your email to send you updates about your pre-order, notify you when your laptop is supported,
              and communicate important product information. We use laptop model data to prioritize which devices to support.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What we don't do</h2>
            <p className="text-gray-600 mb-4">
              We don't sell your data. We don't send marketing emails or newsletters unless you ask.
              We don't share your information with third parties except as needed to process orders.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Questions?</h2>
            <p className="text-gray-600 mb-4">
              Email <a href="mailto:tavi@purplecomputer.org" className="text-purple-primary hover:underline">tavi@purplecomputer.org</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
