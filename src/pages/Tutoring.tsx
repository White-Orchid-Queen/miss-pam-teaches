import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Search, BookOpen, Compass } from "lucide-react";

const Tutoring = () => {
  useSEO(
    "Private Tutoring for Grades 4-11 | Miss Pam Teaches",
    "One-on-one tutoring in reading, writing, math, and test prep for grades 4-11. Online and in-person sessions with 14+ years of teaching experience.",
  );

  const steps = [
    {
      icon: Search,
      title: "Identify the Skills",
      description:
        "We begin by identifying the student's strengths, weaknesses, and academic priorities.",
    },
    {
      icon: BookOpen,
      title: "Teach and Practice",
      description:
        "Miss Pam provides clear explanations, guided instruction, and targeted practice using structured teaching materials.",
    },
    {
      icon: Compass,
      title: "Build Independence",
      description:
        "Students strengthen reasoning and confidence so they can approach increasingly challenging work independently.",
    },
  ];

  const rates = [
    {
      service: "Reading & Writing (Grades 4–9)",
      rate: "$60/hour",
    },
    {
      service: "SAT Preparation",
      rate: "$75/hour",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-[1000px]">
          {/* SECTION 1 — HERO */}
          <section className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Private Math & English Tutoring
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-6">
              Personalized Instruction. Stronger Skills. Greater Confidence.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-6">
              Miss Pam helps students build strong foundations in mathematics,
              reading, writing, and analytical reasoning. From elementary and
              middle school skills through advanced high school coursework and
              SAT preparation, lessons develop understanding and independence.
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-medium mb-8">
              Grades 4–12 | Online & In-Person | Individualized Instruction
            </p>
            <Link to="/book-consultation">
              <Button size="lg" className="text-lg px-8 h-14">
                Book a Tutoring Consultation
              </Button>
            </Link>
          </section>

          {/* SECTION 2 — CHOOSE YOUR TUTORING FOCUS */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-primary">
              Choose Your Tutoring Focus
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/math-tutoring"
                className="flex flex-col bg-white rounded-2xl p-6 border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  Math & SAT Preparation
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-4 flex-1">
                  Pre-Algebra, rigorous Algebra I, Geometry, Algebra II, and SAT
                  Math preparation across all four tested domains. Instruction
                  develops mathematical reasoning, accuracy, and problem-solving
                  skills through targeted practice.
                </p>
                <span className="text-sm font-semibold text-primary hover:underline">
                  Explore Math Programs →
                </span>
              </Link>

              <Link
                to="/english-writing-programs"
                className="flex flex-col bg-white rounded-2xl p-6 border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  English & Writing
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-4 flex-1">
                  Reading comprehension, vocabulary, grammar, literary analysis,
                  creative writing, informative essays, and argument writing.
                  Students learn to interpret challenging material, organize
                  ideas, support conclusions with evidence, and communicate
                  clearly.
                </p>
                <span className="text-sm font-semibold text-primary hover:underline">
                  Explore English Programs →
                </span>
              </Link>

              <Link
                to="/book-consultation"
                className="flex flex-col bg-white rounded-2xl p-6 border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  Combined Math + English
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-4 flex-1">
                  Families may divide their weekly tutoring session between math
                  and English. Instruction is adjusted to current assignments,
                  learning needs, and long-term academic goals.
                </p>
                <span className="text-sm font-semibold text-primary hover:underline">
                  Book a Consultation →
                </span>
              </Link>
            </div>
          </section>

          {/* SECTION 3 — HOW TUTORING WORKS */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-primary">
              How Tutoring Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="bg-slate-50 rounded-2xl p-6 border border-border/50 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
              Sessions are one-on-one and available online or in person. Online
              tutoring includes interactive screen sharing and step-by-step
              instruction.
            </p>
          </section>

          {/* SECTION 4 — TUTORING RATES */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-primary">
              Investment in Stronger Skills
            </h2>
            <p className="text-base md:text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-10">
              Personalized tutoring built around your student's learning needs.
            </p>
            <div className="bg-white border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
              <ul className="space-y-4 text-base md:text-lg font-medium text-foreground/90">
                {rates.map((rate, index) => (
                  <li
                    key={rate.service}
                    className={`flex justify-between items-center ${
                      index < rates.length - 1
                        ? "border-b border-border/40 pb-4"
                        : ""
                    }`}
                  >
                    <span>{rate.service}</span>
                    <span className="text-primary font-bold">{rate.rate}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-base text-foreground/70 text-center max-w-2xl mx-auto mt-6 mb-12">
              Additional math, high school English, and combined-subject
              tutoring options are discussed during your consultation.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-primary">
              How Materials Work
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Miss Pam uses established instructional resources and structured
              lessons to provide focused, effective tutoring.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Families may be asked to purchase appropriate textbooks,
              workbooks, or other learning materials for their student's
              program.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Tutoring fees cover scheduled instructional time. Extensive custom
              curriculum development, substantial outside-session grading, and
              additional preparation services are not included in standard
              hourly tutoring.
            </p>
          </section>

          {/* SECTION 5 — FINAL CALL TO ACTION */}
          <section className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Stronger Skills?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Whether your student needs help with math, stronger reading and
              writing skills, or preparation for challenging high school
              coursework and college entrance exams, let's identify the right
              starting point.
            </p>
            <Link to="/book-consultation">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 h-14"
              >
                Book a Tutoring Consultation
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutoring;
