import React from "react";

const Modal = ({ setIsOpen }) => {
    return (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                <h2>Regístrate</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Nombre completo" required />
                    </div>
                    <div>
                        <input type="email" placeholder="Correo electrónico" required />
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña" required />
                    </div>
                    <div>
                        <button type="submit" className="btn-primary">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
