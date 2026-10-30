import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { BookOpen, PenLine, Type, AlignLeft, FileEdit } from "lucide-react";

const EnglishWritingPrograms = () => {
  useSEO(
    "English Tutoring & Writing Programs | Miss Pam Teaches",
    "College-preparatory reading, writing, and analytical thinking tutoring for grades 5–12. Three pathways: creative writing, reading & analysis, and argument & critical reasoning.",
  );

  const foundationIcons = [
    { icon: PenLine, label: "Grammar & Punctuation" },
    { icon: BookOpen, label: "Vocabulary" },
    { icon: Type, label: "Sentence Structure" },
    { icon: AlignLeft, label: "Paragraph Development" },
    { icon: FileEdit, label: "Editing & Revision" },
  ];

  const pathways = [
    {
      accent: "#7B2C3B",
      tag: "Create",
      heading: "Creative Thinking & Written Expression",
      subtitle: "Imagine. Organize. Express.",
      body: "Students develop original ideas, organize narratives, build compelling characters, and explore cause and effect through purposeful creative writing.",
      skillsLabel: "Academic skills",
      skills: [
        "Idea development",
        "Organization",
        "Vocabulary",
        "Descriptive writing",
        "Revision",
        "Communication",
      ],
    },
    {
      accent: "#1E3A5F",
      tag: "Understand & Explain",
      heading: "Reading & Analytical Writing",
      subtitle: "Read. Interpret. Explain.",
      body: "Students read and interpret literature, history, and science; examine evidence; identify important ideas; and communicate their understanding through structured explanations.",
      skillsLabel: "Academic skills",
      skills: [
        "Close reading",
        "Inference",
        "Vocabulary",
        "Textual evidence",
        "Literary analysis",
        "Expository writing",
      ],
    },
    {
      accent: "#2D5A3D",
      tag: "Build a Case",
      heading: "Argument & Critical Reasoning",
      subtitle: "Think. Reason. Persuade.",
      body: "Students learn to move beyond unsupported opinions by developing claims, examining evidence, explaining reasoning, evaluating opposing perspectives, and writing persuasive arguments.",
      skillsLabel: "Academic skills",
      skills: [
        "Thesis development",
        "Logical organization",
        "Evidence evaluation",
        "Counterarguments",
        "Argumentative essays",
      ],
    },
  ];

  const tutoringOptions = [
    {
      title: "English Tutoring",
      desc: "Reading comprehension, grammar, literary analysis, creative writing, and essay development.",
    },
    {
      title: "Math Tutoring & SAT Prep",
      desc: "Personalized instruction in Pre-Algebra, rigorous Algebra I, Geometry, and Algebra II. SAT Math preparation includes all four tested domains, targeted skill development, and easy, medium, and hard practice questions.",
      link: { label: "Explore Math & SAT Programs", to: "/math-tutoring" },
    },
    {
      title: "Combined English + Math",
      desc: "Flexible weekly instruction combining English and math, including advanced coursework and SAT preparation, based on each student's academic priorities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* SECTION 1 — PAGE HEADER */}
          <header className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Building College-Ready Readers, Writers & Thinkers
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6">
              Three Pathways. Real Skills. Stronger Academic Futures.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Strong reading, writing, and analytical thinking skills begin in
              middle school. Miss Pam Teaches helps students develop the
              comprehension, creativity, organization, and reasoning they'll
              need for increasingly challenging high school and college-level
              work.
            </p>
          </header>

          {/* SECTION 2 — THREE PATHWAYS HERO VISUAL & LABELS */}
          <section className="mb-14">
            <div className="rounded-3xl overflow-hidden border border-border/60 bg-white shadow-md max-w-[925px] mx-auto">
              {/* Top Banner overlay matching the ChatGPT recommendation */}
              <div className="bg-primary text-primary-foreground px-6 py-6 md:py-8 text-center border-b border-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white">
                  Three Paths. Stronger Skills. College-Ready Thinking.
                </h2>
                <p className="text-xs md:text-sm text-slate-300 tracking-wide uppercase font-medium mb-6">
                  Creative Writing • Reading &amp; Analysis • Argument &amp;
                  Reasoning
                </p>

                {/* Three pathway interactive pill tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
                  <div className="bg-[#7B2C3B] text-white rounded-xl py-3 px-4 shadow-sm border border-white/10">
                    <div className="font-extrabold text-sm md:text-base tracking-wider uppercase">
                      CREATE
                    </div>
                    <div className="text-xs text-rose-100 font-medium">
                      Develop Original Ideas
                    </div>
                  </div>
                  <div className="bg-[#1E3A5F] text-white rounded-xl py-3 px-4 shadow-sm border border-white/10">
                    <div className="font-extrabold text-sm md:text-base tracking-wider uppercase">
                      UNDERSTAND
                    </div>
                    <div className="text-xs text-blue-100 font-medium">
                      Read &amp; Analyze
                    </div>
                  </div>
                  <div className="bg-[#2D5A3D] text-white rounded-xl py-3 px-4 shadow-sm border border-white/10">
                    <div className="font-extrabold text-sm md:text-base tracking-wider uppercase">
                      BUILD A CASE
                    </div>
                    <div className="text-xs text-emerald-100 font-medium">
                      Reason with Evidence
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Roads Collegiate Architecture Visual */}
              <div className="relative bg-slate-950">
                <a
                  href="https://vibe.filesafe.space/1778675984868425758/attachments/d0068574-c910-42f3-b397-c724c705cbc9.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-zoom-in"
                  aria-label="View full size image of student at the three roads to college-ready learning"
                >
                  <img
                    src="https://vibe.filesafe.space/1778675984868425758/attachments/d0068574-c910-42f3-b397-c724c705cbc9.jpg"
                    alt="Three Roads to Academic Destinations — Student choosing pathways of creative expression, science/analytical understanding, and reasoned debate leading to collegiate excellence"
                    className="w-full h-auto max-h-[560px] object-cover object-center group-hover:opacity-95 transition-opacity"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
            <p className="text-center text-xs md:text-sm text-muted-foreground mt-3">
              Three pathways leading toward college-ready thinking and writing.
              Click image to expand.
            </p>
          </section>

          {/* SECTION 3 — THREE ACADEMIC PATHWAYS */}
          <section className="mb-14">
            <div className="grid md:grid-cols-3 gap-6">
              {pathways.map((p) => (
                <div
                  key={p.tag}
                  className="bg-white rounded-2xl border border-border/50 shadow-sm flex flex-col h-full overflow-hidden"
                >
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: p.accent }}
                    aria-hidden="true"
                  />
                  <div className="p-8 flex flex-col flex-grow">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${p.accent} 12%, transparent)`,
                        color: p.accent,
                      }}
                    >
                      {p.tag}
                    </span>
                    <h2 className="text-xl font-bold text-primary mb-2">
                      {p.heading}
                    </h2>
                    <p className="text-sm font-semibold text-foreground/70 mb-4 italic">
                      {p.subtitle}
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {p.body}
                    </p>
                    <div className="mt-auto">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                        {p.skillsLabel}
                      </h3>
                      <ul className="text-sm text-foreground/80 space-y-2">
                        {p.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-2">
                            <span
                              className="font-bold"
                              style={{ color: p.accent }}
                            >
                              •
                            </span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                      {p.tag === "Build a Case" && (
                        <div className="mt-6 pt-4 border-t border-slate-100">
                          <Link
                            to="/persuasive-writing"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 transition-colors"
                          >
                            <span>
                              Explore "Build Your Case" Curriculum &amp;
                              Standards
                            </span>
                            <span>→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 — GRAMMAR, VOCABULARY & WRITING FOUNDATIONS */}
          <section className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Grammar, Vocabulary & Writing Foundations
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sentence construction, grammar, paragraph development, and
                revision are reinforced throughout instruction. These
                foundational skills support every pathway — from creative
                expression to analytical and argumentative writing.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {foundationIcons.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center bg-white rounded-xl p-5 border border-border/50 shadow-sm"
                >
                  <item.icon
                    className="text-primary mb-3"
                    size={32}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-foreground/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 — PERSONALIZED ENGLISH & MATH TUTORING */}
          <section className="mb-20">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Personalized English & Math Tutoring
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Families may select English tutoring, math tutoring, or a
                combination within a scheduled session. Lessons draw upon Miss
                Pam's existing structured instructional materials and are
                selected according to student needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tutoringOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-slate-50 rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {option.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {option.desc}
                  </p>
                  {option.link && (
                    <Link
                      to={option.link.to}
                      className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80 transition-opacity mt-4"
                    >
                      {option.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 — CALL TO ACTION */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Stronger Reading, Writing, and Thinking Skills.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Not sure which pathway or tutoring option is right for your
              student? Start with a conversation about their strengths,
              challenges, and academic goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-consultation">
                <Button size="lg" className="text-lg px-8 h-14 shadow-sm">
                  Book a Consultation
                </Button>
              </Link>
              <Link
                to="/shop"
                className="text-base font-medium text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                Explore Independent Writing Resources
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnglishWritingPrograms;
