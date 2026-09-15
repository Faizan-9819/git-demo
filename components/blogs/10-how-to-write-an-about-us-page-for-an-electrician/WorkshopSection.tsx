"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type StepStatus = "read" | "ready" | "";
type TeamMember = { id: string; name: string; role: string; context: string };
type CtaType = "" | "quote" | "visit" | "call";

type Fields = {
  storyWhy: string;
  storyLike: string;
  certOther: string;
  certReview: string;
  valPunctTxt: string;
  valCleanTxt: string;
  valPriceTxt: string;
  valHonestTxt: string;
  valCommTxt: string;
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
  certUneto: boolean;
  certVca: boolean;
  certNen: boolean;
  certSpec: boolean;
  certIns: boolean;
  valPunct: boolean;
  valClean: boolean;
  valPrice: boolean;
  valHonest: boolean;
  valComm: boolean;
};

const STORAGE_KEY = "gr_aboutus_electrician_en_v1";

const DEFAULT_FIELDS: Fields = {
  storyWhy: "",
  storyLike: "",
  certOther: "",
  certReview: "",
  valPunctTxt: "",
  valCleanTxt: "",
  valPriceTxt: "",
  valHonestTxt: "",
  valCommTxt: "",
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
  certUneto: false,
  certVca: false,
  certNen: false,
  certSpec: false,
  certIns: false,
  valPunct: false,
  valClean: false,
  valPrice: false,
  valHonest: false,
  valComm: false,
};

const CTA_MAP: Partial<Record<CtaType, string>> = {
  quote: "Request a quote — we reply within four hours.",
  visit: "Book a free home visit.",
  call: "Call us on [number] — Monday to Friday, 8:00 to 18:00.",
};

const CTA_TYPE_LABELS: Partial<Record<CtaType, string>> = {
  quote: "Request a quote",
  visit: "Book a free home visit",
  call: "Call",
};

const CERT_ITEMS: Array<{ key: keyof Checks; label: string }> = [
  { key: "certKvk", label: "KvK number" },
  { key: "certBtw", label: "BTW number" },
  { key: "certTn", label: "Techniek Nederland" },
  { key: "certUneto", label: "UNETO-VNI" },
  { key: "certVca", label: "VCA" },
  { key: "certNen", label: "NEN 1010 / NEN 3140" },
  { key: "certSpec", label: "Specialist accreditations" },
  { key: "certIns", label: "Liability insurance" },
];

const VALUE_ROWS: Array<{
  adjective: string;
  promise: string;
  checkKey: keyof Checks;
  textKey: keyof Fields;
  placeholder: string;
}> = [
  {
    adjective: "Punctuality",
    promise:
      "“We arrive within the agreed time window or we call you in advance.”",
    checkKey: "valPunct",
    textKey: "valPunctTxt",
    placeholder:
      "We arrive within the agreed time window or we call you in advance.",
  },
  {
    adjective: "Cleanliness",
    promise:
      "“We use shoe covers and dust sheets. We clean up before we leave.”",
    checkKey: "valClean",
    textKey: "valCleanTxt",
    placeholder:
      "We use shoe covers and dust sheets. We clean up before we leave.",
  },
  {
    adjective: "Transparent pricing",
    promise: "“You get a fixed quote before we start. No surprise charges.”",
    checkKey: "valPrice",
    textKey: "valPriceTxt",
    placeholder: "You get a fixed quote before we start. No surprise charges.",
  },
  {
    adjective: "Honest advice",
    promise: "“If a repair is cheaper than a replacement, we will tell you.”",
    checkKey: "valHonest",
    textKey: "valHonestTxt",
    placeholder: "If a repair is cheaper than a replacement, we will tell you.",
  },
  {
    adjective: "Communication",
    promise:
      "“We answer the phone or call back within two hours during business hours.”",
    checkKey: "valComm",
    textKey: "valCommTxt",
    placeholder:
      "We answer the phone or call back within two hours during business hours.",
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
    label: "KvK registration",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  { label: "NEN 1010 / 3140", icon: <path d="M4 7h16M4 12h16M4 17h10" /> },
  { label: "EV charger cert.", icon: <path d="M13 2L3 14h7l-1 8 10-12h-7z" /> },
  {
    label: "Liability insurance",
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
        Step {n} of 6
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
        Read
      </button>
      <button
        type="button"
        onClick={() => onToggle("ready")}
        aria-pressed={status === "ready"}
        className={status === "ready" ? READY_ON : BASE_BTN}
      >
        Ready for my page
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
  const [copyLabel, setCopyLabel] = useState("Copy");
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
    const ids = ["step-1", "step-2", "step-3", "step-4", "step-5", "step-6"];
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

  const ctaPreview = fields.ctaLine.trim() || CTA_MAP[ctaType] || CTA_MAP.quote;

  function buildOutlineText(): string {
    const L: string[] = [];
    L.push("ABOUT US PAGE — WORKING DRAFT");
    L.push(
      "Working draft. Check for accuracy, current certifications, and privacy before publishing.",
    );
    L.push("");
    L.push("1. ORIGIN STORY");
    L.push(fields.storyWhy.trim() || "—");
    if (fields.storyLike.trim())
      L.push("Favourite work: " + fields.storyLike.trim());
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
    L.push("3. CERTIFICATIONS AND MEMBERSHIPS");
    let anyCert = false;
    CERT_ITEMS.forEach(({ key, label }) => {
      if (checks[key]) {
        L.push("- " + label);
        anyCert = true;
      }
    });
    if (fields.certOther.trim()) {
      L.push("- Other: " + fields.certOther.trim());
      anyCert = true;
    }
    if (!anyCert) L.push("—");
    if (fields.certReview.trim())
      L.push("Review before: " + fields.certReview.trim());
    L.push("");
    L.push("4. VALUES (PROMISES)");
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
    L.push("5. PERSONAL NOTE FROM THE FOUNDER");
    const { fName, fWhy, fOne, fCommit } = fields;
    if (fName.trim()) L.push("Name: " + fName.trim());
    if (fWhy.trim()) L.push(fWhy.trim());
    if (fOne.trim()) L.push("Want customers to know: " + fOne.trim());
    if (fCommit.trim()) L.push("Commitment: " + fCommit.trim());
    if (!fName.trim() && !fWhy.trim() && !fOne.trim() && !fCommit.trim())
      L.push("—");
    L.push("");
    L.push("6. NEXT STEP");
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
    setCopyLabel("Copied");
    setTimeout(() => setCopyLabel("Copy"), 1600);
  }

  function printOutline() {
    const w = window.open("", "_blank", "width=760,height=900");
    if (!w) return;
    const escaped = outlineText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    w.document.write(
      `<!doctype html><html><head><title>About Us page — working draft</title></head><body style="font-family:Inter,Arial,sans-serif;padding:32px;color:#1F2937;"><h1 style="font-size:20px;margin:0 0 16px;">About Us page — working draft</h1><pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;line-height:22px;">${escaped}</pre></body></html>`,
    );
    w.document.close();
    w.focus();
    w.print();
  }

  function resetAll() {
    if (
      typeof window !== "undefined" &&
      !window.confirm("Clear your entire draft? This cannot be undone.")
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
            Writing workshop
          </div>
          <p className="mt-2 font-sans text-base leading-[25px] text-[#1F2937]">
            Each step comes with a private workspace where you can draft your
            own copy. Everything stays in your browser &mdash; nothing is sent
            anywhere, and you never need an email address or account. The fields
            are optional; the article works fully without them.
          </p>
        </div>
      </section>

      {/* STEP 1 */}
      <section id="step-1" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={1} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Step 1: write a short, honest origin story
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Start with why the business exists. Not the corporate version
            &mdash; the real one.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            The mistake most electricians make is writing something like
            &ldquo;Founded in 2008, we have grown to become one of the leading
            electrical contractors in the region.&rdquo; That tells the customer
            nothing. It sounds like every other website.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Instead, answer two questions:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>Why did you start this business?</li>
            <li>What kind of work do you actually enjoy doing?</li>
          </ul>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Keep it to 80&ndash;150 words. One short paragraph, written like you
            would explain it to a neighbour over coffee.
          </p>

          <div className="mt-7.5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <figure className="m-0 rounded-[14px] border border-[#E6E8EF] bg-white p-4.5">
              <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Weak version
              </figcaption>
              <blockquote className="m-0 mt-2.5 font-sans text-[16px] italic leading-[26px] text-[#6B7280]">
                &ldquo;ABC Elektrotechniek is a full-service electrical
                contractor providing comprehensive solutions to residential and
                commercial clients across the Netherlands.&rdquo;
              </blockquote>
            </figure>
            <figure className="m-0 rounded-[14px] border border-[#E4DCFB] bg-[#F4F1FE] p-4.5">
              <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
                Stronger version
              </figcaption>
              <blockquote className="m-0 mt-2.5 font-sans text-[16px] leading-[26px] text-[#1F2937]">
                &ldquo;I started ABC Elektrotechniek in 2014 after ten years
                working for a large installation company. I kept seeing the same
                problem: customers waiting weeks for a quote, then waiting weeks
                more for the work. I wanted to run a small team that shows up on
                time, leaves the house clean, and answers the phone when you
                call. That is still how we work today.&rdquo;
              </blockquote>
            </figure>
          </div>
          <p className="mt-5 font-sans text-base leading-[26px] text-[#6B7280]">
            Notice the second version names the founder, gives a real reason,
            and sets expectations the customer can hold you to.
          </p>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Your origin story</legend>
            <label className="block font-sans text-sm font-semibold text-[#1F2937]">
              Why did you start this business?
            </label>
            <textarea
              value={fields.storyWhy}
              onChange={setField("storyWhy")}
              placeholder="Write it like you would tell a neighbour…"
              className={TEXTAREA_CLS}
              style={{ minHeight: 120 }}
            />
            <label className={LABEL_CLS}>
              What kind of work do you enjoy most?
            </label>
            <textarea
              value={fields.storyLike}
              onChange={setField("storyLike")}
              placeholder="e.g. replacing old fuse boxes, fitting EV chargers…"
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
                {wordCount(fields.storyWhy)}{" "}
                {wordCount(fields.storyWhy) === 1 ? "word" : "words"}
              </span>
              <span>
                &middot; aim for 80&ndash;150 words (you can still save outside
                that range)
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
                  Founder named
                </label>
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkReason}
                    onChange={setCheck("chkReason")}
                    className={CHECK_CLS}
                  />{" "}
                  Real reason included
                </label>
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkWork}
                    onChange={setCheck("chkWork")}
                    className={CHECK_CLS}
                  />{" "}
                  Preferred work specified
                </label>
                <label className={CHECK_LABEL_CLS}>
                  <input
                    type="checkbox"
                    checked={checks.chkExpect}
                    onChange={setCheck("chkExpect")}
                    className={CHECK_CLS}
                  />{" "}
                  Customer expectation made concrete
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

      {/* STEP 2 */}
      <section id="step-2" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={2} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Step 2: show the team with names and photos
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Stock photos of unnamed electricians in clean uniforms hurt your
            credibility. Customers can spot them instantly, and they signal
            exactly the kind of fly-by-night operation people are trying to
            avoid.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            A team page tradesperson visitors can trust includes:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>
              A real photo of each team member (in your actual uniform, in a
              real setting)
            </li>
            <li>
              First name and role (Pieter &mdash; Senior Electrician, Sara
              &mdash; Apprentice, etc.)
            </li>
            <li>
              One short line of context per person (&ldquo;12 years in
              residential work&rdquo; or &ldquo;Specialises in EV charger
              installations&rdquo;)
            </li>
          </ul>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            If you are a solo electrician, this still applies. One clear photo
            of you, your name, and your role. Customers want to know who is
            showing up at their door.
          </p>

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Example layout
              </div>
              <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
                Illustrative &mdash; not real people
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
                    Senior Electrician
                  </div>
                  <div className="mt-0.5 font-sans text-[12.5px] text-[#9AA1AC]">
                    12 years in residential work
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
                    Apprentice
                  </div>
                  <div className="mt-0.5 font-sans text-[12.5px] text-[#9AA1AC]">
                    Specialises in EV charger installations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Your team</legend>
            <p className="m-0 mb-1 font-sans text-[13px] text-[#6B7280]">
              Add team members with a first name, role, and one line of context.
              No photo upload needed; if you work alone, one line about yourself
              is enough.
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
                    placeholder="First name"
                    className="min-w-[120px] flex-1 rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                  />
                  <input
                    value={member.role}
                    onChange={(e) =>
                      updateTeamMember(member.id, "role", e.target.value)
                    }
                    placeholder="Role (e.g. Senior Electrician)"
                    className="min-w-[120px] flex-1 rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                  />
                </div>
                <input
                  value={member.context}
                  onChange={(e) =>
                    updateTeamMember(member.id, "context", e.target.value)
                  }
                  placeholder="One line of context (e.g. 12 years in residential work)"
                  className="mt-2.5 w-full rounded-[9px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-sm text-[#1F2937] placeholder:text-[#9AA1AC] focus:border-[#6F4CF5] focus:outline-none"
                />
                <div className="mt-2.5 text-right">
                  <button
                    type="button"
                    onClick={() => removeTeamMember(member.id)}
                    className="min-h-11 cursor-pointer border-0 bg-transparent px-1 font-sans text-[13px] font-semibold text-[#B4741A]"
                  >
                    Remove
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
              Add team member
            </button>
            <StepButtons
              status={status[2] ?? ""}
              onToggle={(v) => toggleStatus(2, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STEP 3 */}
      <section id="step-3" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={3} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Step 3: list your certifications and memberships clearly
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            This is where you remove doubt. Most electricians have the
            credentials but bury them in a footer or skip them entirely.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Put them in a clear, scannable block on the About page. Include:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>KvK (Chamber of Commerce) number</li>
            <li>BTW number</li>
            <li>Trade memberships (Techniek Nederland, UNETO-VNI, etc.)</li>
            <li>Safety certifications (VCA, NEN 1010, NEN 3140)</li>
            <li>
              Specialist accreditations (Solar Keymark, EV charger installer
              certification, manufacturer partnerships)
            </li>
            <li>Insurance details (general liability cover)</li>
          </ul>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            You do not need to explain each one in detail. A simple list with
            logos where possible is enough. Customers who care about a specific
            certification will recognise it. Customers who do not care will
            still see a long list and feel reassured.
          </p>

          <figure
            role="img"
            aria-label="Trust badges showing Techniek Nederland membership, VCA certification, KvK registration, and insurance coverage for an electrical company"
            className="m-0 mt-7"
          >
            <div className="flex items-center justify-between">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Example badge block
              </div>
              <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
                Illustrative &mdash; not verified
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
              Example only. Show only certifications, memberships, and insurance
              you genuinely and currently hold.
            </figcaption>
          </figure>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Your certifications</legend>
            <p className="m-0 mb-3 font-sans text-[13px] text-[#6B7280]">
              Tick what you genuinely and currently hold. No documents or
              certificate numbers needed.
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
            <label className={LABEL_CLS}>Other</label>
            <input
              value={fields.certOther}
              onChange={setField("certOther")}
              placeholder="e.g. Solar Keymark, manufacturer partnership…"
              className={INPUT_CLS}
            />
            <label className={LABEL_CLS}>Review before</label>
            <input
              value={fields.certReview}
              onChange={setField("certReview")}
              placeholder="e.g. January 2027 — check validity"
              className={INPUT_CLS}
            />
            <StepButtons
              status={status[3] ?? ""}
              onToggle={(v) => toggleStatus(3, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STEP 4 */}
      <section id="step-4" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={4} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Step 4: write down the values customers actually care about
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            &ldquo;Quality, integrity, and excellence&rdquo; mean nothing. Every
            business claims them. Customers tune them out.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            The values that move a customer from undecided to booking are the
            ones tied to specific frustrations they have had with other
            electricians. Write each as a promise, not an adjective.
          </p>

          <div className="mt-6.5">
            <div className="grid grid-cols-[150px_1fr] pb-2 font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              <div>Adjective</div>
              <div className="pl-4">The promise</div>
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
              A promise is something the customer can hold you to. An adjective
              is just marketing.
            </p>
          </blockquote>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Your promises</legend>
            <p className="m-0 mb-3 font-sans text-[13px] text-[#6B7280]">
              Pick three or four and edit them so they are true for your
              business. Only promise what you can genuinely deliver.
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

      {/* STEP 5 */}
      <section id="step-5" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={5} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Step 5: add a personal note from the founder
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            This is the section most electricians skip, and it is the one that
            does the most work.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            A short founder note (100&ndash;150 words) gives the customer a face
            to associate with the business. Even if you have a team of ten,
            customers want to know who is in charge.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Include:
          </p>
          <ul className="mt-3.5 list-disc pl-[22px] font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            <li>Your name and a real photo (not a logo)</li>
            <li>Why you take this work personally</li>
            <li>One thing you want every customer to know</li>
            <li>A signature (handwritten if possible)</li>
          </ul>

          <figure className="m-0 mt-7 rounded-2xl border border-[#E6E8EF] bg-white p-6.5">
            <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              Example &mdash; founder note
            </figcaption>
            <div className="mt-3.5 flex items-start gap-4.5">
              <div className="flex size-16 flex-none items-center justify-center rounded-2xl bg-[#EDE9FB] font-sans text-2xl font-bold text-[#6F4CF5]">
                M
              </div>
              <blockquote className="m-0 text-pretty font-sans text-[17px] leading-7 text-[#1F2937]">
                &ldquo;Hi, I&rsquo;m Marco. I have been an electrician for 18
                years. The reason I run this business the way I do is simple
                &mdash; my own father was once overcharged for a small fuse box
                repair, and it stuck with me. Every quote we send is one I would
                be comfortable giving to my own family. If something is wrong
                with the work we do, call me directly and I will make it
                right.&rdquo;
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
            That paragraph tells the customer more than a polished company
            history ever will.
          </p>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Your founder note</legend>
            <label className="block font-sans text-sm font-semibold text-[#1F2937]">
              Your name
            </label>
            <input
              value={fields.fName}
              onChange={setField("fName")}
              placeholder="e.g. Marco van der Berg"
              className={INPUT_CLS}
            />
            <label className={LABEL_CLS}>
              Why do you take this work personally?
            </label>
            <textarea
              value={fields.fWhy}
              onChange={setField("fWhy")}
              className={TEXTAREA_CLS}
              style={{ minHeight: 110 }}
            />
            <label className={LABEL_CLS}>
              One thing you want every customer to know
            </label>
            <input
              value={fields.fOne}
              onChange={setField("fOne")}
              className={INPUT_CLS}
            />
            <label className={LABEL_CLS}>A personal commitment</label>
            <input
              value={fields.fCommit}
              onChange={setField("fCommit")}
              placeholder="e.g. If something is wrong, call me directly."
              className={INPUT_CLS}
            />
            <div className="mt-2.5 flex items-center gap-2 font-sans text-[13px] text-[#9AA1AC]">
              <span
                className="font-semibold"
                style={{ color: countColor(wordCount(fields.fWhy), 100, 150) }}
              >
                {wordCount(fields.fWhy)}{" "}
                {wordCount(fields.fWhy) === 1 ? "word" : "words"}
              </span>
              <span>
                &middot; aim for 100&ndash;150 words. A typed name is fine
                &mdash; no signature upload needed.
              </span>
            </div>
            <StepButtons
              status={status[5] ?? ""}
              onToggle={(v) => toggleStatus(5, v)}
            />
          </fieldset>
        </div>
      </section>

      {/* STEP 6 */}
      <section id="step-6" className="scroll-mt-24">
        <div className="w-full">
          <StepEyebrow n={6} />
          <h2 className="mt-3.5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
            Step 6: end with a clear next step
          </h2>
          <p className="mt-6 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            The About page is not the end of the journey. It is the moment the
            customer decides whether to take the next step. Make it obvious what
            that step is.
          </p>
          <p className="mt-5.5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            Avoid vague phrases like &ldquo;Get in touch.&rdquo; Use a specific,
            low-friction action:
          </p>

          <div className="mt-6.5 grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[14px] border border-[#E6E8EF] bg-white p-4.5">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Vague
              </div>
              <p className="m-0 mt-2.5 font-sans text-[17px] leading-[26px] text-[#6B7280]">
                &ldquo;Get in touch&rdquo;
              </p>
            </div>
            <div className="rounded-[14px] border border-[#E4DCFB] bg-[#F4F1FE] p-4.5">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
                Specific
              </div>
              <ul className="mt-2.5 list-disc pl-5 font-sans text-base leading-[26px] text-[#1F2937]">
                <li>
                  &ldquo;Request a quote &mdash; we reply within four
                  hours.&rdquo;
                </li>
                <li>&ldquo;Book a free home visit.&rdquo;</li>
                <li>
                  &ldquo;Call us on [number] &mdash; Monday to Friday, 8:00 to
                  18:00.&rdquo;
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-5 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
            If your website has an enquiry or booking form, link to it directly.
            Every minute the customer spends figuring out how to contact you is
            a minute they might spend contacting your competitor instead. Any
            response-time promise must be true for your business.
          </p>

          <fieldset className={FIELDSET_CLS}>
            <legend className={LEGEND_CLS}>Your next step</legend>
            <div className="font-sans text-sm font-semibold text-[#1F2937]">
              Action type
            </div>
            <div className="mt-2.5 flex flex-col gap-2">
              <label className={CHECK_LABEL_CLS}>
                <input
                  type="radio"
                  name="cta-type"
                  checked={ctaType === "quote"}
                  onChange={() => setCtaType("quote")}
                  className={CHECK_CLS}
                />{" "}
                Request a quote
              </label>
              <label className={CHECK_LABEL_CLS}>
                <input
                  type="radio"
                  name="cta-type"
                  checked={ctaType === "visit"}
                  onChange={() => setCtaType("visit")}
                  className={CHECK_CLS}
                />{" "}
                Book a free home visit
              </label>
              <label className={CHECK_LABEL_CLS}>
                <input
                  type="radio"
                  name="cta-type"
                  checked={ctaType === "call"}
                  onChange={() => setCtaType("call")}
                  className={CHECK_CLS}
                />{" "}
                Call
              </label>
            </div>
            <label className={LABEL_CLS}>Your specific line</label>
            <input
              value={fields.ctaLine}
              onChange={setField("ctaLine")}
              placeholder="e.g. Request a quote — we reply within four hours."
              className={INPUT_CLS}
            />
            <div className="mt-4 rounded-xl border border-[#EEF0F4] bg-white p-4">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
                Preview &mdash; end of your About page
              </div>
              <div className="mt-2.5 font-sans text-[15px] leading-6 text-[#1F2937]">
                Ready to take the next step?
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

          <div
            ref={outlineRef}
            className="mt-8.5 w-full scroll-mt-24 rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.6px] text-[#6F4CF5]">
                  Your outline
                </div>
                <p className="mt-1.5 max-w-[420px] font-sans text-sm leading-[22px] text-[#1F2937]">
                  Turn your filled-in fields into a structured outline for your
                  About page. Everything stays local in your browser.
                </p>
              </div>
              <button
                type="button"
                onClick={handleShowOutline}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[10px] bg-[#6F4CF5] px-4.5 font-sans text-sm font-semibold text-white"
              >
                Show my outline
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
                  This is a working draft. Check everything for accuracy,
                  current certification details, and privacy before you publish.
                  Nothing here has been verified.
                </p>
              </div>
            )}
            <div className="mt-4 border-t border-[#E4DCFB] pt-3.5">
              <button
                type="button"
                onClick={resetAll}
                className="min-h-11 cursor-pointer border-0 bg-transparent px-0 font-sans text-sm font-semibold text-[#6B7280]"
              >
                Clear my draft
              </button>
            </div>
          </div>
        </div>
      </section>

      {showFooter && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E6E8EF] bg-white/95 backdrop-blur print:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-6 py-3">
            <span className="font-sans text-[13px] font-semibold text-[#1F2937]">
              {currentStep ? `Step ${currentStep} of 6` : "Writing workshop"}
            </span>
            <div
              className="flex items-center gap-1.5"
              aria-label="Progress by step"
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
              Show my outline
            </button>
            <button
              type="button"
              onClick={() => setShowFooter(false)}
              aria-label="Hide toolbar"
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
