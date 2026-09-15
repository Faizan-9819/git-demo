"use client";

import { useEffect, useRef, useState } from "react";

type CheckState = "ok" | "problem" | null;

type StepDef = {
  title: string;
  text: string;
  stopwatch?: boolean;
};

const STEP_DEFS: StepDef[] = [
  {
    title: "Open je site op je telefoon",
    text: "Typ je webadres rechtstreeks in de browser, geen opgeslagen bladwijzer. Klok hoe lang het duurt tot de pagina volledig geladen is. Meer dan drie seconden: dat is je eerste probleem.",
    stopwatch: true,
  },
  {
    title: "Zoek het telefoonnummer zonder te scrollen",
    text: "Zie je, zonder de pagina te bewegen, een duidelijk tikbare belknop of telefoonnummer? Zo niet, dan is dat probleem twee.",
  },
  {
    title: "Probeer de lopende tekst te lezen",
    text: "Houd de telefoon op normale afstand. Kun je de tekst lezen zonder in te zoomen of te turen? Moet je knijpen om te vergroten, dan zijn de letters te klein.",
  },
  {
    title: "Tik het hoofdmenu aan",
    text: "Open het menu en probeer elk item aan te tikken. Zitten links te dicht op elkaar en tik je mis, dan zijn de tikvlakken te klein of te vol geplaatst.",
  },
  {
    title: "Probeer een aanvraag te versturen",
    text: "Zoek het contact- of aanvraagformulier en tel de velden. Meer dan vier velden op mobiel is te veel. Vul het in — bedekt het toetsenbord het veld waarin je typt, dan is er een indelingsprobleem.",
  },
  {
    title: "Let op pop-ups en overlappende vensters",
    text: "Kwam er onderweg iets over het scherm heen? Een nieuwsbriefmelding, een cookiemuur die het halve scherm inneemt, een chatballon die de belknop bedekt? Elk daarvan kost je aanvragen.",
  },
  {
    title: "Ververs de pagina en klok opnieuw",
    text: "Laad de pagina opnieuw en klok nog een keer. Een pagina die ook de tweede keer traag laadt, heeft een dieper snelheidsprobleem — niet alleen een cache-kwestie.",
    stopwatch: true,
  },
];

const STORAGE_KEY = "gr-mobileaudit-practical-guide-nl-v1";

function Stopwatch({ id }: { id: number }) {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);
  const t0 = useRef(0);
  const raf = useRef<number | null>(null);
  const msRef = useRef(0);

  const tick = () => {
    const t = msRef.current + (running ? performance.now() - t0.current : 0);
    setMs(t);
    if (running) raf.current = requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    setRunning(true);
    t0.current = performance.now();
  };
  const stop = () => {
    if (!running) return;
    msRef.current += performance.now() - t0.current;
    setRunning(false);
    if (raf.current) cancelAnimationFrame(raf.current);
  };
  const reset = () => {
    setRunning(false);
    msRef.current = 0;
    setMs(0);
    if (raf.current) cancelAnimationFrame(raf.current);
  };

  useEffect(() => {
    if (running) {
      raf.current = requestAnimationFrame(tick);
    }
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <div className="mt-3.5 flex flex-wrap items-center gap-2.5 rounded-[11px] border border-[#EEF0F4] bg-[#F8F9FC] px-3 py-2.5">
      <span className="inline-flex items-center gap-1.5 font-poppins text-xs font-semibold text-[#6B7280]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6F4CF5" strokeWidth="2" strokeLinecap="round">
          <path d="M12 8v4l2.5 1.5" />
          <circle cx="12" cy="13" r="8" />
          <path d="M9 2h6" />
        </svg>
        Handmatige stopwatch
      </span>
      <span className="min-w-[52px] font-poppins text-base font-bold tabular-nums text-[#111827]">
        {(ms / 1000).toFixed(1)} s
      </span>
      <span className="ml-auto inline-flex gap-1.5">
        <button
          type="button"
          onClick={start}
          className="min-h-9 rounded-lg bg-[#6F4CF5] px-3.5 font-poppins text-[13px] font-semibold text-white"
        >
          Start
        </button>
        <button
          type="button"
          onClick={stop}
          className="min-h-9 rounded-lg border border-[#E6E8EF] bg-white px-3.5 font-poppins text-[13px] font-semibold text-[#374151]"
        >
          Stop
        </button>
        <button
          type="button"
          onClick={reset}
          className="min-h-9 rounded-lg border border-[#E6E8EF] bg-white px-3 font-poppins text-[13px] font-semibold text-[#6B7280]"
        >
          Reset
        </button>
      </span>
      <span className="basis-full font-poppins text-[11px] text-[#9AA1AC]" id={`sw-hint-${id}`}>
        Hulpmiddel om zelf te klokken — geen automatische snelheidsmeting.
      </span>
    </div>
  );
}

export default function AuditTool() {
  const [checks, setChecks] = useState<CheckState[]>(() => new Array(7).fill(null));
  const [hydrated, setHydrated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (Array.isArray(saved) && saved.length === 7) setChecks(saved);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
    } catch {
      /* ignore */
    }
  }, [checks, hydrated]);

  const setCheck = (i: number, val: "ok" | "problem") => {
    setChecks((prev) => {
      const next = prev.slice();
      next[i] = next[i] === val ? null : val;
      return next;
    });
  };

  const resetTest = () => {
    setChecks(new Array(7).fill(null));
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const answered = checks.filter((c) => c !== null).length;
  const complete = answered === 7;
  const failedIdx = checks.reduce<number[]>((acc, c, i) => {
    if (c === "problem") acc.push(i);
    return acc;
  }, []);
  const failedCount = failedIdx.length;
  const high = failedCount > 2;

  let resultHeading = "";
  let resultBody = "";
  if (complete) {
    if (failedCount === 0) {
      resultHeading = "Geen problemen gevonden";
      resultBody =
        "Je site komt door alle zeven controles. Dat betekent niet dat de site objectief perfect is — houd de belknop, de laadtijd en de leesbaarheid in de gaten bij elke wijziging.";
    } else if (high) {
      resultHeading = "Je mobiele site kost je waarschijnlijk klanten";
      resultBody =
        "Meer dan twee controles gaan mis. Je mobiele site kost je op dit moment klanten — geruisloos, elke week opnieuw. Begin met de zwaarst wegende drempels hieronder.";
    } else {
      resultHeading = "Pak eerst de zwaarste drempel aan";
      resultBody =
        "Je site komt door de meeste controles. Repareer eerst de zwaarst wegende drempel die je hebt gevonden. Dat betekent niet dat de site perfect is — het betekent dat de grootste lekken als eerste gedicht worden.";
    }
  }

  const resultBorder = high ? "#F5D9B0" : failedCount === 0 ? "#B8E4CD" : "#E6E0FB";
  const resultBg = high ? "#FEFAF4" : failedCount === 0 ? "#F6FCF9" : "#FBFAFF";
  const resultIconBg = high ? "#E08A1E" : failedCount === 0 ? "#22A06B" : "#6F4CF5";

  const progressText = `${answered} van 7 gecontroleerd`;
  const progressPct = Math.round((answered / 7) * 100);

  return (
    <div ref={sectionRef}>
      <figure
        role="img"
        aria-label="Mobiele controle van een elektricienwebsite in zeven stappen, van laadtijd tot aanvraagformulier"
        className="m-0 mt-6 overflow-hidden rounded-[20px] border border-[#E6E0FB] bg-white shadow-[0_10px_34px_rgba(111,76,245,0.08)]"
      >
        <div className="border-b border-[#E6E0FB] bg-[#F4F1FE] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-1 font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#6F4CF5]">
                Mini-tool · 10 min
              </div>
              <div className="font-poppins text-lg font-bold text-[#111827] sm:text-xl">
                De mobiele check in 7 stappen
              </div>
            </div>
            <div className="min-w-[150px]">
              <div
                role="status"
                aria-live="polite"
                className="mb-1.5 font-poppins text-sm font-semibold text-[#3B2E63]"
                dangerouslySetInnerHTML={{ __html: progressText }}
              />
              <div className="h-2 overflow-hidden rounded-full bg-[#E6E0FB]">
                <div
                  className="h-full rounded-full bg-[#6F4CF5] transition-[width] duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
          <p className="mt-3.5 font-poppins text-[13px] leading-[1.5] text-[#7A7488]">
            Handmatige controle op je eigen telefoon. Er wordt niets gescand, geen URL of gegevens verzameld of
            verstuurd — je antwoorden blijven alleen in deze browser bewaard.
          </p>
        </div>

        <ol className="m-0 list-none p-4 sm:p-5">
          {STEP_DEFS.map((step, i) => {
            const st = checks[i];
            const okSel = st === "ok";
            const probSel = st === "problem";
            const borderColor = okSel ? "#B8E4CD" : probSel ? "#F5D9B0" : "#EEF0F4";
            const bg = okSel ? "#F6FCF9" : probSel ? "#FEFAF4" : "#fff";
            const numBg = st ? (okSel ? "#22A06B" : "#E08A1E") : "#F4F1FE";
            const numColor = st ? "#fff" : "#6F4CF5";
            const statusText = okSel ? "Gemarkeerd als in orde" : probSel ? "Gemarkeerd als probleem gevonden" : "Nog niet gecontroleerd";
            const statusColor = okSel ? "#116B45" : probSel ? "#8A5310" : "#9AA1AC";

            return (
              <li
                key={step.title}
                className="mb-3 rounded-2xl border p-4 transition-colors sm:p-5"
                style={{ borderColor, background: bg }}
              >
                <div className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="flex size-8 flex-none items-center justify-center rounded-[9px] font-poppins text-[15px] font-bold"
                    style={{ background: numBg, color: numColor }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1.5 font-poppins text-base font-bold leading-[1.3] text-[#111827] sm:text-lg">
                      Stap {i + 1}: <span dangerouslySetInnerHTML={{ __html: step.title }} />
                    </h3>
                    <p
                      className="m-0 font-poppins text-[15px] leading-[1.55] text-[#4B5563]"
                      dangerouslySetInnerHTML={{ __html: step.text }}
                    />

                    {step.stopwatch && <Stopwatch id={i} />}

                    <div role="group" aria-label={`Beoordeel stap ${i + 1}`} className="mt-3.5 flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setCheck(i, "ok")}
                        aria-pressed={okSel}
                        className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border-[1.5px] px-4 font-poppins text-sm font-semibold transition-colors"
                        style={
                          okSel
                            ? { background: "#EAF7F0", borderColor: "#22A06B", color: "#116B45" }
                            : { background: "#fff", borderColor: "#E6E8EF", color: "#374151" }
                        }
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        In orde
                      </button>
                      <button
                        type="button"
                        onClick={() => setCheck(i, "problem")}
                        aria-pressed={probSel}
                        className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border-[1.5px] px-4 font-poppins text-sm font-semibold transition-colors"
                        style={
                          probSel
                            ? { background: "#FDF3E7", borderColor: "#E08A1E", color: "#8A5310" }
                            : { background: "#fff", borderColor: "#E6E8EF", color: "#374151" }
                        }
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 8v5" />
                          <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
                          <path d="M10.3 3.6 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
                        </svg>
                        Probleem gevonden
                      </button>
                      <span
                        className="font-poppins text-[13px] font-semibold"
                        style={{ color: statusColor }}
                        dangerouslySetInnerHTML={{ __html: statusText }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {complete && (
          <div
            role="status"
            aria-live="polite"
            className="mx-4 mb-5 rounded-2xl border p-5 sm:mx-5 sm:mb-5 sm:p-6"
            style={{ borderColor: resultBorder, background: resultBg }}
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span
                className="flex size-[38px] items-center justify-center rounded-[10px] text-white"
                style={{ background: resultIconBg }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v5" />
                  <circle cx="12" cy="16.6" r="0.7" fill="currentColor" stroke="none" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div
                className="font-poppins text-lg font-bold text-[#111827] sm:text-xl"
                dangerouslySetInnerHTML={{ __html: resultHeading }}
              />
            </div>
            <p
              className="mb-3.5 font-poppins text-base leading-[1.55] text-[#374151]"
              dangerouslySetInnerHTML={{ __html: resultBody }}
            />
            {failedCount > 0 && (
              <div className="mb-4">
                <div className="mb-2 font-poppins text-[13px] font-bold tracking-[0.03em] text-[#8A5310]">
                  Gevonden problemen ({failedCount})
                </div>
                <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                  {failedIdx.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-poppins text-[15px] text-[#4B5563]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E08A1E" strokeWidth="2.4" strokeLinecap="round" className="mt-0.5 flex-none">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                      <span>
                        Stap {i + 1}: <span dangerouslySetInnerHTML={{ __html: STEP_DEFS[i].title }} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              type="button"
              onClick={resetTest}
              className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-[#C5B7FB] bg-white px-5 font-poppins text-[15px] font-semibold text-[#5A3CE0]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Test opnieuw
            </button>
          </div>
        )}
      </figure>
    </div>
  );
}
