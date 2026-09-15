"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type StepStatus = "read" | "ready" | "";
type TeamMember = { id: string; name: string; role: string; context: string };
type CtaType = "" | "offerte" | "huisbezoek" | "bellen";

type Fields = {
  storyWhy: string;
  storyLike: string;
  certAnders: string;
  certReview: string;
  valOptijdTxt: string;
  valNetjesTxt: string;
  valPrijzenTxt: string;
  valAdviesTxt: string;
  valBereikTxt: string;
  fName: string;
  fWhy: string;
  fOne: string;
  fCommit: string;
  ctaLine: string;
};

type Checks = {
  chkFounder: boolean;
  chkReason: boolean;
  chkWork: boolean;
  chkExpect: boolean;
  certKvk: boolean;
  certBtw: boolean;
  certTn: boolean;
  certVca: boolean;
  certNen: boolean;
  certSpec: boolean;
  certVerz: boolean;
  valOptijd: boolean;
  valNetjes: boolean;
  valPrijzen: boolean;
  valAdvies: boolean;
  valBereik: boolean;
};

const STORAGE_KEY = "gr_overons_elektricien_v1";

const DEFAULT_FIELDS: Fields = {
  storyWhy: "",
  storyLike: "",
  certAnders: "",
  certReview: "",
  valOptijdTxt: "",
  valNetjesTxt: "",
  valPrijzenTxt: "",
  valAdviesTxt: "",
  valBereikTxt: "",
  fName: "",
  fWhy: "",
  fOne: "",
  fCommit: "",
  ctaLine: "",
};

const DEFAULT_CHECKS: Checks = {
  chkFounder: false,
  chkReason: false,
  chkWork: false,
  chkExpect: false,
  certKvk: false,
  certBtw: false,
  certTn: false,
  certVca: false,
  certNen: false,
  certSpec: false,
  certVerz: false,
  valOptijd: false,
  valNetjes: false,
  valPrijzen: false,
  valAdvies: false,
  valBereik: false,
};

const CTA_MAP: Partial<Record<CtaType, string>> = {
  offerte: "Vraag een offerte aan — we reageren binnen vier uur.",
  huisbezoek: "Plan een gratis huisbezoek.",
  bellen: "Bel ons op [nummer] — maandag tot en met vrijdag, 8:00 tot 18:00.",
};

const CTA_TYPE_LABELS: Partial<Record<CtaType, string>> = {
  offerte: "Offerte aanvragen",
  huisbezoek: "Gratis huisbezoek plannen",
  bellen: "Bellen",
};

const CERT_ITEMS: Array<{ key: keyof Checks; label: string }> = [
  { key: "certKvk", label: "KVK-nummer" },
  { key: "certBtw", label: "Btw-nummer" },
  { key: "certTn", label: "Techniek Nederland" },
  { key: "certVca", label: "VCA" },
  { key: "certNen", label: "NEN 1010 / NEN 3140" },
  { key: "certSpec", label: "Specialistische erkenningen" },
  { key: "certVerz", label: "Bedrijfsaansprakelijkheid" },
];

const VALUE_ROWS: Array<{
  adjective: string;
  promise: string;
  checkKey: keyof Checks;
  textKey: keyof Fields;
  placeholder: string;
}> = [
  {
    adjective: "Op tijd komen",
    promise:
      "“We zijn er binnen het afgesproken tijdvak, of we bellen je vooraf.”",
    checkKey: "valOptijd",
    textKey: "valOptijdTxt",
    placeholder:
      "We zijn er binnen het afgesproken tijdvak, of we bellen je vooraf.",
  },
  {
    adjective: "Netjes werken",
    promise:
      "“We dragen overschoenen en leggen afdekzeil neer. We ruimen op voordat we vertrekken.”",
    checkKey: "valNetjes",
    textKey: "valNetjesTxt",
    placeholder:
      "We dragen overschoenen en leggen afdekzeil neer. We ruimen op voordat we vertrekken.",
  },
  {
    adjective: "Heldere prijzen",
    promise:
      "“Je krijgt een vaste offerte vóór we beginnen. Geen verrassingen achteraf.”",
    checkKey: "valPrijzen",
    textKey: "valPrijzenTxt",
    placeholder:
      "Je krijgt een vaste offerte vóór we beginnen. Geen verrassingen achteraf.",
  },
  {
    adjective: "Eerlijk advies",
    promise: "“Is een reparatie goedkoper dan vervangen, dan zeggen we dat.”",
    checkKey: "valAdvies",
    textKey: "valAdviesTxt",
    placeholder: "Is een reparatie goedkoper dan vervangen, dan zeggen we dat.",
  },
  {
    adjective: "Bereikbaarheid",
    promise: "“We nemen op, of bellen binnen twee uur terug op werkdagen.”",
    checkKey: "valBereik",
    textKey: "valBereikTxt",
    placeholder: "We nemen op, of bellen binnen twee uur terug op werkdagen.",
  },
];

const CERT_BADGES: Array<{ label: string; icon: React.ReactNode }> = [
  {
    label: "Techniek Nederland",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    label: "VCA",
    icon: (
      <>
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    label: "KVK-inschrijving",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  { label: "NEN 1010 / 3140", icon: <path d="M4 7h16M4 12h16M4 17h10" /> },
  {
    label: "Laadpaal­certificering",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
  },
  {
    label: "Bedrijfs­aansprakelijkheid",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

function wordCount(text: string): number {
  const m = text.trim().match(/\S+/g);
  return m ? m.length : 0;
}

function countColor(words: number, min: number, max: number): string {
  if (words === 0) return "#9AA1AC";
  return words >= min && words <= max ? "#1a7a4f" : "#B4741A";
}

const BASE_BTN =
  "inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg border border-[#E6E8EF] bg-white px-4 font-sans text-[13px] font-semibold text-[#6B7280]";
const READ_ON =
  "inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg border border-[#6F4CF5] bg-[#F4F1FE] px-4 font-sans text-[13px] font-semibold text-[#6F4CF5]";
const READY_ON =
  "inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg border border-[#22A06B] bg-[#ECFDF3] px-4 font-sans text-[13px] font-semibold text-[#1a7a4f]";

const INPUT_CLS =
  "mt-2 w-full rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none";
const TEXTAREA_CLS =
  "mt-2 w-full resize-y rounded-[10px] border border-[#E6E8EF] bg-white px-3.5 py-3 font-sans text-[15px] leading-6 text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none";
const CHECK_LABEL_CLS =
  "flex min-h-6 cursor-pointer items-center gap-2.5 font-sans text-sm text-[#1F2937]";
const CHECK_CLS = "size-[18px] accent-[#6F4CF5]";
const LABEL_CLS = "mt-4 block font-sans text-sm font-semibold text-[#1F2937]";
const FIELDSET_CLS =
  "mt-7.5 rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-6";
const LEGEND_CLS =
  "-ml-2 px-2 font-sans text-xs font-semibold uppercase tracking-[0.6px] text-[#6F4CF5]";

function StepEyebrow({ n }: { n: number }) {
  return (
    <div className="mt-20 flex items-center gap-3">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.8px] text-[#9AA1AC]">
        Stap {n} van 6
      </span>
      <span className="h-px flex-1 bg-[#EEF0F4]" />
    </div>
  );
}

function StepButtons({
  status,
  onToggle,
}: {
  status: StepStatus;
  onToggle: (v: "read" | "ready") => void;
}) {
  return (
    <div className="mt-4.5 flex flex-wrap gap-2.5">
      <button
        type="button"
        onClick={() => onToggle("read")}
        aria-pressed={status === "read"}
        className={status === "read" ? READ_ON : BASE_BTN}
      >
        Gelezen
      </button>
      <button
        type="button"
        onClick={() => onToggle("ready")}
        aria-pressed={status === "ready"}
        className={status === "ready" ? READY_ON : BASE_BTN}
      >
        Klaar voor mijn pagina
      </button>
    </div>
  );
}

export default function WorkshopSection() {
  const [fields, setFields] = useState<Fields>(DEFAULT_FIELDS);
  const [checks, setChecks] = useState<Checks>(DEFAULT_CHECKS);
  const [ctaType, setCtaType] = useState<CtaType>("");
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [status, setStatus] = useState<
    Partial<Record<1 | 2 | 3 | 4 | 5 | 6, StepStatus>>
  >({});
  const [showOutline, setShowOutline] = useState(false);
  const [outlineText, setOutlineText] = useState("");
  const [copyLabel, setCopyLabel] = useState("Kopieer");
  const [showFooter, setShowFooter] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const loadedRef = useRef(false);
  const idRef = useRef(0);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const obj = JSON.parse(raw);
        if (obj.fields) setFields((f) => ({ ...f, ...obj.fields }));
        if (obj.checks) setChecks((c) => ({ ...c, ...obj.checks }));
        if (obj.ctaType) setCtaType(obj.ctaType);
        if (Array.isArray(obj.team)) setTeam(obj.team);
        if (obj.status) setStatus(obj.status);
      }
    } catch {
      /* ignore */
    }
    loadedRef.current = true;
  }, []);

  useEffect(() => {
    if (!loadedRef.current) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ fields, checks, ctaType, team, status }),
      );
    } catch {
      /* ignore */
    }
  }, [fields, checks, ctaType, team, status]);

  useEffect(() => {
    const ids = ["stap-1", "stap-2", "stap-3", "stap-4", "stap-5", "stap-6"];
    function onScroll() {
      let s = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 220) s = i + 1;
      });
      setCurrentStep(s);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setField =
    (key: keyof Fields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));
  const setCheck = (key: keyof Checks) => (e: ChangeEvent<HTMLInputElement>) =>
    setChecks((c) => ({ ...c, [key]: e.target.checked }));
  const toggleStatus = (step: 1 | 2 | 3 | 4 | 5 | 6, val: "read" | "ready") =>
    setStatus((s) => ({ ...s, [step]: s[step] === val ? "" : val }));

  function addTeamMember() {
    idRef.current += 1;
    setTeam((t) => [
      ...t,
      { id: `t${idRef.current}`, name: "", role: "", context: "" },
    ]);
  }
  function removeTeamMember(id: string) {
    setTeam((t) => t.filter((m) => m.id !== id));
  }
  function updateTeamMember(
    id: string,
    key: "name" | "role" | "context",
    value: string,
  ) {
    setTeam((t) => t.map((m) => (m.id === id ? { ...m, [key]: value } : m)));
  }

  const ctaPreview =
    fields.ctaLine.trim() || CTA_MAP[ctaType] || CTA_MAP.offerte;

  function buildOutlineText(): string {
    const L: string[] = [];
    L.push("OVER-ONS-PAGINA — WERKCONCEPT");
    L.push(
      "Werkconcept. Controleer op waarheid, actuele certificeringen en privacy vóór publicatie.",
    );
    L.push("");
    L.push("1. ONTSTAANSVERHAAL");
    L.push(fields.storyWhy.trim() || "—");
    if (fields.storyLike.trim())
      L.push("Liefste werk: " + fields.storyLike.trim());
    L.push("");
    L.push("2. TEAM");
    if (team.length) {
      team.forEach((t) => {
        const parts = [t.name.trim(), t.role.trim(), t.context.trim()].filter(
          Boolean,
        );
        if (parts.length) L.push("- " + parts.join(" — "));
      });
    } else {
      L.push("—");
    }
    L.push("");
    L.push("3. CERTIFICERINGEN EN LIDMAATSCHAPPEN");
    let anyCert = false;
    CERT_ITEMS.forEach(({ key, label }) => {
      if (checks[key]) {
        L.push("- " + label);
        anyCert = true;
      }
    });
    if (fields.certAnders.trim()) {
      L.push("- Anders: " + fields.certAnders.trim());
      anyCert = true;
    }
    if (!anyCert) L.push("—");
    if (fields.certReview.trim())
      L.push("Herzien vóór: " + fields.certReview.trim());
    L.push("");
    L.push("4. WAARDEN (BELOFTES)");
    let anyVal = false;
    VALUE_ROWS.forEach(({ checkKey, textKey }) => {
      if (checks[checkKey]) {
        const txt = fields[textKey].trim();
        if (txt) {
          L.push("- " + txt);
          anyVal = true;
        }
      }
    });
    if (!anyVal) L.push("—");
    L.push("");
    L.push("5. PERSOONLIJKE NOOT VAN DE OPRICHTER");
    const { fName, fWhy, fOne, fCommit } = fields;
    if (fName.trim()) L.push("Naam: " + fName.trim());
    if (fWhy.trim()) L.push(fWhy.trim());
    if (fOne.trim()) L.push("Wil ik meegeven: " + fOne.trim());
    if (fCommit.trim()) L.push("Belofte: " + fCommit.trim());
    if (!fName.trim() && !fWhy.trim() && !fOne.trim() && !fCommit.trim())
      L.push("—");
    L.push("");
    L.push("6. VOLGENDE STAP");
    const typeLabel = CTA_TYPE_LABELS[ctaType];
    if (typeLabel) L.push("Type: " + typeLabel);
    L.push(fields.ctaLine.trim() || "—");
    return L.join("\n");
  }

  function handleShowOutline() {
    const text = buildOutlineText();
    setOutlineText(text);
    setShowOutline(true);
    requestAnimationFrame(() => {
      outlineRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  async function copyOutline() {
    try {
      await navigator.clipboard.writeText(outlineText);
    } catch {
      /* ignore */
    }
    setCopyLabel("Gekopieerd");
    setTimeout(() => setCopyLabel("Kopieer"), 1600);
  }

  function printOutline() {
    const w = window.open("", "_blank", "width=760,height=900");
    if (!w) return;
    const escaped = outlineText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    w.document.write(
      `<!doctype html><html><head><title>Over-ons-pagina — werkconcept</title></head><body style="font-family:Inter,Arial,sans-serif;padding:32px;color:#1F2937;"><h1 style="font-size:20px;margin:0 0 16px;">Over-ons-pagina — werkconcept</h1><pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;line-height:22px;">${escaped}</pre></body></html>`,
    );
    w.document.close();
    w.focus();
    w.print();
  }

  function resetAll() {
    if (
      typeof window !== "undefined" &&
      !window.confirm(
        "Wil je je hele concept wissen? Dit kan niet ongedaan worden gemaakt.",
      )
    )
      return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setFields(DEFAULT_FIELDS);
    setChecks(DEFAULT_CHECKS);
    setCtaType("");
    setTeam([]);
    setStatus({});
    setShowOutline(false);
    setOutlineText("");
    setShowFooter(false);
  }

  const dots: Array<{ bg: string }> = [1, 2, 3, 4, 5, 6].map((n) => {
    const s = status[n as 1 | 2 | 3 | 4 | 5 | 6];
    return {
      bg: s === "ready" ? "#22A06B" : s === "read" ? "#6F4CF5" : "#E1E4EC",
    };
  });

  return (
    <div onFocus={() => setShowFooter(true)}>
      <section className="scroll-mt-24">
        <div className="mt-26 w-full rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-5.5">
          <div className="font-sans text-xs font-semibold uppercase tracking-[0.6px] text-[#6F4CF5]">
            Schrijfwerkplaats
          </div>
          <p className="mt-2 font-sans text-base leading-[25px] text-[#1F2937]">
            Bij elke stap hoort een privé werkruimte waarin je je eigen tekst
            kunt opzetten. Alles blijft in je eigen browser &mdash; er wordt
            niets verstuurd, en je hoeft geen e-mailadres of account op te
            geven. De velden zijn optioneel; het artikel werkt ook volledig
            zonder ze in te vullen.
          </p>
        </div>
      </section>

      {/* STAP 1 */}
      <section id="stap-1" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={1} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Stap 1: schrijf een kort, eerlijk ontstaansverhaal
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Begin bij waarom het bedrijf bestaat. Niet de bedrijfsversie &mdash;
            de echte.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            De fout die de meeste elektriciens maken, is iets schrijven als
            &ldquo;Opgericht in 2008 zijn wij uitgegroeid tot een van de
            toonaangevende installatiebedrijven in de regio.&rdquo; Dat vertelt
            de klant niets. Het klinkt als elke andere website.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Beantwoord in plaats daarvan twee vragen:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>Waarom ben je dit bedrijf begonnen?</li>
            <li>Welk werk doe je eigenlijk het liefst?</li>
          </ul>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Houd het op 80 tot 150 woorden. Eén korte alinea, geschreven zoals
            je het aan een buurman bij de koffie zou uitleggen.
          </p>

          <div className="mt-7.5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <figure className="m-0 rounded-[14px] border border-[#E6E8EF] bg-white p-4.5">
              <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Zwakke versie
              </figcaption>
              <blockquote className="m-0 mt-2.5 font-sans text-[16px] italic leading-[26px] text-[#6B7280]">
                &ldquo;ABC Elektrotechniek is een full-service
                installatiebedrijf dat complete oplossingen levert aan
                particuliere en zakelijke klanten door heel Nederland.&rdquo;
              </blockquote>
            </figure>
            <figure className="m-0 rounded-[14px] border border-[#E4DCFB] bg-[#F4F1FE] p-4.5">
              <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
                Sterkere versie
              </figcaption>
              <blockquote className="m-0 mt-2.5 font-sans text-[16px] leading-[26px] text-[#1F2937]">
                &ldquo;Ik ben ABC Elektrotechniek in 2014 begonnen, na tien jaar
                bij een groot installatiebedrijf. Ik zag steeds hetzelfde
                probleem: klanten die weken op een offerte wachtten, en daarna
                nog eens weken op de uitvoering. Ik wilde een klein team runnen
                dat op tijd komt, het huis netjes achterlaat en de telefoon
                opneemt als je belt. Zo werken we vandaag nog steeds.&rdquo;
              </blockquote>
            </figure>
          </div>
          <p className="mt-5 font-sans text-base leading-[26px] text-[#6B7280]">
            Let op wat de tweede versie doet: hij noemt de oprichter, geeft een
            echte reden en zet verwachtingen neer waar de klant je aan kan
            houden.
          </p>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Jouw ontstaansverhaal</legend>
            <label className="block font-sans text-sm font-semibold text-[#1F2937]">
              Waarom ben je dit bedrijf begonnen?
            </label>
            <textarea
              value={fields.storyWhy}
              onChange={setField("storyWhy")}
              placeholder="Schrijf zoals je het aan een buurman zou vertellen…"
              className={TEXTAREA_CLS}
              style={{ minHeight: 120 }}
            />
            <label className={LABEL_CLS}>
              Welk werk doe je eigenlijk het liefst?
            </label>
            <textarea
              value={fields.storyLike}
              onChange={setField("storyLike")}
              placeholder="Bijv. oude groepenkasten vervangen, laadpalen plaatsen…"
              className={TEXTAREA_CLS}
              style={{ minHeight: 72 }}
            />
            <div className="mt-2.5 flex items-center gap-2 font-sans text-[13px] text-[#9AA1AC]">
              <span
                className="font-semibold"
                style={{
                  color: countColor(wordCount(fields.storyWhy), 80, 150),
                }}
              >
                {wordCount(fields.storyWhy)} woorden
              </span>
              <span>
                &middot; richtlijn 80&ndash;150 woorden (je kunt ook daarbuiten
                opslaan)
              </span>
            </div>
            <div className="mt-4.5 border-t border-[#EEF0F4] pt-4">
              <div className="font-sans text-[13px] font-semibold text-[#1F2937]">
                Checklist
              </div>
              <div className="mt-2.5 flex flex-col gap-2.5">
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkFounder}
                    onChange={setCheck("chkFounder")}
                    className={CHECK_CLS}
                  />{" "}
                  Oprichter genoemd
                </label>
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkReason}
                    onChange={setCheck("chkReason")}
                    className={CHECK_CLS}
                  />{" "}
                  Echte reden opgenomen
                </label>
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkWork}
                    onChange={setCheck("chkWork")}
                    className={CHECK_CLS}
                  />{" "}
                  Voorkeurswerk benoemd
                </label>
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkExpect}
                    onChange={setCheck("chkExpect")}
                    className={CHECK_CLS}
                  />{" "}
                  Klantverwachting concreet gemaakt
                </label>
              </div>
            </div>
            <StepButtons
              status={status[1] ?? ""}
              onToggle={(v) => toggleStatus(1, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STAP 2 */}
      <section id="stap-2" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={2} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Stap 2: laat het team zien, met naam en foto
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Stockfoto&rsquo;s van naamloze monteurs in smetteloze overalls
            schaden je geloofwaardigheid. Klanten prikken er meteen doorheen
            &mdash; en ze zijn precies het signaal van de malafide aanbieders
            die mensen juist proberen te vermijden.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Een teampagina die vertrouwen wekt, bevat:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>
              Een echte foto van elk teamlid (in je eigen werkkleding, in een
              echte omgeving)
            </li>
            <li>
              Voornaam en rol (Pieter &mdash; eerste monteur, Sara &mdash;
              leerling-monteur)
            </li>
            <li>
              Eén korte regel context per persoon (&ldquo;12 jaar ervaring in
              woningen&rdquo; of &ldquo;gespecialiseerd in laadpalen&rdquo;)
            </li>
          </ul>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Werk je alleen, dan geldt dit net zo goed. Eén duidelijke foto van
            jou, je naam en je rol. De klant wil weten wie er straks voor de
            deur staat.
          </p>

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Voorbeeldopbouw
              </div>
              <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
                Illustratief &mdash; geen echte personen
              </span>
            </div>
            <div className="mt-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
              <div className="flex items-center gap-3.5 rounded-2xl border border-[#EEF0F4] bg-white p-4">
                <div className="flex size-[52px] flex-none items-center justify-center rounded-xl bg-[#EDE9FB] font-sans text-lg font-bold text-[#6F4CF5]">
                  P
                </div>
                <div>
                  <div className="font-sans text-[15px] font-semibold text-[#1F2937]">
                    Pieter
                  </div>
                  <div className="font-sans text-[13px] text-[#6B7280]">
                    Eerste monteur
                  </div>
                  <div className="mt-0.5 font-sans text-[12.5px] text-[#9AA1AC]">
                    12 jaar ervaring in woningen
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 rounded-2xl border border-[#EEF0F4] bg-white p-4">
                <div className="flex size-[52px] flex-none items-center justify-center rounded-xl bg-[#EDE9FB] font-sans text-lg font-bold text-[#6F4CF5]">
                  S
                </div>
                <div>
                  <div className="font-sans text-[15px] font-semibold text-[#1F2937]">
                    Sara
                  </div>
                  <div className="font-sans text-[13px] text-[#6B7280]">
                    Leerling-monteur
                  </div>
                  <div className="mt-0.5 font-sans text-[12.5px] text-[#9AA1AC]">
                    Gespecialiseerd in laadpalen
                  </div>
                </div>
              </div>
            </div>
          </div>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Jouw team</legend>
            <p className="m-0 mb-1 font-sans text-[13px] text-[#6B7280]">
              Voeg teamleden toe met voornaam, rol en één regel context. Geen
              foto-upload nodig; werk je alleen, dan is één regel over jezelf
              genoeg.
            </p>
            {team.map((member) => (
              <div
                key={member.id}
                className="mt-3.5 rounded-xl border border-[#EEF0F4] bg-white p-3.5"
              >
                <div className="flex flex-wrap gap-2.5">
                  <input
                    value={member.name}
                    onChange={(e) =>
                      updateTeamMember(member.id, "name", e.target.value)
                    }
                    placeholder="Voornaam"
                    className="min-w-[120px] flex-1 rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                  />
                  <input
                    value={member.role}
                    onChange={(e) =>
                      updateTeamMember(member.id, "role", e.target.value)
                    }
                    placeholder="Rol (bijv. eerste monteur)"
                    className="min-w-[120px] flex-1 rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                  />
                </div>
                <input
                  value={member.context}
                  onChange={(e) =>
                    updateTeamMember(member.id, "context", e.target.value)
                  }
                  placeholder="Eén regel context (bijv. 12 jaar ervaring in woningen)"
                  className="mt-2.5 w-full rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                />
                <div className="mt-2.5 text-right">
                  <button
                    type="button"
                    onClick={() => removeTeamMember(member.id)}
                    className="min-h-11 cursor-pointer border-0 bg-transparent px-1 font-sans text-[13px] font-semibold text-[#B4741A]"
                  >
                    Verwijderen
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addTeamMember}
              className="mt-3.5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[10px] border border-dashed border-[#C5B7FB] bg-white px-4 font-sans text-sm font-semibold text-[#6F4CF5]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              Teamlid toevoegen
            </button>
            <StepButtons
              status={status[2] ?? ""}
              onToggle={(v) => toggleStatus(2, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STAP 3 */}
      <section id="stap-3" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={3} />
          <h2 className="mt-3.5 w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Stap 3: zet je certificeringen en lidmaatschappen helder op een rij
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Hier haal je de twijfel weg. De meeste elektriciens hébben de
            papieren, maar stoppen ze weg in een voettekst of laten ze helemaal
            weg.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Zet ze in een overzichtelijk, scanbaar blok op de over-ons-pagina.
            Denk aan:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>Je KVK-nummer</li>
            <li>Je btw-nummer</li>
            <li>Branchelidmaatschappen (Techniek Nederland)</li>
            <li>
              Veiligheids- en vakcertificeringen (VCA, NEN 1010, NEN 3140)
            </li>
            <li>
              Specialistische erkenningen (laadpaalcertificering,
              fabrikantpartnerschappen, keurmerken voor zonne-energie)
            </li>
            <li>Verzekering (bedrijfsaansprakelijkheid)</li>
          </ul>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Je hoeft ze niet stuk voor stuk uit te leggen. Een simpele lijst,
            waar mogelijk met logo&rsquo;s, is genoeg. De klant die om een
            specifieke certificering geeft, herkent hem. De klant die dat niet
            doet, ziet alsnog een stevige lijst &mdash; en voelt zich
            gerustgesteld.
          </p>

          <figure
            role="img"
            aria-label="Vertrouwenssignalen van een installatiebedrijf: Techniek Nederland, VCA, KVK-inschrijving en verzekering"
            className="m-0 mt-7"
          >
            <div className="flex items-center justify-between">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Voorbeeld van een keurmerkblok
              </div>
              <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
                Illustratief &mdash; niet geverifieerd
              </span>
            </div>
            <div className="mt-3.5 grid grid-cols-1 gap-3 lg:grid-cols-3">
              {CERT_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="rounded-xl border border-[#EEF0F4] bg-white p-4 text-center"
                >
                  <div className="flex h-[34px] items-center justify-center text-[#6F4CF5]">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {b.icon}
                    </svg>
                  </div>
                  <div className="mt-2 font-sans text-[13px] font-semibold text-[#1F2937]">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="mt-3 font-sans text-[12.5px] leading-[18px] text-[#9AA1AC]">
              Voorbeeld ter illustratie. Toon alleen certificeringen,
              lidmaatschappen en verzekeringen die je daadwerkelijk en actueel
              hebt.
            </figcaption>
          </figure>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Jouw certificeringen</legend>
            <p className="m-0 mb-3 font-sans text-[13px] text-[#6B7280]">
              Vink aan wat je echt en actueel hebt. Geen documenten of
              certificaatnummers nodig.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {CERT_ITEMS.map(({ key, label }) => (
                <label key={key} className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks[key]}
                    onChange={setCheck(key)}
                    className={CHECK_CLS}
                  />{" "}
                  {label}
                </label>
              ))}
            </div>
            <label className={LABEL_CLS}>Anders, namelijk</label>
            <input
              value={fields.certAnders}
              onChange={setField("certAnders")}
              placeholder="Bijv. InstallQ, fabrikantpartnerschap…"
              className={INPUT_CLS}
            />
            <label className={LABEL_CLS}>Herzien vóór</label>
            <input
              value={fields.certReview}
              onChange={setField("certReview")}
              placeholder="Bijv. januari 2027 — controleer geldigheid"
              className={INPUT_CLS}
            />
            <StepButtons
              status={status[3] ?? ""}
              onToggle={(v) => toggleStatus(3, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STAP 4 */}
      <section id="stap-4" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={4} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Stap 4: schrijf de waarden op waar klanten écht om geven
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            &ldquo;Kwaliteit, integriteit en excellentie&rdquo; betekenen niets.
            Elk bedrijf claimt ze; klanten lezen eroverheen.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            De waarden die een twijfelende klant over de streep trekken, zijn
            gekoppeld aan concrete frustraties met eerdere vakmensen. Schrijf
            elke waarde als een belofte, niet als een bijvoeglijk naamwoord.
          </p>

          <div className="mt-6.5">
            <div className="grid grid-cols-[150px_1fr] pb-2 font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              <div>Bijvoeglijk naamwoord</div>
              <div className="pl-4">De belofte</div>
            </div>
            <div className="flex flex-col gap-2.5">
              {VALUE_ROWS.map((row) => (
                <div
                  key={row.adjective}
                  className="grid grid-cols-[150px_1fr] overflow-hidden rounded-xl border border-[#EEF0F4]"
                >
                  <div className="flex items-center bg-[#F8F9FC] px-4 py-3.5 font-sans text-[15px] font-semibold text-[#6B7280]">
                    {row.adjective}
                  </div>
                  <div className="border-l border-[#EEF0F4] px-4.5 py-3.5 font-sans text-[15px] leading-[23px] text-[#1F2937]">
                    {row.promise}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="mt-6 border-l-[3px] border-[#6F4CF5] pl-6">
            <p className="m-0 text-pretty font-sans text-xl font-semibold leading-[1.5] text-[#1F2937]">
              Aan een belofte kan een klant je houden &mdash; een bijvoeglijk
              naamwoord is alleen maar marketing.
            </p>
          </blockquote>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Jouw beloftes</legend>
            <p className="m-0 mb-3 font-sans text-[13px] text-[#6B7280]">
              Kies drie of vier beloftes en pas ze aan zodat ze kloppen voor
              jouw bedrijf. Beloof alleen wat je echt kunt waarmaken.
            </p>
            <div className="flex flex-col gap-3">
              {VALUE_ROWS.map((row) => (
                <div
                  key={row.adjective}
                  className="rounded-xl border border-[#EEF0F4] bg-white p-3.5"
                >
                  <label className="flex min-h-6 cursor-pointer items-center gap-2.5 font-sans text-sm font-semibold text-[#1F2937]">
                    <input
                      type="checkbox"
                      checked={checks[row.checkKey]}
                      onChange={setCheck(row.checkKey)}
                      className={CHECK_CLS}
                    />{" "}
                    {row.adjective}
                  </label>
                  <input
                    value={fields[row.textKey]}
                    onChange={setField(row.textKey)}
                    placeholder={row.placeholder}
                    className="mt-2 w-full rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                  />
                </div>
              ))}
            </div>
            <StepButtons
              status={status[4] ?? ""}
              onToggle={(v) => toggleStatus(4, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STAP 5 */}
      <section id="stap-5" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={5} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Stap 5: voeg een persoonlijke noot van de oprichter toe
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Dit is het onderdeel dat de meeste elektriciens overslaan &mdash; en
            het onderdeel dat het meeste werk doet.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Een korte oprichtersnoot (100 tot 150 woorden) geeft de klant een
            gezicht bij het bedrijf. Ook met een team van tien wil de klant
            weten wie er aan het roer staat.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Zet erin:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>Je naam en een echte foto (geen logo)</li>
            <li>Waarom dit werk je persoonlijk raakt</li>
            <li>Eén ding dat je elke klant wilt meegeven</li>
            <li>Een handtekening (het liefst handgeschreven)</li>
          </ul>

          <figure className="m-0 mt-7 rounded-2xl border border-[#E6E8EF] bg-white p-6.5">
            <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              Voorbeeld &mdash; oprichtersnoot
            </figcaption>
            <div className="mt-3.5 flex items-start gap-4.5">
              <div className="flex size-16 flex-none items-center justify-center rounded-2xl bg-[#EDE9FB] font-sans text-2xl font-bold text-[#6F4CF5]">
                M
              </div>
              <blockquote className="m-0 text-pretty font-sans text-[17px] leading-7 text-[#1F2937]">
                &ldquo;Hoi, ik ben Marco. Ik ben al 18 jaar elektricien. De
                reden dat ik dit bedrijf run zoals ik het run, is simpel: mijn
                eigen vader betaalde ooit veel te veel voor een kleine reparatie
                aan zijn groepenkast, en dat is me bijgebleven. Elke offerte die
                wij versturen, is er een die ik met een gerust hart aan mijn
                eigen familie zou geven. Is er iets mis met ons werk, bel mij
                dan rechtstreeks &mdash; dan maak ik het in orde.&rdquo;
              </blockquote>
            </div>
            <div
              className="mt-4 pl-[82px] font-sans text-2xl text-[#6F4CF5]"
              style={{ fontFamily: "'Segoe Script','Bradley Hand',cursive" }}
            >
              Marco van der Berg
            </div>
          </figure>
          <p className="mt-5 font-sans text-base leading-[26px] text-[#6B7280]">
            Die ene alinea vertelt de klant meer dan een gelikte
            bedrijfsgeschiedenis ooit zal doen.
          </p>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Jouw oprichtersnoot</legend>
            <label className="block font-sans text-sm font-semibold text-[#1F2937]">
              Je naam
            </label>
            <input
              value={fields.fName}
              onChange={setField("fName")}
              placeholder="Bijv. Marco van der Berg"
              className={INPUT_CLS}
            />
            <label className={LABEL_CLS}>
              Waarom raakt dit werk je persoonlijk?
            </label>
            <textarea
              value={fields.fWhy}
              onChange={setField("fWhy")}
              className={TEXTAREA_CLS}
              style={{ minHeight: 110 }}
            />
            <label className={LABEL_CLS}>
              Eén ding dat je elke klant wilt meegeven
            </label>
            <input
              value={fields.fOne}
              onChange={setField("fOne")}
              className={INPUT_CLS}
            />
            <label className={LABEL_CLS}>Een persoonlijke belofte</label>
            <input
              value={fields.fCommit}
              onChange={setField("fCommit")}
              placeholder="Bijv. Is er iets mis, bel mij dan rechtstreeks."
              className={INPUT_CLS}
            />
            <div className="mt-2.5 flex items-center gap-2 font-sans text-[13px] text-[#9AA1AC]">
              <span
                className="font-semibold"
                style={{ color: countColor(wordCount(fields.fWhy), 100, 150) }}
              >
                {wordCount(fields.fWhy)} woorden
              </span>
              <span>
                &middot; richtlijn 100&ndash;150 woorden. Een getypte naam
                volstaat &mdash; een handtekening uploaden is niet nodig.
              </span>
            </div>
            <StepButtons
              status={status[5] ?? ""}
              onToggle={(v) => toggleStatus(5, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STAP 6 */}
      <section id="stap-6" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={6} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Stap 6: sluit af met een duidelijke volgende stap
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            De over-ons-pagina is niet het einde van de reis. Het is het moment
            waarop de klant beslist of hij de volgende stap zet. Maak glashelder
            wat die stap is.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Vermijd vage frasen als &ldquo;neem contact op&rdquo;. Kies een
            concrete, laagdrempelige actie:
          </p>

          <div className="mt-6.5 grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[14px] border border-[#E6E8EF] bg-white p-4.5">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Vaag
              </div>
              <p className="m-0 mt-2.5 font-sans text-[17px] leading-[26px] text-[#6B7280]">
                &ldquo;Neem contact op&rdquo;
              </p>
            </div>
            <div className="rounded-[14px] border border-[#E4DCFB] bg-[#F4F1FE] p-4.5">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
                Concreet
              </div>
              <ul className="mt-2.5 list-disc pl-5 font-sans text-base leading-[26px] text-[#1F2937]">
                <li>
                  &ldquo;Vraag een offerte aan &mdash; we reageren binnen vier
                  uur.&rdquo;
                </li>
                <li>&ldquo;Plan een gratis huisbezoek.&rdquo;</li>
                <li>
                  &ldquo;Bel ons op [nummer] &mdash; maandag tot en met vrijdag,
                  8:00 tot 18:00.&rdquo;
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Heeft je website een aanvraag- of boekingsformulier, link er dan
            rechtstreeks naartoe. Elke minuut die de klant kwijt is aan
            uitzoeken hoe hij je bereikt, is een minuut waarin hij je concurrent
            kan bereiken. Een beloofde reactietijd moet wel kloppen voor jouw
            bedrijf.
          </p>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Jouw volgende stap</legend>
            <div className="font-sans text-sm font-semibold text-[#1F2937]">
              Type actie
            </div>
            <div className="mt-2.5 flex flex-col gap-2">
              <label className={CHECK_LABEL_CLS}>
                <input
                  type="radio"
                  name="cta-type"
                  checked={ctaType === "offerte"}
                  onChange={() => setCtaType("offerte")}
                  className={CHECK_CLS}
                />{" "}
                Offerte aanvragen
              </label>
              <label className={CHECK_LABEL_CLS}>
                <input
                  type="radio"
                  name="cta-type"
                  checked={ctaType === "huisbezoek"}
                  onChange={() => setCtaType("huisbezoek")}
                  className={CHECK_CLS}
                />{" "}
                Gratis huisbezoek plannen
              </label>
              <label className={CHECK_LABEL_CLS}>
                <input
                  type="radio"
                  name="cta-type"
                  checked={ctaType === "bellen"}
                  onChange={() => setCtaType("bellen")}
                  className={CHECK_CLS}
                />{" "}
                Bellen
              </label>
            </div>
            <label className={LABEL_CLS}>Jouw concrete regel</label>
            <input
              value={fields.ctaLine}
              onChange={setField("ctaLine")}
              placeholder="Bijv. Vraag een offerte aan — we reageren binnen vier uur."
              className={INPUT_CLS}
            />
            <div className="mt-4 rounded-xl border border-[#EEF0F4] bg-white p-4">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Voorbeeld &mdash; einde van je over-ons-pagina
              </div>
              <div className="mt-2.5 font-sans text-[15px] leading-6 text-[#1F2937]">
                Klaar om verder te gaan?
              </div>
              <div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-[10px] bg-[#6F4CF5] px-4.5 py-2.5 font-sans text-sm font-semibold text-white">
                {ctaPreview}
              </div>
            </div>
            <StepButtons
              status={status[6] ?? ""}
              onToggle={(v) => toggleStatus(6, v)}
            />
          </fieldset>

          <p className="mt-6.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Hoe deze zes stappen samen uitpakken, zie je het best in de
            praktijk.
          </p>

          <div
            ref={outlineRef}
            className="mt-8.5 w-full scroll-mt-24 rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.6px] text-[#6F4CF5]">
                  Jouw opzet
                </div>
                <p className="mt-1.5 max-w-[420px] font-sans text-sm leading-[22px] text-[#1F2937]">
                  Zet je ingevulde velden om in een gestructureerde opzet voor
                  je over-ons-pagina. Alles blijft lokaal in je browser.
                </p>
              </div>
              <button
                type="button"
                onClick={handleShowOutline}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[10px] bg-[#6F4CF5] px-4.5 font-sans text-sm font-semibold text-white"
              >
                Toon mijn opzet
              </button>
            </div>
            {showOutline && (
              <div className="mt-4.5 rounded-xl border border-[#E6E8EF] bg-white p-5">
                <pre className="m-0 whitespace-pre-wrap font-sans text-sm leading-[23px] text-[#1F2937]">
                  {outlineText}
                </pre>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={copyOutline}
                    className="inline-flex min-h-10 cursor-pointer items-center rounded-lg border border-[#E6E8EF] bg-white px-3.5 font-sans text-[13px] font-semibold text-[#1F2937]"
                  >
                    {copyLabel}
                  </button>
                  <button
                    type="button"
                    onClick={printOutline}
                    className="inline-flex min-h-10 cursor-pointer items-center rounded-lg border border-[#E6E8EF] bg-white px-3.5 font-sans text-[13px] font-semibold text-[#1F2937]"
                  >
                    Print
                  </button>
                </div>
                <p className="mt-4 font-sans text-[13px] leading-5 text-[#6B7280]">
                  Dit is een werkconcept. Controleer alles op waarheid, actuele
                  certificeringsgegevens en privacy vóór je het publiceert. Er
                  zijn geen gegevens geverifieerd.
                </p>
              </div>
            )}
            <div className="mt-4 border-t border-[#E4DCFB] pt-3.5">
              <button
                type="button"
                onClick={resetAll}
                className="min-h-11 cursor-pointer border-0 bg-transparent px-0 font-sans text-sm font-semibold text-[#6B7280]"
              >
                Wis mijn concept
              </button>
            </div>
          </div>
        </div>
      </section>

      {showFooter && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E6E8EF] bg-white/95 backdrop-blur print:hidden">
          <div className="mx-auto flex w-full flex-wrap items-center gap-4 px-6 py-3">
            <span className="font-sans text-[13px] font-semibold text-[#1F2937]">
              {currentStep ? `Stap ${currentStep} van 6` : "Schrijfwerkplaats"}
            </span>
            <div
              className="flex items-center gap-1.5"
              aria-label="Voortgang per stap"
            >
              {dots.map((d, i) => (
                <span
                  key={i}
                  className="size-2.5 rounded-full"
                  style={{ background: d.bg }}
                />
              ))}
            </div>
            <div className="flex-1" />
            <button
              type="button"
              onClick={handleShowOutline}
              className="inline-flex min-h-10 cursor-pointer items-center rounded-[9px] bg-[#6F4CF5] px-4 font-sans text-[13px] font-semibold text-white"
            >
              Toon mijn opzet
            </button>
            <button
              type="button"
              onClick={() => setShowFooter(false)}
              aria-label="Werkbalk verbergen"
              className="flex size-10 cursor-pointer items-center justify-center rounded-[9px] border border-[#E6E8EF] bg-white text-[#6B7280]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
