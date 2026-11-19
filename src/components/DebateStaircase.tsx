import { useState, type KeyboardEvent, type ReactNode } from "react";
import { FOTA_AMAZON_URL, FOTA_TPT_URL } from "@/lib/buildYourCase";

// The Debate and Persuasion Series drawn as an isometric staircase:
// ten books, each step standing on the one before it.

type Stage = "t" | "m" | "r";
type Book = {
  n: number;
  title: string;
  stage: Stage;
  live: boolean;
  tag: string;
  desc: string;
  icon: keyof typeof ICONS;
};

const STAGE_NAME: Record<Stage, string> = {
  t: "Think it through",
  m: "Build the case",
  r: "Say it in time",
};

const COLORS: Record<Stage | "g", { top: string; left: string; right: string }> = {
  g: { top: "#D7E4DA", left: "#AFC3B5", right: "#93AA9B" },
  t: { top: "#86D3C6", left: "#2F8F83", right: "#1F675E" },
  m: { top: "#F8D27F", left: "#DE9F2C", right: "#AE7718" },
  r: { top: "#F0A1C2", left: "#C04D82", right: "#8E355F" },
};

const BOOKS: Book[] = [
  { n: 1, title: "From Opinions to Arguments", stage: "t", live: true, icon: "bubble",
    tag: "From “I think” to “here is why.”",
    desc: "A hands-on argument writing workbook. Students turn a plain opinion into a clear claim, support it with a reason, and explain their thinking." },
  { n: 2, title: "Rebuttal", stage: "t", live: false, icon: "shield",
    tag: "Answer the person who disagrees.", desc: "How to answer someone who disagrees with you." },
  { n: 3, title: "Fallacies", stage: "t", live: false, icon: "fish",
    tag: "Spot the broken reasoning.",
    desc: "Spotting broken reasoning in your own arguments and in other people's, with fun, visual, silly examples." },
  { n: 4, title: "Logic", stage: "t", live: false, icon: "gear",
    tag: "Build reasoning that holds up.", desc: "Building sound reasoning: if-then thinking, cause and effect." },
  { n: 5, title: "Understanding the Resolution", stage: "m", live: false, icon: "lens",
    tag: "Know exactly what you must prove.",
    desc: "Breaking down the statement you have to argue: key terms, what is being asked, and what each side must prove." },
  { n: 6, title: "Finding Research", stage: "m", live: false, icon: "books",
    tag: "Go find support for your side.", desc: "Finding sources that support your side, once you know what you are proving." },
  { n: 7, title: "Judging Evidence", stage: "m", live: false, icon: "scale",
    tag: "Tell good evidence from bad.",
    desc: "Who wrote it, are they an expert, is it recent, does it support the claim, and is there bias?" },
  { n: 8, title: "Picking Your Strongest Arguments", stage: "m", live: false, icon: "star",
    tag: "Keep two or three. Cut the rest.",
    desc: "Sorting through everything you found and choosing the two or three arguments that carry the case." },
  { n: 9, title: "Researching Rebuttals", stage: "m", live: false, icon: "arrows",
    tag: "Prepare answers before you need them.",
    desc: "Finding what the other side will say and preparing answers in advance." },
  { n: 10, title: "Fitting It Into the Time", stage: "r", live: false, icon: "watch",
    tag: "Shape it to the clock.",
    desc: "Shaping your strongest arguments and rebuttals into a four-minute speech or a two-minute rebuttal, with timing templates for Team Policy, Lincoln-Douglas, and Parliamentary." },
];

// Path around the plaza: front-left → front → right side → back.
const CELLS: [number, number][] = [[0,3],[1,3],[2,3],[3,3],[3,2],[3,1],[3,0],[2,0],[1,0],[0,0]];
const RIGHT_FACE = new Set([5, 6, 7]);

const C = Math.cos(Math.PI / 6);
const U = 70;
const P = (x: number, y: number, z: number): [number, number] => [(x - y) * C * U, (x + y) * 0.5 * U - z * U];
const pts = (a: [number, number][]) => a.map((p) => p.map((v) => v.toFixed(1)).join(",")).join(" ");
const zTop = (n: number) => 0.3 + n * 0.4;

const INK = "#1C2A39";
const PAPER = "#FFFDF7";

const gearPath = (() => {
  let d = "";
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2, a1 = ((i + 1) / 16) * Math.PI * 2, r = i % 2 ? 12.5 : 17;
    d += `${i ? "L" : "M"}${(Math.cos(a0) * r).toFixed(1)},${(Math.sin(a0) * r).toFixed(1)}L${(Math.cos(a1) * r).toFixed(1)},${(Math.sin(a1) * r).toFixed(1)}`;
  }
  return d + "Z";
})();
const starPts = Array.from({ length: 10 }, (_, i) => {
  const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 8 : 19;
  return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r + 2).toFixed(1)}`;
}).join(" ");

const s = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
const ICONS: Record<string, ReactNode> = {
  bubble: (<>
    <rect x={-26} y={-13} width={52} height={24} rx={7} fill={PAPER} {...s} />
    <path d="M-8,11 L-14,20 L2,11" fill={PAPER} {...s} />
    <rect x={-9} y={9} width={12} height={4} fill={PAPER} />
    <text x={0} y={3} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>because</text>
  </>),
  shield: (<>
    <path d="M0,-18 L16,-12 V0 C16,10 8,16 0,20 C-8,16 -16,10 -16,0 V-12 Z" fill="#86D3C6" {...s} />
    <path d="M7,8 V2 a7,7 0 0 0 -7,-7 H-7 M-2,-10 L-7,-5 L-2,0" fill="none" {...s} strokeWidth={2.4} />
  </>),
  fish: (<>
    <path d="M9,0 L22,-10 L20,0 L22,10 Z" fill="#E45B5B" {...s} />
    <ellipse cx={-3} cy={0} rx={15} ry={8.5} fill="#E45B5B" {...s} />
    <circle cx={-11} cy={-2} r={1.9} fill={INK} />
    <path d="M-2,-6 Q1,0 -2,6" fill="none" {...s} strokeWidth={1.5} />
    <text x={4} y={-16} textAnchor="middle" fontSize={13} fontWeight={700} fill={INK}>?</text>
  </>),
  gear: (<>
    <path d={gearPath} fill="#B9C3CF" {...s} />
    <circle r={5.5} fill={PAPER} {...s} />
  </>),
  lens: (<>
    <line x1={4} y1={4} x2={15} y2={15} {...s} strokeWidth={5.5} />
    <circle cx={-4} cy={-4} r={12} fill="#DDF1FF" {...s} strokeWidth={2.4} />
    <path d="M-10,-7 H2 M-10,-2 H-1" {...s} />
  </>),
  books: (<>
    <rect x={-17} y={6} width={34} height={9} rx={1.5} fill="#5B8BD9" {...s} />
    <rect x={-14} y={-3} width={29} height={9} rx={1.5} fill="#E45B5B" {...s} />
    <rect x={-16} y={-12} width={30} height={9} rx={1.5} fill="#F8D27F" {...s} />
  </>),
  scale: (<>
    <line x1={0} y1={-16} x2={0} y2={14} {...s} strokeWidth={2.4} />
    <line x1={-17} y1={-11} x2={17} y2={-11} {...s} strokeWidth={2.4} />
    <path d="M-17,-11 L-24,2 M-17,-11 L-10,2 M17,-11 L10,2 M17,-11 L24,2" {...s} strokeWidth={1.4} />
    <path d="M-25,2 A8,5 0 0 0 -9,2 Z" fill="#F8D27F" {...s} />
    <path d="M9,2 A8,5 0 0 0 25,2 Z" fill="#F8D27F" {...s} />
    <rect x={-8} y={13} width={16} height={4} rx={1} fill={INK} />
  </>),
  star: <polygon points={starPts} fill="#FFC93C" {...s} />,
  arrows: (<>
    <rect x={-21} y={-15} width={42} height={30} rx={5} fill={PAPER} {...s} />
    <path d="M-13,-5 H11 M5,-10 L11,-5 L5,0" fill="none" {...s} stroke="#2F8F83" strokeWidth={3} />
    <path d="M13,6 H-11 M-5,1 L-11,6 L-5,11" fill="none" {...s} stroke="#C04D82" strokeWidth={3} />
  </>),
  watch: (<>
    <rect x={-4} y={-19} width={8} height={5} rx={1} fill={INK} />
    <line x1={11} y1={-10} x2={15} y2={-14} {...s} strokeWidth={3} />
    <circle cx={0} cy={2} r={15} fill={PAPER} {...s} strokeWidth={2.4} />
    <path d="M0,2 L0,-7 M0,2 L7,2" {...s} stroke="#C04D82" strokeWidth={2.4} />
    <text x={0} y={12} textAnchor="middle" fontSize={7.5} fontWeight={700} fill={INK}>4:00</text>
  </>),
};

function Box({ x0, y0, x1, y1, z0, z1, c, topStroke }: {
  x0: number; y0: number; x1: number; y1: number; z0: number; z1: number;
  c: { top: string; left: string; right: string }; topStroke?: boolean;
}) {
  return (<>
    <polygon points={pts([P(x0,y1,z1),P(x1,y1,z1),P(x1,y1,z0),P(x0,y1,z0)])} fill={c.left} />
    <polygon points={pts([P(x1,y0,z1),P(x1,y1,z1),P(x1,y1,z0),P(x1,y0,z0)])} fill={c.right} />
    <polygon points={pts([P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)])} fill={c.top}
      stroke={topStroke ? INK : "none"} strokeWidth={topStroke ? 2 : 0} />
  </>);
}

// Text laid flat on a face: "left" = the y-facing side, "right" = the x-facing side.
function FaceText({ face, origin, lx, ly, size, fill, children, spacing }: {
  face: "left" | "right"; origin: [number, number]; lx: number; ly: number; size: number;
  fill: string; children: ReactNode; spacing?: number;
}) {
  const m = face === "left" ? `${C} 0.5 0 1` : `${C} -0.5 0 1`;
  return (
    <text transform={`matrix(${m} ${origin[0].toFixed(1)} ${origin[1].toFixed(1)})`} x={lx} y={ly}
      textAnchor="middle" dominantBaseline="central" fontSize={size} fontWeight={800} fill={fill}
      letterSpacing={spacing}>{children}</text>
  );
}

function Prop({ at, icon }: { at: [number, number]; icon: string }) {
  const lift = icon === "bubble" || icon === "arrows" ? 40 : 36;
  return (
    <g transform={`translate(${at[0].toFixed(1)} ${at[1].toFixed(1)})`}>
      <ellipse rx={13} ry={5} fill="rgba(0,0,0,.2)" />
      <line x1={0} y1={0} x2={0} y2={-lift + 12} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <g transform={`translate(0 ${-lift})`}>{ICONS[icon]}</g>
    </g>
  );
}

function Tree({ x, y }: { x: number; y: number }) {
  const [bx, by] = P(x, y, 0);
  return (
    <g transform={`translate(${bx.toFixed(1)} ${by.toFixed(1)})`} aria-hidden="true">
      <ellipse rx={14} ry={6} fill="rgba(0,0,0,.18)" />
      <rect x={-3} y={-14} width={6} height={14} fill="#7A5A3A" />
      <path d="M0,-58 L17,-14 L0,-8 Z" fill="#3E8E5A" />
      <path d="M0,-58 L-17,-14 L0,-8 Z" fill="#5DB07A" />
    </g>
  );
}

export default function DebateStaircase() {
  const [sel, setSel] = useState(1);
  const book = BOOKS[sel - 1];

  // Painter's order: things further back (smaller x + y) are drawn first.
  const items: { key: number; node: ReactNode }[] = [
    { key: 2, node: <Tree key="t1" x={0.5} y={1.5} /> },
    { key: 3, node: <Tree key="t2" x={0.5} y={2.5} /> },
    { key: 3.5, node: <Tree key="t3" x={1.6} y={1.7} /> },
    { key: 4.2, node: <Tree key="t4" x={2.4} y={2.3} /> },
    ...BOOKS.map((b, i) => {
      const [x, y] = CELLS[i];
      const z1 = zTop(b.n);
      const onRight = RIGHT_FACE.has(b.n);
      const origin = onRight ? P(x + 1, y + 1, z1) : P(x, y + 1, z1);
      const ly = Math.min((z1 * U) / 2, 34);
      const isSel = b.n === sel;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(b.n); }
      };
      return {
        key: x + y + 1,
        node: (
          <g key={b.n} role="button" tabIndex={0} aria-label={`Book ${b.n}: ${b.title}`} aria-pressed={isSel}
            onClick={() => setSel(b.n)} onKeyDown={onKey}
            className="cursor-pointer outline-none [&:focus-visible_.top-face]:stroke-[3]">
            <g style={{ transform: `translateY(${isSel ? -10 : 0}px)`, transition: "transform .25s ease" }}
              className="hover:[transform:translateY(-6px)]">
              <Box x0={x} y0={y} x1={x + 1} y1={y + 1} z0={0} z1={z1} c={COLORS[b.stage]} topStroke={isSel} />
              <FaceText face={onRight ? "right" : "left"} origin={origin} lx={U / 2} ly={ly}
                size={b.n === 10 ? 26 : 30} fill="rgba(255,255,255,.93)">{b.n}</FaceText>
              <Prop at={P(x + 0.5, y + 0.5, z1)} icon={b.icon} />
            </g>
          </g>
        ),
      };
    }),
  ].sort((a, b) => a.key - b.key);

  return (
    <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
      <div className="min-w-0">
        <svg viewBox="-300 -395 600 735" className="w-full h-auto overflow-visible"
          role="group" aria-label="The Debate and Persuasion Series as a staircase of ten books">
          <Box x0={-0.35} y0={-0.35} x1={4.35} y1={4.35} z0={-0.4} z1={0} c={COLORS.g} />
          <FaceText face="left" origin={P(-0.35, 4.35, 0)} lx={(4.7 * U) / 2} ly={14} size={11} fill="#3E5446" spacing={1.8}>
            MISS PAM TEACHES
          </FaceText>
          <FaceText face="right" origin={P(4.35, 4.35, 0)} lx={(4.7 * U) / 2} ly={14} size={11} fill="#3E5446" spacing={1.8}>
            GRADES 6–8
          </FaceText>
          {items.map((it) => it.node)}
        </svg>
        <p className="text-center text-sm text-muted-foreground">Tap a step to see its book</p>
      </div>

      <div className="min-w-0 bg-slate-50 border border-border/60 rounded-2xl p-6 relative overflow-hidden" aria-live="polite">
        <span className="absolute left-0 top-4 bottom-4 w-1.5 rounded-r" style={{ background: COLORS[book.stage].left }} />
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Book {book.n} of 10 · {STAGE_NAME[book.stage]}
          </span>
          <span className={book.live
            ? "text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-amber-300 text-amber-950"
            : "text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-slate-400 text-slate-600"}>
            {book.live ? "On TPT & Amazon" : "Being built"}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{book.title}</h3>
        <p className="font-semibold text-sky-900 mb-2">{book.tag}</p>
        <p className="text-foreground/80 leading-relaxed mb-4">{book.desc}</p>
        {book.live && (
          <ul className="text-sm text-foreground/80 space-y-2 mb-4">
            <li>
              <span className="font-bold text-primary">TPT printable PDF:</span> colorful students and graphics
              with lightly highlighted writing areas, for digital use or color printing. 18 pages, $3.50.
            </li>
            <li>
              <span className="font-bold text-primary">Amazon paperback:</span> 8.5 × 11 in black and white,
              with the same four students, drawn in black and white, in every lesson. 26 pages, $9.99. Also on Kindle.
            </li>
          </ul>
        )}
        {book.live ? (
          <div className="flex flex-wrap gap-3 mb-4">
            <a href={FOTA_TPT_URL} target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg px-4 py-2">TPT</a>
            <a href={FOTA_AMAZON_URL} target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold text-sky-800 border border-sky-700 hover:bg-sky-50 rounded-lg px-4 py-2">Amazon</a>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground mb-4">This book is being built. Start with Book 1 today.</p>
        )}
        <div className="flex gap-2">
          <button type="button" disabled={sel <= 1} onClick={() => setSel(sel - 1)}
            className="flex-1 text-sm font-bold border border-border rounded-lg py-2 hover:border-primary disabled:opacity-40">
            ← Step down
          </button>
          <button type="button" disabled={sel >= 10} onClick={() => setSel(sel + 1)}
            className="flex-1 text-sm font-bold border border-border rounded-lg py-2 hover:border-primary disabled:opacity-40">
            Step up →
          </button>
        </div>
      </div>
    </div>
  );
}
