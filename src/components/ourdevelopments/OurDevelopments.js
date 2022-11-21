import "./OurDevelopments.css";
import OurDevelopmentsCards from "./OurDevelopmentsCards";
import { useEffect } from "react";
import { proyects } from "./proyects";

const OurDevelopments = ({ Link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="our-developments">
      <div id="our-developments__container">
        <div id="our-developments__text-container">
          <h2 id="our-developments__title">#DESARROLLOS</h2>
          <span id="our-developments__span">
            Encuentre una casa que se adapte a su <span>estilo de vida.</span>
          </span>
          <p id="our-developments__text">
            Nuestros desarrollos inmobiliarios son iconos en la ciudad. <br />
            En cada proyecto que comenzamos, innovamos e implementamos lo nuevo
            del mercado para lograr el confort de nuestros clientes.
          </p>
        </div>
      </div>
      <OurDevelopmentsCards
        id="our-developments-cards__main"
        Link={Link}
        proyects={proyects}
      />
    </section>
  );
};

export default OurDevelopments;
