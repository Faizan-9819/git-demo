import type { ReactNode } from "react";
import { Check, Code, Search, ShieldCheck, X, Zap } from "lucide-react";
import BlogCtaSection from "@/components/blogs/shared/BlogCtaSection";
import BlogFAQ, { type BlogFaqItem } from "@/components/blogs/shared/BlogFAQ";
import CostComparisonTable, {
  type ComparisonRow,
} from "@/components/blogs/shared/CostComparisonTable";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import Flag from "@/components/blogs/shared/ReviewFlag";

type Category = "Clarity" | "Trust" | "Action";
type Tip = { lead: ReactNode; rest: ReactNode };
type Element = {
  number: string;
  category: Category;
  answers: string;
  title: string;
  what: string;
  why: ReactNode;
  good: ReactNode;
  bad: ReactNode;
  specificsLabel?: string;
  tips: Tip[];
  note: ReactNode;
};

const categoryStyles: Record<Category, { pill: string; dot: string }> = {
  Clarity: {
    pill: "border-[#E4DCFB] bg-[#F4F1FE] text-[#6F4CF5]",
    dot: "#6F4CF5",
  },
  Trust: {
    pill: "border-[#C6EBD8] bg-[#ECFAF3] text-[#16875A]",
    dot: "#16875A",
  },
  Action: {
    pill: "border-[#F3E0BC] bg-[#FDF6EA] text-[#C77A0A]",
    dot: "#C77A0A",
  },
};

const SERVICES = [
  "Groepenkast vervangen",
  "Laadpaal installeren",
  "Nieuwe stopcontacten",
  "LED-verlichting",
  "Zonnepanelen aansluiten",
  "Storingen oplossen",
];

const elements: Element[] = [
  {
    number: "01",
    category: "Clarity",
    answers: "do you do what I need?",
    title: "A clear headline with service, location, and specialisation",
    what: "The first line a visitor sees — above the fold — confirming three things at a glance: what you do, where you do it, and why you're credible.",
    why: 'Homeowners arrive after a search like "elektricien Utrecht". If your headline doesn\'t confirm the match in under two seconds, they press back and click the next Google result.',
    good: (
      <div className="rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <p className="font-poppins text-lg font-bold leading-[1.25] tracking-[-0.3px] text-[#1F2937]">
          Elektricien in Utrecht en omgeving
        </p>
        <p className="mt-1.5 font-poppins text-[13.5px] leading-5 text-[#6B7280]">
          Groepenkasten, laadpalen en storingen — vakwerk door gecertificeerde
          monteurs.
        </p>
        <span className="mt-2.5 inline-block rounded-md border border-[#F3E0BC] bg-[#FDF6EA] px-2.5 py-1 font-poppins text-xs font-semibold text-[#C77A0A]">
          Binnen 2 uur bij spoed
        </span>
      </div>
    ),
    bad: (
      <div className="rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="font-poppins text-lg font-bold leading-[1.3] tracking-[-0.3px] text-[#9AA1AC]">
          &quot;Welcome to our website — delivering quality electrical solutions
          since 2008.&quot;
        </p>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          No city, no service, no reason to stay. &quot;Quality solutions&quot;
          is marketing noise.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Write in Dutch by default.",
        rest: "Local searches happen in Dutch, even among expats.",
      },
      {
        lead: <>Use &quot;erkend&quot; or &quot;gecertificeerd&quot;.</>,
        rest: " only when the claim is current and verifiable. Name the relevant recognition or certificate and its issuing body ",
      },
      {
        lead: "Name your region, not just your city.",
        rest: '"Utrecht en omgeving" captures the surrounding villages.',
      },
      {
        lead: "Lead with your best-margin services,",
        rest: 'not "all electrical work".',
      },
    ],
    note: (
      <>
        Make the main service and location clear in the H1 and keep the key
        contact option visible in the initial mobile view. For loading
        performance, use Google's published Core Web Vitals target: Largest
        Contentful Paint (LCP) of 2.5 seconds or less at the 75th percentile. A
        1.5-second target may be used as a stricter internal goal, but it is not
        Google's general threshold.
      </>
    ),
  },
  {
    number: "02",
    category: "Action",
    answers: "how do I reach you right now?",
    title: "A click-to-call button above the fold — sticky on mobile",
    what: "A visible phone number at the top that, on mobile, taps straight into the phone app — repeated as a sticky button that stays on screen while scrolling.",
    why: (
      <>
        For urgent problems, a visitor wants to call now, not fill a form. Many
        customers browse on smartphones, so a phone number should be visible and
        tappable without requiring them to search the footer or a menu
      </>
    ),
    good: (
      <div className="rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <span className="inline-flex items-center gap-2 rounded-[9px] bg-[#16875A] px-4 py-2.5 font-poppins text-sm font-bold text-white">
          📞 Bel direct: 030-123 4567
        </span>
        <p className="mt-2 font-poppins text-xs text-[#6B7280]">
          Ma–vr 08:00–18:00 · Spoed 24/7
        </p>
        <div className="mt-3 flex gap-1.5 border-t border-dashed border-[#C6EBD8] pt-3">
          <span className="flex-1 rounded-md bg-[#16875A] py-1.5 text-center font-poppins text-[11px] font-bold text-white">
            Bellen
          </span>
          <span className="flex-1 rounded-md bg-[#25D366] py-1.5 text-center font-poppins text-[11px] font-bold text-white">
            WhatsApp
          </span>
          <span className="flex-1 rounded-md border border-[#E4DCFB] bg-[#F4F1FE] py-1.5 text-center font-poppins text-[11px] font-bold text-[#6F4CF5]">
            Offerte
          </span>
        </div>
        <p className="mt-1.5 text-center font-poppins text-[11px] text-[#9AA1AC]">
          ↑ sticky bar on mobile
        </p>
      </div>
    ),
    bad: (
      <div className="flex min-h-[118px] flex-col justify-end rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="border-t border-[#EEF0F4] pt-2.5 font-poppins text-[11px] text-[#B0B4BC]">
          © 2026 · Algemene voorwaarden · Privacy ·{" "}
          <span className="text-[#C4C8D0]">tel. 030 123 4567</span>
        </p>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Grey, small, in the footer — and set as an image, so not tappable.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Format the number the Dutch way:",
        rest: "030-xxx xxxx or 06-xxxxxxxx, with spaces.",
      },
      {
        lead: "Prefer a landline where possible.",
        rest: "A geographic area code signals a real local business.",
      },
      {
        lead: "Show opening hours by the number.",
        rest: '"Ma–vr 08:00–18:00 · Spoed 24/7" removes the doubt.',
      },
      {
        lead: "Repeat the button.",
        rest: "Once at the top, once in the sticky bar.",
      },
    ],
    note: (
      <>
        Use{" "}
        <code className="rounded bg-[#EFEDF7] px-1.5 py-0.5 font-mono text-[12.5px]">
          &lt;a href=&quot;tel:+31301234567&quot;&gt;
        </code>
        . Avoid numbers in images. Keep the sticky bottom bar from covering the
        contact form when it scrolls into view.
      </>
    ),
  },
  {
    number: "03",
    category: "Trust",
    answers: "can I trust you?",
    title:
      "Trust badges — KvK, Techniek Nederland, certifications, and real reviews",
    what: "Small visual signals that confirm you're a real, registered, certified Dutch business — placed high on the page, not buried in the footer.",
    why: (
      <>
        Why it drives calls. Untrustworthy contractors can exploit urgent
        home-service situations through unclear pricing, poor workmanship, or
        false business details. Verifiable company information, genuine reviews,
        and current memberships can help visitors assess who they are dealing
        with; generic award graphics cannot.
      </>
    ),
    good: (
      <div className="flex flex-wrap items-center gap-1.5 rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-1.5 font-poppins text-xs font-semibold text-[#1F2937]">
          KVK 12345678
        </span>
        <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-1.5 font-poppins text-xs font-semibold text-[#1F2937]">
          <Flag>Erkend</Flag> lid Techniek Nederland
        </span>
        <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-1.5 font-poppins text-xs font-semibold text-[#1F2937]">
          NEN 1010 gecertificeerd
        </span>
        <span className="rounded-md border border-[#F3E0BC] bg-[#FDF6EA] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#C77A0A]">
          ★ 4,8 uit 127 Google-reviews
        </span>
      </div>
    ),
    bad: (
      <div className="flex flex-wrap items-center gap-1.5 rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <span className="rounded-md border border-dashed border-[#D8DCE2] bg-[#F4F5F7] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#B0B4BC]">
          🏆 #1 in service
        </span>
        <span className="rounded-md border border-dashed border-[#D8DCE2] bg-[#F4F5F7] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#B0B4BC]">
          ★★★★★ Customers love us
        </span>
        <span className="rounded-md border border-dashed border-[#D8DCE2] bg-[#F4F5F7] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#B0B4BC]">
          Award 2019
        </span>
        <p className="mt-1 w-full font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          No source, no issuing body, nothing to verify.
        </p>
      </div>
    ),
    specificsLabel: "Dutch-market specifics — the hierarchy that matters",
    tips: [
      {
        lead: "The KvK number is non-negotiable.",
        rest: "The single strongest Dutch trust signal.",
      },
      {
        lead: "Techniek Nederland carries weight",
        rest: "with homeowners who research first.",
      },
      {
        lead: "Certifications that matter:",
        rest: "NEN 1010, Sterkin, STEK — with the real logos.",
      },
      {
        lead: "Reviews with a count and a source.",
        rest: '"4,8 from 127" reads established; "4,9 from 6" reads new.',
      },
    ],
    note: 'Pull Google reviews live so the count updates automatically. A hard-coded "4,9 stars" that hasn\'t moved in two years reads as fake the moment a visitor opens your real profile.',
  },
  {
    number: "04",
    category: "Action",
    answers: "how do I reach you right now?",
    title: "A prominent emergency-service indicator",
    what: "A clear, visually distinct signal telling visitors whether you handle urgent jobs — and how fast you respond.",
    why: (
      <>
        Why it drives calls. An urgent search can signal an immediate need.
        State clearly whether emergency work is available, during which hours,
        in which area, and how the customer should make contact. Do not assume
        that every urgent visitor accepts a premium rate; disclose the
        applicable price before the booking is confirmed.
      </>
    ),
    good: (
      <div className="rounded-[10px] bg-[linear-gradient(100deg,#E8582E,#D9412B)] p-4 text-white">
        <p className="font-poppins text-base font-bold leading-[1.35]">
          ⚡ Spoed? Wij staan binnen 2 uur bij u in Utrecht en omgeving.
        </p>
        <span className="mt-2.5 inline-block rounded-[7px] border border-white/35 bg-white/[0.16] px-3 py-1.5 font-poppins text-[13px] font-bold">
          Bel 030-123 4567 — 24/7
        </span>
      </div>
    ),
    bad: (
      <div className="min-h-24 rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="font-poppins text-xs leading-[1.7] text-[#B0B4BC]">
          …our services include installation, maintenance,{" "}
          <span className="bg-[#FBEFEF] text-[#CC8888]">
            and we also do emergency calls
          </span>
          , lighting, and more…
        </p>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Buried in a paragraph. No response time, no direct number, no coverage
          area.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Be specific about the window:",
        rest: '"binnen 2 uur" or "zelfde dag". "Fast response" doesn\'t convert.',
      },
      {
        lead: "State the coverage area.",
        rest: '"Utrecht en omgeving tot 30km" removes the guessing.',
      },
      {
        lead: "Be honest if you don't do 24/7.",
        rest: "A missed spoed call becomes a negative review.",
      },
      {
        lead: "Emergency rates transparency",
        rest: (
          <>
            Use the electrician's real current price, not a market-example rate.
            For consumers, show VAT and unavoidable charges, and explain the
            minimum charge, call-out or travel fee, emergency surcharge,
            materials, and how additional time is billed. Example format only:
            “Spoedarbeid: €[actual] per uur incl. btw; minimaal [actual];
            voorrijkosten €[actual] incl. btw; materialen [basis].”
          </>
        ),
      },
    ],
    note: 'A time-aware banner — "Momenteel bereikbaar voor spoed" during open hours, "Buiten openingstijden — bel voor spoed" outside them — measurably lifts after-hours enquiries. About thirty lines of code; part of a good build.',
  },
  {
    number: "05",
    category: "Clarity",
    answers: "do you do my job?",
    title: "A services list in customer language, not trade jargon",
    what: "A scannable block of the 6–8 main things you do — in the words your customers search, not the terms you use with colleagues.",
    why: 'Homeowners don\'t know "verdeelinrichting" from "groepenkast". If your services block uses trade vocabulary, the visitor can\'t confirm you do their job — and leaves.',
    good: (
      <div>
        <div className="grid grid-cols-2 gap-1.5">
          {SERVICES.map((service) => (
            <span
              key={service}
              className="rounded-lg border border-[#C6EBD8] bg-white px-2.5 py-2.5 font-poppins text-[12.5px] font-semibold text-[#1F2937]"
            >
              {service}
            </span>
          ))}
        </div>
        <p className="mt-2 font-poppins text-[11px] text-[#7C9A8A]">
          Each card links to its own service page.
        </p>
      </div>
    ),
    bad: (
      <div className="flex min-h-[150px] flex-col justify-center rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="font-poppins text-sm italic leading-[23px] text-[#B0B4BC]">
          &quot;Wij verzorgen alle elektrotechnische werkzaamheden voor
          particulier en zakelijk, zowel nieuwbouw als renovatie.&quot;
        </p>
        <p className="mt-3 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Technically complete, practically useless. Move sockets? Install EV
          chargers? The visitor can&apos;t tell.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Use real search phrases:",
        rest: '"groepenkast vervangen", "laadpaal installeren", "stroomstoring oplossen".',
      },
      {
        lead: "Separate particulier and zakelijk",
        rest: "if you serve both — people self-filter.",
      },
      {
        lead: "List what pays the bills,",
        rest: "not everything you can do. Thirty items costs trust.",
      },
      {
        lead: "Include rising-demand services:",
        rest: "laadpalen, thuisbatterijen, warmtepomp-elektra.",
      },
    ],
    note: 'Each service should link to a dedicated service page — not a #services anchor. Dedicated pages let you rank on service-specific queries ("laadpaal installeren Utrecht").',
  },
  {
    number: "06",
    category: "Trust",
    answers: "can I trust you?",
    title: "Real photos of your team, van, and completed work",
    what: "Authentic photos of you, your team, your branded van, and real before/after shots of completed jobs. No stock, no AI-generated images.",
    why: (
      <>
        Generic stock imagery tells a visitor little about the business that
        will arrive at their home. Real photos, even imperfect phone shots,
        consistently outperform polished stock imagery.
      </>
    ),
    good: (
      <div>
        <div className="grid grid-cols-2 gap-2">
          <div
            className="relative h-[88px] overflow-hidden rounded-[9px] bg-[linear-gradient(135deg,#DDE6DF,#C6D6CC)]"
            style={{
              backgroundImage:
                "url('/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/Left-1280-1.webp')",
            }}
          >
            <span className="absolute inset-x-0 bottom-0 bg-[#14121A]/55 px-1.5 py-1 font-poppins text-[10px] font-semibold text-white">
              Martijn, eigenaar · branded van
            </span>
          </div>
          <div
            className="relative h-[88px] overflow-hidden rounded-[9px] bg-[linear-gradient(135deg,#DDE6DF,#C6D6CC)]"
            style={{
              backgroundImage:
                "url('/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/Left-1280-2.webp')",
            }}
          >
            <span className="absolute inset-x-0 bottom-0 bg-[#14121A]/55 px-1.5 py-1 font-poppins text-[10px] font-semibold text-white">
              Voor → na: Lombok, Utrecht
            </span>
          </div>
        </div>
        <p className="mt-2 font-poppins text-[11px] text-[#7C9A8A]">
          First names visible, neighbourhood named, real job.
        </p>
      </div>
    ),
    bad: (
      <div>
        <div
          className="flex h-[88px] items-center justify-center rounded-[9px] bg-[repeating-linear-gradient(45deg,#F0F1F3,#F0F1F3_10px,#E8E9EC_10px,#E8E9EC_20px)]"
          style={{
            backgroundImage:
              "url('/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/Right.webp')",
          }}
        >
          <span className="font-poppins text-[11px] font-semibold text-[#B0B4BC]">
            📷 Stock photo · orange overalls + clipboard
          </span>
        </div>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Or an AI electrician with slightly wrong fingers. Homeowners tie it to
          fake businesses.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Show the van.",
        rest: "A branded van confirms the business physically exists.",
      },
      {
        lead: "Show the team, by name.",
        rest: "First names build more trust than anonymous group shots.",
      },
      {
        lead: "Show the mess, too.",
        rest: "A chaotic old fuse box beside a clean new one proves the change.",
      },
      {
        lead: "Avoid drone footage and overproduction.",
        rest: "Daylight phone photos beat studio work.",
      },
    ],
    note: "Serve photos as WebP at 80% quality, sized to display. A 4 MB JPEG pushes mobile load past 3 seconds. Aim for ~1600px wide for the hero shot, under 300 KB each.",
  },
  {
    number: "07",
    category: "Action",
    answers: "how do I reach you, my way?",
    title:
      "A friction-free contact form — with WhatsApp as the primary alternative",
    what: "A short form asking only what's needed to respond, paired with a visible WhatsApp button for visitors who'd rather message.",
    why: (
      <>
        Every extra field reduces submissions. And a meaningful share of
        customers simply won't fill out a form, but will send a WhatsApp message
        with two thumb-taps.
      </>
    ),
    good: (
      <div className="rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <div className="flex flex-col gap-1.5">
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-2 font-poppins text-[11px] text-[#9AA1AC]">
            Naam
          </span>
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-2 font-poppins text-[11px] text-[#9AA1AC]">
            Telefoon
          </span>
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-2 font-poppins text-[11px] text-[#9AA1AC]">
            Postcode
          </span>
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 pb-5 pt-2 font-poppins text-[11px] text-[#9AA1AC]">
            Waar kunnen we mee helpen?
          </span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <span className="flex-1 rounded-md bg-[#6F4CF5] py-2 text-center font-poppins text-xs font-bold text-white">
            Verstuur
          </span>
          <span className="flex-1 rounded-md bg-[#25D366] py-2 text-center font-poppins text-xs font-bold text-white">
            💬 WhatsApp
          </span>
        </div>
        <p className="mt-2 font-poppins text-[11px] text-[#7C9A8A]">
          &quot;Reactie binnen 2 uur op werkdagen. Geen verplichtingen.&quot;
        </p>
      </div>
    ),
    bad: (
      <div className="rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <div className="flex flex-col gap-1.5">
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            Name · Full address · Email · Phone
          </span>
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            Appointment date · Own/rent · Build year
          </span>
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            Previous electrician · Reason for switching
          </span>
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            ☐ Newsletter ☐ Terms · reCAPTCHA
          </span>
        </div>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          12 fields. Most abandon before field four. And no WhatsApp anywhere.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Treat WhatsApp as an optional primary contact route when the business can support it.",
        rest: <> From mobile it even more important.</>,
      },
      {
        lead: "Use wa.me links",
        rest: 'with a pre-filled message ("Hallo, ik heb een vraag over…").',
      },
      {
        lead: "Ask a postcode, not a full address.",
        rest: "Enough to judge the service area.",
      },
      {
        lead: "Skip marketing opt-ins",
        rest: "on the first form. Offer them later in the reply.",
      },
    ],
    note: "Prefer a honeypot over reCAPTCHA — the latter measurably reduces conversion on local-service sites. And route every submission to one place: Growth Rocket lands calls, WhatsApp and form enquiries together in the Growth Rocket Hub instead of scattered across inbox, phone and notepad.",
  },
];

export function IntroSection() {
  const sources: ReactNode[] = [
    "Conversion patterns from homepages that consistently generate enquiries — calls, WhatsApp messages and form submissions combined, not just traffic.",
    'Search behaviour from Dutch homeowners — "elektricien Utrecht", "stroomstoring spoed", "groepenkast vervangen kosten" — and what makes them click one result over another.',
    <>
      Usability review — common points where unclear information or hidden
      contact options can make it harder for a visitor to take action.
    </>,
  ];

  return (
    <section id="intro" className="scroll-mt-24">
      <p className="mt-19 w-full font-poppins text-[19px] leading-[31px] text-[#1F2937]">
        A high-converting homepage does seven specific things, and each one maps
        to a decision a visitor makes in the first fifteen seconds. Miss one,
        and enquiries drop. Miss three, and the site becomes a digital business
        card that nobody acts on.
      </p>
      <p className="mt-5 w-full font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        This guide is built from patterns across working Dutch electrician sites
        — including the ones we build at Growth Rocket. Each element gets a good
        example, a bad example, and the Dutch-market context generic web-design
        advice misses. Examples are illustrative patterns, not reviews of
        specific companies.
      </p>
      <div className="mt-[34px] w-full rounded-2xl border border-[#EEF0F4] bg-[#FBFBFD] p-6 sm:p-8">
        <p className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
          How we picked these seven
        </p>
        <div className="mt-[18px] flex flex-col gap-4">
          {sources.map((source, index) => (
            <div key={index} className="flex items-start gap-3.5">
              <span className="flex size-[26px] flex-none items-center justify-center rounded-lg border border-[#E4DCFB] bg-[#F4F1FE] font-poppins text-[13px] font-bold text-[#6F4CF5]">
                {index + 1}
              </span>
              <p className="mt-px font-poppins text-[15.5px] leading-6 text-[#4B5563]">
                {source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleHeader({ good }: { good: boolean }) {
  return (
    <div
      className={`mb-3.5 flex items-center gap-2 font-poppins text-xs font-bold uppercase tracking-[.7px] ${good ? "text-[#16875A]" : "text-[#D64545]"}`}
    >
      {good ? (
        <Check className="size-[17px]" strokeWidth={2.4} />
      ) : (
        <X className="size-[17px]" strokeWidth={2.4} />
      )}
      {good ? "Drives enquiries" : "Drives nothing"}
    </div>
  );
}

function ExampleBox({
  good,
  children,
}: {
  good: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[14px] border p-[18px] ${good ? "border-[#C6EBD8] bg-[#ECFAF3]" : "border-[#F3D2D2] bg-[#FDF2F2]"}`}
    >
      <ExampleHeader good={good} />
      {children}
    </div>
  );
}

function Tips({
  items,
  label = "Dutch-market specifics",
  dotColor,
}: {
  items: Tip[];
  label?: string;
  dotColor: string;
}) {
  return (
    <div className="mt-[22px]">
      <p
        className="font-poppins text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <div className="mt-3.5 grid max-w-[720px] gap-x-9 gap-y-2.5 min-[1081px]:grid-cols-2">
        {items.map((tip) => (
          <div key={tip.lead} className="flex items-start gap-2.5">
            <span className="mt-px flex-none" style={{ color: dotColor }}>
              ·
            </span>
            <span className="font-poppins text-[15px] leading-[23px] text-[#4B5563]">
              <strong className="font-[650] text-[#1F2937]">{tip.lead}</strong>{" "}
              {tip.rest}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 flex max-w-[720px] items-start gap-3 rounded-[10px] border border-[#EEF0F4] bg-[#FBFBFD] px-4 py-3.5">
      <Code className="mt-0.5 size-[17px] flex-none text-[#9AA1AC]" />
      <p className="font-poppins text-sm leading-[22px] text-[#6B7280]">
        <strong className="font-[650] text-[#1F2937]">Technical note. </strong>
        {children}
      </p>
    </div>
  );
}

function ElementCard({ item }: { item: Element }) {
  const cat = categoryStyles[item.category];
  return (
    <div className="rounded-[18px] border border-[#EEF0F4] bg-white p-[34px_36px] transition-colors hover:border-[#C9CDD6]">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-6">
        <span
          className="font-poppins text-[46px] font-light leading-[0.82] text-[#C5B7FB] [font-variant-numeric:tabular-nums] sm:text-[60px]"
          dangerouslySetInnerHTML={{ __html: item.number }}
        />
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`rounded-full border px-2.5 py-1 font-poppins text-[11px] font-bold uppercase tracking-[.9px] ${cat.pill}`}
            >
              {item.category}
            </span>
            <span className="font-poppins text-xs font-semibold text-[#9AA1AC]">
              Answers: &quot;
              <span dangerouslySetInnerHTML={{ __html: item.answers }} />
              &quot;
            </span>
          </div>
          <h3
            className="mt-3.5 font-poppins text-[23px] font-[650] leading-[1.3] tracking-[-.3px] text-[#1F2937]"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        </div>
      </div>
      <p className="mt-5 max-w-[700px] font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        <strong className="font-[650] text-[#1F2937]">What it is. </strong>
        <span dangerouslySetInnerHTML={{ __html: item.what }} />
      </p>
      <p className="mt-3.5 max-w-[700px] font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        <strong className="font-[650] text-[#1F2937]">
          Why it drives calls.{" "}
        </strong>
        {item.why}
      </p>
      <div className="mt-6 grid gap-4 min-[1081px]:grid-cols-2">
        <ExampleBox good>{item.good}</ExampleBox>
        <ExampleBox good={false}>{item.bad}</ExampleBox>
      </div>
      <Tips items={item.tips} label={item.specificsLabel} dotColor={cat.dot} />
      <TechnicalNote>{item.note}</TechnicalNote>
    </div>
  );
}

export function FrameworkSection() {
  const cards = [
    {
      key: "Clarity" as const,
      question: "Do you do what I need, where I live?",
      elementLabels: ["Element 1", "Element 5"],
      Icon: Search,
      accent: "#6F4CF5",
      cardBorder: "#C5B7FB",
      pillBorder: "#E4DCFB",
      wash: "#F4F1FE",
    },
    {
      key: "Trust" as const,
      question: "Can I trust you with my house?",
      elementLabels: ["Element 3", "Element 6"],
      Icon: ShieldCheck,
      accent: "#16875A",
      cardBorder: "#C6EBD8",
      pillBorder: "#C6EBD8",
      wash: "#ECFAF3",
    },
    {
      key: "Action" as const,
      question: "How do I reach you right now, the way I want?",
      elementLabels: ["Element 2", "Element 4", "Element 7"],
      Icon: Zap,
      accent: "#C77A0A",
      cardBorder: "#F3E0BC",
      pillBorder: "#F3E0BC",
      wash: "#FDF6EA",
    },
  ];
  return (
    <section id="framework" className="scroll-mt-24">
      <p className="font-poppins text-[13px] font-semibold uppercase tracking-[1.1px] text-[var(--color-violet-42)]">
        The framework
      </p>
      <h2 className="mt-3 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-haiti)] sm:text-[30px]">
        The three questions every visitor asks in fifteen seconds
      </h2>
      <p className="mt-4 w-full font-poppins text-[17px] leading-7 text-[#6B7280]">
        A visitor runs three quick checks in their head. Each of the seven
        elements exists to answer one of them within seconds. Design choices
        that don&apos;t serve these three questions are decoration.
      </p>
      <div className="mt-8 grid gap-4 min-[1081px]:grid-cols-3">
        {cards.map(
          ({
            key,
            question,
            elementLabels,
            Icon,
            accent,
            cardBorder,
            pillBorder,
            wash,
          }) => (
            <div
              key={key}
              className="rounded-2xl border p-7"
              style={{ borderColor: cardBorder, background: wash }}
            >
              <div className="flex items-center gap-2">
                <Icon className="size-5" style={{ color: accent }} />
                <p
                  className="font-poppins text-xs font-bold uppercase tracking-[.8px]"
                  style={{ color: accent }}
                >
                  {key}
                </p>
              </div>
              <p className="mt-4 font-poppins text-lg font-bold leading-7 text-[#1F2937]">
                &quot;
                <span dangerouslySetInnerHTML={{ __html: question }} />
                &quot;
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {elementLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-md border bg-white px-2.5 py-1 font-poppins text-[11px] font-bold"
                    style={{ borderColor: pillBorder, color: accent }}
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export function ElementsSection() {
  return (
    <section id="elements" className="scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-14 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/blog_5-1.webp"
          alt="Example electrician homepage"
        />
      </div>

      <h2 className="mt-10 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        The 7 elements
      </h2>
      <p className="mt-5 w-full font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        Each element gets a good and a bad example — as they appear on a real
        homepage — plus the tips that apply specifically to the Dutch market.
        Example UI stays in Dutch, because that&apos;s the language your
        customers search in.
      </p>
      <div className="mt-10 space-y-7">
        {elements.slice(0, 4).map((item) => (
          <ElementCard key={item.number} item={item} />
        ))}
        <div className="rounded-xl border border-[#E4DCFB] bg-[#F4F1FE] px-6 py-4.5">
          <p className="font-poppins text-base leading-6 text-[#1F2937]">
            That answers &quot;do you do what I need&quot; and &quot;can I trust
            you&quot;. What&apos;s left:{" "}
            <strong className="font-[650]">
              how the visitor takes action.
            </strong>
          </p>
        </div>
        {elements.slice(4).map((item) => (
          <ElementCard key={item.number} item={item} />
        ))}
      </div>
    </section>
  );
}

const comparisonRows: ComparisonRow[] = [
  {
    label: "Headline",
    values: [
      "Erkende elektricien + city + top 3 services + response time",
      '"Welcome to our website — quality solutions"',
    ],
  },
  {
    label: "Call button",
    values: [
      "Sticky, tappable, tel: link, with opening hours",
      "Grey phone number in the footer, non-tappable",
    ],
  },
  {
    label: "Trust badges",
    values: [
      "KvK, Techniek Nederland, NEN 1010, live Google review count",
      'None, or generic "award" graphics',
    ],
  },
  {
    label: "Spoed indicator",
    values: [
      "Coloured banner, specific response window, coverage area, 24/7 status",
      "No mention, or buried on a subpage",
    ],
  },
  {
    label: "Services",
    values: [
      "6–8 customer-language cards, each links to a dedicated page",
      '"All electrical work" in one paragraph',
    ],
  },
  {
    label: "Photos",
    values: [
      "Real owner + van + before/after jobs + first names",
      "Stock photos or AI-generated images",
    ],
  },
  {
    label: "Contact form",
    values: [
      "4 fields, WhatsApp button, 2-hour response promise, postcode not address",
      "10+ fields, full address, no WhatsApp, no response time",
    ],
    emphasize: true,
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="scroll-mt-24">
      <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        Side by side: high-converting vs low-converting
      </h2>
      <p className="mt-4 w-full font-poppins text-[16px] leading-[26px] text-[#4B5563]">
        The same seven elements at a glance — the homepage that drives enquiries
        against the one that doesn&apos;t.
      </p>
      <CostComparisonTable
        labelColumnWidth="auto"
        labelColumnHeader="Element"
        wrapCells
        columns={[
          {
            label: (
              <>
                <Check className="size-[15px]" strokeWidth={2.6} />
                High-converting
              </>
            ),
            tone: "good",
            width: "1fr",
          },
          {
            label: (
              <>
                <X className="size-[15px]" strokeWidth={2.6} />
                Low-converting
              </>
            ),
            tone: "bad",
            width: "1fr",
          },
        ]}
        rows={comparisonRows}
      />
    </section>
  );
}

export function RebuildPatternsSection() {
  const cards = [
    {
      emoji: "💬",
      tag: "Biggest lift",
      title: "Add a visible WhatsApp button",
      body: "Captures the visitors who'd never call or fill a form but will tap a message.",
      bg: "#E7FBF0",
      border: "#C6EBD8",
    },
    {
      emoji: "📷",
      tag: "Most trust",
      title: "Replace stock photos with real team photos",
      body: "Lifts submissions with no other change, because trust rises across the whole page.",
      bg: "#F4F1FE",
      border: "#E4DCFB",
    },
    {
      emoji: "✂️",
      tag: "Easiest",
      title: "Cut the form to four fields",
      body: "From nine or more down to four — usually the easiest change, and one of the most reliable.",
      bg: "#FDF6EA",
      border: "#F3E0BC",
    },
  ];
  return (
    <section id="patterns" className="scroll-mt-24">
      <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        Three patterns we see most often in rebuilds
      </h2>
      <p className="mt-4 w-full font-poppins text-[16px] leading-[26px] text-[#4B5563]">
        When Dutch electricians rebuild their homepage and enquiries measurably
        rise, three changes almost always make the list. If you can only change
        three things this week, start here.
      </p>
      <div className="mt-8 grid gap-4 min-[1081px]:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#EEF0F4] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <span
                className="flex size-[38px] items-center justify-center rounded-[10px] border text-lg"
                style={{ background: card.bg, borderColor: card.border }}
                dangerouslySetInnerHTML={{ __html: card.emoji }}
              />
              <span
                className="font-poppins text-[11px] font-bold uppercase tracking-[.7px] text-[#9AA1AC]"
                dangerouslySetInnerHTML={{ __html: card.tag }}
              />
            </div>
            <h3
              className="mt-4 font-poppins text-lg font-[650] leading-[1.3] tracking-[-0.2px] text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: card.title }}
            />
            <p
              className="mt-2.5 font-poppins text-[14.5px] leading-[22px] text-[#6B7280]"
              dangerouslySetInnerHTML={{ __html: card.body }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function GoogleBusinessSection() {
  const items: ReactNode[] = [
    "Real photos — the same as the homepage; consistency matters",
    "Accurate opening hours, including spoed hours",
    "Service area set to city plus surrounding region",
    "A service list matching your homepage",
    <>At least 30 real reviews</>,
    "Regular posts — even one a month lifts visibility",
  ];
  return (
    <section id="google" className="scroll-mt-24">
      <div className="mt-24 rounded-[20px] border border-[#EEF0F4] bg-[#FBFBFD] p-7 sm:p-11">
        <div className="flex items-center gap-3">
          <span className="font-poppins text-[40px] font-light leading-[0.8] text-[#C5B7FB] sm:text-[44px]">
            +1
          </span>
          <div>
            <p className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
              The element not on the list
            </p>
            <h2 className="mt-1.5 font-poppins text-2xl font-bold leading-[1.25] tracking-[-0.3px] text-[var(--color-haiti)] sm:text-[26px]">
              Your Google Business Profile
            </h2>
          </div>
        </div>
        <p className="mt-5 max-w-[700px] font-poppins text-base leading-[27px] text-[#4B5563] sm:text-[17px]">
          Strictly, not a homepage element — but it sits beside your homepage in
          Dutch search results and decides whether anyone ever reaches it. A
          homepage with all seven elements and a dead profile loses to one with
          five elements and an active profile.
        </p>
        <div className="mt-6 grid max-w-[760px] gap-x-10 gap-y-3 min-[1081px]:grid-cols-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check
                className="mt-0.5 size-[18px] flex-none text-[#6F4CF5]"
                strokeWidth={2.2}
              />
              <span className="font-poppins text-[15.5px] leading-[23px] text-[#1F2937]">
                {item}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[700px] font-poppins text-[15.5px] leading-6 text-[#6B7280]">
          Your homepage and your Google Business Profile are one conversion
          surface, not two — which is why Growth Rocket sets up the profile
          alongside the website rather than as a separate project.
        </p>
      </div>
    </section>
  );
}

export function FaqAndCta({ faq }: { faq: BlogFaqItem[] }) {
  return (
    <>
      <section id="faq" className="scroll-mt-24">
        <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
          Frequently asked questions
        </h2>
        <BlogFAQ items={faq} />
      </section>
      <section id="final-word" className=" scroll-mt-24">
        <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
          Final word
        </h2>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          A high-converting electrician homepage isn&apos;t about design flair,
          motion effects, or a six-figure budget. It&apos;s about answering
          three unconscious visitor questions in the first fifteen seconds: do
          you do what I need, where I live? Can I trust you? How do I reach you
          right now, the way I want?
        </p>
        <p className="mt-5 font-poppins text-[16px] leading-[26px] text-[#4B5563]">
          The seven elements exist to answer those three questions fast, in the
          specific Dutch context where your customers search. If your current
          homepage skips two or three, adding them is usually a day&apos;s work
          with real measurable lift — not a full rebuild.
        </p>
      </section>
      <BlogCtaSection
        heading="Rather have it built right the first time, with all seven elements?"
        body="In Dutch, with WhatsApp working, real photos, KvK and Techniek Nederland in the trust strip — and every enquiry landing in one place instead of scattered across email, phone and notebook."
        features={[
          "All seven elements, built in by default",
          "Sticky call and WhatsApp buttons",
          "Trust strip with KvK and certifications",
          "Every enquiry in one place in the Growth Rocket Hub",
        ]}
        ctaLabel="Get a managed electrician website"
      />
    </>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="more" className="scroll-mt-24">
      <h2 className="mt-20 font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-3.5 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[#6B7280]">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
      <MoreLinksAccordion
        toggleLabel="Browse all articles for electricians"
        groups={[
          {
            heading: "Costs & choices",
            links: [
              {
                label: "What does an electrician website cost?",
                href: "/blog/electrician-website-cost-netherlands",
              },
              {
                label: "WordPress or a website subscription?",
                href: "/blog/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison",
              },
              {
                label: "DIY vs done-for-you: which fits you?",
                href: "/blog/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you",
              },
            ],
          },
          {
            heading: "Build & process",
            links: [
              {
                label: "How long does it take to build an electrician website?",
                href: "/blog/electrician-website-build-timeline",
              },
              {
                label: "Mobile website for electricians: why it matters",
                href: "/blog/6-mobile-website-for-electricians",
              },
              {
                label: "Test your electrician website on mobile in 7 steps",
                href: "/blog/mobile-website-for-electricians-a-practical-guide-to-getting-it-right",
              },
              {
                label: "Online within 7 days: how it works",
                href: "/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
              },
            ],
          },
          {
            heading: "Pages & SEO",
            links: [
              {
                label: "The website checklist: 10 pages you can't skip",
                href: "/blog/electrician-website-checklist",
              },
              {
                label: "How to write an about page that builds trust",
                href: "/blog/10-how-to-write-an-about-us-page-for-an-electrician",
              },
              {
                label: "8 examples of electrician websites",
                href: "/blog/8-electrician-website-examples-that-actually-win-customers",
              },
            ],
          },
        ]}
      />
    </section>
  );
}
