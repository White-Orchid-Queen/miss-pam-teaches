import { useEffect } from "react";
import { Link } from "react-router-dom";
import { track } from "@vercel/analytics";
import { BookOpen, CheckCircle2, Clock, ExternalLink, FileText, ShoppingBag } from "lucide-react";
import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import {
  AMAZON_STORE_URL,
  CATEGORIES,
  PRODUCTS,
  TPT_STORE_URL,
  type Category,
  type Product,
} from "@/lib/catalogue";

const SITE = "https://misspamteaches.com";

/** Records which product and store each outbound click goes to (Vercel Analytics). */
const logClick = (store: "TPT" | "Amazon", product: string) => {
  try {
    track("Store click", { store, product });
  } catch {
    /* analytics must never block the link */
  }
};

/** Adds an ItemList of every product so search engines can read the catalogue. */
const useCatalogueSchema = () => {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Miss Pam Teaches Store",
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.title,
          description: p.blurb,
          image: `${SITE}/store/${p.id}.webp`,
          brand: { "@type": "Brand", name: "Miss Pam Teaches" },
          offers: {
            "@type": "Offer",
            url: p.tptUrl,
            priceCurrency: "USD",
            price: p.price === "Free" ? "0" : p.price.replace("$", ""),
            availability: "https://schema.org/InStock",
          },
        },
      })),
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.text = JSON.stringify(data);
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);
};

const ProductCard = ({ product }: { product: Product }) => {
  const isFree = product.price === "Free";
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <a
        href={product.tptUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logClick("TPT", product.title)}
        className="relative block bg-slate-100 aspect-[612/792] overflow-hidden"
        aria-label={`${product.title} on Teachers Pay Teachers`}
      >
        <img
          src={`/store/${product.id}.webp`}
          alt={`Cover of ${product.title}`}
          loading="lazy"
          decoding="async"
          width={560}
          height={725}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-[hsl(var(--academic-gold))] text-slate-900 text-xs font-bold px-3 py-1 shadow">
            {product.badge}
          </span>
        )}
      </a>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {product.grades}
          </span>
          <span className="shrink-0 text-right">
            {product.compareAt && (
              <span className="text-sm text-slate-400 line-through mr-1.5">
                {product.compareAt}
              </span>
            )}
            <span
              className={`text-lg font-bold ${isFree ? "text-emerald-700" : "text-primary"}`}
            >
              {isFree ? "FREE" : product.price}
            </span>
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-primary">
          {product.title}
        </h3>
        {(product.pages || product.answerKey || product.duration) && (
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-600">
            {product.pages && (
              <li className="inline-flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                {product.pages} pages
              </li>
            )}
            {product.answerKey && (
              <li className="inline-flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                Answer key
              </li>
            )}
            {product.duration && (
              <li className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {product.duration}
              </li>
            )}
          </ul>
        )}

        <p className="text-sm text-slate-600 leading-relaxed">{product.blurb}</p>

        {product.details && (
          <ul className="text-sm text-slate-700 space-y-1">
            {product.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-[hsl(var(--academic-gold))]" aria-hidden="true">
                  ✦
                </span>
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-3 flex flex-col gap-2">
          <a
            href={product.tptUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logClick("TPT", product.title)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold px-4 py-3 text-sm hover:bg-primary/90 transition-colors"
          >
            {isFree ? "Download free on TPT" : "Printable PDF on TPT"}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          {product.amazonUrl && (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logClick("Amazon", product.title)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-amber-400 bg-amber-50 text-amber-900 font-semibold px-4 py-2.5 text-sm hover:bg-amber-100 transition-colors"
            >
              Paperback on Amazon
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const CategorySection = ({ category }: { category: Category }) => {
  const items = PRODUCTS.filter((p) => p.category === category.id);
  if (!items.length) return null;
  return (
    <section id={category.id} className="scroll-mt-36">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {category.title}
        </h2>
        <p className="mt-3 text-lg text-slate-600">{category.blurb}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

const Store = () => {
  useSEO(
    "Store | Cursive Workbooks, Novel Studies, Writing & SAT Math | Miss Pam Teaches",
    "Shop Miss Pam's print-and-go resources: cursive handwriting workbooks, Fellowship of the Ring and classic novel studies, creative and argument writing, and SAT math practice. Printable PDFs on TPT and paperbacks on Amazon.",
  );
  useCatalogueSchema();

  const amazonCount = PRODUCTS.filter((p) => p.amazonUrl).length;

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />
      <main className="pt-28 pb-24">
        {/* Hero */}
        <header className="container mx-auto px-4 max-w-4xl text-center py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            The Miss Pam Teaches Store
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-primary">
            Print-and-Go Resources for Grades 3–12
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            Cursive workbooks, novel studies, writing programs and SAT math practice,
            built by a tutor with 13 years of experience. Get the printable PDF on
            Teachers Pay Teachers, or {amazonCount} titles as paperbacks on Amazon.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={TPT_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logClick("TPT", "Whole store")}
            >
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base gap-2">
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                Visit my TPT store
              </Button>
            </a>
            {AMAZON_STORE_URL && (
              <a
                href={AMAZON_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logClick("Amazon", "Whole store")}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base gap-2 border-2 border-amber-400 bg-amber-50 text-amber-900 hover:bg-amber-100"
                >
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                  Shop paperbacks on Amazon
                </Button>
              </a>
            )}
          </div>
        </header>

        {/* Jump-to-section bar */}
        <nav
          aria-label="Store sections"
          className="sticky top-16 z-40 bg-slate-50/90 backdrop-blur border-y border-slate-200"
        >
          <div className="container mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
              >
                {c.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="container mx-auto px-4 mt-14 space-y-20">
          {CATEGORIES.map((c) => (
            <CategorySection key={c.id} category={c} />
          ))}

          {/* Tutoring call to action */}
          <section className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Want Miss Pam to teach it one-on-one?
            </h2>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Private tutoring in reading, writing, Pre-Algebra through Algebra II,
              Geometry and SAT Math, for grades 4–12.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/book-consultation">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base bg-[hsl(var(--academic-gold))] text-slate-900 hover:bg-[hsl(var(--academic-gold))]/90"
                >
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/tutoring">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  About Tutoring
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
