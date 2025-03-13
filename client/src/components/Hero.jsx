import React from "react";

const Hero = ({ setIsOpen }) => {
    return (
        <section className="hero" id="hero">
            <div className="hero-text">
                <img src="/img/Logo.png" alt="Logo" className="hero-logo" />
                <p>
                    Un proyecto que busca cerrar la brecha de género e incentivar la participación de las mujeres en la Ciencia, Tecnología, Ingeniería y Matemáticas.
                </p>
                {/* Botón que abre el modal */}
                <button onClick={() => setIsOpen(true)} className="btn">
                    Registrarse
                </button>
            </div>
            <div className="hero-image">
                <img src="/img/placeholder2.png" alt="Imagen principal" />
            </div>

            {/* Extra text */}
            <div style={{
                textAlign: 'center',
                color: 'black',
                marginTop: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                <p>
                    WE DO & CARE es un programa de CETYS Universidad diseñado para empoderar a las jóvenes a seguir carreras en STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas). A través de la tutoría, el apoyo técnico y las actividades de fomento de la confianza, el programa pretende cerrar la brecha de género en los campos STEAM y promover el crecimiento económico. WE DO & CARE valora la diversidad y la inclusión, trabajando activamente para crear modelos de conducta y aumentar la visibilidad de los grupos infrarrepresentados en STEM.
                </p>
            </div>
        </section>
    );
};

export default Hero;
