// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Htet Aung Shane",
  logo: "HTET",
  title: "Odoo ERP Developer",
  role: "Senior Software Engineer · Odoo ERP & Python Backend",
  location: "Bangkok, Thailand",
  email: "mmc.htetaungshane@gmail.com",
  phone: "", // e.g. "+66 ..." — hidden when empty
  // Put your photo in public/ (e.g. public/profile.png) and set "/profile.png" here.
  // A portrait with a transparent or dark background works best. Empty shows initials.
  photo: "/profile.jpg",
  cv: "", // e.g. "/cv.pdf" (put the file in public/) — falls back to LinkedIn when empty
  links: {
    linkedin: "https://www.linkedin.com/in/htet-aung-shane-927782280/",
    github: "", // e.g. "https://github.com/your-username" — hidden when empty
    upwork: "", // hidden when empty
  },
  aboutSubtitle: "Odoo ERP · Python Backend · Linux & Cloud Infrastructure",
  about: [
    "I'm a results-driven backend-focused developer who has spent the last six years building and running business systems — from websites and hosting for a print company, to full ERP rollouts for schools, retail groups and enterprises across Myanmar and Thailand.",
    "Today I specialise in Odoo ERP and Python (FastAPI): building and extending Odoo modules, designing custom APIs that connect Odoo to everything else, and advising clients on architecture and infrastructure (AWS, PostgreSQL, Linux) so their systems stay reliable as they grow. I own the whole lifecycle — requirements, development, deployment, server administration and long-term maintenance.",
  ],
};

// Section ids on the page — used by the header and footer navigation.
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact me" },
];

export const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "5", label: "Companies" },
  { value: "740+", label: "Followers" },
];

// icon names map to components/Icons.js
export const services = [
  {
    icon: "code",
    title: "Odoo Development",
    body: "Custom modules, inherited views, QWeb reports and workflows — built the Odoo way, upgrade-safe.",
  },
  {
    icon: "plug",
    title: "APIs & Integrations",
    body: "FastAPI services and REST integrations connecting Odoo with e-commerce, POS, mobile apps and payment gateways.",
  },
  {
    icon: "layers",
    title: "ERP Implementation",
    body: "Requirement analysis, configuration, user training and go-live support — from first workshop to stable production.",
  },
  {
    icon: "server",
    title: "Linux & DevOps",
    body: "Linux servers, Docker, Nginx, systemd, backups and monitoring so Odoo stays fast and stays up.",
  },
  {
    icon: "cloud",
    title: "Cloud Architecture",
    body: "AWS and PostgreSQL architecture advice — sizing, scaling and keeping production databases healthy.",
  },
  {
    icon: "database",
    title: "Data Migration",
    body: "Moving data from legacy systems and spreadsheets into Odoo, and upgrading between Odoo versions.",
  },
];

// Circular meters in the About section — adjust the percentages to taste.
export const skillMeters = [
  { label: "Odoo", value: 95, short: "Od" },
  { label: "Python", value: 90, short: "Py" },
  { label: "PostgreSQL", value: 85, short: "Pg" },
  { label: "FastAPI", value: 85, short: "Fa" },
  { label: "Linux / DevOps", value: 80, short: "Lx" },
];

// "Experience" section — the filter tabs come from each item's category.
export const work = [
  {
    role: "Senior Software Engineer",
    company: "Basic Solutions Co., Ltd",
    period: "Aug 2026 — Present",
    place: "Bangkok, Thailand · Hybrid",
    category: "Odoo & API",
    stack: ["Odoo", "FastAPI", "AWS"],
    summary:
      "Odoo modules, custom APIs and infrastructure consulting across the full lifecycle of client systems.",
  },
  {
    role: "Senior Odoo Developer",
    company: "Super Seven Stars Group",
    period: "Jun 2025 — Jan 2026",
    place: "Yangon, Myanmar · On-site",
    category: "Odoo & API",
    stack: ["Odoo", "Python", "PostgreSQL"],
    summary: "Developed and maintained Odoo modules for a multi-company retail and trading group.",
  },
  {
    role: "Senior Odoo Developer",
    company: "BLAZON GROUP",
    period: "May 2024 — May 2025",
    place: "Yangon, Myanmar · On-site",
    category: "Odoo & API",
    stack: ["Odoo", "Python", "Linux"],
    summary: "Led Odoo customisation and integration work for group business operations.",
  },
  {
    role: "Senior Software Developer",
    company: "KINGS International School",
    period: "Sep 2022 — Dec 2023",
    place: "Yangon, Myanmar · On-site",
    category: "ERP & SysAdmin",
    stack: ["ERP", "FastAPI", "Linux"],
    summary: "System administrator and developer for the school's ERP system.",
  },
  {
    role: "Full-stack Developer",
    company: "KINGS International School",
    period: "Oct 2021 — Aug 2022",
    place: "Yangon, Myanmar · On-site",
    category: "Web",
    stack: ["PHP", "Laravel", "MySQL"],
    summary: "Full-stack web development with PHP, Laravel and MySQL.",
  },
  {
    role: "Software Developer",
    company: "Design Printing Services (DPS)",
    period: "Jun 2020 — Oct 2021",
    place: "Yangon, Myanmar · On-site",
    category: "Web",
    stack: ["WordPress", "Hosting", "DNS"],
    summary: "Website development, web hosting and DNS management.",
  },
];

export const serviceOptions = services.map((s) => s.title).concat("Something else");
