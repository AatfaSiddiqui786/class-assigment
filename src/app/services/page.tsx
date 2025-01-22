import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Our Services</title>
      </Head>

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
              <p>We prioritize our clients satisfaction by providing customized solutions.</p>
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
    </div>
  );
}
