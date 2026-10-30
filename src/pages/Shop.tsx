import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

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
                      href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
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
                      href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Creative Writing Series (Neon Vale Stories 1–7)
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Persuasive Writing Prompts
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-emerald-50 text-emerald-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Build Your Case: Argument Builder (Grades 5–7)
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
                      href="https://www.teacherspayteachers.com/store/miss-pam-teaches/category/novel-studies-amp-literary-analysis-1585075"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Browse All Novel Studies
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm shadow-sm shadow-slate-200 border-2 border-white bg-indigo-50 text-indigo-700 font-semibold px-5 py-3 text-sm md:text-lg rounded-xl transition-transform hover:scale-105 hover:z-10 duration-300 cursor-pointer block text-center"
                    >
                      Fellowship of the Ring Chapter 1-2
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
