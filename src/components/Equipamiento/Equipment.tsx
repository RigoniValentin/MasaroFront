import styles from "./Equipment.module.css";
import Equipamiento from "../../assets/Equipamientos.mp4";
import { motion } from "framer-motion";

const EquipmentSection = () => {
  return (
    <section className={styles.equipmentSection}>
      <motion.div
        id="equipamiento"
        className={styles.headerBadgeParent}
        style={{ zIndex: 300 }} // forzar un z-index mayor
        initial={{ x: "100%" }} // se modifica para que la animación aparezca de derecha a izquierda
        whileInView={{ x: 0 }}
        viewport={{ once: false }} // permitir que la animación se repita
        transition={{ type: "tween", duration: 0.8, delay: 0 }} // se agrega un delay opcional
      >
        <div className={styles.headerBadge}>
          <h2>Equipamiento</h2>
        </div>
      </motion.div>

      <div className={styles.contentContainer}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h3 className={styles.mainHeading}>
            DISPONEMOS DE TECNOLOGÍA AVANZADA
            <br />
            PARA CADA SERVICIO:
          </h3>

          <ul className={styles.equipmentList}>
            <li className={styles.equipmentItem}>
              <span className={styles.arrow}>↑</span>
              <span className={styles.itemText}>
                Lava-fregadoras e hidro-lavadoras de alta presión.
              </span>
            </li>
            <li className={styles.equipmentItem}>
              <span className={styles.arrow}>↑</span>
              <span className={styles.itemText}>
                Lustradoras y enceradoras industriales.
              </span>
            </li>
            <li className={styles.equipmentItem}>
              <span className={styles.arrow}>↑</span>
              <span className={styles.itemText}>
                Aspiradoras industriales para polvo y líquidos.
              </span>
            </li>
            <li className={styles.equipmentItem}>
              <span className={styles.arrow}>↑</span>
              <span className={styles.itemText}>
                Insumos de calidad para una limpieza eficiente y segura.
              </span>
            </li>
          </ul>
        </motion.div>

        <div className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.equipmentVideo}
          >
            <source src={Equipamiento} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
