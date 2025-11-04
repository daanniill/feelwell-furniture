import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection({ theme }) {
  return (
    <section className={`relative h-screen flex items-center justify-center overflow-hidden ${
      theme === "dark" 
        ? "bg-gradient-to-b from-neutral-700 to-neutral-900" 
        : "bg-gradient-to-b from-[#c3c2bf] to-white"
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-transparent rounded-2xl p-10 text-center"
      >
        <h1 className="text-5xl font-light mb-2 text-gray-900 dark:text-gray-100">FeelWellFurniture</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Where Comfort Meets Style</p>
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/collection"
            className="bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all font-medium"
          >
            Explore Collection
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-black dark:border-white dark:text-white text-black px-8 py-3 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
