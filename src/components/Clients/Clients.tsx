import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Client1 from "../../assets/CarrouselClientes/01.png";
import Client2 from "../../assets/CarrouselClientes/02.png";
import Client3 from "../../assets/CarrouselClientes/03.png";
import Client4 from "../../assets/CarrouselClientes/04.png";
import Client5 from "../../assets/CarrouselClientes/05.png";
import Client6 from "../../assets/CarrouselClientes/06.png";
import Client7 from "../../assets/CarrouselClientes/07.png";
import Client8 from "../../assets/CarrouselClientes/08.png";
import Client9 from "../../assets/CarrouselClientes/09.png";
import Client10 from "../../assets/CarrouselClientes/10.png";
import Client11 from "../../assets/CarrouselClientes/11.png";
import Client12 from "../../assets/CarrouselClientes/12.png";
import Client13 from "../../assets/CarrouselClientes/13.png";

const clientImages = [
  Client1, Client2, Client3, Client4, Client5, Client6, Client7,
  Client8, Client9, Client10, Client11, Client12, Client13,
];

const extraClients = [
  { name: "CONSTRUCTORA LUNARDI", service: "Servicio de limpieza en Finales de Obras", contact: "📞 4629741 / 0358-155092457 (Ricardo)", address: "📍 Av. Perón Ctro. 448" },
  { name: "EDIFICIO MAFALDA", service: "Servicio de Limpieza en Edificio", contact: "📞 0351 – 158032605 (Mafalda Alameda)" },
  { name: "CONSORCIO EDIFICIO MICHELANGELO III", service: "Servicio de Limpieza en Edificio", contact: "📞 358-6006114 (Cecilia) / 358-4023221 (Camila)" },
  { name: "CONSORCIO EDIFICIO HOVENIA I-II", service: "Servicio de Limpieza en Edificio", contact: "📞 358-6006114 (Cecilia) / 358-4023221 (Camila)" },
  { name: "CONSORCIO EDIFICIO LUMINO", service: "Servicio de Limpieza en Edificio", contact: "📞 358-6006114 (Cecilia) / 358-4023221 (Camila)" },
  { name: "CONSORCIO TORRES DEL ANDINO I-II", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4247880 (Mellapioni Julieta)" },
  { name: "CONSORCIO EDIFICIO 25 DE MAYO", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4247880 (Mellapioni Julieta)" },
  { name: "CONSORCIO EDIFICIO VITTA", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4247880 (Mellapioni Julieta)" },
  { name: "CONSORCIO EDIFICIO PLAZA OLMOS", service: "Servicio de Limpieza en Edificio", contact: "📞 358-5092140 (Laura - RBG Negocios)" },
  { name: "CONSORCIO EDIFICIO ALFA 1", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4113700 (Pablo Laciar)" },
  { name: "CONSORCIO EDIFICIO GEMA 1", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4113700 (Pablo Laciar)" },
  { name: "CONSORCIO GALERÍA BELGRANO", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4113700 (Pablo Laciar)" },
  { name: "CONSORCIO LAS HERAS", service: "Servicio de Limpieza en Edificio", contact: "📞 358-4314553 (Sergio Díaz)" },
  { name: "MULTISERVICIOS AGROPECUARIOS", service: "Servicio de Limpieza en oficinas y salón comercial", contact: "📞 0358-4025438 (Lourdes)" },
  { name: "CGI S.A.", service: "Servicio de limpieza en oficinas", contact: "📞 4623970 (Ivana Canca)" },
  { name: "ÓPTICA CENTRO", service: "Servicio de Limpieza en oficinas y local comercial", contact: "📞 385-5064436 (Graciela)" },
  { name: "ANALÍTICA S.R.L.", service: "Servicio de Limpieza en Laboratorio de Análisis Clínicos", contact: "📞 0358-156025014 (Marcela)" },
  { name: "CLÍNICA IMEB", service: "Servicio de Limpieza en centro médico y habitaciones", contact: "📞 358-5107228 (Mercedes Genoves)" },
  { name: "IMEB APART", service: "Servicio de Limpieza en espacios comunes y habitaciones", contact: "📞 358-4013073 (María José)" },
  { name: "GALERÍA RÍO CUARTO", service: "Servicio de Limpieza en Galería", contact: "📞 358-6002398 (Madedu Pedro)" },
  { name: "NUEVA MUTUAL DEL PARANÁ", service: "Servicio de Limpieza de Oficinas", contact: "📞 358-4832907 (Johana Ponce)" },
  { name: "PRODEL", service: "Servicio de Limpieza de Local comercial", contact: "📞 358-4167239 (Luis Maldonado)" },
  { name: "CRAVERO HERMANOS (5H)", service: "Servicio de Limpieza de Local comercial", contact: "📞 358-4208444 (Anabella Cravero)" },
  { name: "OLEOHIDRÁULICA L&M", service: "Servicio de Limpieza de Local comercial", contact: "📞 358-4199530 (Mariana Arzaut)" },
  { name: "COOPERATIVA LAS HIGUERAS", service: "Servicio de Limpieza de Sala Médica, Oficinas y Salas Velatorias", contact: "📞 358-4310969 (Camila) / 358-4022408 (Macarena)" },
  { name: "SOCIEDAD FRANCESA DE SM", service: "Servicio de Limpieza de Oficinas, Farmacia, Consultorios, Salas Velatorias", contact: "📞 362-4271703 (Andrés Flores)" },
];

const Clients = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="clientes" className="relative py-20 sm:py-28 bg-gradient-to-bl from-[#f0fdfa] via-white to-[#ecfdf5] overflow-hidden">
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
            Clientes
          </span>
          <h2 className="section-title text-masaro-dark mb-4">
            Confían en <span className="gradient-text">Nosotros</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Empresas, consorcios e instituciones que eligen nuestros servicios de
            limpieza profesional.
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-scroll-left w-max">
            {[...clientImages, ...clientImages].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center h-16 sm:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={img}
                  alt={`Cliente ${(index % clientImages.length) + 1}`}
                  className="h-full w-auto max-w-[120px] sm:max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ver más button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setShowModal(true)}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border-2 border-masaro-teal/30 hover:border-masaro-teal hover:bg-masaro-teal/5 text-masaro-dark font-medium transition-all duration-300 cursor-pointer"
          >
            Ver todos los clientes
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>

      {/* Clients Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <h2 className="text-2xl font-montserrat font-bold text-masaro-dark mb-6">
                Nuestros <span className="gradient-text">Clientes</span>
              </h2>

              <div className="space-y-4">
                {extraClients.map((client, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-masaro-light/50 border border-masaro-teal/10 hover:border-masaro-teal/30 transition-colors"
                  >
                    <h3 className="font-semibold text-masaro-dark text-sm">
                      {client.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {client.service}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {client.contact}
                    </p>
                    {client.address && (
                      <p className="text-gray-400 text-xs">{client.address}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Clients;
