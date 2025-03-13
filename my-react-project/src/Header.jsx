import React from "react";
import logoMini from "../public/img/logomini.png";

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={logoMini} alt="Logo" className="logomini" />
                <p>WE DO & CARE</p>
                <nav>
                    <a href="#hero">Sobre Nosotros</a>
                    <a href="#Talleres">Talleres</a>
                    <a href="#contacto">Contacto</a>
                    <a href="#hero" className="btn">¡Regístrate!</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;