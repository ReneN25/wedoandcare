import React from "react";

const Header = ({ setIsOpen }) => {
    return (
        <header>
            <div className="container">
                {/* Logo */}
                <img src="/img/Logomini.png" alt="Logo" className="logomini" />

                {/* Hacer clic en "WE DO & CARE" para ir al inicio */}
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>WE DO & CARE</p>
                </a>

                <nav>
                    <a href="#hero">Sobre Nosotros</a>
                    <a href="#Talleres">Talleres</a>
                    <a href="#contacto">Contacto</a>
                    {/* Botón para abrir el modal */}
                    <button onClick={() => setIsOpen(true)} className="btn">Regístrate</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
