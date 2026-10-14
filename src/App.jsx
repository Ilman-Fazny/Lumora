import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Trust from './components/Trust';
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
        <Trust />
        <About />
      </main>

      <Contact />
      <WhatsAppFloat />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
