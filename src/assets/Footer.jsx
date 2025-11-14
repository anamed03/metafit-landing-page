import React from 'react';
import '../assets/css/Footer.css'; // Archivo CSS para estilizar el componente

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Metafit App</h3>
          <p>
            Tu compañero de fitness definitivo. Entrena, come bien y vive
            saludablemente.
          </p>
        </div>
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="#features">Características</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#download">Descargar</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Metafit. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;