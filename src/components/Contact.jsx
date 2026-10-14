import React from 'react';
import { MessageSquare, Mail, Phone, ArrowUpRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Contact() {
  const { contact } = siteData;

  const contactMethods = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Direct',
      value: contact.phoneDisplay,
      href: contact.whatsappUrl,
      icon: MessageSquare,
      sublabel: 'Instant Response',
      external: true,
    },
    {
      id: 'email',
      label: 'Official Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      sublabel: 'Proposals & RFPs',
      external: false,
    },
    {
      id: 'phone',
      label: 'Direct Line',
      value: contact.phoneDisplay,
      href: `tel:${contact.phoneTel}`,
      icon: Phone,
      sublabel: 'Mon – Sat · 9AM - 8PM',
      external: false,
    },
  ];

  return (
    <footer id="contact" className="border-t border-borderSubtle/80 bg-surface/30 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Contact Invitation */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-textMuted font-medium mb-3">
            Inquiries & Bookings
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl text-cream font-bold tracking-tight">
            Let's create together.
          </h2>
          <p className="text-sm text-textMuted mt-4 max-w-md mx-auto">
            Reach out directly to book our production squad for your upcoming corporate event, wedding, or commercial shoot.
          </p>
        </div>

        {/* Contact Rows */}
        <div className="space-y-3 mb-20">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.id}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-6 sm:p-7 rounded-xl bg-surface/60 border border-borderSubtle hover:border-gold/40 hover:bg-surface/90 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-lg bg-bg flex items-center justify-center border border-borderSubtle text-textMuted group-hover:text-gold transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-textMuted block font-medium">
                      {method.label}
                    </span>
                    <span className="font-heading text-lg sm:text-xl text-cream font-medium">
                      {method.value}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden md:inline text-xs text-textMuted">
                    {method.sublabel}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-textMuted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Sub-strip */}
        <div className="pt-10 border-t border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-textMuted">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-cream font-medium tracking-wider">LUMORA</span>
            <span className="text-burgundy font-semibold tracking-widest text-[10px]">MEDIA PRODUCTIONS</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Colombo, Sri Lanka</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href={contact.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textMuted hover:text-cream transition-colors duration-200 flex items-center gap-1.5"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href={contact.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textMuted hover:text-cream transition-colors duration-200 flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={contact.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textMuted hover:text-cream transition-colors duration-200 flex items-center gap-1.5"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
