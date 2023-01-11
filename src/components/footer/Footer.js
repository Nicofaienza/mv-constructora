import "./footer.css";

const Footer = ({ Link }) => {
  return (
    <>
      <footer>
        <div id="container-footer">
          <ul id="footer-list">
            <li className="footer-list-li">
              <Link className="footer-list-link" to="/mv-constructora" href="#">
                Inicio
              </Link>
            </li>
            <li className="footer-list-li" id="desarrollos">
              <Link
                id="link-desarrollos"
                className="footer-list-link"
                to="/our-developments"
              >
                Desarrollos
              </Link>
            </li>
            <li className="footer-list-li">
              <Link className="footer-list-link" to="/about-us#">
                Nosotros
              </Link>
            </li>
            <li className="footer-list-li">
              <Link className="footer-list-link" to="/Contact#">
                Contacto
              </Link>
            </li>
          </ul>

          <div id="footer__divisor">
            <div id="footer-office">
              <h2 id="footer-office-title">OFICINAS</h2>
              <span id="footer-office-text">Rawson 1857</span>
              <span id="footer-office-text">
                Mar del Plata - Bs. As. Argentina
              </span>
            </div>

            <div id="footer-contact">
              <h2 id="footer-contact-title">CONTACTO</h2>
              <span id="footer-contact-text">contacto@mvconstructora.com</span>
            </div>

            <div id="footer-social">
              <h2 id="footer-social-title">SOCIAL</h2>
              <a
                target="_blank"
                id="footer-social-text"
                href="https://www.facebook.com/mvconstructoramdq"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div id="container-footer-copy">
          <span id="container-footer-text">
            © Copyright 2021 MV CONSTRUCTORA. All Right Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
