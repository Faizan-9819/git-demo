/* Content mirrors the post-JS state of newpages/Growth Rocket Features.html:
   the source rewrites its own markup at runtime, so the strings below come from
   the revision scripts rather than the static HTML. */

export type FoldTone = "white" | "silver" | "purple";

export type FeatureFoldContent = {
  id: string;
  kicker: string;
  heading: string;
  headingAccent: string;
  intro: string;
  items: string[];
  tone: FoldTone;
  reverse: boolean;
  videoTitle: string;
  videoCaption: string;
  videoBg: string;
};

export const WEBSITE_ACCORDION: ReadonlyArray<{
  title: string;
  body: string;
}> = [
  {
    title: "Up to 10 professionally designed pages",
    body: "Present your services, business information and contact details clearly.",
  },
  {
    title: "Mobile-friendly design",
    body: "Your website adapts to phones, tablets and desktop screens.",
  },
  {
    title: "SEO-ready",
    body: "Clear content and page structure provide a foundation for search visibility.",
  },
  {
    title: "Blog and image gallery options",
    body: "Share updates and showcase your work in one place.",
  },
  {
    title: "Connected enquiry and appointment forms",
    body: "Send customer enquiries and bookings straight to your Hub.",
  },
  {
    title: "Hosting, maintenance and ongoing support",
    body: "We handle technical upkeep and help when changes are needed.",
  },
];

export const WEBSITE_FOLD: FeatureFoldContent = {
  id: "website",
  kicker: "YOUR WEBSITE",
  heading: "A professional website built for ",
  headingAccent: "your business.",
  intro:
    "Give customers a clear picture of your business and an easy way to take the next step.",
  items: [],
  tone: "purple",
  reverse: false,
  videoTitle: "Website features",
  videoCaption: "Watch the website features overview",
  videoBg: "bg-[#5b2dce]",
};

export const FEATURE_FOLDS: ReadonlyArray<FeatureFoldContent> = [
  {
    id: "appointments",
    kicker: "APPOINTMENTS",
    heading: "Let customers book without the ",
    headingAccent: "back-and-forth.",
    intro:
      "Make booking easier for customers and keep your team in control of the schedule.",
    items: [
      "Customers choose a service and time",
      "Show available appointment slots",
      "Notify your team of new bookings",
      "Email appointment details to customers",
      "Review and manage appointments together",
    ],
    tone: "white",
    reverse: true,
    videoTitle: "Appointment system",
    videoCaption: "See how booking works",
    videoBg: "bg-[#0a0516]",
  },
  {
    id: "enquiries",
    kicker: "ENQUIRIES",
    heading: "Keep every customer enquiry ",
    headingAccent: "moving.",
    intro:
      "See what needs a response and keep customer conversations moving forward.",
    items: [
      "Collect website enquiries in your Hub",
      "Confirm receipt to the customer",
      "Notify your team about new enquiries",
      "Search, filter and add internal notes",
      "Track each enquiry’s status",
      "Export enquiry data when needed",
    ],
    tone: "silver",
    reverse: false,
    videoTitle: "Enquiry management",
    videoCaption: "See how enquiries are managed",
    videoBg: "bg-[#665a78]",
  },
  {
    id: "quotes",
    kicker: "QUOTES & INVOICES",
    heading: "Move smoothly from enquiry to ",
    headingAccent: "quote and invoice.",
    intro:
      "Prepare customer documents with less repetitive work, from the first quote to the final invoice.",
    items: [
      "Create and send professional quotes",
      "Reuse saved customer and service details",
      "Include prices, notes and terms",
      "Convert accepted quotes into invoices",
      "Review, download and send invoices",
      "Export monthly invoice data for accounts",
    ],
    tone: "white",
    reverse: true,
    videoTitle: "Quotes & invoices",
    videoCaption: "See quotes and invoices in action",
    videoBg: "bg-[#241044]",
  },
  {
    id: "contacts",
    kicker: "CONTACT BOOK",
    heading: "Keep customer information organised in ",
    headingAccent: "one place.",
    intro:
      "Find the right customer details without searching through emails, planners and spreadsheets.",
    items: [
      "Keep customer details in one place",
      "Create contacts from enquiries and bookings",
      "Update customer information when needed",
      "Organise customer contacts with tags",
      "Add internal notes for your team",
      "Create new customer contacts manually",
    ],
    tone: "silver",
    reverse: false,
    videoTitle: "Customer contacts",
    videoCaption: "See how contacts work",
    videoBg: "bg-[#0a0516]",
  },
  {
    id: "support",
    kicker: "SUPPORT",
    heading: "Find help whenever you ",
    headingAccent: "need it.",
    intro: "Get clear guidance and direct help inside your Growth Rocket Hub.",
    items: [
      "Watch step-by-step video tutorials",
      "Find answers to common questions",
      "Create account and website support tickets",
      "Track ticket references and progress",
      "Keep replies and updates together",
    ],
    tone: "white",
    reverse: true,
    videoTitle: "Support system",
    videoCaption: "Explore support inside your Hub",
    videoBg: "bg-[#5b2dce]",
  },
];

export const JUMP_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#website", label: "Website" },
  { href: "#appointments", label: "Appointments" },
  { href: "#enquiries", label: "Enquiries" },
  { href: "#quotes", label: "Quotes & invoices" },
  { href: "#contacts", label: "Contact Book" },
  { href: "#support", label: "Support" },
];

export const WORKFLOW_STEPS: ReadonlyArray<string> = [
  "Website",
  "Enquiry or appointment",
  "Customer contact",
  "Quote",
  "Invoice",
];

export const MANAGED_POINTS: ReadonlyArray<{
  number: string;
  title: string;
  body: string;
}> = [
  {
    number: "01",
    title: "Hosting and maintenance",
    body: "Your website stays looked after.",
  },
  {
    number: "02",
    title: "Technical upkeep",
    body: "We handle the work behind the scenes.",
  },
  {
    number: "03",
    title: "Ongoing support",
    body: "Help when you need a change.",
  },
];

export const FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Is Growth Rocket only a website?",
    answer:
      "No. Growth Rocket combines a professionally designed website with connected tools for appointments, enquiries, customer contacts, quotes, invoices and support.",
  },
  {
    question: "Can customers book appointments through my website?",
    answer:
      "Yes. Customers can choose a service, select an available time and submit their booking directly through your website.",
  },
  {
    question: "Does Growth Rocket manage website hosting and maintenance?",
    answer:
      "Yes. Growth Rocket hosts and maintains your website, handles technical upkeep and provides ongoing support.",
  },
  {
    question: "Can I manage customer information in Growth Rocket?",
    answer:
      "Yes. Customer details from website enquiries and appointments can be added automatically to Contacts in your Growth Rocket Hub.",
  },
  {
    question: "What support is available?",
    answer:
      "You can access explanation videos, frequently asked questions and the support-ticket system through your Growth Rocket Hub.",
  },
];
