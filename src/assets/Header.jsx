import React from 'react';
import '../assets/css/Header.css'; // Archivo CSS para estilizar el componente

const Header = () => {
// Header.jsx
// Este componente muestra el encabezado y la navegación principal del sitio Metafit.
// Props: ninguna
// Fecha: 07/10/2025
  return (
    <header className="header">
      <div className="logo">Metafit</div>
      <nav className="nav">
        <ul>
          {/* Logo de Metafit */}
          <li><a href="#features">Características</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#download">Descargar</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Exporta el componente Header para su uso en otros archivos
export default Header;