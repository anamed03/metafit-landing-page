// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import '../assets/css/Hero.css';

// 1. IMPORTA CADA IMAGEN para que Vite pueda procesarla.
import img1 from '../assets/images/imagen1.jpg';
import img2 from '../assets/images/imagen2.jpg';

import img4 from '../assets/images/imagen4.jpg';


// 2. Usa las variables importadas en el array.
const heroImages = [
  // Hero.jsx
  // Este componente muestra la sección principal de bienvenida del sitio Metafit.
  // Props: ninguna
  // Fecha: 07/10/2025
  img1,
  img2,
  img4,
];
  // Componente funcional Hero

    // Renderiza la sección principal de bienvenida
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

          {/* Título principal */}
  useEffect(() => {
          {/* Descripción breve */}
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); 
    return () => clearInterval(interval);
  // Exporta el componente Hero para su uso en otros archivos
  }, []); 

  return (
    <section className="hero-section">
      <div className="hero-carousel-container">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* El contenido del texto permanece aquí... */}
            <div className="hero-content">
              <h1>Transforma tu vida con Metafit</h1>
              <p>
                La única aplicación de fitness que necesitas para alcanzar tus metas.
                Entrenamientos personalizados, planes de nutrición y seguimiento de
                progreso en una sola plataforma.
              </p>
              <div className="cta-buttons">
                <a href="#download" className="btn btn-primary">
                  Descargar ahora
                </a>
                <a href="#features" className="btn btn-secondary">
                  Ver características
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;