import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Purple Computer</title>
      </Head>

      <main className="min-h-screen bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-purple-primary hover:underline text-sm mb-8 inline-block">
            &larr; Back to home
          </Link>

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-gray">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pre-orders</h2>
            <p className="text-gray-600 mb-4">
              Pre-orders reserve your spot and lock in the discounted price. We'll ship your USB installer
              when Purple Computer launches for your laptop model. Launch timing depends on your laptop model
              and may change.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Refunds</h2>
            <p className="text-gray-600 mb-4">
              Full refund anytime, no questions asked. If your laptop isn't supported, if you change your mind,
              or for any other reason, just email us. You don't need to return the USB drive.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The product</h2>
            <p className="text-gray-600 mb-4">
              Purple Computer is software that transforms old laptops into kid-friendly computers.
              It requires a compatible laptop (you provide) and the Purple Computer USB installer (we provide).
              We're working to support as many laptop models as possible, but compatibility isn't guaranteed
              until we confirm support for your specific model.
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
