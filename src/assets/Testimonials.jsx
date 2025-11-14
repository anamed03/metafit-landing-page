import React, { useState, useEffect } from 'react';
import '../assets/css/Testimonials.css'; 

const testimonialsList = [
  {
    quote: "Metafit me cambió la vida. Perdí 15 kg en 3 meses y me siento con más energía que nunca. ¡La mejor inversión en mi salud!",
    author: "Ana G.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Ana&backgroundColor=b6e3f4,c0aede,d1d4f9", 
  },
  {
    quote: "Los planes de nutrición son increíbles y los entrenamientos son desafiantes pero muy efectivos. ¡Totalmente recomendado!",
    author: "Carlos M.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Carlos&backgroundColor=b6e3f4,c0aede,d1d4f9", 
  },
  {
    quote: "Me encanta la comunidad de Metafit. Me mantengo motivado gracias a los retos y el apoyo de otros usuarios. ¡No puedo vivir sin ella!",
    author: "Sofía P.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Sofia&backgroundColor=b6e3f4,c0aede,d1d4f9", 
  },
  {
    quote: "La app es muy intuitiva y los resultados se ven rápido. Mi rendimiento en el running ha mejorado muchísimo gracias a Metafit.",
    author: "Juan D.",
    image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Juan&backgroundColor=b6e3f4,c0aede,d1d4f9", 
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cambiar el testimonio cada 7 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
    }, 7000); // 7 segundos (un poco más lento que el Hero para dar tiempo a leer)

    return () => clearInterval(interval); // Limpiar el intervalo
  // Testimonials.jsx
  // Este componente muestra testimonios de usuarios de Metafit.
  // Props: ninguna
  // Fecha: 07/10/2025
  }, []);

  const currentTestimonial = testimonialsList[currentIndex];

  // Componente funcional Testimonials
  return (
    // Renderiza la sección de testimonios
    <section id="testimonials" className="testimonials-section">
      <h2>Lo que dicen nuestros usuarios</h2>
      
          {/* Título de la sección */}
      {/* Contenedor del Carrusel de Testimonios */}
          {/* Lista de testimonios */}
      <div className="testimonial-carousel-container">
        {/* Usamos map para crear las tarjetas, pero solo la activa será visible */}
        {testimonialsList.map((testimonial, index) => (
          <div 
            key={index} 
            // Aplica la clase 'active' para el fade-in
            className={`testimonial-card-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={`Avatar de ${testimonial.author}`}
  // Exporta el componente Testimonials para su uso en otros archivos
                className="author-avatar"
              />
              <span className="author-name">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Testimonials;