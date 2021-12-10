import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ showNav }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1049) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          {/* Nombre de la Navbar */}

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            GESTOR DE PROYECTOS
          </Link>

          {/* Barrita Responsive */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Elementos de la Navbar */}


            <li>
              <Link
                to="/Login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Iniciar Sesión
              </Link>
            </li>

            <li>
              <Link
                to="/Registro"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Registrarse
              </Link>
            </li>
          </ul>

          {/* Botones de la Navbar */}

          {button && (
            <Button linkTo="Login" buttonStyle="btn--outline">
              INICIAR SESIÓN
            </Button>
          )}
          {button && (
            <Button linkTo="Registro" buttonStyle="btn--outline">
              REGISTRARSE
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;