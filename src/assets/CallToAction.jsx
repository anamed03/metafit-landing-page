import React from 'react';
import '../assets/css/CallToAction.css';

const CallToAction = () => {
  // CalltoAction.jsx
  // Este componente muestra una sección de llamada a la acción con un botón para contactar.
  // Props: ninguna
  // Autor: [Tu Nombre]
  // Fecha: 07/10/2025
  // Componente funcional CalltoAction
    // Renderiza la sección de llamada a la acción
  return (
    <section id="download" className="cta-section">
      <div className="cta-content">
          {/* Título principal de la sección */}
          <h2>¿Listo para transformar tu vida?</h2>
          {/* Descripción de la llamada a la acción */}
          <p>
            Únete a Metafit y comienza tu viaje hacia una vida más saludable y activa.
          </p>
       <div className="download-buttons">
          <a 
            // ----------------------------------------------------
            // ENLACE A GOOGLE PLAY STORE (para Android)
            // ----------------------------------------------------
            // ¡IMPORTANTE! Reemplaza 'com.metafit.app' con el ID real de tu app en Google Play
            href="https://play.google.com/store/apps/details?id=com.metafit.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-download"
          >
            Descargar en Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

  // Exporta el componente CalltoAction para su uso en otros archivos
export default CallToAction;