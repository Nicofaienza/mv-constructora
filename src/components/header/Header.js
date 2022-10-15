import "./header.css";
import logo from "../../images/logoMV.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ Link }) => {
  return (
    <header id="header">
      <div id="fixedHeader">
        <div className="containerHeader">
          <a title="linkImgHeader" href="#">
            <img className="imgHeader" src={logo} alt="linkImgHeader" />
          </a>
          <nav id="nav">
            <ul className="list">
              <li>
                <Link className="listElement" to="/mv-constructora">
                  Inicio
                </Link>
              </li>
              <li id="desarrollos">
                <Link
                  id="link-desarrollos"
                  className="listElement"
                  to="/OurDevelopments"
                >
                  Desarrollos <MdKeyboardArrowDown />
                </Link>
                <ul id="desarrollos-menu">
                  <li>
                    <Link to="/">Florisbelo Acosta 1</Link>
                  </li>
                  <li>
                    <Link to="/">Florisbelo Acosta 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="listElement" to="/WhyUs">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="listElement" to="/Contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
