import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Home Page</title>
      </Head>

      {/* Header */}
      <header className="bg-orange-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Creative Home</h1>
          <h1 className="text-2xl font-bold">Welcome to Aatfa Websitite</h1>

          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lime-600 to-rose-500 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to a Creative Space</h2>
          <p className="text-lg mb-6">Explore our website to find amazing content and services crafted for you.</p>
          <Link href="/explore">
            <div className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 inline-block">Explore Now</div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Quality Content</h4>
              <p>Delivering top-notch content to help you succeed.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Creative Design</h4>
              <p>Our designs are tailored to inspire and impress.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Exceptional Support</h4>
              <p>We are here to assist you 24/7 with your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">&copy; 2025 Creative Home. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
