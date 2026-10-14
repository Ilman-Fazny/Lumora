import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-bg/85 border-b border-borderSubtle/60 transition-colors duration-300 animate-fade-1">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group" 
          aria-label="Lumora Home"
        >
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo/lumora-logo-white.png`} 
            alt="Lumora Media Productions" 
            fetchpriority="high"
            width="150"
            height="40"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Section Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-8">
          <a 
            href="#services" 
            className="text-xs sm:text-sm font-medium tracking-wide text-cream/70 hover:text-gold transition-colors duration-200"
          >
            Services
          </a>
          <a 
            href="#work" 
            className="text-xs sm:text-sm font-medium tracking-wide text-cream/70 hover:text-gold transition-colors duration-200"
          >
            Work
          </a>
          <a 
            href="#about" 
            className="text-xs sm:text-sm font-medium tracking-wide text-cream/70 hover:text-gold transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-xs sm:text-sm font-medium tracking-wide px-3 sm:px-4 py-1.5 rounded-full border border-borderSubtle bg-surface/60 text-cream/90 hover:text-gold hover:border-gold/50 transition-all duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
