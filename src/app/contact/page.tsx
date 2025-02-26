import Head from 'next/head';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Contact Us</title>
      </Head>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
          <p className="text-lg text-center mb-8">
            Have questions or want to work with us? We do love to hear from you!
          </p>
          <div className="bg-white text-gray-800 p-8 rounded shadow mx-auto max-w-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
