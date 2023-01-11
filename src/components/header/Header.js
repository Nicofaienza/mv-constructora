import "./header.css";
import { ImMenu, ImCross } from "react-icons/im";
import { useState } from "react";

const Header = ({ Link }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header id="header">
      <div id="header__container">
        <Link id="header__logo-link" to="/mv-constructora">
          <span id="header_logo">
            <span>MV</span>CONSTRUCTORA
          </span>
        </Link>

        <div id="header__menu-responsive">
          <div id="menu-responsive-icon-container">
            {openMenu ? (
              <ImCross onClick={handleCloseMenu} />
            ) : (
              <ImMenu onClick={handleOpenMenu} />
            )}
          </div>
          <nav id="header__nav-responsive">
            <ul
              id="header__nav-responsive-list"
              style={{ top: openMenu ? "0" : "-1000px" }}
            >
              <li className="header__nav-li">
                <Link
                  className="header__nav-link"
                  to="/mv-constructora"
                  onClick={handleCloseMenu}
                >
                  Inicio
                </Link>
              </li>
              <li className="header__nav-li" id="desarrollos">
                <Link
                  id="link-desarrollos"
                  className="header__nav-link"
                  to="/our-developments"
                  onClick={handleCloseMenu}
                >
                  Desarrollos
                </Link>
              </li>
              <li className="header__nav-li">
                <Link
                  className="header__nav-link"
                  to="/about-us"
                  onClick={handleCloseMenu}
                >
                  Nosotros
                </Link>
              </li>
              <li className="header__nav-li">
                <Link
                  className="header__nav-link"
                  to="/Contact"
                  onClick={handleCloseMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <nav id="header__nav">
          <ul id="header__nav-list">
            <li className="header__nav-li">
              <Link className="header__nav-link" to="/mv-constructora">
                Inicio
              </Link>
            </li>
            <li className="header__nav-li" id="desarrollos">
              <Link
                id="link-desarrollos"
                className="header__nav-link"
                to="/our-developments"
              >
                Desarrollos
              </Link>
            </li>
            <li className="header__nav-li">
              <Link className="header__nav-link" to="/about-us">
                Nosotros
              </Link>
            </li>
            <li className="header__nav-li">
              <Link className="header__nav-link" to="/Contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
