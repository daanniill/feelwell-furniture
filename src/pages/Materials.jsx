const colors = [
    { name: "Tan", hex: "#D2B48C" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Walnut", hex: "#773F1A" },
    { name: "Gray", hex: "#A9A9A9" },
    { name: "Charcoal", hex: "#444444" },
  ];
  
  export default function Materials() {
    return (
      <div className="px-8 py-16 bg-gray-50 dark:bg-neutral-800">
        <h2 className="text-3xl font-light text-center mb-8 text-gray-900 dark:text-gray-100">Materials & Colors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full shadow-sm border border-gray-300"
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{color.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  