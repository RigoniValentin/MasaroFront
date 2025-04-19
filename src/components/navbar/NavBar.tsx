import { useState, useEffect } from "react"; // se agrega useEffect
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Navbar.module.css";
import logoImg from "../../assets/Logos/LogoPngBlanco.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // estado para el scroll

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // si se scrollea más de 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <nav
          className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
        >
          {" "}
          {/* se aplica clase condicional */}
          {/* Logo */}
          <div className={styles.logoContainer}>
            <a href="/" className={styles.logoLink}>
              <img
                src={logoImg}
                alt="MASARO logo"
                className={styles.logoIcon}
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ScrollLink
              to="quienes-somos"
              smooth={true}
              duration={500}
              offset={-100}
              className={styles.navItem}
            >
              Quienes Somos
            </ScrollLink>
            <ScrollLink
              to="equipamiento"
              smooth={true}
              duration={500}
              offset={-100}
              className={styles.navItem}
            >
              Equipamiento
            </ScrollLink>
            <ScrollLink
              to="servicios"
              smooth={true}
              duration={500}
              offset={400}
              className={styles.navItem}
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              to="galeria"
              smooth={true}
              duration={500}
              offset={-120}
              className={styles.navItem}
            >
              Galería
            </ScrollLink>
            <ScrollLink
              to="clientes"
              smooth={true}
              duration={500}
              offset={-120}
              className={styles.navItem}
            >
              Clientes
            </ScrollLink>
            <ScrollLink
              to="contacto"
              smooth={true}
              duration={500}
              offset={-120}
              className={styles.navItem}
            >
              Contacto
            </ScrollLink>
          </div>
          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        >
          <div className={styles.mobileNavItems}>
            <ScrollLink
              to="quienes-somos"
              smooth={true}
              duration={500}
              offset={-100}
              className={styles.mobileNavItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Quienes Somos
            </ScrollLink>
            <ScrollLink
              to="equipamiento"
              smooth={true}
              duration={500}
              offset={-100}
              className={styles.mobileNavItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Equipamiento
            </ScrollLink>
            <ScrollLink
              to="servicios"
              smooth={true}
              duration={500}
              offset={-100}
              className={styles.mobileNavItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              to="galeria"
              smooth={true}
              duration={500}
              offset={-120}
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </ScrollLink>
            <ScrollLink
              to="clientes"
              smooth={true}
              duration={500}
              offset={-120}
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Clientes
            </ScrollLink>
            <ScrollLink
              to="contacto"
              smooth={true}
              duration={500}
              offset={-120}
              className={styles.navItem}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
