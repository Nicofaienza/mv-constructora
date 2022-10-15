import "./footer.css";
import logoFooter from "../../images/footer-logo.png";
import { MdContactMail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          <a target="_blank" title="copyFooter" className="copyFooter">
            Copyright © 2021 MV CONSTRUCTORA. All Right Reserved.
          </a>
          <a
            target="_blank"
            title="linkImgFooter"
            className="imgFooter-container"
          >
            <img className="imgFooter" src={logoFooter} alt="linkImgFooter" />{" "}
            <span className="nameLogoFooter">MV CONSTRUCTORA</span>
          </a>
          <a target="_blank" title="contactFooter" className="contactFooter">
            <MdContactMail /> contacto@mvconstructora.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
