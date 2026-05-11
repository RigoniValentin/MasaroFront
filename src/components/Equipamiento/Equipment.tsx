import { motion } from "framer-motion";
import { Droplets, SprayCan, Wind, ShieldCheck, Check } from "lucide-react";
import imgLavafregadora from "../../assets/Equipamiento/lavafregadora.jpg";
import imgLustradora from "../../assets/Equipamiento/lustradora.jpg";
import imgAspiradora from "../../assets/Equipamiento/aspiradora.jpg";
import imgInsumos from "../../assets/Equipamiento/insumos.jpg";

const equipmentItems = [
  {
    icon: Droplets,
    title: "Lava-fregadoras e Hidro-lavadoras",
    subtitle: "Limpieza de alta presión",
    desc: "Alta presión para limpieza profunda en superficies industriales y comerciales.",
    features: [
      "Limpieza profunda de superficies",
      "Ideal para pisos industriales",
      "Alta potencia y rendimiento",
    ],
    image: imgLavafregadora,
    isProduct: true,
  },
  {
    icon: SprayCan,
    title: "Lustradoras y Enceradoras",
    subtitle: "Acabado profesional",
    desc: "Acabados profesionales garantizados en pisos de todo tipo.",
    features: [
      "Pisos brillantes y protegidos",
      "Apto para todo tipo de superficie",
      "Funcionamiento industrial",
    ],
    image: imgLustradora,
    isProduct: true,
  },
  {
    icon: Wind,
    title: "Aspiradoras Industriales",
    subtitle: "Máxima succión",
    desc: "Para polvo y líquidos, con máxima potencia de succión.",
    features: [
      "Aspira polvo y líquidos",
      "Tanque de acero inoxidable",
      "Máxima potencia de succión",
    ],
    image: imgAspiradora,
    isProduct: true,
  },
  {
    icon: ShieldCheck,
    title: "Insumos de Calidad",
    subtitle: "Productos certificados",
    desc: "Productos certificados para una limpieza eficiente y segura.",
    features: [
      "Productos biodegradables",
      "Certificados de calidad",
      "Rendimiento profesional",
    ],
    image: imgInsumos,
    isProduct: false,
  },
];

const Equipment = () => {
  return (
    <section
      id="equipamiento"
      className="relative py-16 sm:py-24 bg-gradient-to-bl from-white via-[#f0f9ff] to-[#f0fdfa] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-masaro-teal/6 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-masaro-teal/10 text-masaro-teal text-sm font-semibold uppercase tracking-wider mb-4">
            Equipamiento
          </span>
          <h2 className="section-title text-masaro-dark mb-4">
            Tecnología <span className="gradient-text">Avanzada</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Disponemos del mejor equipamiento para cada servicio, asegurando
            resultados impecables.
          </p>
        </motion.div>

        {/* Equipment Items - Alternating Layout */}
        <div className="space-y-12 lg:space-y-20">
          {equipmentItems.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-14`}
              >
                {/* Image Area */}
                <motion.div
                  className="w-full lg:w-1/2"
                  variants={{
                    hidden: { opacity: 0, x: isReversed ? 80 : -80 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div
                    className={`relative group rounded-3xl overflow-hidden ${
                      item.isProduct
                        ? "bg-white shadow-lg shadow-gray-200/60 border border-gray-100"
                        : "shadow-xl shadow-masaro-teal/10"
                    }`}
                  >
                    {/* Decorative corner accent */}
                    <div
                      className={`absolute top-0 ${
                        isReversed ? "right-0" : "left-0"
                      } w-24 h-24 bg-gradient-to-br from-masaro-teal/20 to-transparent rounded-br-[60px] z-10`}
                    />

                    <div
                      className={`relative ${
                        item.isProduct
                          ? "p-8 sm:p-12 flex items-center justify-center aspect-square sm:aspect-[4/3]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`${
                          item.isProduct
                            ? "max-w-full max-h-full object-contain drop-shadow-lg group-hover:scale-105"
                            : "w-full h-full object-cover group-hover:scale-105"
                        } transition-transform duration-700`}
                      />
                    </div>

                    {/* Icon badge */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-masaro-teal to-masaro-green flex items-center justify-center shadow-lg shadow-masaro-teal/30 z-10">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className="w-full lg:w-1/2"
                  variants={{
                    hidden: { opacity: 0, x: isReversed ? -80 : 80 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                >
                  <div className="max-w-lg">
                    <span className="inline-block px-3 py-1 rounded-full bg-masaro-teal/10 text-masaro-teal text-xs font-semibold uppercase tracking-wider mb-3">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-masaro-dark mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-3">
                      {item.features.map((feature, fIdx) => (
                        <motion.li
                          key={fIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + fIdx * 0.1,
                          }}
                          className="flex items-center gap-3"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-masaro-teal/10 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-masaro-teal" />
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
