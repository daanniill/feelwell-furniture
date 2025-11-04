import { Link } from "react-router-dom";
import prod1 from "../assets/images/prod1.jpg";
import prod2 from "../assets/images/prod2.jpg";
import prod3 from "../assets/images/prod3.jpg";

const featuredItems = [
  { name: "CP24-14 Bed", image: prod1, price: "$487" },
  { name: "CP24-46 Bed", image: prod2, price: "$515" },
  { name: "CP24-14 Bed", image: prod3, price: "$487" },
];

export default function FeaturedCollection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 text-gray-900 dark:text-gray-100">
          Featured Collection
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/collection"
            className="inline-block bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all font-medium"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

