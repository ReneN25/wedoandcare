import React from "react";

const Contact = () => {
    return (
        <section id="contacto" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>Contáctanos</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="text"
                    placeholder="Nombre"
                    required
                    style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                <input
                    type="email"
                    placeholder="Correo"
                    required
                    style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                <textarea
                    placeholder="Mensaje"
                    required
                    style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                <button
                    type="submit"
                    className="btn"
                    style={{
                        padding: '10px',
                        width: '100%',
                    }}
                >
                    Contactanos
                </button>
            </form>
        </section>
    );
};

export default Contact;
