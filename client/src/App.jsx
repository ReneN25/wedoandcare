import React from "react";
import Header from "./Header.jsx";  // relative path
import Hero from "./Hero";           // relative path
import Workshops from "./Workshops"; // relative path
import Contact from "./Contact";
import Footer from "./Footer";
import Modal from "./Modal";
import "./index.css";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Workshops />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
