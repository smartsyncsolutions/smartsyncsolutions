import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}

          <h1 className="text-2xl font-bold text-[#D4AF37]">
            SmartSync Solutions
          </h1>

          {/* Desktop Menu */}

          <nav className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "text-white hover:text-[#D4AF37] transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-[#111] border-t border-[#222]">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${isActive ? "text-[#D4AF37]" : "text-white"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
