import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function WhatsAppFloat() {
  const { contact } = siteData;

  return (
    <aside 
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Direct WhatsApp inquiry"
    >
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-bg shadow-gold-glow transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold/80 focus:ring-offset-2 focus:ring-offset-bg"
        aria-label="Chat with Lumora on WhatsApp"
      >
        {/* Subtle pulsing outer ring */}
        <span 
          className="absolute -inset-1 rounded-full bg-gold/30 animate-ping opacity-60 pointer-events-none" 
          aria-hidden="true" 
        />

        <MessageCircle className="w-6 h-6 fill-current relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-surface border border-borderSubtle text-xs text-cream whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
