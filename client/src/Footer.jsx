import React from "react";
import InstaLogo from "../public/img/Instagram-Icon.png";
import FaceLogo from "../public/img/Facebook_logo_(square).png";

const Footer = () => {
    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'center', // Center everything in the footer
                alignItems: 'center',
                width: '100%',
                padding: '30px 0',
                position: 'relative',
            }}
        >
            <p
                style={{
                    textAlign: 'center',
                    margin: '0',
                    zIndex: 1, // Ensure text is above images
                    flex: 1,
                }}
            >
                © 2025 We Do & Care - Todos los derechos reservados.
            </p>
            <div
                style={{
                    display: 'flex',
                    gap: '15px',
                    position: 'absolute', // Absolute positioning of images
                    right: '10px', // Align images to the right
                }}
            >
                <a href="https://www.instagram.com/wedoandcare_cetys/" target="_blank" rel="noopener noreferrer">
                    <img src={InstaLogo} alt="Instagram" style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://www.facebook.com/WEDOandCARE/" target="_blank" rel="noopener noreferrer">
                    <img src={FaceLogo} alt="Facebook" style={{ width: '50px', height: '50px' }} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
