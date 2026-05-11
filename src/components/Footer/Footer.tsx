import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ChevronUp, Instagram, Mail, Phone } from "lucide-react";
import logoMasaro from "../../assets/Logos/LogoPngBlanco.png";

const footerLinks = [
  { to: "quienes-somos", label: "Quiénes Somos" },
  { to: "equipamiento", label: "Equipamiento" },
  { to: "servicios", label: "Servicios" },
  { to: "galeria", label: "Galería" },
  { to: "clientes", label: "Clientes" },
  { to: "contacto", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#4cbece] to-[#46a98a] pt-16 pb-6 overflow-hidden">

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div>
            <img src={logoMasaro} alt="MASARO" className="h-12 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Soluciones en Limpieza, tranquilidad garantizada. Limpieza
              profesional para empresas, oficinas e industrias en Río Cuarto.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>Rosario de Santa Fe N° 94, Río Cuarto</p>
              <p>358-4226727 | 0358-4667249</p>
              <p>masaro_servintegrales@outlook.com</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-6">
              Links Útiles
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer text-sm"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-montserrat font-semibold text-lg mb-6">
              Redes Sociales
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/masaro_s.i?igsh=MXRlOHUxZXd3anBpNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-sm">@masaro_si</span>
              </a>
              <a
                href="https://wa.me/5493584226727"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">358-4226727</span>
              </a>
              <a
                href="mailto:masaro_servintegrales@outlook.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">masaro_servintegrales@outlook.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Masaro. Todos los derechos reservados.
            Desarrollado por{" "}
            <span
              className="cursor-pointer hover:text-white/60 transition-colors"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/rio_gestion/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <strong className="text-yellow-400">Río</strong>{" "}
              <strong className="text-white/60">Gestión</strong>
            </span>
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5493584226727"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        <svg viewBox="0 0 24 24" width="28" height="28">
          <path
            fill="white"
            d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.4 1 3.7 1 4.3 0 7.8-3.5 7.8-7.8.1-2-.7-4-2.2-5.5zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c.1 3.6-2.8 6.4-6.4 6.4zm3.6-4.9c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.1-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1.4 2.1 3.3 2.9.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.9.1-.9-.1-.2-.2-.3-.4-.4z"
          />
        </svg>
      </motion.a>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-24 z-40 w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all duration-300 cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronUp className="w-5 h-5 text-white/60" />
      </motion.button>
    </footer>
  );
};

export default Footer;
