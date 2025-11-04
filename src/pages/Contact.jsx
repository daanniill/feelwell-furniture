export default function Contact() {
    return (
      <div className="py-20 px-8 text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have a question or want to order a custom piece? Reach out and we’ll get back to you.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-all">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  