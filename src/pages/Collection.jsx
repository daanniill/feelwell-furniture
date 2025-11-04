import prod1 from "../assets/images/prod1.jpg";
import prod2 from "../assets/images/prod2.jpg";
import prod3 from "../assets/images/prod3.jpg";
import prod4 from "../assets/images/prod4.jpg";
import prod5 from "../assets/images/prod5.jpg";
import prod6 from "../assets/images/prod6.jpg";
import prod7 from "../assets/images/prod7.jpg";
import prod8 from "../assets/images/prod8.jpg";
import prod9 from "../assets/images/prod9.jpg";
import prod10 from "../assets/images/prod10.jpg";

const furniture = [
    { name: "CP24-14 Bed", image: prod1, price: "$487" },
    { name: "CP24-46 Bed", image: prod2, price: "$515" },
    { name: "CP24-14 Bed", image: prod3, price: "$487" },
    { name: "CP24-14 Bed", image: prod4, price: "$487" },
    { name: "CP24-14 Bed", image: prod5, price: "$487" },
    { name: "CP24-14 Bed", image: prod6, price: "$487" },
    { name: "CP24-14 Bed", image: prod7, price: "$487" },
    { name: "CP24-14 Bed", image: prod8, price: "$487" },
    { name: "CP24-14 Bed", image: prod9, price: "$487" },
    { name: "CP24-14 Bed", image: prod10, price: "$487" },
  ];
  
  export default function Collection() {
    return (
      <div className="px-8 py-16">
        <h2 className="text-3xl font-light text-center mb-10 text-gray-900 dark:text-gray-100">Our Collection</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {furniture.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-t-2xl" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  