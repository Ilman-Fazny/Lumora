const base = import.meta.env.BASE_URL;

export const siteData = {
  brand: {
    name: "LUMORA",
    tagline: "MEDIA PRODUCTIONS",
    headlineMain: "Crafting Moments.",
    headlineSub: "Capturing Legacies.",
    description: "Colombo's hybrid creative agency — where live physical event production meets cinematic digital storytelling.",
    founded: 2025,
    location: "Colombo, Sri Lanka",
    badge: "CREATIVE PRODUCTION SQUAD",
  },
  
  contact: {
    phoneDisplay: "070 243 3654",
    phoneTel: "+94702433654",
    email: "withlumora@gmail.com",
    whatsappUrl: "https://wa.me/94702433654?text=Hi%20Lumora%2C%20I%27d%20like%20to%20inquire%20about%20your%20production%20services.",
    instagramUrl: "https://www.instagram.com/withlumora.events/",
    linkedinUrl: "https://lk.linkedin.com/company/withlumora",
    facebookUrl: "https://www.facebook.com/Lumoraproduction/",
  },

  services: [
    {
      id: "01",
      title: "Event Management & Production",
      category: "Physical Experience",
      desc: "Concept design, brand activations, stage logistics, and full on-ground coordination."
    },
    {
      id: "02",
      title: "Photography & Cinematic Videography",
      category: "Visual Storytelling",
      desc: "Cinematic highlight reels, 4K event coverage, commercial promos, and brand storytelling."
    },
    {
      id: "03",
      title: "Multi-Camera Live Streaming",
      category: "Broadcast",
      desc: "High-definition multi-angle setups, live switching, and seamless virtual event streaming."
    },
    {
      id: "04",
      title: "Social Media Strategy & Content",
      category: "Digital Growth",
      desc: "Fast-turnaround vertical reels, creative content design, and cross-platform campaign rollout."
    },
    {
      id: "05",
      title: "Talent & Professional Hosting",
      category: "Stage & Presence",
      desc: "Curated Masters of Ceremonies (MCs) and stage moderators who command the crowd."
    }
  ],

  gallery: [
    {
      id: 1,
      src: `${base}assets/gallery/crew-7.webp`,
      alt: "Lumora camera operator on gimbal rig at Victorian Walk '26",
      tag: "Gimbal Operation"
    },
    {
      id: 2,
      src: `${base}assets/gallery/crew-1.webp`,
      alt: "Lumora crew in branded uniform with production headset",
      tag: "Live Comms"
    },
    {
      id: 3,
      src: `${base}assets/gallery/crew-4.webp`,
      alt: "Lumora videographer framing crowd at stadium celebration",
      tag: "Field Coverage"
    },
    {
      id: 4,
      src: `${base}assets/gallery/crew-5.webp`,
      alt: "Lumora mobile creator capturing instant vertical reels",
      tag: "Content Capture"
    },
    {
      id: 5,
      src: `${base}assets/gallery/crew-8.webp`,
      alt: "Lumora squad member navigating stadium grounds",
      tag: "Event Coordination"
    },
    {
      id: 6,
      src: `${base}assets/gallery/crew-2.webp`,
      alt: "Lumora event lead coordinating schedules on call",
      tag: "Production Management"
    }
  ],

  trust: {
    badge: "PROVEN TRACK RECORD",
    headline: "Trusted on High-Stakes Stages",
    highlights: [
      {
        name: "Victorian Walk '26",
        client: "Royal College / Victorian Walk Committee",
        role: "Full on-ground event video coverage, gimbal cinematography & multi-camera live streaming.",
        metric: "10K+ Attendees"
      },
      {
        name: "Zentage",
        client: "Sasnaka Sansada Foundation",
        role: "End-to-end execution: pre-event marketing campaigns, stage production, live event coverage, cinematic aftermovies & official photo albums.",
        metric: "Full 360° Media & Production"
      },
      {
        name: "Cinematic Brand Campaigns",
        client: "Commercial & Private Sectors",
        role: "Commercial direction, brand story reels, and fast-turnaround social deliverables for stage & product launches.",
        metric: "4K Master Delivery"
      }
    ]
  },

  about: {
    title: "One Crew. Zero Gaps.",
    statement: "We're a young, agile creative squad based in Colombo. Because our event coordinators, gimbal operators, and cinematic editors work as a unified in-house crew, there is zero disconnect between what happens on stage and what is captured for the screen.",
    stats: [
      { label: "Founded", value: "2025" },
      { label: "HQ", value: "Colombo, LK" },
      { label: "Model", value: "End-to-End Hybrid" }
    ]
  }
};
