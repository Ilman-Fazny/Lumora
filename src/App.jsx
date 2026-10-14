import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-cream selection:bg-gold selection:text-bg relative">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
      </main>

      <Contact />
      <WhatsAppFloat />
    </div>
  );
}
