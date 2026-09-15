"use client";

import { useEffect, useState } from "react";

const QUESTIONS = [
  "Heb ik tijd om te leren (of weet ik al) hoe je een WordPress-site beheert?",
  "Heb ik een ontwikkelaar of bureau dat ik vertrouw en maandelijks kan betalen?",
  "Heb ik maatwerkfuncties nodig die verder gaan dan een standaard dienstverlenerswebsite?",
  "Voel ik me prettig bij de verantwoordelijkheid voor beveiliging en back-ups?",
];

const STORAGE_KEY = "gr_wp_test";

type Answer = boolean | null;

export default function DecisionSection() {
  const [answers, setAnswers] = useState<Answer[]>([null, null, null, null]);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) {
        const d = JSON.parse(s);
        if (Array.isArray(d.answers)) {
          setAnswers(d.answers);
          setDone(true);
          setSaved(true);
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const curAns = answers[step];
  const jaCount = answers.filter((a) => a === true).length;
  const allAnswered = answers.every((a) => a !== null);
  const result = jaCount >= 3 ? "wordpress" : "abonnement";

  const setAns = (v: boolean) => {
    const next = answers.slice();
    next[step] = v;
    setAnswers(next);
    if (step < 3) setStep(step + 1);
  };

  const resetTest = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setAnswers([null, null, null, null]);
    setStep(0);
    setDone(false);
    setSaved(false);
  };

  const saveResult = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers }));
    } catch {
      /* ignore */
    }
    setSaved(true);
  };

  if (!hydrated) {
    return (
      <section id="beslistest" className="mt-24 scroll-mt-[88px]">
        <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Een simpele beslistest
        </h2>
        <p className="mt-4.5">
          Beantwoord vier vragen met ja of nee. De uitkomst is richtinggevend
          — geen definitief oordeel.
        </p>
        <div className="mt-6 h-[260px] rounded-[18px] border border-[#E6E8EF]" />
      </section>
    );
  }

  const review = QUESTIONS.map((q, i) => ({
    n: i + 1,
    q,
    ans: answers[i] === true ? "Ja" : answers[i] === false ? "Nee" : "—",
  }));

  const resTitle =
    result === "wordpress"
      ? "WordPress past waarschijnlijk het best"
      : "Een website-abonnement past waarschijnlijk het best";
  const resSub =
    result === "wordpress"
      ? "De flexibiliteit betaalt zich uit."
      : "Je bent sneller “live en aanvragen aan het opvangen”, met minder doorlopende last.";
  const resDeepHref = result === "wordpress" ? "#wordpress-verdiept" : "#abonnement-verdiept";
  const resDeepLabel = result === "wordpress" ? "Lees WordPress verdiept" : "Lees Abonnement verdiept";

  return (
    <section id="beslistest" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Een simpele beslistest
      </h2>
      <p className="mt-4.5">
        Beantwoord vier vragen met ja of nee. De uitkomst is richtinggevend —
        geen definitief oordeel.
      </p>

      <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E6E8EF]">
        {done ? (
          <div role="status" aria-live="polite" className="p-6.5 sm:p-7">
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
              Jouw uitkomst · {jaCount}{" "}
              van 4 keer &ldquo;ja&rdquo;
            </div>
            <div
              className="mt-2 font-sans text-2xl font-bold leading-[1.29] tracking-[-0.4px] text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: resTitle }}
            />
            <p
              className="mt-2 font-sans text-base leading-[1.56] text-[#374151]"
              dangerouslySetInnerHTML={{ __html: resSub }}
            />
            <div className="mt-4.5 flex flex-col gap-2">
              {review.map((rv) => (
                <div key={rv.n} className="flex items-start gap-3 rounded-[10px] border border-[#EEF0F4] bg-[#FBFBFD] px-3.5 py-2.5">
                  <span
                    className="mt-px flex-none rounded-md bg-[#6F4CF5] px-2 py-0.5 font-sans text-xs font-semibold text-white"
                    dangerouslySetInnerHTML={{ __html: rv.ans }}
                  />
                  <span className="font-sans text-sm leading-[1.5] text-[#374151]" dangerouslySetInnerHTML={{ __html: rv.q }} />
                </div>
              ))}
            </div>
            <p className="mt-4.5 font-sans text-[15px] leading-[1.6] text-[#374151]">
              Geen van beide antwoorden is iets om je voor te schamen. Een
              vakman die ook prettig met techniek werkt, haalt meer uit
              WordPress. Een vakman die dat liever niet doet — of zijn
              avonden waardevol vindt — haalt meer uit een abonnement.
            </p>
            <div className="mt-4.5 flex flex-wrap items-center gap-2.5">
              <a
                href={resDeepHref}
                className="inline-flex min-h-11 items-center rounded-[9px] bg-[#6F4CF5] px-4.5 font-sans text-[15px] font-semibold text-white hover:bg-[#5A3CE0]"
                dangerouslySetInnerHTML={{ __html: resDeepLabel }}
              />
              <a
                href="#randgevallen"
                className="inline-flex min-h-11 items-center rounded-[9px] border border-[#E6E8EF] bg-white px-4.5 font-sans text-[15px] font-semibold text-[#1F2937] hover:border-[#C5B7FB]"
              >
                Bekijk eerst de randgevallen
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button type="button" onClick={saveResult} className="min-h-11 cursor-pointer border-0 bg-transparent font-sans text-sm font-semibold text-[#6F4CF5]">
                Bewaar mijn resultaat
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="min-h-11 cursor-pointer border-0 bg-transparent font-sans text-sm font-semibold text-[#6B7280]"
              >
                Print samenvatting
              </button>
              <button type="button" onClick={resetTest} className="min-h-11 cursor-pointer border-0 bg-transparent font-sans text-sm font-semibold text-[#6B7280]">
                Opnieuw doen
              </button>
              {saved && <span className="font-sans text-[13px] text-[#22A06B]">Opgeslagen in deze browser</span>}
            </div>
          </div>
        ) : (
          <div className="p-6.5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3.5">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
                Vraag {step + 1} van 4
              </div>
              <button type="button" onClick={resetTest} className="min-h-9 cursor-pointer border-0 bg-transparent font-sans text-[13px] font-semibold text-[#9AA1AC]">
                Opnieuw
              </button>
            </div>
            <div aria-hidden="true" className="mt-3 h-1 overflow-hidden rounded-full bg-[#EEF0F4]">
              <div
                className="h-1 rounded-full bg-[#6F4CF5] transition-[width] duration-200"
                style={{ width: `${Math.round(((step + 1) / 4) * 100)}%` }}
              />
            </div>
            <p
              className="mt-5 text-pretty font-sans text-xl font-semibold leading-[1.45] text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: QUESTIONS[step] }}
            />
            <div role="group" aria-label="Antwoord" className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setAns(true)}
                aria-pressed={curAns === true}
                className="min-h-14 flex-1 cursor-pointer rounded-xl font-sans text-[17px] font-semibold transition-all"
                style={
                  curAns === true
                    ? { background: "#6F4CF5", color: "#FFFFFF", border: "1.5px solid #6F4CF5" }
                    : { background: "#FFFFFF", color: "#1F2937", border: "1.5px solid #D8D2F5" }
                }
              >
                Ja
              </button>
              <button
                type="button"
                onClick={() => setAns(false)}
                aria-pressed={curAns === false}
                className="min-h-14 flex-1 cursor-pointer rounded-xl font-sans text-[17px] font-semibold transition-all"
                style={
                  curAns === false
                    ? { background: "#6F4CF5", color: "#FFFFFF", border: "1.5px solid #6F4CF5" }
                    : { background: "#FFFFFF", color: "#1F2937", border: "1.5px solid #D8D2F5" }
                }
              >
                Nee
              </button>
            </div>
            <div className="mt-5.5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="min-h-11 cursor-pointer rounded-[9px] border border-[#E6E8EF] bg-white px-4.5 font-sans text-[15px] font-semibold text-[#6B7280]"
                style={{ opacity: step === 0 ? 0.45 : 1 }}
              >
                Vorige
              </button>
              {step === 3 ? (
                <button
                  type="button"
                  onClick={() => setDone(true)}
                  disabled={!allAnswered}
                  className="min-h-11 rounded-[9px] border border-[#6F4CF5] bg-[#6F4CF5] px-5.5 font-sans text-[15px] font-semibold text-white"
                  style={{ opacity: allAnswered ? 1 : 0.45, cursor: allAnswered ? "pointer" : "not-allowed" }}
                >
                  Toon resultaat
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setStep(Math.min(3, step + 1))}
                  disabled={curAns === null}
                  className="min-h-11 rounded-[9px] border border-[#6F4CF5] bg-[#6F4CF5] px-5.5 font-sans text-[15px] font-semibold text-white"
                  style={{ opacity: curAns === null ? 0.45 : 1, cursor: curAns === null ? "not-allowed" : "pointer" }}
                >
                  Volgende
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
