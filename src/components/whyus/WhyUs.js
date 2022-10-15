import "./whyus.css";
import { MdFamilyRestroom } from "react-icons/md";
import { BsHouseDoor, BsCalculator, BsPinMap } from "react-icons/bs";

const WhyUs = () => {
  return (
    <section id="why-us">
      <h2 id="why-us__title">Por qué elegirnos</h2>
      <span id="why-us__second-title">
        MV CONSTRUCTORA posee una larga trayectoria en el rubro inmobiliario,
        con experiencia y el mejor equipo del mercado.
      </span>
      <div id="why-us__cards-container">
        <div className="why-us__card">
          <MdFamilyRestroom />
          <h3 className="why-us__card-title">Confiado por muchas familias</h3>
          <p className="why-us__card-paragraph">
            Con muchos desarrollos inmobiliarios realizados - MV CONSULTORA
            puede realizar que a una casa/dpto lo quiera llamar hogar..
          </p>
        </div>
        <div className="why-us__card">
          <BsHouseDoor />
          <h3 className="why-us__card-title">Amplia variedad de propiedades</h3>
          <p className="why-us__card-paragraph">
            Con más de 20 propiedades a la venta disponibles en el sitio web,
            puede navegar por la página y estar cada vez mas cerca de su proximo
            hogar.
          </p>
        </div>
        <div className="why-us__card">
          <BsCalculator />
          <h3 className="why-us__card-title">Financiamiento simplificado</h3>
          <p className="why-us__card-paragraph">
            Tenemos varias opciones de financiamiento para los interesados en
            cualquier propiedad que tengamos disponible.
          </p>
        </div>
        <div className="why-us__card">
          <BsPinMap />
          <h3 className="why-us__card-title">Ubicaciones</h3>
          <p className="why-us__card-paragraph">
            Proyectamos a futuro, donde la ubicacion sea un punto estrategico,
            con rapidos accesos y salida hacia todos los alrededores, centros
            comerciales, etc..
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
