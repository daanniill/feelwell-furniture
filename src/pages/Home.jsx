import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="py-20 px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-light mb-4">Premium Furniture for Modern Living</h2>
        <p className="text-gray-600 text-lg mb-6">
          We create beautiful, functional pieces that transform your space into a home.
          Each design balances comfort and style with sustainable materials.
        </p>
        <Link
          to="/collection"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Explore Collection
        </Link>
      </section>
    </div>
  );
}
