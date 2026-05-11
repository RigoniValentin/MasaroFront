import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, History, Eye, Target } from "lucide-react";
import Muñeco01 from "../../assets/Muñeco01.png";
import Muñeco02 from "../../assets/Muñeco02.png";
import Muñeco03 from "../../assets/Muñeco03.png";

const cards = [
  {
    id: "historia",
    title: "Historia",
    icon: History,
    image: Muñeco01,
    color: "from-masaro-teal to-masaro-green",
    content: [
      "MASARO es una empresa familiar de Río Cuarto, surgida tras la división de otra empresa del rubro. Aunque nuestra trayectoria es reciente, contamos con amplia experiencia en el sector y un equipo comprometido con la calidad y la mejora continua.",
      "Nos especializamos en limpieza integral, brindando soluciones rápidas y efectivas para clientes exigentes, evitando la necesidad de gestionar múltiples proveedores. Cumplimos estrictamente con todas las normativas legales y previsionales.",
      "Apostamos a la capacitación constante de nuestros empleados en tecnología, seguridad y nuevos productos, garantizando un servicio eficiente y profesional.",
      "En MASARO, creemos que la limpieza es sinónimo de bienestar y confianza.",
    ],
  },
  {
    id: "vision",
    title: "Visión",
    icon: Eye,
    image: Muñeco02,
    color: "from-masaro-navy to-masaro-navy-light",
    content: [
      "Ser reconocidos por nuestra eficiencia, profesionalismo y compromiso con la mejora continua y el cuidado del medio ambiente.",
    ],
  },
  {
    id: "mision",
    title: "Misión",
    icon: Target,
    image: Muñeco03,
    color: "from-masaro-green to-masaro-teal",
    content: [
      "Mantenemos los espacios limpios y funcionales para un mejor desempeño de las actividades diarias.",
    ],
  },
];

const AboutUs = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const activeCard = cards.find((c) => c.id === activeModal);

  return (
    <section
      id="quienes-somos"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-[#f0fdfa] via-white to-[#ecfdf5] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-masaro-teal/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-masaro-green/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-masaro-teal/10 text-masaro-green text-sm font-semibold uppercase tracking-wider mb-4">
            Quiénes Somos
          </span>
          <h2 className="section-title text-masaro-dark mb-4">
            MASARO:{" "}
            <span className="gradient-text">Limpieza Profesional</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Para empresas, instituciones y comercios. Soluciones integrales con
            tecnología de punta y personal capacitado.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setActiveModal(card.id)}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-masaro-teal/10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} mb-5`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-montserrat font-bold text-masaro-dark mb-3">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                {card.content[0]}
              </p>

              {/* Character Image */}
              <div className="flex justify-center mt-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-32 sm:h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Read more indicator */}
              <div className="mt-4 flex items-center gap-2 text-masaro-green font-medium text-sm">
                <span>Leer más</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${activeCard.color} mb-6`}
              >
                <activeCard.icon className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-masaro-dark mb-6">
                {activeCard.title} de{" "}
                <span className="gradient-text">MASARO</span>
              </h2>

              <div className="space-y-4">
                {activeCard.content.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <img
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="h-40"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutUs;
