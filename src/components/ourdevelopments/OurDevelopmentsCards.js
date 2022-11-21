const OurDevelopmentsCards = ({ Link, proyects, filter }) => {
  return (
    <div id="our-developments__cards-container">
      {proyects
        .filter((proyect) => proyect.id !== filter)
        .map((proyect) => (
          <div key={proyect.adress} className="our-developments__card">
            <div id="our-developments__card-container">
              <div className="our-developments__img-container">
                <img
                  id={proyect.imgID}
                  className="our-developments__img"
                  src={proyect.src}
                  alt=""
                />
              </div>
              <div className="our-developments__info-container">
                <span className="our-developments__card-name">
                  {proyect.name.toUpperCase()}
                </span>
                <span className="our-developments__card-adress">
                  {proyect.adress}
                </span>
                <Link
                  to={proyect.route}
                  className="secondary-btn our-developments__card-button"
                >
                  VER PROYECTO
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OurDevelopmentsCards;
