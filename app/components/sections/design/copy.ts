import type { Template } from "../../../designs/templates-data";

/**
 * The copy model behind /designs/[slug].
 *
 * dentalcare.html is written for one trade — it says "practice", "patients" and
 * "treatments" on nearly every fold — but the route it becomes is a dynamic one
 * that has to serve seventeen templates. So the page is not a copy of that file
 * with the words swapped at the call site; the words are the model.
 *
 * {@link DesignNouns} is the four-word vocabulary each fold writes against, and
 * {@link DESIGN_COPY} overrides it (plus anything else that cannot be derived)
 * per slug. `dentalcare` carries the source file's exact strings, so that one
 * template renders the reference page verbatim; every other template gets the
 * same folds generated from its own nouns.
 *
 * Adding a new template needs no entry here — {@link getDesignCopy} falls back
 * to the generic business/customers vocabulary, which reads correctly for a
 * plumber or a salon. An entry is only worth writing when a trade has its own
 * language worth keeping.
 */

export type DesignNouns = {
  /** Singular, as in "your practice" / "your business". */
  business: string;
  /** Plural sector, for the hero label: "dental practices". */
  sector: string;
  /** The people this business serves: "patients" / "customers". */
  audience: string;
  /** Singular of the above, for "a patient gets in touch". */
  audienceOne: string;
  /** What the business sells: "treatments" / "services". */
  services: string;
};

export type DesignBenefit = { icon: BenefitIcon; title: string; body: string };
export type BenefitIcon = "document" | "people" | "star" | "calendar";

export type DesignCopy = {
  nouns: DesignNouns;
  /** Uppercased in the hero. */
  heroLabel: string;
  /** The line under the template name in the hero `h1`. */
  heroSubline: string;
  benefitsHeading: [string, string];
  benefitsIntro: string;
  benefits: DesignBenefit[];
  /** The `.dc-personal` bullet list — what we shape around the business. */
  personalList: string[];
  faqs: { question: string; answer: string }[];
};

const GENERIC_NOUNS: DesignNouns = {
  business: "business",
  sector: "small businesses",
  audience: "customers",
  audienceOne: "customer",
  services: "services",
};

/** Per-slug vocabulary. Anything absent falls back to {@link GENERIC_NOUNS}. */
const NOUNS: Record<string, Partial<DesignNouns>> = {
  dentalcare: {
    business: "practice",
    sector: "dental practices",
    audience: "patients",
    audienceOne: "patient",
    services: "treatments",
  },
  physiotherapy: {
    business: "clinic",
    sector: "physiotherapy clinics",
    audience: "patients",
    audienceOne: "patient",
    services: "treatments",
  },
  "trim-and-trend": {
    business: "salon",
    sector: "salons and stylists",
    audience: "clients",
    audienceOne: "client",
    services: "services",
  },
  primeabode: {
    business: "agency",
    sector: "estate agents",
    audience: "buyers",
    audienceOne: "buyer",
    services: "listings",
  },
  swiftline: {
    business: "operation",
    sector: "logistics operators",
    audience: "clients",
    audienceOne: "client",
    services: "services",
  },
};

/**
 * Per-slug copy that cannot be generated: the four benefit cards and the FAQ
 * answers, where the specifics (clinical software, insurance, call-outs) are
 * the point. Slugs absent from this table use the generated versions below.
 */
const BENEFITS: Record<string, DesignBenefit[]> = {
  dentalcare: [
    {
      icon: "document",
      title: "Make treatments easy to understand.",
      body: "Give each service a clear introduction, from routine check-ups to specialist treatments, so patients can find what matters to them.",
    },
    {
      icon: "people",
      title: "Introduce the people behind the care.",
      body: "Show your clinicians, their experience and your practice environment to make an unfamiliar place feel more approachable.",
    },
    {
      icon: "star",
      title: "Let genuine feedback build trust.",
      body: "Create space for your own patient testimonials and verified credentials, alongside the story of your practice.",
    },
    {
      icon: "calendar",
      title: "Make the next step feel simple.",
      body: "Keep appointment prompts, enquiry forms and contact details easy to find, including on a phone.",
    },
  ],
};

const FAQS: Record<string, { question: string; answer: string }[]> = {
  dentalcare: [
    {
      question: "Am I buying just the website design?",
      answer:
        "DentalCare is part of the Growth Rocket package. Your website comes with the Growth Rocket Hub, hosting, SSL, maintenance and support. It is a managed setup, rather than a standalone design download.",
    },
    {
      question: "Can DentalCare match my practice’s branding?",
      answer:
        "Yes. We shape the design around your branding, treatment information, team and practice details. For additional pages or custom functionality, we can discuss a bespoke scope.",
    },
    {
      question: "Can I use my existing domain?",
      answer:
        "Yes. You can use your existing domain, or we can guide you through setting up a new one.",
    },
    {
      question: "What do I need to provide?",
      answer:
        "Your logo and brand details, treatment information, contact details and any team or practice photographs you want to use. We will guide you through what is needed during onboarding.",
    },
    {
      question: "How do appointments and enquiries work?",
      answer:
        "The package includes website forms and appointment tools connected to Growth Rocket Hub. We agree the setup with you during onboarding. This is for business administration; any connection to existing clinical software needs to be discussed separately.",
    },
    {
      question: "What does the package cost?",
      answer:
        "Annual billing is €690 per year, or choose €69 per month. Both options have a €290 one-time onboarding fee. The annual price works out to €57.50 per month, billed annually.",
    },
    {
      question: "What happens if I need help after launch?",
      answer:
        "Hosting, maintenance, technical updates and support are included. You can raise help and support requests through the Hub, and discuss additional requirements with our team.",
    },
  ],
};

/** The `.dc-hero-copy` subline, per slug. Generic default below. */
const SUBLINES: Record<string, string> = {
  dentalcare: "A confident first impression.",
};

function generatedBenefits(n: DesignNouns): DesignBenefit[] {
  return [
    {
      icon: "document",
      title: `Make your ${n.services} easy to understand.`,
      body: `Give each of your ${n.services} a clear introduction, so ${n.audience} can find what matters to them without a phone call first.`,
    },
    {
      icon: "people",
      title: "Introduce the people behind the work.",
      body: `Show your team, their experience and how you work, so an unfamiliar ${n.business} feels more approachable.`,
    },
    {
      icon: "star",
      title: "Let genuine feedback build trust.",
      body: `Create space for your own ${n.audienceOne} testimonials and credentials, alongside the story of your ${n.business}.`,
    },
    {
      icon: "calendar",
      title: "Make the next step feel simple.",
      body: "Keep booking prompts, enquiry forms and contact details easy to find, including on a phone.",
    },
  ];
}

function generatedFaqs(
  title: string,
  n: DesignNouns,
): { question: string; answer: string }[] {
  return [
    {
      question: "Am I buying just the website design?",
      answer: `${title} is part of the Growth Rocket package. Your website comes with the Growth Rocket Hub, hosting, SSL, maintenance and support. It is a managed setup, rather than a standalone design download.`,
    },
    {
      question: `Can ${title} match my ${n.business}’s branding?`,
      answer: `Yes. We shape the design around your branding, ${n.services}, team and ${n.business} details. For additional pages or custom functionality, we can discuss a bespoke scope.`,
    },
    {
      question: "Can I use my existing domain?",
      answer:
        "Yes. You can use your existing domain, or we can guide you through setting up a new one.",
    },
    {
      question: "What do I need to provide?",
      answer: `Your logo and brand details, information about your ${n.services}, contact details and any team photographs you want to use. We will guide you through what is needed during onboarding.`,
    },
    {
      question: "How do appointments and enquiries work?",
      answer:
        "The package includes website forms and appointment tools connected to Growth Rocket Hub. We agree the setup with you during onboarding.",
    },
    {
      question: "What does the package cost?",
      answer:
        "Annual billing is €690 per year, or choose €69 per month. Both options have a €290 one-time onboarding fee. The annual price works out to €57.50 per month, billed annually.",
    },
    {
      question: "What happens if I need help after launch?",
      answer:
        "Hosting, maintenance, technical updates and support are included. You can raise help and support requests through the Hub, and discuss additional requirements with our team.",
    },
  ];
}

/** Resolves the full copy for a template, generating whatever is not overridden. */
export function getDesignCopy(template: Template): DesignCopy {
  const nouns: DesignNouns = { ...GENERIC_NOUNS, ...NOUNS[template.slug] };

  return {
    nouns,
    heroLabel: `Website design for ${nouns.sector}`,
    heroSubline: SUBLINES[template.slug] ?? template.tagline,
    benefitsHeading: ["Build confidence.", "Before the first visit."],
    benefitsIntro: `Choosing ${withArticle(nouns.business)} is personal. ${template.title} gives prospective ${nouns.audience} a clear picture of your ${nouns.business} and a simple way to take the next step.`,
    benefits: BENEFITS[template.slug] ?? generatedBenefits(nouns),
    personalList: [
      `Your logo, colours and ${nouns.business} story`,
      `Your ${nouns.services} and service information`,
      `Your team and ${nouns.business} photography`,
      "Your locations and contact details",
      `Genuine ${nouns.audienceOne} testimonials and reviews`,
      "Verified ratings and professional credentials",
      `Video testimonials and ${nouns.business} introductions`,
    ],
    faqs: FAQS[template.slug] ?? generatedFaqs(template.title, nouns),
  };
}

/** "a practice" / "an agency" — the article the intro sentence needs. */
function withArticle(word: string) {
  return /^[aeiou]/i.test(word) ? `an ${word}` : `a ${word}`;
}
