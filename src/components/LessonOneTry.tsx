import { useState } from "react";

// "Try Lesson 1": a small hands-on taste of From Opinions to Arguments,
// built from the lesson's own first page (Classroom rules).

type Student = {
  id: string;
  thought: string;
  label: string;
  note: string;
  skin: string;
  hair: string;
  hairPath: string;
};

const STUDENTS: Student[] = [
  {
    id: "a", thought: "Some rules don't make sense to me.", label: "An opinion",
    note: "This is a feeling about rules. It's a fine place to start, but no one can argue with how you feel, so it isn't a claim yet.",
    skin: "#F2C9A8", hair: "#3B2A20", hairPath: "M-19,2 C-21,-20 -6,-25 2,-24 C16,-23 22,-12 19,4 C17,-6 10,-13 0,-13 C-10,-13 -16,-6 -19,2 Z M-19,2 C-22,14 -20,26 -16,32 L-12,8 Z",
  },
  {
    id: "b", thought: "We should help make them.", label: "Close to a claim",
    note: "This takes a position someone could disagree with. To make it a strong claim, name who should act (students) and exactly what they should do.",
    skin: "#8D5B3E", hair: "#1E1712", hairPath: "M-18,-4 C-19,-20 -8,-24 0,-24 C10,-24 19,-19 18,-4 C14,-12 6,-15 0,-15 C-7,-15 -14,-12 -18,-4 Z",
  },
  {
    id: "c", thought: "But what if everyone just picks rules they like?", label: "The other side",
    note: "This is a worry the other side might raise. Good arguers think about it early, and it comes back in the Rebuttal book.",
    skin: "#F6D3B5", hair: "#B5782F", hairPath: "M-20,4 C-22,-18 -8,-25 1,-24 C15,-23 22,-14 20,4 C17,-7 9,-12 0,-12 C-9,-12 -16,-7 -20,4 Z M-20,4 C-23,16 -21,28 -14,34 L-13,6 Z M20,4 C23,16 21,28 14,34 L13,6 Z",
  },
  {
    id: "d", thought: "Let's start by coming up with some ideas.", label: "A plan to begin",
    note: "This is a way to get started: gather ideas first, then pick the strongest one to argue for.",
    skin: "#E9B98F", hair: "#5A3B22", hairPath: "M-18,-3 C-22,-14 -14,-26 -4,-24 C-2,-29 8,-28 10,-23 C18,-24 22,-12 18,-3 C14,-11 8,-14 0,-14 C-8,-14 -14,-11 -18,-3 Z",
  },
];

const SHIRTS: Record<string, string> = { a: "#E07A5F", b: "#3D7DD8", c: "#2F8F83", d: "#9B6BC7" };

function Face({ s, active }: { s: Student; active: boolean }) {
  return (
    <svg viewBox="-30 -32 60 70" className="w-16 h-[74px] md:w-20 md:h-[92px]" aria-hidden="true">
      <path d="M-24,38 C-22,22 -12,18 0,18 C12,18 22,22 24,38 Z" fill={SHIRTS[s.id]}
        stroke={active ? "#1C2A39" : "none"} strokeWidth={1.5} />
      <circle cx={0} cy={0} r={17} fill={s.skin} stroke="#1C2A39" strokeWidth={1.5} />
      <path d={s.hairPath} fill={s.hair} />
      <circle cx={-6} cy={1} r={1.8} fill="#1C2A39" />
      <circle cx={6} cy={1} r={1.8} fill="#1C2A39" />
      <path d="M-5,9 Q0,12 5,9" fill="none" stroke="#1C2A39" strokeWidth={1.5} strokeLinecap="round" />
      {/* thinking hand at the chin */}
      <circle cx={9} cy={17} r={5} fill={s.skin} stroke="#1C2A39" strokeWidth={1.3} />
    </svg>
  );
}

type Mark = "none" | "under" | "circle";
type Chunk = { text: string; want: Mark };
const CLAIM: Chunk[] = [
  { text: "Students", want: "under" },
  { text: "should suggest classroom rules", want: "under" },
  { text: "for the teacher to approve.", want: "none" },
];
const REASON: Chunk[] = [{ text: "Student input could help the class understand what the rules mean.", want: "circle" }];

const STEPS = ["Notice the thinking", "Opinion to claim", "Mark the model"];

export default function LessonOneTry() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [showClaim, setShowClaim] = useState(false);
  const [tool, setTool] = useState<"under" | "circle">("under");
  const [marks, setMarks] = useState<Record<string, Mark>>({});
  const [checked, setChecked] = useState(false);
  const [edition, setEdition] = useState<"color" | "bw">("color");
  const bw = edition === "bw";

  const student = STUDENTS.find((s) => s.id === picked);
  const all = [...CLAIM.map((c, i) => ({ ...c, key: `c${i}` })), ...REASON.map((c, i) => ({ ...c, key: `r${i}` }))];
  const correct = all.filter((c) => (marks[c.key] ?? "none") === c.want).length;

  const toggle = (key: string) => {
    setChecked(false);
    setMarks((m) => ({ ...m, [key]: m[key] === tool ? "none" : tool }));
  };

  const chunk = (c: Chunk & { key: string }) => {
    const m = marks[c.key] ?? "none";
    const wrong = checked && m !== c.want;
    return (
      <button
        key={c.key}
        type="button"
        onClick={() => toggle(c.key)}
        aria-pressed={m !== "none"}
        className={[
          "inline px-1 py-0.5 mx-0.5 my-1 text-left rounded transition-colors",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600",
          m === "under" ? "underline decoration-[3px] underline-offset-4 decoration-sky-700" : "",
          m === "circle" ? "ring-2 ring-rose-500 rounded-full px-2" : "",
          m === "none" ? "hover:bg-sky-50" : "",
          wrong ? "bg-amber-100" : "",
        ].join(" ")}
      >
        {c.text}
      </button>
    );
  };

  return (
    <div className="bg-slate-50 border border-border/60 rounded-2xl p-5 md:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Try it · Lesson 1 · Classroom rules</p>
          <h3 className="text-xl md:text-2xl font-bold text-primary">Should students help create classroom rules?</h3>
        </div>
        <div className="flex rounded-lg border border-border bg-white p-0.5" role="group" aria-label="Which edition to preview">
          <button type="button" onClick={() => setEdition("color")} aria-pressed={!bw}
            className={`text-xs md:text-sm font-bold rounded-md px-3 py-1.5 ${!bw ? "bg-sky-700 text-white" : "text-foreground/70"}`}>
            Color · TPT PDF
          </button>
          <button type="button" onClick={() => setEdition("bw")} aria-pressed={bw}
            className={`text-xs md:text-sm font-bold rounded-md px-3 py-1.5 ${bw ? "bg-slate-800 text-white" : "text-foreground/70"}`}>
            Black &amp; white · Amazon
          </button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground -mt-3 mb-5">
        {bw
          ? "The Amazon paperback is an 8.5 × 11 black-and-white book, made for writing in by hand."
          : "The TPT PDF has colorful students and lightly highlighted writing areas, for digital use or color printing."}
      </p>

      <ol className="flex flex-wrap gap-2 mb-6" aria-label="Activity steps">
        {STEPS.map((name, i) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => setStep(i)}
              aria-current={step === i ? "step" : undefined}
              className={[
                "text-sm font-bold rounded-full px-3 py-1.5 border transition-colors",
                step === i ? "bg-sky-700 border-sky-700 text-white" : "bg-white border-border text-foreground/80 hover:border-sky-700",
              ].join(" ")}
            >
              {i + 1}. {name}
            </button>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div>
          <p className="text-foreground/80 mb-4">
            Four students are thinking about the question. <b>Tap the one whose thinking is closest to yours.</b>
          </p>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-5 transition-[filter] duration-300 ${bw ? "grayscale" : ""}`}>
            {STUDENTS.map((s) => {
              const on = picked === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setPicked(s.id)}
                  aria-pressed={on}
                  className={[
                    "flex flex-col items-center gap-1 rounded-xl p-2 border-2 transition-colors bg-white",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600",
                    on ? "border-sky-700" : "border-transparent hover:border-sky-200",
                  ].join(" ")}
                >
                  <span className={[
                    "relative w-full min-h-[72px] flex items-center justify-center text-center text-sm leading-snug",
                    "rounded-[1.4rem] border-2 px-2.5 py-2",
                    on ? "border-sky-700 bg-sky-50" : "border-slate-400",
                  ].join(" ")}>
                    {s.thought}
                  </span>
                  <span className="flex flex-col items-center -mt-0.5" aria-hidden="true">
                    <span className={`w-2.5 h-2.5 rounded-full border-2 ${on ? "border-sky-700" : "border-slate-400"}`} />
                    <span className={`w-1.5 h-1.5 rounded-full border-2 mt-0.5 ${on ? "border-sky-700" : "border-slate-400"}`} />
                  </span>
                  <Face s={s} active={on} />
                </button>
              );
            })}
          </div>
          <div className="min-h-[96px] bg-white rounded-xl border border-border/60 p-4" aria-live="polite">
            {student ? (
              <>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">{student.label}</p>
                <p className="text-foreground/90">{student.note}</p>
              </>
            ) : (
              <p className="text-muted-foreground">Pick a student to see what kind of thinking it is.</p>
            )}
          </div>
          <div className="mt-4 text-right">
            <button type="button" onClick={() => setStep(1)} className="text-sm font-bold text-sky-800 hover:underline">
              Next: opinion to claim →
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="text-foreground/80 mb-4">
            An opinion is a feeling or preference. A claim states a clear position that someone could reasonably
            disagree with. <b>Flip the card to turn the opinion into a claim.</b>
          </p>
          <button
            type="button"
            onClick={() => setShowClaim((v) => !v)}
            aria-pressed={showClaim}
            className={[
              "w-full text-left rounded-2xl border-2 p-5 md:p-6 transition-colors",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600",
              showClaim ? "bg-sky-50 border-sky-700" : "bg-white border-slate-300 hover:border-sky-300",
            ].join(" ")}
          >
            <span className="block text-xs font-bold uppercase tracking-wider mb-2 text-sky-700">
              {showClaim ? "Claim" : "Opinion"}
            </span>
            <span className="block text-lg md:text-xl font-semibold text-primary">
              {showClaim
                ? "Students should help create classroom rules, with the teacher giving final approval."
                : "I like having a say in our classroom."}
            </span>
            <span className="block text-sm text-muted-foreground mt-3">
              {showClaim
                ? "It names who should act and what should happen. Someone else could argue that the teacher should make the rules."
                : "Tap to flip it into a claim."}
            </span>
          </button>
          <div className="mt-4 text-right">
            <button type="button" onClick={() => setStep(2)} className="text-sm font-bold text-sky-800 hover:underline">
              Next: mark the model →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-foreground/80 mb-4">
            <b>Underline</b> who should act and what they should do. <b>Circle</b> the reason. Pick a tool, then tap
            the words.
          </p>
          <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Marking tool">
            <button type="button" onClick={() => setTool("under")} aria-pressed={tool === "under"}
              className={`text-sm font-bold rounded-lg px-3 py-1.5 border ${tool === "under" ? "bg-sky-700 border-sky-700 text-white" : "bg-white border-border"}`}>
              <span className="underline decoration-2 underline-offset-2">Underline</span>
            </button>
            <button type="button" onClick={() => setTool("circle")} aria-pressed={tool === "circle"}
              className={`text-sm font-bold rounded-lg px-3 py-1.5 border ${tool === "circle" ? "bg-rose-600 border-rose-600 text-white" : "bg-white border-border"}`}>
              ◯ Circle
            </button>
          </div>
          <div className="bg-white rounded-xl border border-border/60 p-4 md:p-5 text-base md:text-lg leading-loose">
            <p><b className="text-primary">Claim:</b> {CLAIM.map((c, i) => <span key={i}>{chunk({ ...c, key: `c${i}` })} </span>)}</p>
            <p><b className="text-primary">Reason:</b> {REASON.map((c, i) => chunk({ ...c, key: `r${i}` }))}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <button type="button" onClick={() => setChecked(true)}
              className="text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg px-4 py-2">
              Check my marks
            </button>
            <button type="button" onClick={() => { setMarks({}); setChecked(false); }}
              className="text-sm font-bold text-foreground/70 hover:underline">
              Start over
            </button>
            <p className="text-sm" aria-live="polite">
              {checked && (correct === all.length
                ? <span className="font-bold text-emerald-700">All four marked right. That's the skill in Lesson 1.</span>
                : <span className="text-amber-800">{correct} of {all.length} right. The highlighted parts need another look.</span>)}
            </p>
          </div>
        </div>
      )}

      <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-border/60">
        This is a taste of the first lesson. Each lesson in the book has five student pages: understand the skill,
        practice, plan ideas, build and revise, and write a final argument.
      </p>
    </div>
  );
}
