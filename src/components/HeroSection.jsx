import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#c3c2bf] to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-transparent rounded-2xl p-10 text-center"
      >
        <h1 className="text-5xl font-light mb-2">FeelWellFurniture</h1>
        <p className="text-gray-700 mb-4">Where Comfort Meets Style</p>
      </motion.div>
    </section>
  );
}
