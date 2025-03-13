import React from "react";

const Workshops = () => {
    return (
        <section id="Talleres">
            <h2>Nuestros Talleres</h2>
            <div className="gallery">
                <div className="workshop-card">
                    <h3>Taller de Programación</h3>
                    <img
                        src="/img/placeholder.png" // Using a path relative to the public folder
                        alt="Taller 1"
                    />
                    <p>Aprende lógica y sintaxis de programación desde cero.</p>
                </div>
                <div className="workshop-card">
                    <h3>Taller de Diseño Gráfico</h3>
                    <img
                        src="/img/placeholder.png" // Using a path relative to the public folder
                        alt="Taller 2"
                    />
                    <p>Explora herramientas de diseño y creatividad digital.</p>
                </div>
                <div className="workshop-card">
                    <h3>Taller de Robótica</h3>
                    <img
                        src="/img/placeholder.png" // Using a path relative to the public folder
                        alt="Taller 3"
                    />
                    <p>Construye y programa tus propios robots.</p>
                </div>
            </div>
        </section>
    );
};

export default Workshops;
