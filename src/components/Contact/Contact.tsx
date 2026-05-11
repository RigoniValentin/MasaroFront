import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Mail } from "lucide-react";

const whatsappMsg = "¡¡ Hola !! Me gustaría obtener más información sobre sus servicios. Gracias!";
const encodedMsg = encodeURIComponent(whatsappMsg);
const whatsappUrl = `https://wa.me/+5493584226727?text=${encodedMsg}`;

const contactCards = [
  {
    icon: Phone,
    title: "WhatsApp",
    info: "358-4226727",
    color: "from-green-500 to-green-600",
    action: () => window.open(whatsappUrl, "_blank", "noopener,noreferrer"),
  },
  {
    icon: Instagram,
    title: "Instagram",
    info: "@masaro_si",
    color: "from-purple-500 to-pink-500",
    action: () =>
      window.open(
        "https://www.instagram.com/masaro_s.i?igsh=MXRlOHUxZXd3anBpNA==",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    icon: MapPin,
    title: "Ubicación",
    info: "Rosario de Santa Fe N° 94, Río Cuarto",
    color: "from-masaro-teal to-masaro-green",
    action: () =>
      window.open(
        "https://www.google.com.ar/maps/place/Masaro+servicios+integrales+sas/@-33.1141994,-64.3601378,17z/data=!3m1!4b1!4m6!3m5!1s0x95d2010074ffd9bd:0xc129f2e4e94e3c4e!8m2!3d-33.114204!4d-64.3552723!16s%2Fg%2F11x39gr9qr?hl=es&entry=ttu",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    icon: Mail,
    title: "Email",
    info: "masaro_servintegrales@outlook.com",
    color: "from-masaro-navy to-masaro-navy-light",
    action: () => { window.location.href = "mailto:masaro_servintegrales@outlook.com"; },
  },
];

const Contact = () => {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 bg-gradient-to-tr from-[#ecfdf5] via-[#f0fdfa] to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-masaro-teal/8 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-masaro-green/6 rounded-full blur-3xl translate-x-1/2" />

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
            Contacto
          </span>
          <h2 className="section-title text-masaro-dark mb-4">
            Hablemos de tu{" "}
            <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Contáctanos por cualquiera de nuestros canales y te responderemos a
            la brevedad.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={card.action}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-masaro-teal/10 transition-all duration-300 cursor-pointer text-center"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-montserrat font-bold text-masaro-dark text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.info}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-masaro-gradient shadow-xl shadow-masaro-teal/20">
            <div className="text-white text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-montserrat font-bold mb-1">
                ¿Necesitás una cotización?
              </h3>
              <p className="text-white/70 text-sm">
                Escribíinos y te respondemos en menos de 24hs
              </p>
            </div>
            <button
              onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
              className="flex-shrink-0 px-8 py-3 bg-white rounded-full text-masaro-green font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Escribinos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
