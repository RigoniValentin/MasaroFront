import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown, MapPin } from "lucide-react";
import heroVideo from "../../assets/HeroVideo_HD1.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-masaro-dark/70 via-masaro-dark/50 to-masaro-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-masaro-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center section-padding max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-masaro-teal animate-pulse" />
            <span className="text-white/80 text-sm font-medium">
              Limpieza profesional en Río Cuarto
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Soluciones en{" "}
            <span className="gradient-text">limpieza</span>,{" "}
            <br className="hidden sm:block" />
            tranquilidad{" "}
            <span className="gradient-text">garantizada</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            Dejá en nuestras manos el cuidado de tu espacio. Ofrecemos limpieza
            profesional para empresas, oficinas e industrias, con un equipo
            capacitado y tecnología de punta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <ScrollLink
              to="servicios"
              smooth={true}
              duration={600}
              offset={-80}
              className="group px-8 py-4 bg-masaro-gradient rounded-full text-white font-semibold text-lg cursor-pointer hover:shadow-xl hover:shadow-masaro-teal/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nuestros Servicios
              <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </ScrollLink>
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com.ar/maps/place/Masaro+servicios+integrales+sas/@-33.1141994,-64.3601378,17z/data=!3m1!4b1!4m6!3m5!1s0x95d2010074ffd9bd:0xc129f2e4e94e3c4e!8m2!3d-33.114204!4d-64.3552723!16s%2Fg%2F11x39gr9qr?hl=es&entry=ttu",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-5 h-5" />
              Visitanos
            </button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-24 left-0 right-0 section-padding"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap justify-start gap-8 sm:gap-16">
            {[
              { number: "100+", label: "Clientes activos" },
              { number: "15+", label: "Años de experiencia" },
              { number: "24/7", label: "Disponibilidad" },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-montserrat font-bold text-masaro-teal">
                  {stat.number}
                </p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ScrollLink
            to="quienes-somos"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest">
                Scroll
              </span>
              <ChevronDown className="w-5 h-5 text-white/40" />
            </motion.div>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
