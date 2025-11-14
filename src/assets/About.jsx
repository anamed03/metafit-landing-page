// About.jsx
// Este componente muestra información sobre Metafit y su misión.
// Props: ninguna
// Fecha: 07/10/2025
// Componente funcional About
import React from 'react';
import '../assets/css/About.css';

import aboutImg from '../assets/images/imagen5.jpg'; 

const ABOUT_IMAGE_URL = aboutImg;


const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">

        <h2>Sobre Metafit</h2>
        {/* Título de la sección */}
        <p>
          En Metafit, nuestra misión es ayudarte a alcanzar tus objetivos de salud y bienestar a través de programas personalizados y apoyo constante.
        </p>
        {/* Descripción de la misión */}
        <p>
          Metafit nació de la pasión por el bienestar y la creencia de que un estilo de vida saludable es accesible para todos. Nuestro equipo de expertos en fitness, nutrición y tecnología se unió para crear una herramienta que te acompaña en cada paso de tu camino.
        </p>
        <p>
          No somos solo una app, somos una comunidad. Nuestra misión es empoderarte para que tomes el control de tu salud y descubras la mejor versión de ti mismo, con el apoyo de una comunidad que te entiende.
        </p>
      </div>
      <div className="about-image-container">
        {/* Se usa el container para aplicar efectos al contenedor, no a la imagen directamente */}
        <img
          src={ABOUT_IMAGE_URL} 
          alt="Equipo de expertos de Metafit"
          className="about-image-media"
        />
      </div>
    </section>
  );
};

// Exporta el componente About para su uso en otros archivos
export default About;