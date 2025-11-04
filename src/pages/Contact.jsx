export default function Contact() {
    return (
      <div className="py-20 px-8 text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-light mb-6 text-gray-900 dark:text-gray-100">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a question or want to order a custom piece? Reach out and we’ll get back to you.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
          <button className="bg-black dark:bg-white dark:text-black text-white py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  