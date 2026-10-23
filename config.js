// Edit these details — everything on the card and in the QR code comes from here.
// Leave a field as "" to hide it.
window.CARD = {
  firstName: "Adzim",
  lastName: "Aziz",
  title: "Your Job Title",
  company: "Your Company",
  phone: "+60 12-345 6789",
  email: "you@example.com",
  website: "https://example.com",
  address: "Kuala Lumpur, Malaysia",
  linkedin: "https://www.linkedin.com/in/your-profile",
  tagline: "What you do, in one line.",

  // What the QR code holds:
  //   "vcard" – scanning offers "Add to contacts" (works offline)
  //   "url"   – scanning opens this card's web page (set pageUrl below)
  qrMode: "vcard",
  pageUrl: "https://adzimaziz.github.io/bizcard/",

  accent: "#0f766e",
};
