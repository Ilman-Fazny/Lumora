import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-bg/85 border-b border-borderSubtle/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Lumora Home">
          <img 
            src="/assets/logo/LUMORA%20NEW%20LOGO%20WHITE.png" 
            alt="Lumora Media Productions" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Minimal Navigation Link */}
        <nav className="flex items-center gap-8">
          <a 
            href="#contact" 
            className="text-sm font-medium tracking-wide text-cream/80 hover:text-gold transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
