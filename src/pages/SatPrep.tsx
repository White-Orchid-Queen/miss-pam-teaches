import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Target,
  TrendingUp,
  Timer,
  Users,
  BookOpen,
  Layers,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const SatPrep = () => {
  useSEO(
    "SAT Math Tutoring & Digital SAT Prep | Miss Pam Teaches",
    "Diagnostic-driven SAT Math prep with a 12-year tutor. Targeted lessons, hard-problem practice and test strategies for the Digital SAT.",
  );

  const steps = [
    {
      icon: ClipboardList,
      title: "1. Diagnostic",
      text: "Start with a diagnostic to find exactly where points are being lost.",
    },
    {
      icon: Target,
      title: "2. Targeted Lessons",
      text: "Targeted lessons across all four SAT Math domains: Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry & Trigonometry.",
    },
    {
      icon: TrendingUp,
      title: "3. Easy-to-Hard Practice",
      text: "Easy-to-hard practice that builds up to the hardest questions on the test.",
    },
    {
      icon: Timer,
      title: "4. Test Strategies",
      text: "Test strategies for timing and the Digital SAT format.",
    },
  ];

  const faqs = [
    {
      q: "When should my student start SAT prep?",
      a: "[PLACEHOLDER]",
    },
    {
      q: "How long are sessions?",
      a: "[PLACEHOLDER]",
    },
    {
      q: "Is tutoring online or in person?",
      a: "[PLACEHOLDER]",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              SAT Math Prep That Starts With a Diagnostic
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
              Personalized Digital SAT Math tutoring with Miss Pam, 12 years of
              experience.
            </p>
            <Link to="/book-consultation">
              <Button size="lg" className="text-lg px-8 h-14 shadow-sm">
                Book a Consultation
              </Button>
            </Link>
          </section>

          {/* How it works */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="bg-slate-50 rounded-2xl p-8 border border-border/50 shadow-sm flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who it's for */}
          <section className="mb-20">
            <div className="bg-primary rounded-3xl p-10 md:p-14 text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Who It's For
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                High school students preparing for the Digital SAT — from
                students building foundations to students aiming for top scores.
              </p>
            </div>
          </section>

          {/* Practice on your own */}
          <section className="mb-20">
            <div className="bg-slate-50 rounded-3xl p-10 md:p-14 border border-border/50 shadow-sm text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Practice on Your Own
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Want to start with self-paced resources? Grab SAT Math practice
                and flashcards you can use right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.teacherspayteachers.com/store/miss-pam-teaches/category-sat-math-diagnostic-amp-hard-problem-practice-1601597"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-lg px-8 h-auto min-h-14 py-3 max-w-full whitespace-normal shadow-sm">
                    SAT Math Practice Resources on TPT
                  </Button>
                </a>
                <a
                  href="https://practice.misspamteaches.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 h-14 shadow-sm"
                  >
                    Free Practice Flashcards
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Layers className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
                >
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section>
            <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to find out where the points are?
              </h2>
              <Link to="/book-consultation">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 h-14 shadow-sm"
                >
                  Book a Consultation
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

export default SatPrep;
