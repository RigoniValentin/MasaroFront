import React, { useState } from "react";
import styles from "./Bottom.module.css";
import Fondo from "../../assets/FondoBannerFin.jpg";
import Fondo2 from "../../assets/FondoBannerFin2.jpg";
import CentroDeportivo from "../../assets/centrodeportivo.jpg";
import Clinicas from "../../assets/clinicas.jpg";
import Supermercado from "../../assets/supermercadosshopping.jpg";
import Universidad from "../../assets/universidades.jpg";
import PlantaIndustrial from "../../assets/Industrial.jpg";
import Oficina from "../../assets/oficinas.jpg";
import flecha from "../../assets/next.png";
import obras from "../../assets/finaldeobra.jpg";
import vidrios from "../../assets/limpiezadevidrioenaltura.jpeg";
import jardin from "../../assets/jardineria.jpg";
import insumos from "../../assets/insumos.png";
import Galery1 from "../../assets/CarrouselGalery/01.jpg";
import Galery2 from "../../assets/CarrouselGalery/02.jpg";
import Galery3 from "../../assets/CarrouselGalery/03.jpg";
import Galery4 from "../../assets/CarrouselGalery/04.jpg";
import Galery5 from "../../assets/CarrouselGalery/05.jpg";
import Galery6 from "../../assets/CarrouselGalery/06.jpg";
import Galery7 from "../../assets/CarrouselGalery/07.jpg";
import Galery8 from "../../assets/CarrouselGalery/08.jpg";
import Galery9 from "../../assets/CarrouselGalery/09.jpg";
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
import WspIcon from "../../assets/Icons/IconoWhatsapp.png";
import MapPoint from "../../assets/Icons/MapPoint.png";
import InstaIcon from "../../assets/Icons/IconoIg.png";
import logoMasaro from "../../assets/Logos/LogoPngBlanco.png";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

const Bottom: React.FC = () => {
  const servicesPrimary = [
    {
      image: PlantaIndustrial,
      title: "Plantas industriales, alimenticias y frigoríficas.",
      description: "",
    },
    {
      image: Oficina,
      title: "Oficinas, depósitos, laboratorios y bancos.",
      description: "",
    },
    {
      image: Universidad,
      title: "Hoteles, universidades, museos y escuelas.",
      description: "",
    },
    {
      image: Supermercado,
      title: "Shoppings, hipermercados y supermercados.",
      description: "",
    },
    {
      image: Clinicas,
      title: "Hospitales, sanatorios y clínicas.",
      description: "",
    },
    {
      image: CentroDeportivo,
      title: "Consorcios, centros deportivos y estadios.",
      description: "",
    },
  ];

  const servicesAlternate = [
    { image: obras, title: "Finales de obra y post mudanza.", description: "" },
    {
      image: vidrios,
      title: "Limpieza de vidrios en altura.",
      description: "",
    },
    { image: jardin, title: "Jardinería y corte de césped.", description: "" },
    {
      image: insumos,
      title: "Provisión de insumos higiénicos.",
      description: "",
    },
  ];

  const [currentView, setCurrentView] = useState<"primary" | "alternate">(
    "primary",
  );
  const [transitionClass, setTransitionClass] = useState("");
  const [transitioning, setTransitioning] = useState(false);
  const [showMoreClients, setShowMoreClients] = useState(false);

  // Agregar variables para el mensaje de WhatsApp
  const whatsappMsg =
    "¡¡ Hola !! Me gustaría obtener más información sobre sus servicios. Gracias!";
  const encodedMsg = encodeURIComponent(whatsappMsg);
  const whatsappUrl = `https://wa.me/+5493385525639?text=${encodedMsg}`;

  const handleArrowClick = () => {
    if (transitioning) return;
    setTransitioning(true);
    if (currentView === "primary") {
      setTransitionClass("slideOutRight");
      setTimeout(() => {
        setCurrentView("alternate");
        setTransitionClass("slideInFromLeft");
        setTimeout(() => {
          setTransitionClass("");
          setTransitioning(false);
        }, 300);
      }, 300);
    } else {
      setTransitionClass("slideOutLeft");
      setTimeout(() => {
        setCurrentView("primary");
        setTransitionClass("slideInFromRight");
        setTimeout(() => {
          setTransitionClass("");
          setTransitioning(false);
        }, 300);
      }, 300);
    }
  };

  const displayCards =
    currentView === "primary" ? servicesPrimary : servicesAlternate;

  const carouselImages = [
    Galery1,
    Galery2,
    Galery3,
    Galery4,
    Galery5,
    Galery6,
    Galery7,
    Galery8,
    Galery9,
  ];
  // Calculamos el número total de slides (2 imágenes por slide)
  const numSlides = Math.ceil(carouselImages.length / 2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, numSlides - 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // New clients carousel:
  const clientImages = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
    Client9,
    Client10,
    Client11,
    Client12,
    Client13,
  ];

  // Eliminar estado y useEffect de client carousel

  // Add variants for reveal animation in the contact section
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.bottomContainer}>
      <img
        src={window.innerWidth < 973 ? Fondo2 : Fondo}
        alt="Fondo"
        className={styles.backgroundImage}
      />

      <motion.div
        id="servicios"
        className={styles.headerBadgeParent}
        style={{ zIndex: 300 }} // forzar un z-index mayor
        initial={{ x: "-80%" }} // se cambió de -100vw para usar porcentaje
        whileInView={{ x: 0 }}
        viewport={{ once: false }} // permitir que la animación se repita
        transition={{ type: "tween", duration: 0.8, delay: 0 }} // se agrega un delay opcional
      >
        <div className={styles.headerBadge}>
          <h2>Servicios</h2>
        </div>
      </motion.div>
      {/* Nuevo contenedor para móviles: se muestra solo en pantallas menores a 973px */}
      <div className={styles.mobileServiceTitle}>
        <span>
          {currentView === "primary"
            ? "LIMPIEZA INTEGRAL"
            : "SERVICIOS ESPECÍFICOS"}
        </span>
      </div>

      <div className={styles.serviceContainer}>
        {/* Se envuelve el texto original con clase desktopOnly para ocultarlo en móviles */}
        <div
          className={
            styles.desktopOnly +
            " " +
            (currentView === "primary"
              ? styles.sideText
              : styles.sideTextAlternate)
          }
        >
          <span>
            {currentView === "primary"
              ? "LIMPIEZA INTEGRAL"
              : "SERVICIOS ESPECÍFICOS"}
          </span>
        </div>
        <div
          className={`${currentView === "primary" ? styles.grid : styles.gridAlternate} ${
            transitionClass
              ? styles.gridWrapper + " " + styles[transitionClass]
              : styles.gridWrapper
          }`}
        >
          {displayCards.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className={styles.arrowIcon} onClick={handleArrowClick}>
          <img
            src={flecha}
            alt="flecha"
            className={currentView === "alternate" ? styles.rotated : ""}
          />
        </div>
      </div>

      <div className={styles.galeryContainer}>
        <motion.div
          id="galeria"
          className={styles.headerBadgeParentGalery}
          style={{ zIndex: 300 }} // forzar un z-index mayor
          initial={{ opacity: 0, width: "90%" }} // se modifica para que la animación aparezca de derecha a izquierda
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: false }} // permitir que la animación se repita
          transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.headerBadgeGalery}>
            <h2>Galería</h2>
          </div>
        </motion.div>
        <div className={styles.carouselContainer}>
          <button
            className={`${styles.carouselButton} ${styles.prev}`}
            onClick={prevSlide}
          >
            <img src={flecha} alt="prev" className={styles.buttonIcon} />
          </button>
          <div
            className={styles.carouselImages}
            // Se traslada en porcentaje: cada slide equivale al 100% del contenedor
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`carousel-${index}`}
                className={styles.carouselImage}
              />
            ))}
          </div>
          <button
            className={`${styles.carouselButton} ${styles.next}`}
            onClick={nextSlide}
          >
            <img src={flecha} alt="next" className={styles.buttonIcon} />
          </button>
        </div>
      </div>

      <div className={styles.clientsContainer}>
        <motion.div
          id="clientes"
          className={styles.headerBadgeParentClients}
          style={{ zIndex: 300 }} // forzar un z-index mayor
          initial={{ opacity: 0, width: "90%" }} // se modifica para que la animación aparezca de derecha a izquierda
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: false }} // permitir que la animación se repita
          transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.headerBadgeClients}>
            <h2>Confían en nosotros</h2>
          </div>
        </motion.div>
        {/* Nuevo carousel de clientes con desplazamiento continuo */}
        <div className={styles.clientCarouselContainer}>
          <div className={styles.clientCarouselTrack}>
            {[...clientImages, ...clientImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`client-${index}`}
                className={styles.clientImage}
              />
            ))}
          </div>
        </div>
        {/* Botón "Ver más" */}
        <button
          className={styles.moreClientsButton}
          onClick={() => setShowMoreClients(true)}
        >
          Ver más
        </button>
        {showMoreClients && (
          <div
            className={styles.modalOverlay}
            onClick={() => setShowMoreClients(false)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalCloseButton}
                onClick={() => setShowMoreClients(false)}
              >
                X
              </button>
              {/* Agrupar la info de clientes extras */}
              <div className={styles.extraClientsContainer}>
                {/* Lista de otros clientes */}
                <p>
                  <strong>CONSTRUCTORA LUNARDI</strong> – Servicio de limpieza
                  en Finales de Obras
                </p>
                <p>📞 4629741 / 0358-155092457 (Ricardo)</p>
                <p>📍 Av. Perón Ctro. 448</p>
                <br />
                <p>
                  <strong>EDIFICIO MAFALDA</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>📞 0351 – 158032605 (Mafalda Alameda)</p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO MICHELANGELO III</strong> –
                  Servicio de Limpieza en Edificio
                </p>
                <p>
                  📞 358-6006114 (Cecilia) / 358-4023221 (Camila -
                  Administración Re)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO HOVENIA I-II</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-6006114 (Cecilia) / 358-4023221 (Camila -
                  Administración Re)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO LUMINO</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-6006114 (Cecilia) / 358-4023221 (Camila -
                  Administración Re)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO TORRES DEL ANDINO I-II</strong> –
                  Servicio de Limpieza en Edificio
                </p>
                <p>📞 358-4247880 (Mellapioni Julieta)</p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO 25 DE MAYO</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>📞 358-4247880 (Mellapioni Julieta)</p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO VITTA</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>📞 358-4247880 (Mellapioni Julieta)</p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO PLAZA OLMOS</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>📞 358-5092140 (Laura - RBG Negocios)</p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO ALFA 1</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-4113700 (Pablo Laciar) / 358-4113699 (Laura Dalmasso)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO GEMA 1</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-4113700 (Pablo Laciar) / 358-4113699 (Laura Dalmasso)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO GALERÍA BELGRANO</strong> –
                  Servicio de Limpieza en Edificio
                </p>
                <p>
                  📞 358-4113700 (Pablo Laciar) / 358-4113699 (Laura Dalmasso)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO COCHERAS PAUNERO</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-4113700 (Pablo Laciar) / 358-4113699 (Laura Dalmasso)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO LAS HERAS</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>
                  📞 358-4314553 (Sergio Díaz) / 358-6541194 (Camilo Debandi -
                  Administración Rossi y Asociados)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO MARIANELLA</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-4314553 (Sergio Díaz) / 358-6541194 (Camilo Debandi -
                  Administración Rossi y Asociados)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO SOFITEL</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-4314553 (Sergio Díaz) / 358-6541194 (Camilo Debandi -
                  Administración Rossi y Asociados)
                </p>
                <br />
                <p>
                  <strong>CONSORCIO EDIFICIO SUMAJ-HUASI</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>
                  📞 358-4314553 (Sergio Díaz) / 358-6541194 (Camilo Debandi -
                  Administración Rossi y Asociados)
                </p>
                <br />
                <p>
                  <strong>MULTISERVICIOS AGROPECUARIOS</strong> – Servicio de
                  Limpieza en oficinas y salón comercial
                </p>
                <p>📞 0358-4025438 (Lourdes)</p>
                <br />
                <p>
                  <strong>CGI S.A.</strong> – Servicio de limpieza en oficinas
                </p>
                <p>📞 4623970 (Ivana Canca) / 📞 Marcos</p>
                <br />
                <p>
                  <strong>ÓPTICA CENTRO</strong> – Servicio de Limpieza en
                  oficinas y local comercial
                </p>
                <p>📞 385-5064436 (Graciela)</p>
                <br />
                <p>
                  <strong>ANALÍTICA S.R.L.</strong> – Servicio de Limpieza en
                  Laboratorio de Análisis Clínicos y oficinas
                </p>
                <p>📞 0358-156025014 (Marcela)</p>
                <br />
                <p>
                  <strong>EDIFICIO SEBASTIÁN VERA</strong> – Servicio de
                  Limpieza en Edificio
                </p>
                <p>📞 358-6002601 (Cristina Arizzu)</p>
                <br />
                <p>
                  <strong>INMOBILIARIA AC</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>📞 358-6002601 (Cristina Arizzu)</p>
                <br />
                <p>
                  <strong>EDIFICIO CERRO</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>📞 358-6002601 (Cristina Arizzu)</p>
                <br />
                <p>
                  <strong>EDIFICIO NITRO</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>📞 358-6002601 (Cristina Arizzu)</p>
                <br />
                <p>
                  <strong>EDIFICIO EMMA I</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>📞 358-6002601 (Cristina Arizzu)</p>
                <br />
                <p>
                  <strong>VICTORIA</strong> – Servicio de Limpieza en Edificio
                </p>
                <p>📞 358-4190148 (Estudio Saleme)</p>
                <br />
                <p>
                  <strong>SUSPENSIÓN GALLO</strong> – Servicio de Limpieza en
                  oficinas y local comercial
                </p>
                <p>📞 358-4026645 (Pablo)</p>
                <br />
                <p>
                  <strong>COLEGIO MARTILLEROS</strong> – Servicio de Limpieza en
                  oficinas
                </p>
                <p>📞 358-4011947 (Alejandra García)</p>
                <br />
                <p>
                  <strong>CLÍNICA IMEB</strong> – Servicio de Limpieza en centro
                  médico y habitaciones
                </p>
                <p>📞 358-5107228 (Mercedes Genoves)</p>
                <br />
                <p>
                  <strong>IMEB APART</strong> – Servicio de Limpieza en espacios
                  comunes y habitaciones
                </p>
                <p>📞 358-4013073 (María José)</p>
                <br />
                <p>
                  <strong>GALERÍA RÍO CUARTO</strong> – Servicio de Limpieza en
                  Galería
                </p>
                <p>📞 358-6002398 (Madedu Pedro)</p>
                <br />
                <p>
                  <strong>NUEVA MUTUAL DEL PARANÁ</strong> – Servicio de
                  Limpieza de Oficinas
                </p>
                <p>📞 358-4832907 (Johana Ponce)</p>
                <br />
                <p>
                  <strong>PRODEL</strong> – Servicio de Limpieza de Local
                  comercial
                </p>
                <p>📞 358-4167239 (Luis Maldonado)</p>
                <br />
                <p>
                  <strong>CRAVERO HERMANOS (5H)</strong> – Servicio de Limpieza
                  de Local comercial
                </p>
                <p>📞 358-4208444 (Anabella Cravero)</p>
                <br />
                <p>
                  <strong>OLEOHIDRÁULICA L&M</strong> – Servicio de Limpieza de
                  Local comercial
                </p>
                <p>📞 358-4199530 (Mariana Arzaut)</p>
                <br />
                <p>
                  <strong>COOPERATIVA LAS HIGUERAS</strong> – Servicio de
                  Limpieza de Sala Médica, Oficinas y Salas Velatorias
                </p>
                <p>📞 358-4310969 (Camila) / 358-4022408 (Macarena)</p>
                <br />
                <p>
                  <strong>EDIFICIO CITY</strong> – Servicio de Limpieza en
                  Edificio
                </p>
                <p>
                  📞 358-4246451 / 358-4121519 (Carolina - Administración
                  Madoery)
                </p>
                <br />
                <p>
                  <strong>SOCIEDAD FRANCESA DE SM</strong> – Servicio de
                  Limpieza de Oficinas, Farmacia, Consultorios, Salas Velatorias
                </p>
                <p>📞 362-4271703 (Andrés Flores)</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.contactContainer}>
        <motion.div
          id="contacto"
          className={styles.headerBadgeParentContact}
          style={{ zIndex: 300 }} // forzar un z-index mayor
          initial={{ opacity: 0, width: "90%" }} // se modifica para que la animación aparezca de derecha a izquierda
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: false }} // permitir que la animación se repita
          transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.headerBadgeContact}>
            <h2>Contacto</h2>
          </div>
        </motion.div>
        {/* REVEAL ANIMATION: Wrap contact cards with motion container */}
        <motion.div
          className={styles.contacCards}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.div
            className={styles.contactCard}
            variants={itemVariants}
            onClick={() =>
              window.open(whatsappUrl, "_blank", "noopener,noreferrer")
            }
          >
            <img src={WspIcon} alt="Logo 1" className={styles.contactLogo} />
            <p className={styles.contactText}>358-4226727</p>
          </motion.div>
          <motion.div
            className={styles.contactCard}
            variants={itemVariants}
            onClick={() =>
              window.open(
                "https://www.instagram.com/masaro_s.i?igsh=MXRlOHUxZXd3anBpNA==",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <img src={InstaIcon} alt="Logo 2" className={styles.contactLogo} />
            <p className={styles.contactText}>@masaro_si</p>
          </motion.div>
          <motion.div
            className={styles.contactCard}
            variants={itemVariants}
            onClick={() =>
              window.open(
                "https://www.google.com.ar/maps/place/Masaro+servicios+integrales+sas/@-33.1141994,-64.3601378,17z/data=!3m1!4b1!4m6!3m5!1s0x95d2010074ffd9bd:0xc129f2e4e94e3c4e!8m2!3d-33.114204!4d-64.3552723!16s%2Fg%2F11x39gr9qr?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <img src={MapPoint} alt="Logo 3" className={styles.contactLogo} />
            <p className={styles.contactText}>
              Rosario de Santa Fe N° 94, <br />
              Río Cuarto
            </p>
          </motion.div>
        </motion.div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <img
                src={logoMasaro}
                alt="Logo Masaro"
                className={styles.logoImage}
              />
            </div>

            <p className={styles.tagline}>
              Soluciones en Limpieza, tranquilidad garantizada.
            </p>

            <div className={styles.contactInfo}>
              <p>Rosario de Santa Fe N° 94, Río Cuarto</p>
              <p>358-4226727 | 0358-4667249</p>
              <p>masaro_servintegrales@outlook.com</p>
            </div>
          </div>

          <div className={styles.linksSection}>
            <h3>Links Útiles</h3>
            <ul>
              <li>
                <ScrollLink
                  to="quienes-somos"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={styles.navItem}
                >
                  Quienes Somos
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="equipamiento"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={styles.navItem}
                >
                  Equipamiento
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="servicios"
                  smooth={true}
                  duration={500}
                  offset={400}
                  className={styles.navItem}
                >
                  Servicios
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="galeria"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className={styles.navItem}
                >
                  Galería
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="clientes"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className={styles.navItem}
                >
                  Clientes
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contacto"
                  smooth={true}
                  duration={500}
                  offset={-120}
                  className={styles.navItem}
                >
                  Contacto
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div className={styles.socialSection}>
            <h3>Redes Sociales</h3>
            <div className={styles.socialItem}>
              <div className={styles.socialIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <a
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/masaro_s.i?igsh=MXRlOHUxZXd3anBpNA==",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                @masaro_si
              </a>
            </div>
            <div className={styles.socialItem}>
              <div className={styles.socialIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <a href="mailto:masaro_servintegrales@outlook.com">
                masaro_servintegrales@outlook.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © Masaro. Todos los derechos reservados. Desarrollado por{" "}
            <span
              className={styles.pulseAnimation}
              style={{
                display: "inline-block",
                cursor: "pointer",
                paddingLeft: "5px",
              }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/rio_gestion/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <strong style={{ color: "#FFFF00" }}>Río</strong>{" "}
              <strong style={{ color: "#000000" }}>Gestión</strong>
            </span>
          </p>
        </div>

        <a href="https://wa.me/5493584226727" className={styles.whatsappButton}>
          <div className={styles.whatsappIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
            >
              <path
                fill="#25D366"
                d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.4 1 3.7 1 4.3 0 7.8-3.5 7.8-7.8.1-2-.7-4-2.2-5.5zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c.1 3.6-2.8 6.4-6.4 6.4zm3.6-4.9c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.1-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1.4 2.1 3.3 2.9.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.9.1-.9-.1-.2-.2-.3-.4-.4z"
              />
            </svg>
          </div>
        </a>
        {/* Agregamos onClick para scroll suave hacia arriba */}
        <div
          className={styles.scrollTopButton}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
