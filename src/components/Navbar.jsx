import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium transition-all ${
      isActive ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <Link to="/" className="text-2xl font-light tracking-tight">
        FeelWellFurniture
      </Link>
      <div className="flex gap-6">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/collection" className={navLinkClass}>
          Collection
        </NavLink>
        <NavLink to="/materials" className={navLinkClass}>
          Materials
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
