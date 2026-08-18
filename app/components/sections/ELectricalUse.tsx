"use client";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";

function PillarCard({
  eyebrow,
  eyebrowColor,
  title,
  body,
  bg,
  borderColor,
  mock,
  delay = 0,
  arrowIcon = "./figma/arrow.svg",
}: {
  eyebrow: React.ReactNode;
  eyebrowColor: string;
  title: React.ReactNode;
  body: string;
  bg: string;
  borderColor: string;
  mock: React.ReactNode;
  delay?: number;
  arrowIcon: string;
}) {
  return (
    <Reveal
      delay={delay}
      className="relative flex flex-col pt-[32px] pb-[29px] px-[29px] min-h-[420px] rounded-[22px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 border border-[#E7E1F5]  shadow-[0_1px_0_0_rgba(17,12,36,0.02),_0_8px_24px_-12px_rgba(62,27,118,0.10)]"
    >
      <div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        aria-hidden
        style={{ background: bg, border: `1px solid ${borderColor}` }}
      />
      <div className="relative flex flex-col h-full">
        <div className="flex justify-between items-center">
          <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] bg-[linear-gradient(90deg,_#5B219F_0%,_#922698_100%)] bg-clip-text text-transparent">
            {eyebrow}
          </span>
          <span>
            <img src={arrowIcon}></img>
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-[11px]">
          <h3 className="font-poppins font-semibold text-[22px] leading-[1.4] tracking-[-0.5px] text-[var(--color-haiti)]">
            {title}
          </h3>
          <p className="font-poppins text-[14px] leading-[22.4px] text-[var(--color-slate-700)]">
            {body}
          </p>
        </div>
        <div className="mt-auto pt-[13px]">{mock}</div>
      </div>
    </Reveal>
  );
}

function WebsiteMock() {
  return (
    <div className="bg-[linear-gradient(180deg,_#F5F3FF_0%,_#F4EEFE_100%)] overflow-hidden rounded-[16px]  pt-[16px] pb-[16px] px-[16px] flex flex-col border border-[#E7E1F5]">
      {/* chrome */}
      {/* <img src="/figma/img1.png"></img> */}
      <div className="flex ">
        <img src="/figma/img1.png"></img>
        {/* <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />  */}
      </div>
      {/* content */}
      {/* <div className="bg-[var(--color-violet-98)] rounded-b-[4px] p-[10px] flex flex-col gap-[8px]">
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
      </div> */}
    </div>
  );
}

function BookingMock() {
  return (
    <div className="bg-[linear-gradient(180deg,_#F5F3FF_0%,_#F4EEFE_100%)] overflow-hidden rounded-[16px]  pt-[16px] pb-[16px] px-[16px] flex flex-col border border-[#E7E1F5]">
      <div className="flex ">
        <img src="/figma/img2.png"></img>
        {/* <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />
        <span className="block size-[5px] rounded-[2.5px] bg-white/20" />  */}
      </div>
      {/* <div className="absolute left-[16px] right-[16px] top-[16px] rounded-[6px] bg-white border border-[var(--color-slate-200)] p-[11px] flex flex-col gap-[5px]">
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
      </div> */}
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
    <div className="bg-[linear-gradient(180deg,_#F5F3FF_0%,_#F4EEFE_100%)] overflow-hidden rounded-[16px]  pt-[16px] pb-[16px] px-[16px] flex flex-col border border-[#E7E1F5]">
      <div className="flex ">
        <img src="/figma/img3.png"></img>
      </div>
      {/* <div className="flex items-center justify-between px-[2px]">
        <span className="font-bricolage font-bold text-[10px] leading-[15px] text-[var(--color-haiti)]">
          Your Hub
        </span>
        <span className="px-[6px] py-[2px] rounded-[100px] bg-[var(--color-blue-700)] font-sans font-bold text-[8px] leading-[12px] text-white">
          3 new
        </span>
      </div> */}
      {/* <HubPreviewRow
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
      /> */}
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

export default function ElectricalUse() {
  const { t } = useLanguage();
  return (
    <section
      id="product"
      className="relative bg-[#F5F3FF] lg:pb-[100px] pb-[60px]"
    >
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center lg:gap-[56px] gap-[28px]">
        {/* Heading block */}
        <div className="flex flex-col gap-[18px] items-center max-w-[912px] w-full">
          <Reveal>
            <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {t({
                en: "The customer journey",
                nl: "De klantreis",
              })}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              <span className="block">
                {t({ en: "How electricians use", nl: "Hoe elektriciens" })}
              </span>
              <span className="block text-grad-brand">
                {t({ en: "Growth Rocket.", nl: "Growth Rocket gebruiken." })}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)] max-w-[840px]">
              {t({
                en: "From the first Google search to the job getting done — every step handled in one simple flow.",
                nl: "Van de eerste Google-zoekopdracht tot het afronden van de klus — alles verloopt in één eenvoudig proces.",
              })}
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] w-full relative">
          <PillarCard
            arrowIcon="/figma/arrow.svg"
            eyebrow={
              <>
                <span className="text-black">01</span>{" "}
                {t({ en: "Step one", nl: "Stap één" })}
              </>
            }
            eyebrowColor="var(--color-violet-42)"
            title={
              <>
                {t({
                  en: "Get seen.",
                  nl: "Word gevonden.",
                })}
                <br />
                {t({ en: "Get chosen.", nl: "Word gekozen." })}
              </>
            }
            body={t({
              en: "When customers are searching for electrical services, your business is presented clearly — helping them choose you.",
              nl: "Als klanten zoeken naar elektrische diensten, wordt jouw bedrijf duidelijk gepresenteerd — zodat ze voor jou kiezen.",
            })}
            bg="#fff"
            borderColor="var(--color-violet-98)"
            mock={<WebsiteMock />}
            delay={0}
          />
          <PillarCard
            arrowIcon="/figma/arrow.svg"
            eyebrow={
              <>
                <span className="text-black">02</span>{" "}
                {t({ en: "Step two", nl: "Stap twee" })}
              </>
            }
            eyebrowColor="var(--color-violet-42)"
            title={
              <>
                {t({
                  en: "They book or",
                  nl: "Ze boeken direct of",
                })}
                <br />
                {t({ en: "send a request.", nl: "sturen een aanvraag." })}
              </>
            }
            body={t({
              en: "Customers pick a time or submit a job enquiry — even after hours.",
              nl: "Klanten kiezen een tijd of sturen een klusaanvraag — ook buiten kantooruren.",
            })}
            bg="#fff"
            borderColor="var(--color-violet-98)"
            mock={<BookingMock />}
            delay={0}
          />
          <PillarCard
            arrowIcon="/figma/tick.svg"
            eyebrow={
              <>
                <span className="text-black">03</span>{" "}
                {t({ en: "Step three", nl: "Stap drie" })}
              </>
            }
            eyebrowColor="var(--color-violet-42)"
            title={
              <>
                {t({
                  en: "You see it all",
                  nl: "Jij ziet alles",
                })}
                <br />
                {t({ en: "in one place.", nl: "op één centrale plek." })}
              </>
            }
            body={t({
              en: "You respond, schedule, and get the job done — without missing anything.",
              nl: "Jij reageert, plant in en rondt de klus af — zonder iets te missen.",
            })}
            bg="#fff"
            borderColor="var(--color-violet-98)"
            mock={<HubMock />}
            delay={0}
          />
          {/* <PillarCard
            arrowIcon="/figma/arrow.svg"
            eyebrow={
              <>
                <span className="text-black">02</span>{" "}
                {t({ en: "Step two", nl: "Boekingen & Aanvragen" })}
              </>
            }
            // eyebrow={t({
            //   en: "02 · Booking & Enquiries",
            //   nl: "02 · Boekingen & Aanvragen",
            // })}
            eyebrowColor="var(--color-amber-700)"
            title={t({
              en: "They book or send a request.",
              nl: "Leg elke aanvraag vast. Vul elke beschikbare afspraak.",
            })}
            body={t({
              en: "Structured forms for enquiries. A simple calendar for bookings. Nothing gets lost in WhatsApp chaos.",
              nl: "Duidelijke formulieren voor aanvragen en een eenvoudig boekingssysteem. Geen losse berichten meer via WhatsApp of e-mail.",
            })}
            bg="#fff"
            borderColor="var(--color-amber-100)"
            mock={<BookingMock />}
            delay={0.05}
          />
          <PillarCard
            arrowIcon="/figma/tick.svg"
            eyebrow={
              <>
                <span className="text-black">03</span>{" "}
                {t({ en: "Step three", nl: "Beheer Hub" })}
              </>
            }
            // eyebrow={t({
            //   en: "03 · Management Hub",
            //   nl: "03 · Beheer Hub",
            // })}
            eyebrowColor="var(--color-blue-700)"
            title={
              <>
                {t({ en: "One dashboard for", nl: "Eén dashboard" })}
                <br />
                {t({ en: "everything.", nl: "voor alles." })}
              </>
            }
            body={t({
              en: "The Growth Rocket Hub brings every enquiry and booking into one organised view. Nothing falls through the cracks.",
              nl: "De Growth Rocket Hub brengt alle aanvragen en boekingen samen in één overzicht. Zo houd je controle over je werk en je planning.",
            })}
            bg="#fff"
            borderColor="var(--color-blue-100)"
            mock={<HubMock />}
            delay={0.1}
          /> */}
        </div>
      </div>
    </section>
  );
}
