import "./aboutus.css";
import { useEffect } from "react";
import OurDevelopmentsCards from "../OurDevelopments/OurDevelopmentsCards";
import { proyects } from "../OurDevelopments/proyects";
import imgAboutUs from "../../images/florisbeloflat-slider-4.jpg";

const AboutUs = ({ Link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about-us">
      <div id="about-us__section1">
        <div id="about-us__container">
          <p id="about-us__title2">#NOSOTROS</p>
          <div id="about-us-title-container">
            <h1 id="about-us__title">
              Quienes <br />
              Somos
            </h1>
            <svg
              id="about-us__arrow-1"
              width="211"
              height="90"
              viewBox="0 0 211 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 87.433C8.49932 87.2478 107.809 82.9107 106.17 72.3455C104.896 64.1337 74.1186 59.285 66.9759 57.0676C61.1671 55.2643 45.4743 52.6449 58.7003 48.1401C79.0322 41.2149 101.698 44.089 122.723 42.6735C122.994 42.6553 146.092 40.704 143.162 36.4392C136.871 27.2832 117.91 25.1369 108.389 20.4753C96.0693 14.4429 109.172 12.8086 117.083 12.5846C142.992 11.8507 168.482 15.1738 194.474 14.0813C212.308 13.3317 195.372 10.638 191.411 3.6846C189.26 -0.0929856 202.679 11.479 206.23 13.637C210.626 16.3078 207.503 15.7684 203.32 17.5595C196.27 20.5783 190.487 25.4986 186.527 32.016"
                stroke="#0061DF"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
            <span id="promotion-1" className="about-us__title-promotion">
              AMPLIA VARIEDAD <br /> DE PROPIEDADES
            </span>
          </div>

          <p className="about-us__text">
            Desarrollamos y comercializamos edificios con los más altos niveles
            de confort y última tecnología, como sistemas de seguridad,
            seguridad en vidrios, control de accesos y mucho más.
          </p>

          <span id="promotion-2" className="about-us__title-promotion">
            CONFIADO POR MUCHAS <br /> FAMILIAS
          </span>

          <Link to="/contact" className="main-btn">
            <span> Contactanos</span>
          </Link>
          <svg
            id="about-us__arrow-2"
            width="166"
            height="57"
            viewBox="0 0 166 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M162.511 3.23294C154.922 12.645 148.325 17.3867 136.363 19.5161C125.56 21.439 112.796 19.0055 102.026 17.5612C88.6904 15.7731 63.7157 17.6329 59.7968 33.7038C56.7539 46.1824 68.091 57.7522 80.3819 51.1616C85.1203 48.6208 86.2344 41.3454 82.9567 37.2047C79.4167 32.7324 71.6476 31.9333 66.39 31.8956C52.2697 31.7941 46.1172 46.2671 34.4595 51.1766C23.5681 55.7633 14.0116 52.6081 3.89117 47.7133C3.02428 47.2941 4.27111 51.0956 4.48865 52.0675C5.28615 55.6304 4.21389 54.2099 3.61091 51.516C3.22311 49.7834 1.47828 46.3058 4.05543 46.7623C5.91475 47.0917 9.52488 46.4523 11.433 46.0252"
              stroke="#0061DF"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div id="about-us__img-container">
          <img id="about-us__img" src={imgAboutUs} />
        </div>
      </div>

      <div id="about-us__our-proyects">
        <div id="about-us__our-proyects-container">
          <h2 id="about-us__our-proyects-title">
            Conocé nuestros <br /> proyectos{" "}
          </h2>
          <p className="about-us__text">
            Nuestros desarrollos inmobiliarios son iconos en la ciudad. <br />
            En cada proyecto que comenzamos, innovamos e implementamos lo nuevo
            del mercado para lograr el confort de nuestros clientes.
          </p>
        </div>
        <OurDevelopmentsCards Link={Link} proyects={proyects} />
      </div>
    </section>
  );
};

export default AboutUs;
