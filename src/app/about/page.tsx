import Head from 'next/head';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>About Us</title>
      </Head>

      {/* About Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
          <p className="text-lg text-center mb-8">
            At Creative Home, we believe in delivering excellence through innovation and creativity. Our mission is to provide high-quality content, stunning designs, and exceptional support to help you achieve your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p>
                We aim to empower individuals and businesses by providing tailored solutions that drive success and inspire creativity. Whether it is web design, content creation, or support, we are dedicated to exceeding your expectations.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p>
                To be a leading name in the creative industry by fostering innovation, building lasting relationships, and delivering unmatched value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow text-center">
              <Image width={300} height={300} src="/team.jpeg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h4 className="text-xl font-semibold mb-2">Sarah Johnson</h4>
              <p>Creative Director</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <Image width={300} height={300} src="/team.jpeg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h4 className="text-xl font-semibold mb-2">Michael Lee</h4>
              <p>Lead Designer</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <Image width={300} height={300} src="/team.jpeg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h4 className="text-xl font-semibold mb-2">Emma Davis</h4>
              <p>Content Strategist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
