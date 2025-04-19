import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // añadido para animaciones
import styles from "./AboutUs.module.css";
import Fondo from "../../assets/AboutUsBackgroundBottom.png";
import Fondo2 from "../../assets/AboutUsBackgroundBottom2.png";
import Muñeco01 from "../../assets/Muñeco01.png";
import Muñeco02 from "../../assets/Muñeco02.png";
import Muñeco03 from "../../assets/Muñeco03.png";

const AboutUs = () => {
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [showHistoriaModal, setShowHistoriaModal] = useState(false);
  // new state para la imagen de fondo
  const [background, setBackground] = useState(Fondo);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 973px)");
    const handleChange = (e: MediaQueryListEvent) => {
      setBackground(e.matches ? Fondo2 : Fondo);
    };
    setBackground(mediaQuery.matches ? Fondo2 : Fondo);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div id="quienes-somos" className={styles.aboutContainer}>
      <img src={background} alt="Fondo" className={styles.backgroundImage} />
      {/* Se reemplaza la sección estática por el motion.div para animar al entrar en viewport */}
      <motion.div
        className={styles.headerBadgeParent}
        style={{ zIndex: 300 }} // forzar un z-index mayor
        initial={{ x: "-80%" }} // se cambió de -100vw para usar porcentaje
        whileInView={{ x: 0 }}
        viewport={{ once: false }} // permitir que la animación se repita
        transition={{ type: "tween", duration: 0.8, delay: 0 }} // se agrega un delay opcional
      >
        <div className={styles.headerBadge}>
          <h2>¿Quienes Somos?</h2>
        </div>
      </motion.div>
      <div className={styles.backgroundText}>
        <span>Soluciones</span>
        <span>en Limpieza</span>
      </div>

      <motion.div
        className={styles.companyInfo}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.companyName}>MASARO:</h1>
        <h2 className={styles.companyDescription}>
          LIMPIEZA PROFESIONAL
          <span className={styles.companySubtext}>
            para empresas, instituciones y comercios
          </span>
        </h2>
      </motion.div>

      <div className={styles.cardsContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>HISTORIA</h3>
              <span
                className={styles.plusIcon}
                onClick={() => setShowHistoriaModal(true)}
              >
                +
              </span>
            </div>
            <div className={styles.cardContent}>
              <img
                src={Muñeco01}
                alt="Historia ico"
                className={styles.cardImage}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
        >
          <div
            className={`${styles.card} ${styles.visionCard} ${isVisionExpanded ? styles.expandedCard : ""}`}
          >
            <div className={styles.cardHeader}>
              <h3>VISIÓN</h3>
              <span
                className={`${styles.arrowIcon} ${isVisionExpanded ? styles.rotatedArrow : ""}`}
                onClick={() => {
                  if (!isVisionExpanded) {
                    setIsMissionExpanded(false);
                    setIsVisionExpanded(true);
                  } else {
                    setIsVisionExpanded(false);
                  }
                }}
              >
                ↑
              </span>
            </div>
            <div
              className={
                isVisionExpanded
                  ? styles.expandedContent
                  : styles.collapsedContent
              }
            >
              <p>
                Ser reconocidos por nuestra eficiencia, profesionalismo y
                compromiso con la mejora continua y el cuidado del medio
                ambiente.
              </p>
            </div>
            <div className={styles.cardContent}>
              <img
                src={Muñeco02}
                alt="Visión ico"
                className={styles.cardImage}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
        >
          <div
            className={`${styles.card} ${isMissionExpanded ? styles.expandedCard : ""}`}
          >
            <div className={styles.cardHeader}>
              <h3>MISIÓN</h3>
              <span
                className={`${styles.arrowIcon} ${isMissionExpanded ? styles.rotatedArrow : ""}`}
                onClick={() => {
                  if (!isMissionExpanded) {
                    setIsVisionExpanded(false);
                    setIsMissionExpanded(true);
                  } else {
                    setIsMissionExpanded(false);
                  }
                }}
              >
                ↑
              </span>
            </div>
            <div
              className={
                isMissionExpanded
                  ? styles.expandedContent
                  : styles.collapsedContent
              }
            >
              <p>
                Mantenemos los espacios limpios y funcionales para un mejor
                desempeño de las actividades diarias.
              </p>
            </div>
            <div className={styles.cardContent}>
              <img
                src={Muñeco03}
                alt="Misión ico"
                className={styles.cardImage}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {showHistoriaModal && (
        <div
          onClick={() => setShowHistoriaModal(false)}
          className={styles.modalOverlay}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.modalContent} ${styles.modalCard}`}
          >
            <h1 className={styles.modalTitle}>
              Historia de <strong>MASARO:</strong>
            </h1>
            <p className={styles.modalText}>
              MASARO es una empresa familiar de Río Cuarto, surgida tras la
              división de otra empresa del rubro. Aunque nuestra trayectoria es
              reciente, contamos con amplia experiencia en el sector y un equipo
              comprometido con la calidad y la mejora continua.
            </p>
            <p className={styles.modalText}>
              Nos especializamos en limpieza integral, brindando soluciones
              rápidas y efectivas para clientes exigentes, evitando la necesidad
              de gestionar múltiples proveedores. Cumplimos estrictamente con
              todas las normativas legales y previsionales, asegurando la
              correcta relación laboral de nuestro personal.
            </p>
            <p className={styles.modalText}>
              Además, apostamos a la capacitación constante de nuestros
              empleados en tecnología, seguridad y nuevos productos,
              garantizando un servicio eficiente y profesional.
            </p>
            <p className={styles.modalText}>
              En MASARO, creemos que la limpieza es sinónimo de bienestar y
              confianza.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
