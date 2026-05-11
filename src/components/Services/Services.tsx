import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";

import CentroDeportivo from "../../assets/centrodeportivo.jpg";
import Clinicas from "../../assets/clinicas.jpg";
import Supermercado from "../../assets/supermercadosshopping.jpg";
import Universidad from "../../assets/universidades.jpg";
import PlantaIndustrial from "../../assets/Industrial.jpg";
import Oficina from "../../assets/oficinas.jpg";
import obras from "../../assets/finaldeobra.jpg";
import vidrios from "../../assets/limpiezadevidrioenaltura.jpeg";
import jardin from "../../assets/jardineria.jpg";
import insumos from "../../assets/insumos.png";

const tabs = [
  {
    key: "integral",
    label: "Limpieza Integral",
    icon: Building2,
    services: [
      { image: PlantaIndustrial, title: "Plantas industriales, alimenticias y frigoríficas" },
      { image: Oficina, title: "Oficinas, depósitos, laboratorios y bancos" },
      { image: Universidad, title: "Hoteles, universidades, museos y escuelas" },
      { image: Supermercado, title: "Shoppings, hipermercados y supermercados" },
      { image: Clinicas, title: "Hospitales, sanatorios y clínicas" },
      { image: CentroDeportivo, title: "Consorcios, centros deportivos y estadios" },
    ],
  },
  {
    key: "especificos",
    label: "Servicios Específicos",
    icon: Sparkles,
    services: [
      { image: obras, title: "Finales de obra y post mudanza" },
      { image: vidrios, title: "Limpieza de vidrios en altura" },
      { image: jardin, title: "Jardinería y corte de césped" },
      { image: insumos, title: "Provisión de insumos higiénicos" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <section id="servicios" className="relative py-16 sm:py-20 bg-gradient-to-br from-[#ecfdf5] via-white to-[#f0fdfa] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-masaro-green/8 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-masaro-teal/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Header + Tabs Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-masaro-teal/10 text-masaro-green text-sm font-semibold uppercase tracking-wider mb-3">
              Servicios
            </span>
            <h2 className="section-title text-masaro-dark text-3xl sm:text-4xl">
              Nuestras <span className="gradient-text">Soluciones</span>
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? "bg-white text-masaro-dark shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden xs:inline">{tab.label}</span>
                <span className="xs:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {currentTab.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[3/2]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-masaro-dark/80 via-masaro-dark/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="w-8 h-0.5 bg-masaro-teal mb-2 group-hover:w-12 transition-all duration-400" />
                  <h3 className="text-white font-semibold text-xs sm:text-sm leading-snug line-clamp-2">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
