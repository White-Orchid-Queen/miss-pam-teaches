import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";

const StateTesting = () => {
  useSEO(
    "State Test Prep Tutoring | Miss Pam Teaches",
    "Targeted tutoring to help students prepare for state reading and writing assessments. Personalized plans that build real confidence, not just test tricks.",
  );

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full mb-4 text-sm tracking-wide uppercase">
              State Testing Requirements for 4th Grade
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              4th Grade Writing & Grammar Study
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              Mastering writing and grammar demands more than just picking the
              right answer—it requires a deep understanding of sentence
              structure, editing, and grammar rules. Here are the core skills
              needed, and the exact stairstep we use to build mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button size="lg" className="h-12 px-8 text-base">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/shop">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base border-primary text-primary hover:bg-primary/5"
                >
                  Shop Study Guides
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Essential Writing & Grammar Skills
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Texas (STAAR)
                  </h3>
                  <p className="text-foreground/80">
                    Tests editing and revising through multiple-choice
                    questions, requiring students to fix grammar, spelling, and
                    punctuation errors in provided passages. Students also
                    respond to text-based writing prompts.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    California (CAASPP / Smarter Balanced)
                  </h3>
                  <p className="text-foreground/80">
                    Uses computer-adaptive testing where students edit brief
                    texts for grammar and conventions. They also complete
                    performance tasks that involve reading sources and typing a
                    structured essay.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Florida (FAST)
                  </h3>
                  <p className="text-foreground/80">
                    Assesses ELA Reading and Writing. The writing component
                    requires students to read source materials and synthesize
                    information into a well-structured, grammatically correct
                    essay.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    New York (NYSTP)
                  </h3>
                  <p className="text-foreground/80">
                    Includes multiple-choice questions for reading comprehension
                    and language conventions, alongside short-response and
                    extended-response writing tasks that evaluate structure and
                    grammar.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">The Testing Format</h3>
                <ul className="space-y-4 text-primary-foreground/90 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-0.5">✓</span>
                    <span>
                      <strong>Multiple Choice Editing:</strong> Finding the
                      correct punctuation or spelling in a sentence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-0.5">✓</span>
                    <span>
                      <strong>Revising Paragraphs:</strong> Choosing the best
                      way to combine sentences or improve flow.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-0.5">✓</span>
                    <span>
                      <strong>Drag-and-Drop:</strong> Interactive sentence
                      construction and grammar correction on computer-based
                      tests.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-0.5">✓</span>
                    <span>
                      <strong>Text-Based Essays:</strong> Writing structured
                      responses with clear evidence and correct mechanics.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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
            <Link to="/book-consultation">
              <Button size="lg" className="h-14 px-8 text-lg">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StateTesting;
