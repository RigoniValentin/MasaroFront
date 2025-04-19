import React from "react";
import styles from "./BannerHeader.module.css";
import MapIcon from "../../assets/Icons/MapPoint.svg";
import Guante from "../../assets/Guante.png";
import { Link as ScrollLink } from "react-scroll";

const CleaningBanner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          Soluciones en limpieza,
          <br />
          tranquilidad garantizada.
        </h1>
        <p className={styles.subtitle}>
          Dejá en nuestras manos el cuidado de tu espacio.
          <br />
          Ofrecemos limpieza profesional para empresas, oficinas e industrias,
          con un equipo capacitado y tecnología de punta.
        </p>
        <div className={styles.buttonContainer}>
          <ScrollLink
            to="servicios"
            smooth={true}
            duration={500}
            offset={400}
            className={styles.servicesButton}
          >
            Servicios
          </ScrollLink>
          <button
            className={styles.visitButton}
            onClick={() =>
              window.open(
                "https://www.google.com.ar/maps/place/Masaro+servicios+integrales+sas/@-33.1141994,-64.3601378,17z/data=!3m1!4b1!4m6!3m5!1s0x95d2010074ffd9bd:0xc129f2e4e94e3c4e!8m2!3d-33.114204!4d-64.3552723!16s%2Fg%2F11x39gr9qr?hl=es&entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <img src={MapIcon} alt="Map Icon" className={styles.mapIcon} />
            ¡Visítanos!
          </button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={Guante} alt="Guante" className={styles.guante} />
      </div>
    </div>
  );
};

export default CleaningBanner;
