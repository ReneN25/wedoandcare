import React, { useState } from "react";

const Modal = ({ setIsOpen }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Registration successful!');
                setIsOpen(false);
            } else {
                const error = await response.json();
                alert(error.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                <h2>Regístrate</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Nombre completo" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Correo electrónico" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Contraseña" 
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
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
