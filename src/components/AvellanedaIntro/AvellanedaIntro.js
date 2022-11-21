import "./AvellanedaIntro.css";
import "../../index.css";
import renderAvellaneda from "../../images/render-avellaneda.png";

const AvellanedaIntro = ({ Link }) => {
  return (
    <section id="avellaneda-intro">
      <div id="avellaneda-intro__bg"></div>

      <div id="avellaneda-intro__container">
        <div id="avellaneda-intro__text-container">
          <span id="avellaneda-intro__second-title">#MVAVELLANEDAFLAT</span>

          <h2 id="avellaneda-intro__title">
            Nuestro nuevo proyecto en construcción en el{" "}
            <span>centro de la ciudad.</span>
          </h2>

          <span id="avellaneda-intro__description">
            Comodidad y accesibilidad aseguradas.
          </span>

          <Link to="/avellaneda-flat" className="main-btn">
            <span> Ver proyecto</span>
          </Link>
        </div>
        <div id="avellaneda-intro__img-container">
          <img id="avellaneda-intro__img" src={renderAvellaneda} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AvellanedaIntro;
