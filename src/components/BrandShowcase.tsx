import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, type CategoryId } from "@/lib/catalogue";

const LOGO_URL =
  "https://vibe.filesafe.space/1778675984868425758/attachments/3276d80c-5e72-409c-a69e-246cf64b69e4.png";

interface Collection {
  title: string;
  /** Section on /store that "Visit the Store" jumps to. */
  section: CategoryId;
  /** Up to 4 TPT product ids from the catalogue, shown as covers. */
  covers: string[];
}

/** The cards in the banner. Change covers or order here. */
const COLLECTIONS: Collection[] = [
  {
    title: "Top Handwriting & Coloring Books",
    section: "handwriting",
    covers: ["18369808", "18369580", "18376942"],
  },
  {
    title: "Top Writing Programs",
    section: "argument",
    covers: ["17404401", "18249113", "17494956", "18184645"],
  },
  {
    title: "Top Novel Studies",
    section: "novels",
    covers: ["18376377", "16475515", "16669588", "17601403"],
  },
  {
    title: "Top SAT & Math Practice",
    section: "math",
    covers: ["18270400", "16752710", "17098911", "18066003"],
  },
  {
    title: "Free Resources",
    section: "free",
    covers: ["17844917", "16059611", "16465539", "17681810"],
  },
];

const titleFor = (id: string) => PRODUCTS.find((p) => p.id === id)?.title ?? "";

const CollectionCard = ({ c }: { c: Collection }) => (
  <Link
    to={`/store#${c.section}`}
    className="group snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col"
  >
    <div className="grid grid-cols-2 gap-3">
      {c.covers.slice(0, 4).map((id) => (
        <img
          key={id}
          src={`/store/${id}.webp`}
          alt={`Cover of ${titleFor(id)}`}
          loading="lazy"
          decoding="async"
          width={560}
          height={725}
          className="w-full aspect-[612/792] object-cover shadow-sm"
        />
      ))}
      {c.covers.length < 4 && (
        <div className="aspect-[612/792] bg-slate-100 flex items-center justify-center text-center text-sm font-semibold text-primary px-2">
          See them all in the store →
        </div>
      )}
    </div>
    <h3 className="mt-4 text-lg font-bold text-primary leading-snug">{c.title}</h3>
    <span className="mt-1 text-sm text-blue-700 group-hover:underline">Visit the Store</span>
  </Link>
);

/**
 * Amazon-style brand banner: a logo panel followed by a side-scrolling row of
 * collection cards, each a 2x2 grid of covers that links to its store section.
 */
export const BrandShowcase = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    rowRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section
      aria-label="Miss Pam Teaches collections"
      className="relative py-12 md:py-16 bg-slate-200 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.7),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.5),transparent_40%)]"
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-16 w-10 items-center justify-center rounded-md bg-white shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={rowRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Logo panel */}
            <div className="snap-start shrink-0 w-[260px] sm:w-[340px] flex flex-col items-center justify-center text-center px-4">
              <img
                src={LOGO_URL}
                alt="Miss Pam Teaches logo"
                className="w-24 h-24 object-contain rounded-xl"
              />
              <p className="mt-4 font-serif text-4xl sm:text-5xl leading-none text-primary">
                Miss Pam
                <br />
                Teaches
              </p>
              <p className="mt-4 text-sm text-slate-600">
                Skills, not shortcuts. Print-and-go resources for grades 3–12.
              </p>
            </div>

            {COLLECTIONS.map((c) => (
              <CollectionCard key={c.title} c={c} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 h-16 w-10 items-center justify-center rounded-md bg-white shadow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
