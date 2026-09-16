export type TemplateFaq = {
  question: string;
  answer: string;
};

export type TemplateFeature = {
  title: string;
  description: string;
};

export type Template = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  price: string;
  href: string;
  img: string;
  hoverImg: string;
  logo?: string;
  tagline: string;
  description: string;
  features: TemplateFeature[];
  pagePreviews?: { label: string; anchor: string; img: string }[];
};

export const ACTIVITY_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b2cc9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2'/%3E%3C/svg%3E";

export const HOUSE_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b2cc9' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8'/%3E%3Cpath d='M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/%3E%3C/svg%3E";

export const templates: Template[] = [
  {
    slug: "dentalcare",
    title: "DentalCare",
    subtitle: "Dentistry",
    category: "dentist",
    price: "€99 EUR",
    href: "https://dentist-template-web.vercel.app/",
    img: "/templates/dentist.jpg",
    hoverImg: "/templates/dentist2.jpg",
    logo: "/templates/dentist-logo.png",
    tagline: "A calm, welcoming website for modern dental practices.",
    description:
      "DentalCare gives your practice a friendly, professional presence online. It's designed to put nervous patients at ease while making it effortless to book an appointment or ask a question.",
    features: [
      {
        title: "Online Appointment Booking",
        description:
          "Patients can book a visit directly from your website, any time of day.",
      },
      {
        title: "Treatment & Pricing Overview",
        description:
          "Explain your services and pricing clearly, before the first phone call.",
      },
      {
        title: "Patient Testimonials",
        description: "Share real patient stories to put new visitors at ease.",
      },
      {
        title: "Insurance & Payment Info",
        description:
          "Answer common billing questions up front to reduce enquiries.",
      },
      {
        title: "Team & Practice Photos",
        description:
          "Introduce your team and practice to build familiarity and trust.",
      },
      {
        title: "Mobile-Friendly Contact Forms",
        description:
          "Make it effortless for patients to reach out from any device.",
      },
    ],
    pagePreviews: [
      { label: "Home", anchor: "home", img: "/temp-details/dent-home.png" },
      { label: "About", anchor: "about-us", img: "" },
      {
        label: "Services",
        anchor: "services",
        img: "",
      },
      { label: "Steps", anchor: "steps", img: "" },
      { label: "Why Us", anchor: "why-us", img: "" },
      {
        label: "Contact",
        anchor: "contact",
        img: "",
      },
    ],
  },
  {
    slug: "shinesquad",
    title: "ShineSquad",
    subtitle: "Cleaning",
    category: "Cleaning",
    price: "€99 EUR",
    href: "https://cleaning-template-web.vercel.app/",
    img: "/templates/cleaning1.jpg",
    hoverImg: "/templates/cleaning2.jpg",
    logo: "/templates/Cleaning-logo.png",
    tagline: "A spotless, booking-ready site for cleaning businesses.",
    description:
      "ShineSquad is built to convert — with clear pricing, service packages, and an easy quote request flow, it helps cleaning businesses fill their calendar without chasing every enquiry by phone.",
    features: [
      {
        title: "Service Package Comparison",
        description:
          "Help customers pick the right cleaning package at a glance.",
      },
      {
        title: "Instant Quote Requests",
        description: "Turn visitors into leads with a fast, simple quote form.",
      },
      {
        title: "Recurring Booking Options",
        description:
          "Offer one-off and recurring cleaning schedules from the same form.",
      },
      {
        title: "Before & After Gallery",
        description: "Show off spotless results to win new customers' trust.",
      },
      {
        title: "Local Service Area Map",
        description:
          "Make it clear which neighbourhoods and postcodes you cover.",
      },
      {
        title: "Trust Badges & Reviews",
        description:
          "Display insurance badges and reviews to reassure new customers.",
      },
    ],
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    subtitle: "Health & Wellness",
    category: "physiotherapy",
    price: "€99 EUR",
    href: "https://physiotherapy-template-jet.vercel.app/",
    img: "/templates/physi1.png",
    hoverImg: "/templates/physi2.png",
    logo: "/templates/physi-logo.png",
    tagline: "A movement-focused site that turns visitors into patients.",
    description:
      "Built for physiotherapy and rehab clinics, this template blends a calming design with clear service breakdowns, so people in pain can quickly find the help they need and book a session.",
    features: [
      {
        title: "Service & Condition Breakdown",
        description:
          "Clearly explain the conditions and treatments you specialise in.",
      },
      {
        title: "Online Booking Integration",
        description:
          "Let patients book a session without picking up the phone.",
      },
      {
        title: "Patient Success Stories",
        description:
          "Build confidence with real recovery stories from past patients.",
      },
      {
        title: "Insurance & Referral Info",
        description:
          "Make it easy for patients to understand coverage and referrals.",
      },
      {
        title: "Clinic Location & Hours",
        description: "Keep opening hours and directions front and centre.",
      },
      {
        title: "Fast, Accessible Layout",
        description: "A calm, easy-to-navigate design suited to every visitor.",
      },
    ],
  },
  {
    slug: "primeabode",
    title: "PrimeAbode",
    subtitle: "Real Estate",
    category: "real-estate",
    price: "€99 EUR",
    href: "https://realestate-template-beta.vercel.app/",
    img: "/templates/construction1.jpg",
    hoverImg: "/templates/construction2.jpg",
    logo: "/templates/realestate-logo.png",
    tagline: "A polished showcase for listings and agents.",
    description:
      "PrimeAbode presents property listings with the polish buyers expect, alongside agent profiles and enquiry tools that make it easy for leads to reach out about a specific property.",
    features: [
      {
        title: "Property Listing Grid",
        description:
          "Showcase listings with photos, pricing, and key details at a glance.",
      },
      {
        title: "Agent Profiles",
        description:
          "Give each agent a professional profile and direct contact card.",
      },
      {
        title: "Enquiry & Viewing Requests",
        description:
          "Let buyers request a viewing or more info in a couple of taps.",
      },
      {
        title: "Map-Based Search",
        description:
          "Help buyers explore listings by location, not just by list.",
      },
      {
        title: "Featured Listings Carousel",
        description:
          "Put your best properties front and centre on the homepage.",
      },
      {
        title: "Mobile-Optimised Galleries",
        description: "Property photos look great on any screen size.",
      },
    ],
  },
  {
    slug: "trim-and-trend",
    title: "Trim & Trend",
    subtitle: "Hair Salon",
    category: "salon",
    price: "€99 EUR",
    href: "https://saloon-template-web.vercel.app/",
    img: "/templates/saloon1.jpg",
    hoverImg: "/templates/saloon2.jpg",
    logo: "/templates/favicon.png",
    tagline: "A stylish booking site for salons and stylists.",
    description:
      "Trim & Trend brings a boutique feel to your salon's online presence, with service menus, stylist profiles, and booking front and centre so clients can secure their next appointment in seconds.",
    features: [
      {
        title: "Service & Pricing Menu",
        description: "Lay out every service and price clearly for new clients.",
      },
      {
        title: "Stylist Profiles",
        description: "Introduce your team with photos and specialities.",
      },
      {
        title: "Online Appointment Booking",
        description: "Clients can book their next visit in a few clicks.",
      },
      {
        title: "Gallery of Past Work",
        description: "Show off your best styling and colour work.",
      },
      {
        title: "Client Reviews",
        description: "Build trust with real feedback from happy clients.",
      },
      {
        title: "Mobile-First Design",
        description: "Looks and books beautifully from any phone.",
      },
    ],
  },
  {
    slug: "swiftline",
    title: "SwiftLine",
    subtitle: "Logistics",
    category: "logistics",
    price: "€99 EUR",
    href: "https://logistics-template-web.vercel.app/",
    img: "/templates/logistic1.jpg",
    hoverImg: "/templates/logistic2.jpg",
    logo: "/templates/logistics-logo.png",
    tagline:
      "A reliable, track-ready website for logistics and freight companies.",
    description:
      "SwiftLine gives logistics and freight operators a professional online presence built around trust and speed, with shipment tracking, service coverage, and quote requests front and centre so new clients can reach you fast.",
    features: [
      {
        title: "Shipment Tracking Widget",
        description:
          "Let customers check the status of their shipment directly from your website.",
      },
      {
        title: "Service Coverage Map",
        description:
          "Show the regions and routes you cover so leads know you can handle their job.",
      },
      {
        title: "Instant Quote Requests",
        description:
          "Capture new business with a simple freight quote request form.",
      },
      {
        title: "Fleet & Capability Showcase",
        description:
          "Highlight your fleet, equipment, and capacity to build client confidence.",
      },
      {
        title: "Client Testimonials",
        description:
          "Share proof from existing clients to reassure new logistics partners.",
      },
      {
        title: "Mobile-Friendly Layout",
        description:
          "Dispatchers and clients can access key info from any device, anywhere.",
      },
    ],
  },
  {
    slug: "crystalclean",
    title: "CrystalClean",
    subtitle: "Commercial Cleaning",
    category: "Cleaning",
    price: "€99 EUR",
    href: "https://cleaning02-temp.vercel.app/",
    img: "/templates/cleaning2-1.png",
    hoverImg: "/templates/cleaning2-2.png",
    logo: "/templates/cleaning2-logo.png",
    tagline: "A polished site built for commercial and office cleaning teams.",
    description:
      "CrystalClean is designed for cleaning businesses that serve offices and commercial clients, with clear service tiers, contract options, and an easy way for facility managers to request a quote.",
    features: [
      {
        title: "Commercial Service Tiers",
        description:
          "Lay out office, retail, and facility cleaning packages clearly.",
      },
      {
        title: "Contract & Recurring Plans",
        description:
          "Offer scheduled contract cleaning alongside one-off jobs.",
      },
      {
        title: "Instant Quote Requests",
        description:
          "Let facility managers request a quote in a couple of clicks.",
      },
      {
        title: "Before & After Gallery",
        description:
          "Showcase spotless results across different commercial spaces.",
      },
      {
        title: "Compliance & Insurance Info",
        description:
          "Reassure clients with visible insurance and compliance details.",
      },
      {
        title: "Mobile-Friendly Design",
        description: "Looks sharp whether a client is on desktop or on the go.",
      },
    ],
  },
  {
    slug: "sunharbor",
    title: "SunHarbor",
    subtitle: "Solar Installation",
    category: "solar",
    price: "€99 EUR",
    href: "https://solar-installation-template.vercel.app/",
    img: "/templates/solar.png",
    hoverImg: "/templates/solar2.png",
    logo: "/templates/solar-logo.png",
    tagline: "A credibility-first site for solar installers.",
    description:
      "SunHarbor is built to build trust fast — showcasing certifications, past installations, and savings estimates so homeowners feel confident requesting a solar quote.",
    features: [
      {
        title: "Savings & ROI Section",
        description:
          "Help homeowners see the potential savings of going solar.",
      },
      {
        title: "Certifications & Warranty Info",
        description:
          "Build trust with credentials and warranty details up front.",
      },
      {
        title: "Project Gallery",
        description: "Showcase completed installations and real case studies.",
      },
      {
        title: "Free Quote Requests",
        description: "Capture leads with a simple, no-obligation quote form.",
      },
      {
        title: "Financing Options",
        description: "Explain payment and financing plans clearly.",
      },
      {
        title: "Local Coverage Area",
        description: "Show homeowners exactly which areas you service.",
      },
    ],
  },
  {
    slug: "pipeworks",
    title: "PipeWorks",
    subtitle: "Plumbing",
    category: "plumber",
    price: "€99 EUR",
    href: "https://plumber1-temp.vercel.app/",
    img: "/templates/plumber1.jpg",
    hoverImg: "/templates/plumber2.jpg",
    logo: "/templates/plumber1-logo.png",
    tagline: "A dependable website for plumbers who want more booked jobs.",
    description:
      "PipeWorks helps plumbing businesses look professional online, with clear service listings, emergency call-out info, and a fast way for customers to request help.",
    features: [
      {
        title: "Emergency Call-Out Banner",
        description: "Highlight 24/7 availability right on the homepage.",
      },
      {
        title: "Service & Pricing Overview",
        description:
          "List common plumbing jobs and pricing so customers know what to expect.",
      },
      {
        title: "Instant Quote Requests",
        description:
          "Turn visitors into leads with a fast, simple request form.",
      },
      {
        title: "Before & After Gallery",
        description:
          "Showcase completed repairs and installations to build trust.",
      },
      {
        title: "Trust Badges & Reviews",
        description:
          "Display licences, insurance, and reviews to reassure new customers.",
      },
      {
        title: "Mobile-First Performance",
        description: "Fast-loading pages that work well on any phone.",
      },
    ],
  },
  {
    slug: "flowmaster",
    title: "FlowMaster",
    subtitle: "Plumbing",
    category: "plumber",
    price: "€99 EUR",
    href: "https://plumber-02-template.vercel.app/",
    img: "/templates/PULMBER2-1.png",
    hoverImg: "/templates/PULMBER2-2.png",
    logo: "/templates/plumbing2-logo.png",
    tagline: "A clean, conversion-ready site for modern plumbing businesses.",
    description:
      "FlowMaster combines a professional design with clear calls to action, helping plumbing businesses turn website visitors into booked appointments.",
    features: [
      {
        title: "Service Area Map",
        description: "Show customers exactly which neighbourhoods you cover.",
      },
      {
        title: "Online Booking Requests",
        description:
          "Let customers request an appointment without picking up the phone.",
      },
      {
        title: "Emergency Services Highlight",
        description:
          "Make your emergency plumbing availability impossible to miss.",
      },
      {
        title: "Customer Reviews",
        description: "Build trust with real feedback from past customers.",
      },
      {
        title: "Service & Pricing Breakdown",
        description:
          "Explain your services clearly before the first phone call.",
      },
      {
        title: "Mobile-Optimised Layout",
        description:
          "A smooth experience for customers browsing on their phone.",
      },
    ],
  },
  {
    slug: "drainpro",
    title: "DrainPro",
    subtitle: "Plumbing",
    category: "plumber",
    price: "€99 EUR",
    href: "https://plumber-3-template.vercel.app/",
    img: "/templates/PULMBER3-1.png",
    hoverImg: "/templates/PULMBER3-2.png",
    logo: "/templates/plumbing3-logo.png",
    tagline: "A trust-building website for drainage and plumbing specialists.",
    description:
      "DrainPro gives drainage and plumbing specialists a credible online presence, with clear service breakdowns and an easy way for customers to get help fast.",
    features: [
      {
        title: "Specialist Service Breakdown",
        description:
          "Explain drainage, clearing, and plumbing services in plain language.",
      },
      {
        title: "Emergency Contact Banner",
        description: "Keep your emergency number visible on every page.",
      },
      {
        title: "Before & After Gallery",
        description: "Show off completed jobs to build instant credibility.",
      },
      {
        title: "Instant Quote Requests",
        description: "Capture leads with a simple, fast quote form.",
      },
      {
        title: "Trust Badges & Certifications",
        description:
          "Display licences and certifications to reassure new customers.",
      },
      {
        title: "Mobile-Friendly Contact Forms",
        description:
          "Make it effortless for customers to reach out from any device.",
      },
    ],
  },
  {
    slug: "aquafix",
    title: "AquaFix",
    subtitle: "Plumbing",
    category: "plumber",
    price: "€99 EUR",
    href: "https://plumber-4-template.vercel.app/",
    img: "/templates/PULMBER4-1.png",
    hoverImg: "/templates/PULMBER4-2.png",
    logo: "/templates/plumbing4-logo.png",
    tagline: "A friendly, professional site for residential plumbing services.",
    description:
      "AquaFix is built for residential plumbers who want a friendly, professional website that makes it simple for homeowners to request help.",
    features: [
      {
        title: "Homeowner-Friendly Design",
        description:
          "A warm, approachable layout that puts homeowners at ease.",
      },
      {
        title: "Service & Pricing Overview",
        description: "Set clear expectations on services and pricing up front.",
      },
      {
        title: "Instant Quote Requests",
        description: "Let homeowners request a callout in seconds.",
      },
      {
        title: "Customer Testimonials",
        description: "Share real feedback from happy homeowners.",
      },
      {
        title: "Local Service Area",
        description: "Show exactly which areas and postcodes you serve.",
      },
      {
        title: "Mobile-First Performance",
        description:
          "Fast, responsive pages for customers searching on the go.",
      },
    ],
  },
  {
    slug: "flowguard",
    title: "FlowGuard",
    subtitle: "Plumbing",
    category: "plumber",
    price: "€99 EUR",
    href: "https://plumber-5-template.vercel.app/",
    img: "/templates/plumber5-1.png",
    hoverImg: "/templates/plumber5-2.png",
    logo: "/templates/plumber5-logo.png",
    tagline: "A confident, modern website for plumbing pros who mean business.",
    description:
      "FlowGuard gives plumbing businesses a sharp, trustworthy online presence, with clear service listings and fast enquiry tools that turn visitors into booked jobs.",
    features: [
      {
        title: "Emergency Call-Out Banner",
        description: "Highlight 24/7 availability right on the homepage.",
      },
      {
        title: "Service & Pricing Overview",
        description:
          "List common plumbing jobs and pricing so customers know what to expect.",
      },
      {
        title: "Instant Quote Requests",
        description:
          "Turn visitors into leads with a fast, simple request form.",
      },
      {
        title: "Before & After Gallery",
        description:
          "Showcase completed repairs and installations to build trust.",
      },
      {
        title: "Trust Badges & Reviews",
        description:
          "Display licences, insurance, and reviews to reassure new customers.",
      },
      {
        title: "Mobile-First Performance",
        description: "Fast-loading pages that work well on any phone.",
      },
    ],
  },
  {
    slug: "sparkfix",
    title: "SparkFix",
    subtitle: "Electrical",
    category: "electrician",
    price: "€99 EUR",
    href: "https://1-electrician-template.vercel.app/",
    img: "/templates/electrician1-1.png",
    hoverImg: "/templates/electrician01-2.png",
    logo: "/templates/favicon.png",
    tagline: "A bright, trust-building website for electrical contractors.",
    description:
      "SparkFix is a clean, conversion-focused template built for electricians who want to look professional online and turn more visitors into booked jobs. It highlights your services, safety credentials, and service area, with clear calls to action throughout.",
    features: [
      {
        title: "Emergency Call-Out Banner",
        description:
          "Highlight your service area and emergency availability right on the homepage.",
      },
      {
        title: "Before & After Gallery",
        description:
          "Showcase finished electrical work to build instant trust with visitors.",
      },
      {
        title: "Instant Quote Requests",
        description:
          "Let customers request a quote in seconds with a simple built-in form.",
      },
      {
        title: "Mobile-First Performance",
        description:
          "Fast-loading pages that look sharp on any phone or tablet.",
      },
      {
        title: "Trust Badges & Reviews",
        description:
          "Display certifications and customer reviews to reassure new leads.",
      },
      {
        title: "SEO-Ready Structure",
        description:
          "Pages are structured to help you rank for local electrician searches.",
      },
    ],
  },
  {
    slug: "voltguard",
    title: "VoltGuard",
    subtitle: "Electrical",
    category: "electrician",
    price: "€99 EUR",
    href: "https://electrician-2-template.vercel.app/",
    img: "/templates/elec02-1.png",
    hoverImg: "/templates/elec02-2.png",
    logo: "/templates/favicon.png",
    tagline: "A modern, safety-focused website for electrical contractors.",
    description:
      "VoltGuard helps electrical contractors present a safe, professional image online, with clear services, certifications, and a fast way for customers to request a quote.",
    features: [
      {
        title: "Safety & Certification Badges",
        description: "Display licences and safety certifications prominently.",
      },
      {
        title: "Service & Pricing Overview",
        description: "List common electrical jobs and pricing clearly.",
      },
      {
        title: "Instant Quote Requests",
        description: "Let customers request a quote in a few clicks.",
      },
      {
        title: "Before & After Gallery",
        description: "Showcase completed electrical installations and repairs.",
      },
      {
        title: "Emergency Call-Out Info",
        description: "Highlight emergency availability and response times.",
      },
      {
        title: "Mobile-Friendly Layout",
        description: "Looks and works great on any device.",
      },
    ],
  },
  {
    slug: "circuitpro",
    title: "CircuitPro",
    subtitle: "Electrical",
    category: "electrician",
    price: "€99 EUR",
    href: "https://electrician03-temp.vercel.app/",
    img: "/templates/elec03-1.png",
    hoverImg: "/templates/elec03-2.png",
    logo: "/templates/favicon.png",
    tagline: "A sharp, conversion-focused site for electrical specialists.",
    description:
      "CircuitPro is designed to turn website visitors into booked jobs, with clear service breakdowns, trust signals, and simple quote requests.",
    features: [
      {
        title: "Service Breakdown",
        description:
          "Explain residential and commercial electrical services clearly.",
      },
      {
        title: "Trust Badges & Reviews",
        description:
          "Display certifications and customer reviews to build confidence.",
      },
      {
        title: "Instant Quote Requests",
        description: "Capture leads with a simple, fast request form.",
      },
      {
        title: "Project Gallery",
        description:
          "Showcase completed electrical projects and installations.",
      },
      {
        title: "Emergency Availability Banner",
        description:
          "Make 24/7 emergency availability clear from the homepage.",
      },
      {
        title: "Mobile-First Design",
        description: "Fast-loading, easy-to-navigate pages on any device.",
      },
    ],
  },
];

export const TEMPLATE_ABOUT_EXTRA: string[] = [
  "Every Growth Rocket template is managed by our team — we keep it fast, secure, and up to date, so you can focus on running your business instead of maintaining a website.",
  "This template is fully responsive out of the box, delivering a seamless experience across desktops, tablets, and phones, so your brand looks sharp wherever customers find you.",
  "Every template ships with an integrated enquiry form, so you can start capturing leads directly from your website from day one.",
  "Ready to make it yours? Get in touch and we'll help you launch a customised version of this design for your business.",
];

export const TEMPLATE_FAQS_SUBHEADING = "General questions";

export const TEMPLATE_FAQS: TemplateFaq[] = [
  {
    question: "What do I get when I purchase this template?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I customize the design and content?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Do I need any technical skills to use this template?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Is this template mobile-friendly?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

export const PAGE_PREVIEW_TABS: {
  label: string;
  anchor: string;
  img?: string;
}[] = [
  { label: "Home", anchor: "home" },
  { label: "About Us", anchor: "about-us" },
  { label: "Services", anchor: "services" },
  { label: "Testimonials", anchor: "testimonials" },
  { label: "Blog", anchor: "blog" },
  { label: "Contact Us", anchor: "contact" },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
