import "./FlorisbeloIntro.css";
import "../../index.css";
import renderFlorisbelo from "../../images/render-florisbelo2.png";
import { useEffect } from "react";

const FlorisbeloIntro = ({ Link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="hero">
      <div id="hero__bg"></div>
      <div id="hero__container">
        <span id="hero__second-title">#MVFLORISBELOFLAT</span>
        <h2 id="hero__title">
          Observa nuestro proyecto con excelente
          <span> estilo y diseño.</span>
        </h2>
        <span id="hero__description">Ubicado a 150 metros de la costa.</span>
        <Link id="hero__btn" to="/florisbelo-flat" className="main-btn">
          <span>Ver proyecto</span>
        </Link>
      </div>
      <div id="florisbelo-intro__img-container">
        <img id="florisbelo-intro__img" src={renderFlorisbelo} />
      </div>
    </section>
  );
};

export default FlorisbeloIntro;
