import "./FlorisbeloFlat.css";
import Slider from "../Slider/Slider";
import { images } from "./imagesFlorisbelo";
import OurDevelopmentsCards from "../OurDevelopments/OurDevelopmentsCards";
import { proyects } from "../OurDevelopments/proyects";
import videoFlorisbeloFlat from "../../videos/florisbelo-flat-video.mp4";
import { useEffect } from "react";
import ContactButton from "../ContactButton/ContactButton";
import Sponsors from "../sponsors/Sponsors";
import { FaRegBuilding } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { RiTempHotFill } from "react-icons/ri";
import { BsShieldShaded } from "react-icons/bs";
import { AiOutlineTrophy } from "react-icons/ai";
import { GiSpikedFence } from "react-icons/gi";
import blueprint from "../../images/florisbelo-plano-1.png";
import videoFlorisbelo from "../../videos/florisbelo-flat-recorte.mp4";
import mapaFlorisbelo from "../../images/florisbelo-flat-map.png";

const FlorisbeloFlat = ({ Link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="proyect__section">
      <div className="proyect__hero">
        <div id="florisbelo-flat__hero-bg">
          <div id="florisbelo-flat__hero-bg-color"></div>
          <video src={videoFlorisbeloFlat} autoPlay muted loop></video>
        </div>

        <div className="proyect__hero-container">
          <span className="proyect__hero-second-title">#FLORISBELOFLAT</span>
          <h3 className="proyect__hero-title">
            A metros del <span>Museo del Mar</span> y la costa.
          </h3>
          <p className="proyect__hero-description">
            Departamentos nuevos con excelente ubicación a metros del mar en la
            zona norte de la ciudad.
          </p>
        </div>
      </div>

      <div className="proyect__description">
        <div className="proyect__description-container">
          <span className="proyect__description-span">Terminado</span>
          <h2 className="proyect__description-title">FLORISBELO FLAT</h2>
          <span className="proyect__description-second-title">
            MVCONSTRUCTORA
          </span>
          <p className="proyect__description-description">
            Cómodos y espaciosos departamentos construídos por profesionales de
            primer nivel y materiales de excelente calidad gracias a nuestros
            proveedores. <br /> <br />
            Cuentan con una ubicación privilegiada, a tan solo 150 metros de la
            costa y del Museo del Mar, además de la cercanía a la zona comercial
            de Constitución.
          </p>
        </div>
        <Slider sliderImages={images} />
        <ContactButton />
      </div>

      <div className="proyect__info">
        <div className="proyect__info-container">
          <ul className="proyect__info-list">
            <li className="proyect__info-li" id="florisbelo-flat__info-li1">
              <FaRegBuilding />
              <span>2 pisos</span>
            </li>
            <li className="proyect__info-li" id="florisbelo-flat__info-li2">
              <BiBed />
              <span>
                Dptos. de <br />
                2/3 ambientes
              </span>
            </li>
            <li className="proyect__info-li" id="florisbelo-flat__info-li3">
              <RiTempHotFill />
              <span>Losa radiante</span>
            </li>
          </ul>
          <div className="proyect__info-video-container">
            <video
              className="proyect__info-video"
              src={videoFlorisbelo}
              autoPlay
              muted
              loop
              loading="lazy"
            ></video>
          </div>
          <ul className="proyect__info-list">
            <li className="proyect__info-li" id="museum-flat__info-li4">
              <BsShieldShaded />
              <span>
                Alarma en el <br />
                edificio
              </span>
            </li>
            <li className="proyect__info-li" id="museum-flat__info-li5">
              <AiOutlineTrophy />
              <span>
                Todos los <br /> servicios
              </span>
            </li>
            <li className="proyect__info-li" id="museum-flat__info-li5">
              <GiSpikedFence />
              <span>
                Cerco <br /> eléctrico
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
              id="florisbelo-flat__ubication-img"
              src={mapaFlorisbelo}
            />

            <div className="proyect__ubication-info-container">
              <p className="proyect__ubication-text">
                Ubicado en Parque Luro, un barrio residencial cercano al mar,
                con rápidos accesos y que cuenta con la importante zona
                comercial de la avenida Constitución.
              </p>
              <ul className="proyect__ubication-list">
                <li>2 cuadras del Museo del Mar.</li>
                <li>5 cuadras de Constitución.</li>
                <li>1 cuadra de la costa.</li>
                <li>18 cuadras del club Once Unidos.</li>
                <li>Zonas comerciales en las cercanías.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="proyect__blueprint">
        <span className="proyect__blueprint-title">
          Plano del <span>proyecto</span>
        </span>
        <div className="proyect__blueprint-image-container">
          <img className="proyect__blueprint-image" src={blueprint} />
        </div>
        <ContactButton />
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
        <OurDevelopmentsCards Link={Link} proyects={proyects} filter={1} />
      </div>
      <Sponsors />
    </section>
  );
};

export default FlorisbeloFlat;
