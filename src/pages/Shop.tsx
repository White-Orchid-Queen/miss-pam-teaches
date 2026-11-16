import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { BYC_BOOK1_TPT_URL, FOTA_TPT_URL } from "@/lib/buildYourCase";
import {
  ADVENT_AMAZON_URL,
  ADVENT_TPT_URL,
  CURSIVE_AMAZON_URL,
  CURSIVE_TPT_URL,
} from "@/lib/products";

const Shop = () => {
  useSEO(
    "Writing & Math Study Guides | Middle School Educational Resources",
    "Print-and-go study guides for classic literature, creative writing series, and SAT math practice to support your middle school student.",
  );
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Study Guides and Practice Resources
          </h1>

          <div className="space-y-16">
            <section className="space-y-8 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Miss Pam's print-and-go resources are available on Teachers Pay
                Teachers. Classic literature study guides, writing prompts, and
                math practice — simple tools your student can use today.
              </p>
              <a
                href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="text-lg px-8 h-14">
                  Shop Miss Pam Teaches on TPT
                </Button>
              </a>
            </section>

            <div className="space-y-16 my-12 max-w-5xl mx-auto py-8">
              <section className="space-y-12">
                <h3 className="text-3xl font-bold text-center mb-10 text-primary">
                  Shop Now
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Elementary Reading
                    </h4>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Sarah-Plain-and-Tall-Study-Guide-Novel-Unit-Grades-3-5-Comprehension-Vocabul-16669588"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-blue-50 text-blue-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Sarah Plain and Tall Guide
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-blue-50 text-blue-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Cricket in Times Square Guide
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2 text-center">
                      Writing
                    </h4>
                    <a
                      href="https://www.teacherspayteachers.com/store/miss-pam-teaches/category-creative-writing-futuristic-stories-1647875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Creative Writing Series (Neon Vale Stories 1–7)
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/store/miss-pam-teaches/category-persuasive-writing-unit-1659882"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Persuasive Writing Prompts
                    </a>
                    <a
                      href={BYC_BOOK1_TPT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Build Your Case: Argument Builder (Grades 5–7)
                    </a>
                    <a
                      href={FOTA_TPT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      From Opinions to Arguments: Mini Unit (Grades 6–8)
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/The-Compass-and-the-Echo-11-Week-Fantasy-Creative-Writing-Adventure-grade-6-9-17494956"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      The Compass and the Echo: 11-Week Fantasy Writing
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/store/miss-pam-teaches/category-writing-prompts-amp-journals-1585077"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Creative Writing Journal Systems
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Novel Studies & Literary Analysis
                    </h4>
                    <a
                      href="https://www.teacherspayteachers.com/store/miss-pam-teaches/category-novel-studies-amp-literary-analysis-1585075"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Browse All Novel Studies
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Fellowship-of-the-Ring-Chapter-1-Study-Guide-Characters-Locations-Vocabulary-16000013"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Fellowship of the Ring Chapter 1 Guide
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Fellowship-of-the-Ring-Chapter-2-Study-Guide-Vocabulary-Characters-Questions-16677826"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Fellowship of the Ring Chapter 2 Guide
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Fellowship-of-the-Ring-Chapters-12-Study-Guide-Bundle-Novel-Study-18376377"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Fellowship of the Ring Chapters 1–2 Bundle (Save $2)
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Moby-Dick-Chapters-13-15-Reading-Guide-Vocabulary-Coloring-Page-Comprehend-17601403"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Moby-Dick Chapters 13–15 Reading Guide
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Tuck-Everlasting-8-Week-Novel-Study-Literary-Analysis-Writing-Promp-Socratic-16475515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Tuck Everlasting 8-Week Novel Study
                    </a>
                    <div className="w-full max-w-sm shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-500 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      The Hobbit (Coming Soon)
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Cursive Handwriting
                    </h4>
                    <a
                      href={CURSIVE_TPT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-amber-50 text-amber-800 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Cursive Workbook, Grades 6–8 (Printable PDF)
                    </a>
                    <a
                      href={CURSIVE_AMAZON_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-amber-50 text-amber-800 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Cursive Workbook, Grades 6–8 (Amazon Paperback)
                    </a>
                    <a
                      href={ADVENT_TPT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-amber-50 text-amber-800 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Christmas Advent Handwriting &amp; Coloring Book (Printable PDF)
                    </a>
                    <a
                      href={ADVENT_AMAZON_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-amber-50 text-amber-800 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Christmas Advent Handwriting &amp; Coloring Book (Amazon Paperback)
                    </a>
                  </div>
                </div>
              </section>

              <section className="pt-8 border-t border-slate-200">
                <h3 className="text-3xl font-bold text-center mb-10 text-primary">
                  Ask Miss Pam About Tutoring In:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Pre-Algebra & Algebra
                    </h4>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      6th Grade Math
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      7th Grade Math
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      8th Grade Math
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      Linear Equations
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      Algebra Parabolas
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      Algebra Factoring Trinomials
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Geometry & Trigonometry
                    </h4>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      Geometry Circle Equations
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      Graphing Parabolas
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      SAT Math Foundations
                    </h4>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      SAT Math Practice
                    </div>
                    <div className="w-full max-w-xs shadow-sm border-2 border-slate-200 bg-slate-50 text-slate-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl text-center cursor-default">
                      Statistics
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="bg-slate-50 p-8 md:p-12 rounded-2xl text-center border border-border/50 shadow-sm max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                What's in the store
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Novel study guides for classic literature including The
                Fellowship of the Ring, Sarah Plain and Tall, and more. Creative
                writing series. Pre-algebra and ratios, SAT math practice
                problems. Reading journals and writing prompts for grades 5
                through 12.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
