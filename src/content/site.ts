export const site = {
  name: "Dasara Developers",
  project: "Dasara Utsav",
  tagline: "Lifestyle Community Villas",
  founded: 2010,
  founder: {
    name: "Surineni Prasad Naidu",
    role: "Founder",
  },
  motto: "Together we grow",
  email: "info@dasaradevelopers.com",
  website: "https://www.dasaradevelopers.com",
  phones: [
    { label: "+91 96069 50403", href: "tel:+919606950403", wa: "919606950403" },
    { label: "+91 97380 54074", href: "tel:+919738054074", wa: "919738054074" },
  ],
  primaryWhatsApp: "919606950403",
  address: {
    lines: [
      "Door No. 4/1, Devarabisana Halli Main Road",
      "Devarabisana Halli, Varthur Hobli",
      "Bengaluru East, Bengaluru 560103",
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Devarabisana+Halli+Main+Road+Varthur+Hobli+Bengaluru+560103",
    embed:
      "https://maps.google.com/maps?q=Devarabisana%20Halli%20Main%20Road%20Varthur%20Hobli%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  partners: [
    { role: "Architect", name: "V Dot Architect", place: "Bangalore" },
    { role: "Strategic partner", name: "Pristine Property Solutions", place: "Bangalore" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects/utsav", label: "Utsav" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  disclaimer:
    "Images, renders, floor plans, specifications, and amenities in this website are indicative and for general guidance only. They do not constitute a legal offer. Final terms are governed by the Agreement for Sale and applicable approvals.",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.primaryWhatsApp}?text=${encodeURIComponent(message)}`;
}
