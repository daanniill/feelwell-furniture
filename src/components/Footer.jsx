export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Brand Section */}
          <div className="text-center">
            <h3 className="text-xl font-light mb-1 text-gray-900 dark:text-gray-100">
              FeelWellFurniture
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Where Comfort Meets Style
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Pinterest
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">949-910-7879</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              clutchdev.apps@gmail.com
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-200 dark:border-neutral-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 FeelWellFurniture. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
  