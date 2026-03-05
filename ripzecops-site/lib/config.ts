export const BRAND = {
  name: "RIPZECOPS",
  whatsappNumberDisplay: "0742591795",
  whatsappWaMe: "https://wa.me/94742591795",
  whatsappPrefill:
    "Hi RIPZECOPS, I’m interested in IT project services. Please share package details.",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    key: "web",
    title: "Web Development",
    icon: "code",
    desc: "Architecting high-performance web systems with robust logical frameworks."
  },
  {
    key: "mobile",
    title: "Mobile App Development",
    icon: "phone",
    desc: "Deploying synchronized cross-platform mobile units for seamless tactical engagement."
  },
  {
    key: "aiml",
    title: "AI / ML Projects",
    icon: "brain",
    desc: "Implementing advanced cognitive algorithms for predictive analysis and automation."
  },
  {
    key: "cyber",
    title: "Cyber Security Projects",
    icon: "shield",
    desc: "Hardening digital infrastructure through deep-spectrum security protocols."
  },
  {
    key: "agents",
    title: "AI Agents Projects",
    icon: "spark",
    desc: "Engineering autonomous neural operatives for complex operational efficiency."
  },
  {
    key: "final",
    title: "Final Year Projects",
    icon: "cap",
    desc: "Comprehensive academic engineering with full technical documentation and support."
  },
  {
    key: "uiux",
    title: "UI/UX Designs",
    icon: "pen",
    desc: "Forging tactical interfaces with high-fidelity visual logic and user intuition."
  },
] as const;

export const SUPPORT_ITEMS = [
  "Complete Project Documentation Provided",
  "Viva Guidance with Full Explanation",
  "Research Book and Report Provided",
  "Step-by-Step Code Explanation",
  "Installation and Demo Support",
] as const;

export const OFFERS = [
  "Limited Time Offer",
  "Early Bird Discount",
  "Premium Quality",
] as const;
