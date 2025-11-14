// Feature.jsx
// Este componente muestra las características principales de Metafit.
// Props: ninguna
// Fecha: 07/10/2025

import React from 'react';
import '../assets/css/Feature.css';

// Array con los datos de las características
const featuresList = [
  {
    icon: '🏋️‍♂️',
    title: 'Entrenamientos Personalizados',
    description: 'Recibe planes de ejercicio adaptados a tu nivel, metas y tiempo disponible.'
  },
  {
    icon: '🥗',
    title: 'Planes de Nutrición',
    description: 'Accede a recetas saludables y planes alimenticios que te ayudarán a optimizar tus resultados.'
  },
  {
    icon: '📊',
    title: 'Seguimiento de Progreso',
    description: 'Visualiza tu evolución con gráficos claros y motivadores. ¡Cada paso cuenta!'
  },
  {
    icon: '🤝',
    title: 'Comunidad y Retos',
    description: 'Unete y retate a ti mismo con nuestra app.'
  },
];

// Componente funcional Features
const Features = () => {
  // Renderiza la sección de características principales
  return (
    <section id="features" className="features-section">
      {/* Título de la sección */}
      <h2>Características clave</h2>
      <div className="features-grid">
        {/* Muestra cada característica en una tarjeta */}
        {featuresList.map((feature, index) => (
          <div key={index} className="feature-card">
            {/* Icono de la característica */}
            <div className="feature-icon">{feature.icon}</div>
            {/* Título de la característica */}
            <h3>{feature.title}</h3>
            {/* Descripción de la característica */}
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exporta el componente Features para su uso en otros archivos
export default Features;