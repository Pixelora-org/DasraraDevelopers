export const site = {
  name: "Dasara Developers",
  project: "Dasara Utsav",
  founded: 2010,
  founder: {
    name: "Kodanda Reddy",
    role: "Founder",
  },
  motto: "Together we grow",
  emails: ["info.utsav@dasaradevelopers.com"],
  website: "https://www.dasaradevelopers.com",
  logo: "/brand/logo.webp",
  logoOnDark: "/brand/logo-white.webp",
  phones: [
    { label: "+91 96069 50403", href: "tel:+919606950403" },
    { label: "+91 97380 54074", href: "tel:+919738054074" },
  ],
  address: {
    lines: [
      "Sy No 30/1A, 30/3 and 33",
      "Chikathirupati to Malur Main Road",
      "Sonnur Village, Lakkur Hobli",
      "Malur Taluk, Kolar District",
      "Kolar 563163",
    ],
    maps: "https://www.google.com/maps?q=12.905363082885742,77.8931884765625&z=17&hl=en",
    embed:
      "https://maps.google.com/maps?q=12.905363082885742,77.8931884765625&z=17&hl=en&output=embed",
  },
  partners: [
    { role: "Architect", name: "V Dot Architect", place: "Bangalore" },
    { role: "Strategic partner", name: "Pristine Property Solutions", place: "Bangalore" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ],
  projects: [{ href: "/projects/utsav", name: "Dasara Utsav", place: "Chikkatirupathi" }],
  disclaimer:
    "Images, renders, floor plans, specifications, and amenities in this website are indicative and for general guidance only. They do not constitute a legal offer. Final terms are governed by the Agreement for Sale and applicable approvals.",
} as const;
