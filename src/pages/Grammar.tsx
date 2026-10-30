import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";

const Grammar = () => {
  useSEO(
    "Grammar Tutoring for Students | Miss Pam Teaches",
    "Personalized grammar instruction to strengthen sentence structure, mechanics, and writing clarity for grades 4-11. Build stronger writers from the ground up.",
  );

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Grammar
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              Mastering grammar demands more than just picking the right
              answer—it requires a deep understanding of sentence structure,
              editing, and grammar rules. Here is the exact stairstep we use to
              build mastery.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
              The Grammar Mastery Stairstep
            </h2>
            <div className="flex justify-center mb-16">
              <img
                src="https://vibe.filesafe.space/1778675984868425758/assets/4140de7e-4837-4464-bc76-d60ac2356ee9.png"
                alt="Grammar Mastery Stairstep with students studying"
                className="rounded-3xl shadow-lg border border-border/50 max-w-full md:max-w-4xl"
              />
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* 6th Grade */}
              <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 p-8 rounded-3xl border border-border/50 ml-0 md:ml-24 shadow-sm relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full hidden md:flex items-center justify-center text-white font-bold shadow-md z-10">
                  3
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-primary">6th Grade</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mt-1">
                    Sophistication
                  </p>
                </div>
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6">
                  <p className="text-foreground/80 font-medium">
                    Concentrates on{" "}
                    <strong className="text-primary">
                      complex and compound-complex sentences
                    </strong>{" "}
                    containing one or more{" "}
                    <strong className="text-primary">dependent clauses</strong>.
                    Mastery involves high-level mechanics like{" "}
                    <strong className="text-primary">semicolons</strong> to
                    separate independent clauses,{" "}
                    <strong className="text-primary">intensive pronouns</strong>{" "}
                    (myself, himself), and understanding{" "}
                    <strong className="text-primary">
                      principal parts of verbs
                    </strong>{" "}
                    (present participle, past participle).
                  </p>
                </div>
              </div>

              {/* 5th Grade */}
              <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 p-8 rounded-3xl border border-border/50 ml-0 md:ml-12 shadow-sm relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full hidden md:flex items-center justify-center text-white font-bold shadow-md z-10">
                  2
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-primary">5th Grade</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mt-1">
                    Expansion
                  </p>
                </div>
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6">
                  <p className="text-foreground/80 font-medium">
                    Moves into{" "}
                    <strong className="text-primary">
                      perfect verb tenses
                    </strong>{" "}
                    (had walked, have walked, will have walked) and{" "}
                    <strong className="text-primary">
                      progressive verb tenses
                    </strong>
                    . It expands on punctuation, requiring{" "}
                    <strong className="text-primary">
                      commas for introductory elements, items in a series
                    </strong>
                    , and{" "}
                    <strong className="text-primary">direct address</strong>.
                    Students begin working with{" "}
                    <strong className="text-primary">
                      correlative conjunctions
                    </strong>{" "}
                    (either/or, neither/nor) and{" "}
                    <strong className="text-primary">interjections</strong>.
                  </p>
                </div>
              </div>

              {/* 4th Grade */}
              <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-8 rounded-3xl border-2 border-primary/20 shadow-md relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full hidden md:flex items-center justify-center text-white font-bold shadow-md z-10">
                  1
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-primary">4th Grade</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mt-1">
                    Foundations
                  </p>
                </div>
                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6">
                  <p className="text-foreground/80 font-medium">
                    Focuses on{" "}
                    <strong className="text-primary">sentence types</strong>{" "}
                    (declarative, interrogative, exclamatory, imperative),
                    identifying{" "}
                    <strong className="text-primary">
                      complete subjects and predicates
                    </strong>
                    , and correcting{" "}
                    <strong className="text-primary">
                      fragments and run-on sentences
                    </strong>
                    . It introduces{" "}
                    <strong className="text-primary">
                      coordinating conjunctions
                    </strong>{" "}
                    (FANBOYS) to create compound sentences and early complex
                    structures like{" "}
                    <strong className="text-primary">relative pronouns</strong>{" "}
                    (who, whose) and{" "}
                    <strong className="text-primary">relative adverbs</strong>{" "}
                    (where, when, why).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">
              Repetition for Mastery
            </h2>
            <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto font-medium">
              Mastery is achieved not through a single lesson, but through
              consistent monthly repetition and spiraling. That's why we
              encourage weekly grammar and writing packets, complete with 15
              essay assessments each week, to keep those skills sharp, growing,
              and fun!
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌀</span> The Spiral Approach
                </h3>
                <p className="text-foreground/80">
                  Grammar concepts are not taught in isolation; they spiral
                  throughout the year. For example, 4th-grade standards for
                  capitals and punctuation are revisited every month from August
                  through May to ensure retention.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span> Cross-Grade Review
                </h3>
                <p className="text-foreground/80">
                  The 5th-grade framework explicitly dedicates the beginning of
                  several units to reviewing 3rd and 4th-grade skills,
                  recognizing that many foundational skills require yearly
                  reinforcement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🪜</span> Scaffolded Repetition
                </h3>
                <p className="text-foreground/80">
                  Practice begins with Guided Practice, providing mnemonic
                  devices and "tips" for the first few items of an exercise
                  before moving to independent application.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎨</span> Varied Contexts
                </h3>
                <p className="text-foreground/80">
                  Students repeat the same skill in different formats—such as
                  monthly themed worksheets (e.g., Black History Month or
                  National Humor Month) to apply grammar rules to exciting new
                  writing topics.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <p className="text-center text-lg text-foreground/80 mb-6 max-w-3xl mx-auto">
              Our framework for mastering 4th to 6th-grade grammar is built on a
              spiral curriculum where concepts are introduced, reinforced
              through specific practice sequences, and repeated through monthly
              reviews and cross-grade scaffolding.
            </p>
            <p className="text-center text-lg text-foreground/80 max-w-3xl mx-auto font-medium text-primary">
              We provide 15-minute essay editing sessions with reading, grammar,
              and writing prompts each week at budget-friendly rates to support
              homeschool families, students in advanced magnet schools who need
              mastery, and IB or international schools whose parents want
              mastery in reading, writing, and grammar.
            </p>
          </div>

          <div className="text-center bg-slate-50 p-12 rounded-3xl border border-border/50">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to Build the Foundation?
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              If your student is struggling with writing assignments or
              preparing for state tests, we can help them build the skills they
              need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/book-consultation">
                <Button size="lg" className="h-14 px-8 text-lg">
                  Book a Consultation
                </Button>
              </Link>
              <a
                href="https://vibe.filesafe.space/1778675984868425758/attachments/30444981-e678-4182-90fb-b8a31d7c5a94.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Free Sample Packet
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Grammar;
