import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./index.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);  // Centralizamos el estado del modal

    return (
        <>
            {/* Pasamos el estado y la función setIsOpen a los componentes Header y Hero */}
            <Header setIsOpen={setIsOpen} />
            <Hero setIsOpen={setIsOpen} />
            <Workshops />
            <Contact />
            <Footer />

            {/* El Modal solo se muestra si isOpen es true */}
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
}

export default App;
