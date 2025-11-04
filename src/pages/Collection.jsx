import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Collection() {
  return (
    <div className="px-8 py-16">
      <h2 className="text-3xl font-light text-center mb-10 text-gray-900 dark:text-gray-100">Our Collection</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-lg transition-all block"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{product.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
  