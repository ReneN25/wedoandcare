import { useState } from "react";

export default function App() {
    return (
        <div className="font-inter">
            <Header />
            <Hero />
            <Description />
            <Workshops />
            <Contact />
            <Footer />
            <RegisterModal />
        </div>
    );
}

function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <img src="img/logomini.png" alt="Logo" className="h-12" />
                <p className="text-lg font-bold">WE DO & CARE</p>
                <nav className="space-x-4">
                    <a href="#descripcion">Sobre Nosotros</a>
                    <a href="#Talleres">Talleres</a>
                    <a href="#contacto">Contacto</a>
                    <a href="#hero" className="btn">¡Regístrate!</a>
                </nav>
            </div>
        </header>
    );
}

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
            <div className="text-center md:text-left">
                <img src="img/logo.png" alt="Logo" className="mx-auto md:mx-0 h-24" />
                <p className="mt-4 max-w-lg">
                    Un proyecto que busca cerrar la brecha de género e incentivar la participación de las mujeres en la Ciencia, Tecnología, Ingeniería y Matemáticas.
                </p>
                <button onClick={() => setIsOpen(true)} className="btn mt-4">Registrarse</button>
            </div>
            <img src="img/placeholder2.png" alt="Imagen principal" className="w-1/2" />
            {isOpen && <RegisterModal onClose={() => setIsOpen(false)} />}
        </section>
    );
}

function Description() {
    return (
        <section id="descripcion" className="p-8">
            <p className="max-w-3xl mx-auto">
                WE DO & CARE es un programa de CETYS Universidad diseñado para empoderar a las jóvenes a seguir carreras en STEAM
                (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas)...
            </p>
        </section>
    );
}

function Workshops() {
    return (
        <section id="Talleres" className="p-8 bg-gray-100">
            <h2 className="text-center text-2xl font-bold mb-4">Nuestros Talleres</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <WorkshopCard title="Taller de Programación" img="img/placeholder.png" desc="Aprende lógica y sintaxis de programación desde cero." />
                <WorkshopCard title="Taller de Diseño Gráfico" img="img/placeholder.png" desc="Explora herramientas de diseño y creatividad digital." />
                <WorkshopCard title="Taller de Robótica" img="img/placeholder.png" desc="Construye y programa tus propios robots." />
            </div>
        </section>
    );
}

function WorkshopCard({ title, img, desc }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{title}</h3>
            <img src={img} alt={title} className="w-full h-40 object-cover mt-2" />
            <p className="mt-2">{desc}</p>
        </div>
    );
}

function Contact() {
    return (
        <section id="contacto" className="p-8">
            <h2 className="text-center text-2xl font-bold mb-4">Ponte en contacto con nosotros</h2>
            <form className="max-w-lg mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Nombre" className="border p-2" required />
                <input type="email" placeholder="Correo electrónico" className="border p-2" required />
                <textarea placeholder="Mensaje" className="border p-2" required />
                <button type="submit" className="btn-primary">Contáctanos</button>
            </form>
        </section>
    );
}

function Footer() {
    return (
        <footer className="p-4 bg-gray-200 text-center">
            <p>&copy; 2025 WE DO & CARE. Todos los derechos reservados.</p>
            <div className="flex justify-center mt-2 space-x-4">
                <a href="https://www.instagram.com/wedoandcare_cetys/" target="_blank">
                    <img src="img/Instagram-Icon.png" className="h-6" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/WEDOandCARE/" target="_blank">
                    <img src="img/Facebook_logo_(square).png" className="h-6" alt="Facebook" />
                </a>
            </div>
        </footer>
    );
}

function RegisterModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-lg">×</button>
                <h2 className="text-xl font-bold mb-4">Regístrate</h2>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Nombre completo" className="border p-2" required />
                    <input type="email" placeholder="Correo electrónico" className="border p-2" required />
                    <input type="password" placeholder="Contraseña" className="border p-2" required />
                    <button type="submit" className="btn-primary">Crear cuenta</button>
                </form>
            </div>
        </div>
    );
}
cd