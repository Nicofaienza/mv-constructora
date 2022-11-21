import logoImepho from "../../images/logo-imepho.png";
import logoZonaNorte from "../../images/logo-zona.norte.png";
import logoUrbania from "../../images/logo-urbania.png";
import logoJulioAnaya from "../../images/logo-julio-anaya.png";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <section id="sponsors">
      <h3 id="sponsors__title">SPONSORS</h3>
      <div id="sopnsors__logos-container">
        <div className="sponsors__logos">
          <span>SAEMCO S.R.L</span>
        </div>
        <div className="sponsors__logos">
          <img
            loading="lazy"
            id="logo-imepho"
            className="sponsors__logo-img"
            src={logoImepho}
            alt=""
          />
        </div>
        <div className="sponsors__logos">
          <img
            loading="lazy"
            className="sponsors__logo-img"
            src={logoZonaNorte}
            alt=""
          />
        </div>
        <div className="sponsors__logos">
          <img
            loading="lazy"
            className="sponsors__logo-img"
            src={logoUrbania}
            alt=""
          />
        </div>
        <div className="sponsors__logos">
          <img
            loading="lazy"
            id="logo-julio-anaya"
            className="sponsors__logo-img"
            src={logoJulioAnaya}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
