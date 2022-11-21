import "./avellaneda.css";
import videoAvellaneda from "../../videos/avellaneda-flat-recorte.mp4";
import mapaAvellaneda from "../../images/avellaneda-flat-map.png";
import Slider from "../Slider/Slider.js";
import ImgGallery from "../ImgGallery/ImgGallery.js";
import OurDevelopmentsCards from "../OurDevelopments/OurDevelopmentsCards.js";
import { useEffect } from "react";
import { imagesSlider, imagesConstruccion } from "./imagesAvellaneda";
import ContactButton from "../ContactButton/ContactButton";
import { proyects } from "../OurDevelopments/proyects";
import { FaRegBuilding } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { GiPencilRuler } from "react-icons/gi";
import {
  MdOutlineOutdoorGrill,
  MdOutlineGarage,
  MdOutlineMeetingRoom,
} from "react-icons/md";

const Avellaneda = ({ Link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="proyect__section">
      <div className="proyect__hero">
        <div id="bg_avellaneda">
          <div id="bg_avellaneda-color"></div>
        </div>
        <div className="proyect__hero-container">
          <span className="proyect__hero-second-title">#AVELLANEDAFLAT</span>
          <h2 className="proyect__hero-title">
            En el centro de la <span> ciudad.</span>
          </h2>
          <span className="proyect__hero-description">
            Ambicioso proyecto en proceso de construcción con cercanía a los
            sectores más comerciales de la ciudad.
          </span>
        </div>
      </div>

      <div className="proyect__description">
        <div className="proyect__description-container">
          <span className="proyect__description-span">En Construcción</span>
          <h2 className="proyect__description-title">AVELLANEDA FLAT</h2>
          <span className="proyect__description-second-title">
            MVCONSTRUCTORA
          </span>
          <p className="proyect__description-description">
            Renovada oportunidad de infraestructura en la zona céntrica de la
            ciudad de Mar del Plata, con cercanía tanto a zona Güemes como a la
            costa. <br /> <br /> Edificio con infraestuctura y diseño moderno,
            especialmente desarrollado con grandes ventanales para brindar una
            sensación de libertad y espacialidad en el mismo. A su vez cuenta
            con excelentes balcones con vistas a la vía pública.
          </p>
        </div>
        <Slider sliderImages={imagesSlider} />
        <ContactButton />
      </div>

      <div className="proyect__info">
        <div className="proyect__info-container">
          <ul className="proyect__info-list">
            <li className="proyect__info-li" id="avellaneda__info-li1">
              <FaRegBuilding />
              <span>6 pisos</span>
            </li>
            <li className="proyect__info-li" id="avellaneda__info-li2">
              <BiBed />
              <span>
                Departamentos <br /> semipisos
              </span>
            </li>
            <li className="proyect__info-li" id="avellaneda__info-li3">
              <MdOutlineOutdoorGrill />
              <span>
                Parrillas <br />a gas
              </span>
            </li>
          </ul>

          <div className="proyect__info-video-container">
            <video
              className="proyect__info-video"
              src={videoAvellaneda}
              autoPlay
              muted
              loop
              loading="lazy"
            ></video>
          </div>
          <ul className="proyect__info-list">
            <li className="proyect__info-li" id="avellaneda__info-li4">
              <GiPencilRuler />
              <span>
                46 m²
                <br /> cubiertos
              </span>
            </li>
            <li className="proyect__info-li" id="avellaneda__info-li4">
              <MdOutlineGarage />
              <span>
                Cocheras c/ <br /> bauleras
              </span>
            </li>
            <li className="proyect__info-li" id="avellaneda__info-li5">
              <MdOutlineMeetingRoom />
              <span>
                Salón de <br />
                usos múltiples
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="proyect__ubication">
        <div className="proyect__ubication-container">
          <span className="proyect__ubication-title">Ubicación</span>
          <div className="proyect__ubication-divisor">
            <img
              loading="lazy"
              id="avellaneda__ubication-img"
              src={mapaAvellaneda}
            />

            <div className="proyect__ubication-info-container">
              <p className="proyect__ubication-text">
                A pocas cuadras del corazón de la ciudad, esta magnifica
                localización nos ofrece una amplia variedad de sitios
                gastronómicos y locales de todo tipo en sus alrededores.
              </p>
              <ul className="proyect__ubication-list">
                <li>7 cuadras de la Plaza Mitre.</li>
                <li>10 cuadras del centro.</li>
                <li>6 cuadras del Hospital Materno Infantil.</li>
                <li>5 minutos de zona Güemes.</li>
                <li>3 cuadras de la Universidad FASTA.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="avellaneda__avances-container">
        <span id="avellaneda__avances-title">
          Avances del <br /> desarrollo
        </span>
        <p id="avellaneda__avances-text">
          Es un emprendimiento de viviendas multifamiliar compuesto por 10
          departamentos en esquema de semi-piso y un salón de usos múltiples.
        </p>
        <ImgGallery images={imagesConstruccion} />
        <br />
      </div>

      <div className="proyect__our-developments-container">
        <h2 className="proyect__our-developments-title">
          Conocé nuestros
          <br /> proyectos
        </h2>
        <p className="proyect__ourdevelopments-text">
          Nuestros desarrollos inmobiliarios son iconos en la ciudad. <br />
          En cada proyecto que comenzamos, innovamos e implementamos lo nuevo
          del mercado para lograr el confort de nuestros clientes.
        </p>
        <OurDevelopmentsCards Link={Link} proyects={proyects} filter={0} />
      </div>
    </section>
  );
};

export default Avellaneda;
