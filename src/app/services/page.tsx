import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Our Services</title>
      </Head>

      {/* Header */}
      <header className="bg-orange-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Creative Home</h1>
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

      {/* Services Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
          <p className="text-lg text-center mb-8">
            Discover the wide range of services we offer to help you achieve your goals. We provide innovative solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p>
                Creating stunning, responsive, and user-friendly websites that drive engagement and growth for your business.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
              <p>
                Designing visually appealing graphics and branding solutions to make your business stand out.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p>
                Offering comprehensive digital marketing strategies to increase your online presence and drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
              <p>Our team of professionals has years of experience delivering top-notch services.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Customer Satisfaction</h4>
              <p>We prioritize our clients' satisfaction by providing customized solutions.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Innovative Solutions</h4>
              <p>We stay ahead of industry trends to offer the most effective solutions.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Affordable Pricing</h4>
              <p>Our services are competitively priced without compromising quality.</p>
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
