import React from 'react';
import Header from './assets/Header';
import Hero from './assets/Hero';
import Features from './assets/Feature';
import Testimonials from './assets/Testimonials';
import Footer from './assets/Footer';
import './App.css'; 
import About from './assets/About';
import CallToAction from './assets/CalltoAction';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default App;