"use client";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageProvider";

function PillarCard({
  eyebrow,
  eyebrowColor,
  title,
  body,
  bg,
  borderColor,
  mock,
  delay = 0,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: React.ReactNode;
  body: string;
  bg: string;
  borderColor: string;
  mock: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="relative flex flex-col pt-[32px] px-[28px] min-h-[420px] rounded-[22px] overflow-hidden transition-transform duration-500 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        aria-hidden
        style={{ background: bg, border: `1px solid ${borderColor}` }}
      />
      <div className="relative flex flex-col h-full">
        <span
          className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px]"
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </span>
        <div className="mt-4 flex flex-col gap-[11px]">
          <h3 className="font-poppins font-semibold text-[22px] leading-[1.4] tracking-[-0.5px] text-[var(--color-haiti)]">
            {title}
          </h3>
          <p className="font-poppins text-[14px] leading-[22.4px] text-[var(--color-slate-700)]">
            {body}
          </p>
        </div>
        <div className="mt-auto pt-[40px]">{mock}</div>
      </div>
    </Reveal>
  );
}

function WebsiteMock() {
  return (
    <div className="bg-white max-h-[180px] overflow-hidden rounded-t-[14px] shadow-[0_-6px_20px_0_rgba(0,0,0,0.04)] pt-[16px] pb-[45px] px-[16px] flex flex-col">
      {/* chrome */}
      <div className="flex gap-[3px] px-[7px] py-[5px] rounded-t-[4px] bg-[var(--color-violet-12)]">
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
      </div>
      {/* content */}
      <div className="bg-[var(--color-violet-98)] rounded-b-[4px] p-[10px] flex flex-col gap-[8px]">
        <div
          className="rounded-[6px] p-[10px] flex flex-col gap-[3px]"
          style={{
            background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
          }}
        >
          <p className="font-bricolage font-extrabold text-[13px] leading-[14.95px] tracking-[-0.3px]">
            <span className="text-white">Your Business. </span>
            <span className="text-[var(--color-amber-200)]">Online.</span>
          </p>
          <p className="font-sans text-[8px] leading-[12px] text-white/60">
            Professional. Secure. Always live.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[4px] h-[26px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-white p-[6px] rounded-[3px] flex flex-col gap-[3px]"
            >
              <span className="block h-[3px] w-[41px] rounded-[2px] bg-[var(--color-violet-42)]" />
              <span className="block h-[2px] w-full rounded-[1px] bg-[var(--color-slate-200)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingMock() {
  return (
    <div className="bg-white h-[180px] max-h-[180px] overflow-hidden relative rounded-t-[14px] shadow-[0_-6px_20px_0_rgba(0,0,0,0.04)]">
      <div className="absolute left-[16px] right-[16px] top-[16px] rounded-[6px] bg-white border border-[var(--color-slate-200)] p-[11px] flex flex-col gap-[5px]">
        <FormField tone="border">Emma Mitchell</FormField>
        <FormField tone="border">emma@email.com</FormField>
        <FormField tone="filled">Service needed?</FormField>
        <div className="rounded-[4px] bg-[var(--color-amber-500)] px-[10px] py-[7px] text-center">
          <span className="font-sans font-bold text-[9px] leading-[13.5px] text-white">
            Send enquiry
          </span>
        </div>
      </div>
      <div className="absolute left-[16px] right-[16px] top-[171px] bg-white rounded-[6px] pt-[25px] pb-[8px] px-[8px]">
        <div className="flex flex-wrap gap-[3px] h-[18px]">
          <span className="block h-full w-[29px] rounded-[3px] bg-[var(--color-amber-100)]" />
          <span className="block h-full w-[31px] rounded-[3px] bg-[var(--color-amber-500)]" />
          <span className="block h-full w-[29px] rounded-[3px] bg-[var(--color-amber-100)]" />
          <span className="block h-full w-[30px] rounded-[3px] bg-[var(--color-amber-100)]" />
        </div>
      </div>
    </div>
  );
}

function FormField({
  tone,
  children,
}: {
  tone: "border" | "filled";
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        tone === "border"
          ? "rounded-[4px] bg-white border border-[var(--color-amber-500)] px-[9px] py-[7px]"
          : "rounded-[4px] bg-[var(--color-amber-100)] border border-[var(--color-amber-300)] px-[9px] py-[7px]"
      }
    >
      <span
        className={
          tone === "border"
            ? "font-sans font-medium text-[9px] leading-[13.5px] text-[var(--color-haiti)]"
            : "font-sans font-medium text-[9px] leading-[13.5px] text-[var(--color-amber-800)]"
        }
      >
        {children}
      </span>
    </div>
  );
}

function HubMock() {
  return (
    <div className="bg-white max-h-[180px] overflow-hidden rounded-t-[14px] shadow-[0_-6px_20px_0_rgba(0,0,0,0.04)] pt-[16px] pb-[56px] px-[16px] flex flex-col gap-[6px]">
      <div className="flex items-center justify-between px-[2px]">
        <span className="font-bricolage font-bold text-[10px] leading-[15px] text-[var(--color-haiti)]">
          Your Hub
        </span>
        <span className="px-[6px] py-[2px] rounded-[100px] bg-[var(--color-blue-700)] font-sans font-bold text-[8px] leading-[12px] text-white">
          3 new
        </span>
      </div>
      <HubPreviewRow
        initials="EM"
        initialsBg="var(--color-blue-700)"
        name="Emma M. — quote"
        badge="New"
        badgeBg="var(--color-blue-150)"
        badgeColor="var(--color-blue-900)"
      />
      <HubPreviewRow
        initials="TJ"
        initialsBg="var(--color-amber-500)"
        name="Tom J. — booking"
        badge="Confirmed"
        badgeBg="var(--color-green-100)"
        badgeColor="var(--color-green-800)"
      />
      <HubPreviewRow
        initials="SR"
        initialsBg="#6b7280"
        name="Sophie R. — follow-up"
        badge="New"
        badgeBg="var(--color-blue-150)"
        badgeColor="var(--color-blue-900)"
      />
    </div>
  );
}

function HubPreviewRow({
  initials,
  initialsBg,
  name,
  badge,
  badgeBg,
  badgeColor,
}: {
  initials: string;
  initialsBg: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
}) {
  return (
    <div className="flex items-center gap-[6px] px-[8px] py-[6px] rounded-[5px] bg-white">
      <span
        className="inline-flex items-center justify-center size-[14px] rounded-[7px] font-sans font-bold text-[7px] leading-[10.5px] text-white shrink-0"
        style={{ background: initialsBg }}
      >
        {initials}
      </span>
      <span className="flex-1 font-sans font-semibold text-[8px] leading-[12px] text-[var(--color-haiti)] truncate">
        {name}
      </span>
      <span
        className="px-[5px] py-px rounded-[100px] font-sans font-bold text-[7px] leading-[10.5px] shrink-0"
        style={{ background: badgeBg, color: badgeColor }}
      >
        {badge}
      </span>
    </div>
  );
}

export default function ThreePillars() {
  const { t } = useLanguage();
  return (
    <section id="product" className="relative bg-white lg:py-[100px] py-[60px]">
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center lg:gap-[56px] gap-[28px]">
        {/* Heading block */}
        <div className="flex flex-col gap-[18px] items-center max-w-[912px] w-full">
          <Reveal>
            <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {t({
                en: "The Growth Rocket system for Electricians",
                nl: "Het Growth Rocket systeem voor elektriciens",
              })}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              <span className="block">
                {t({ en: "Three pillars.", nl: "Drie pijlers." })}
              </span>
              <span className="block text-grad-brand">
                {t({ en: "One complete system.", nl: "Eén compleet systeem." })}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)] max-w-[840px]">
              {t({
                en: "A website that works for you, a way to capture every enquiry, and one place to manage it all.",
                nl: "Een website die voor je werkt, een manier om elke aanvraag op te vangen en één centrale plek om alles te beheren.",
              })}
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] w-full relative">
          <PillarCard
            eyebrow={t({ en: "01 · Website", nl: "01 · Website" })}
            eyebrowColor="var(--color-violet-42)"
            title={
              <>
                {t({
                  en: "Professional electrician",
                  nl: "Een professionele website voor elektriciens",
                })}
                <br />
                {t({
                  en: "website — done for you.",
                  nl: "— volledig voor je geregeld.",
                })}
              </>
            }
            body={t({
              en: "We design, build, and manage your website so customers can find you, trust you, and contact you instantly.",
              nl: "Wij ontwerpen, bouwen en beheren je website zodat klanten je makkelijk kunnen vinden, vertrouwen en direct contact met je opnemen.",
            })}
            bg="linear-gradient(160deg, var(--color-violet-98) 0%, var(--color-violet-92) 100%)"
            borderColor="var(--color-violet-98)"
            mock={<WebsiteMock />}
            delay={0}
          />
          <PillarCard
            eyebrow={t({
              en: "02 · Booking & Enquiries",
              nl: "02 · Boekingen & Aanvragen",
            })}
            eyebrowColor="var(--color-amber-700)"
            title={t({
              en: "Capture every request. Book every slot.",
              nl: "Mis geen enkele aanvraag. Vul elke beschikbare plek.",
            })}
            body={t({
              en: "Customers can send job enquiries or book a time instantly — even when you’re busy on-site.",
              nl: "Klanten kunnen direct een aanvraag sturen of een afspraak boeken — zelfs terwijl jij op locatie aan het werk bent.",
            })}
            bg="linear-gradient(160deg, var(--color-amber-100) 0%, var(--color-amber-300) 100%)"
            borderColor="var(--color-amber-100)"
            mock={<BookingMock />}
            delay={0.05}
          />
          <PillarCard
            eyebrow={t({
              en: "03 · Management Hub",
              nl: "03 · Management Hub",
            })}
            eyebrowColor="var(--color-blue-700)"
            title={
              <>
                {t({ en: "One dashboard for", nl: "Één dashboard voor" })}
                <br />
                {t({ en: "all your jobs.", nl: "al je opdrachten." })}
              </>
            }
            body={t({
              en: "See every enquiry, booking, and follow-up in one place. No more jumping between calls, messages, and emails.",
              nl: "Bekijk elke aanvraag, boeking en opvolging op één plek. Geen gedoe meer tussen telefoontjes, berichten en e-mails schakelen.",
            })}
            bg="linear-gradient(160deg, var(--color-blue-100) 0%, var(--color-blue-150) 100%)"
            borderColor="var(--color-blue-100)"
            mock={<HubMock />}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
