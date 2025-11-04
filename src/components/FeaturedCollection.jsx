import { Link } from "react-router-dom";
import { products } from "../data/products";

const featuredItems = products.slice(0, 3);

export default function FeaturedCollection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 text-gray-900 dark:text-gray-100">
          Featured Collection
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredItems.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden block"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{product.price}</p>
              </div>
            </Link>
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

