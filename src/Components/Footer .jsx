import React from 'react';
import { ReactComponent as Mountain } from './path/to/mountain-icon.svg'; // Ajusta la ruta de tu ícono

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container footercontainer">
        <div className="footer-container">
          <div>
            <div className="footer-logo">
              <Mountain className="h-8 w-8" style={{ color: "#fcf6af" }} />
              <span className="footer-logo-text">Alma de Montaña</span>
            </div>
            <p className="footer-description">
              Conectando personas con la naturaleza a través de experiencias de senderismo inolvidables.
            </p>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contacto</h3>
            <a href="https://wa.me/573194969983" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              Whatsapp 3194969983
            </a>

            <div className="social-links">
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alma de Montaña. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
