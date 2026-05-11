import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import logoImg from "../../assets/Logos/LogoPngBlanco.png";

const navLinks = [
  { to: "quienes-somos", label: "Quiénes Somos", offset: -80 },
  { to: "equipamiento", label: "Equipamiento", offset: -80 },
  { to: "servicios", label: "Servicios", offset: -80 },
  { to: "galeria", label: "Galería", offset: -80 },
  { to: "videos", label: "Videos", offset: -80 },
  { to: "clientes", label: "Clientes", offset: -80 },
  { to: "contacto", label: "Contacto", offset: -80 },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Background layer that fades in/out smoothly */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#4cbece] to-[#46a98a] transition-opacity duration-700 ease-in-out"
          style={{ opacity: isScrolled ? 1 : 0 }}
        />
        <div
          className="absolute inset-0 shadow-lg shadow-black/10 transition-opacity duration-700 ease-in-out pointer-events-none"
          style={{ opacity: isScrolled ? 1 : 0 }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={logoImg}
                alt="MASARO logo"
                className="h-10 sm:h-12 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={link.offset}
                  className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white cursor-pointer transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-masaro-teal group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </ScrollLink>
              ))}
              <ScrollLink
                to="contacto"
                smooth={true}
                duration={600}
                offset={-80}
                className="ml-4 px-5 py-2 bg-masaro-gradient rounded-full text-white text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-masaro-teal/30 transition-all duration-300 hover:scale-105"
              >
                Cotizar
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-0.5 w-full bg-white rounded-full"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-0.5 w-full bg-white rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-[#4cbece] to-[#46a98a] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <img src={logoImg} alt="MASARO" className="h-14 mb-4" />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={link.offset}
                    className="text-2xl font-montserrat font-semibold text-white/90 hover:text-masaro-teal transition-colors duration-300 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ScrollLink
                  to="contacto"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="mt-4 px-8 py-3 bg-masaro-gradient rounded-full text-white font-semibold cursor-pointer hover:shadow-lg hover:shadow-masaro-teal/30 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cotizar
                </ScrollLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
