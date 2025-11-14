import React, { useState } from 'react';
// Asegúrate de que esta ruta sea correcta
import '../assets/css/Header.css'; 

const Header = () => {
  // 1. Define el estado para controlar la apertura/cierre del menú móvil
  const [isOpen, setIsOpen] = useState(false);

  // 2. Función para alternar el estado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // 3. Función para cerrar el menú al hacer clic en un enlace (útil en móvil)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      
      {/* 4. Logo/Nombre del sitio */}
      <a href="#hero" className="logo" onClick={closeMenu}>Metafit</a>
      
      {/* 5. Ícono de Menú Hamburguesa (visible solo en móvil via CSS) */}
      <div className="burger-menu-icon" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'} 
      </div>

      {/* 6. Navegación Principal */}
      {/* ❗ CLASES CORREGIDAS: Usa 'nav' y agrega 'active' condicionalmente ❗ */}
      {/* En el CSS, la Media Query debe apuntar a la clase 'nav' o 'nav ul' */}
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#features" onClick={closeMenu}>Características</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonios</a></li>
          <li><a href="#download" onClick={closeMenu}>Descargar</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;