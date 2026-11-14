import { cn } from "@/lib/utils";

const TEAL = "#14B8A6";
const NAVY = "hsl(var(--primary))";
const GOLD = "#F5B700";

/** Two overlapping speech bubbles with a little "spark". Scales to any size. */
export const BubblesMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 96"
    className={cn("h-auto", className)}
    aria-hidden="true"
    focusable="false"
  >
    {/* spark */}
    <g stroke={GOLD} strokeWidth="5" strokeLinecap="round">
      <line x1="52" y1="6" x2="57" y2="17" />
      <line x1="38" y1="14" x2="47" y2="22" />
      <line x1="32" y1="30" x2="43" y2="31" />
    </g>
    {/* navy bubble (back) */}
    <path
      d="M40 38c17 0 30 10.5 30 24s-13 24-30 24c-3.4 0-6.6-.4-9.6-1.2L22 92l1.6-11C15.200 76.6 10 69.700 10 62c0-13.5 13-24 30-24z"
      fill={NAVY}
    />
    <g fill="#fff">
      <circle cx="29" cy="62" r="3.6" />
      <circle cx="40" cy="62" r="3.6" />
      <circle cx="51" cy="62" r="3.6" />
    </g>
    {/* teal bubble (front) with a white gap where it overlaps */}
    <path
      d="M82 12c19.300 0 34 12.100 34 27 0 9-5.300 17-13.600 22L104 74l-12.500-8.200C88.500 66.500 85.300 67 82 67c-19.300 0-34-12.300-34-27.500S62.700 12 82 12z"
      fill={TEAL}
      stroke="#fff"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <g fill="#fff">
      <circle cx="70" cy="39.500" r="4" />
      <circle cx="82" cy="39.500" r="4" />
      <circle cx="94" cy="39.500" r="4" />
    </g>
  </svg>
);

/** Gold swoosh that sits under the wordmark. Stretches to its container. */
const Swoosh = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 300 14"
    preserveAspectRatio="none"
    className={cn("w-full h-2 md:h-3", className)}
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M4 11C80 1 220 1 296 9"
      fill="none"
      stroke={GOLD}
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

/** The main "Build Your Case" logo: bubbles, wordmark, swoosh and tagline, stacked. */
export const BuildACaseLogo = ({ className }: { className?: string }) => (
  <div className={cn("inline-flex flex-col items-center text-center", className)}>
    <BubblesMark className="w-20 sm:w-24 md:w-28 mb-1" />
    <h1 className="font-extrabold tracking-tight text-primary leading-none text-4xl sm:text-6xl md:text-7xl">
      Build Your Case
      <span className="sr-only"> — Debate and Argument Writing for Grades 5–9</span>
    </h1>
    <Swoosh className="mt-3 max-w-[90%]" />
    <span className="mt-3 font-bold text-primary text-base sm:text-lg md:text-xl leading-snug">
      Build it. Prove it. Defend it.
      <br />
      Built for clash.
    </span>
  </div>
);

/** Smaller side-by-side version for each series card. */
export const SeriesLogo = ({
  grades,
  title,
  subtitle,
  className,
}: {
  grades: string;
  title: string;
  subtitle?: string;
  className?: string;
}) => (
  <div className={cn("flex flex-col items-center text-center", className)}>
    <span
      className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4"
      style={{ background: "#0F9488" }}
    >
      {grades}
    </span>
    <div className="flex items-center gap-3">
      <BubblesMark className="w-14 sm:w-16 shrink-0" />
      <span className="text-left">
        <span className="block font-extrabold tracking-tight text-primary leading-[1.05] text-2xl sm:text-3xl">
          {title}
        </span>
        {subtitle && (
          <span className="block mt-1 text-sm sm:text-base font-semibold text-teal-700">{subtitle}</span>
        )}
      </span>
    </div>
    <Swoosh className="mt-3 max-w-[85%]" />
  </div>
);
