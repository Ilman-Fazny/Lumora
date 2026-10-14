import React from 'react';
import { siteData } from '../data/siteData';
import Reveal from './Reveal';

function GalleryCard({ item }) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="group relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-lg bg-surface border border-borderSubtle/60 hover:border-gold/40 transition-colors duration-500">
      {/* Calm subtle dark skeleton shimmer while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 image-skeleton" aria-hidden="true" />
      )}

      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Subtle gradient vignette — always visible on mobile, reveal on hover for desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent sm:via-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5 pointer-events-none">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase text-cream/90 font-medium bg-bg/40 sm:bg-transparent px-2 sm:px-0 py-1 sm:py-0 rounded">
          {item.tag}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { gallery } = siteData;

  return (
    <section id="work" className="py-24 sm:py-32 px-6 border-t border-borderSubtle/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium">
                Field Execution
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-cream font-semibold mt-2">
                Behind The Lens
              </h2>
            </div>
            <p className="text-sm text-textMuted mt-3 sm:mt-0 max-w-xs">
              A glimpse into our crew capturing moments at Victorian Walk '26.
            </p>
          </div>
        </Reveal>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {gallery.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <GalleryCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
