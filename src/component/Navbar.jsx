import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
/* Reusable NavLink wrapper */
function NavLink({ to, children, className, onClick }) {
  return (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-shadow  text-[black] ${scrolled ? "shadow-lg" : "shadow-sm"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl  flex items-center justify-center text-black font-bold">
            <img src="data:image/jpeg;base64,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" alt="IT" srcset="" />
          </div>
          <Link to={"/"}>
            <h1 className="text-lg font-semibold text-black">Infinity</h1>
            <p className="text-xs text-black/80">Technolgies</p>
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={`relative transition text-black hover:text-blue-500
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:bg-blue-500 after:transition-all after:duration-300
                    ${active ? " bg-white/20 backdrop-blur-md border border-blue-400/30 shadow-lg py-2 px-3 rounded-full" : "after:w-0 hover:after:w-full"}`}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="hidden md:block rounded-full bg-blue-300
            px-6 py-2 text-sm font-semibold text-black backdrop-blur
            hover:bg-white/20    transition shadow"
          >
            Get Started
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-black"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/10 backdrop-blur-md px-6"
          >
            <ul className="py-4 flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`block ${pathname === link.href ? "text-purple-600 font-semibold" : "text-gray-800"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full px-6 py-2 font-semibold text-black bg-blue-300/5 shadow"
              >
                Get Started
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
