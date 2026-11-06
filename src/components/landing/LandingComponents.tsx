import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  { to: "/tutoring", label: "Tutoring" },
  { to: "/coaching", label: "Coaching" },
  { to: "/persuasive-writing", label: "Persuasive Writing" },
  { to: "/debate", label: "Debate" },
  { to: "/creative-writing", label: "Creative Writing" },
  { to: "/state-testing", label: "State Testing" },
  { to: "/grammar", label: "Grammar" },
  { to: "/math-tutoring", label: "Math Tutoring" },
  { to: "/english-writing-programs", label: "English & Writing" },
  { to: "/sat-prep", label: "SAT Prep" },
  { to: "/shop", label: "Shop" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the phone menu when the page changes or Escape is pressed.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <nav className="bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="https://vibe.filesafe.space/1778675984868425758/attachments/3276d80c-5e72-409c-a69e-246cf64b69e4.png"
              alt="Miss Pam Teaches Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
            <span className="font-bold text-xl tracking-tight whitespace-nowrap">
              Miss Pam Teaches
            </span>
          </Link>
          <div className="hidden xl:flex items-center gap-4 min-w-0">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium leading-tight text-center hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/book-consultation" className="shrink-0">
              <Button size="sm">Book a Consultation</Button>
            </Link>
          </div>
          <button
            type="button"
            className="xl:hidden inline-flex items-center gap-2 h-10 px-3 rounded-md border border-border text-sm font-semibold"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
            Menu
          </button>
        </div>
        {menuOpen && (
          <div
            id="mobile-menu"
            className="xl:hidden border-t bg-background max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="container mx-auto px-4 py-3 grid sm:grid-cols-2 gap-x-6">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    aria-current={pathname === l.to ? "page" : undefined}
                    className={`block py-3 text-base font-medium border-b border-border/60 ${
                      pathname === l.to ? "text-primary font-bold" : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="container mx-auto px-4 pb-4">
              <Link to="/book-consultation">
                <Button className="w-full h-12 text-base">Book a Consultation</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export const Hero = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-primary">
          Build Strong Skills Today. Prepare for What's Next.
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
          Personalized Math, English & SAT Preparation | Grades 4–12
        </p>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-3xl mx-auto">
          From middle school foundations to advanced high school coursework and
          college entrance exams, Miss Pam Teaches helps students develop the
          knowledge, reasoning, and independence they need to succeed.
        </p>

        {/* Academic progression illustration — click to view full size */}
        <div className="max-w-[900px] mx-auto mb-6">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-border/40 shadow-sm transition-all hover:shadow-md"
            aria-label="View academic progression artwork in full size"
          >
            <img
              src="https://vibe.filesafe.space/1778675984868425758/attachments/57b2e3c8-a505-4c72-9221-ffc84b394340.png"
              alt="Academic progression toward college readiness"
              className="w-full aspect-[3/1] object-cover"
              loading="eager"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto text-left">
          <Link
            to="/math-tutoring"
            className="block bg-white rounded-2xl p-6 border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-bold text-primary mb-2">Math</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-3">
              Pre-Algebra, rigorous Algebra I, Geometry, and Algebra II. Build
              mathematical reasoning, problem-solving skills, and confidence
              with challenging coursework.
            </p>
            <span className="text-sm font-semibold text-primary hover:underline">
              Explore Math Tutoring →
            </span>
          </Link>
          <Link
            to="/english-writing-programs"
            className="block bg-white rounded-2xl p-6 border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-bold text-primary mb-2">English</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-3">
              Reading comprehension, grammar, literary analysis, creative
              writing, and evidence-based essays.
            </p>
            <span className="text-sm font-semibold text-primary hover:underline">
              Explore English Programs →
            </span>
          </Link>
          <a
            href="https://1600sat.online"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-6 border border-border/50 shadow-sm transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-bold text-primary mb-2">
              SAT Preparation
            </h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-3">
              Diagnostic-driven SAT Math preparation across all four tested
              domains, with targeted instruction, easy-to-hard practice
              questions, test strategies, and focused bootcamps.
            </p>
            <span className="text-sm font-semibold text-primary hover:underline">
              Explore SAT Prep →
            </span>
          </a>
        </div>

        <p className="text-xl md:text-2xl font-medium text-primary mb-8">
          Skills build grades. Strong skills open doors.
        </p>
        <Link to="/book-consultation">
          <Button size="lg" className="text-lg px-8 h-14">
            Book a Tutoring Consultation
          </Button>
        </Link>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Academic progression artwork"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src="https://vibe.filesafe.space/1778675984868425758/attachments/57b2e3c8-a505-4c72-9221-ffc84b394340.png"
            alt="Academic progression toward college readiness — full size"
            className="max-w-full max-h-[88vh] w-auto h-auto rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export const Section2 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
          Reading. Writing. Math.
        </h2>
        <p className="text-xl text-foreground/80 leading-relaxed">
          Private tutoring for middle school students who want to do better. As
          a dedicated reading and writing tutor, Miss Pam works on the skills
          behind the grades — building vocabulary skills, real reading
          comprehension, clear essay writing, and math that actually makes
          sense.
        </p>
      </div>
    </section>
  );
};

export const Section3 = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Is this your student?
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-primary-foreground/90 mb-12 text-left inline-block">
          <p>— Turns in work but doesn't know why the grade is low</p>
          <p>— Can read the words but can't explain what they mean</p>
          <p>— Gets lost in math before the test even starts</p>
        </div>
        <p className="text-xl font-medium mb-10">
          If that sounds like your student, Miss Pam can help.
        </p>
        <Link to="/book-consultation">
          <Button size="lg" variant="secondary" className="text-lg px-8 h-14">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export const Section4 = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Miss Pam teaches skills, not shortcuts.
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Every session builds reading, writing, or math from the inside out
              — so your student improves in every class, not just one. 13 years
              of private tutoring experience. Real skills. Real results.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center py-8">
            <div className="relative w-full max-w-[220px] md:max-w-[260px]">
              {/* Navy glow */}
              <div
                className="absolute inset-0 bg-primary/30 blur-3xl animate-float scale-110 rounded-full"
                style={{ animationDelay: "0s" }}
              ></div>
              <img
                src="https://vibe.filesafe.space/1778675984868425758/attachments/05aa41b5-7796-498d-ba62-53f24a11b0f8.png"
                alt="Miss Pam"
                className="relative z-10 shadow-[0_0_50px_rgba(15,23,42,0.5)] w-full aspect-square animate-gentle-bounce object-cover border-4 border-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Section5 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Not ready to book? Start here.
        </h2>
        <p className="text-xl text-foreground/80 leading-relaxed mb-10">
          Grab a study guide your student can use today. Classic literature
          guides, writing prompts, and math practice — simple, print-and-go
          resources from Miss Pam's store.
        </p>
        <a
          href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="text-lg px-8 h-14">
            Shop Miss Pam Teaches on TPT
          </Button>
        </a>
      </div>
    </section>
  );
};

export const Section6 = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          For families who want more than a grade boost.
        </h2>
        <p className="text-xl text-foreground/80 leading-relaxed mb-10">
          Miss Pam works with a small number of highly motivated families using
          a structured reading and writing system built over 13 years of private
          tutoring. If your student is ready to go deeper, let's talk.
        </p>
        <Link to="/coaching">
          <Button size="lg" className="text-lg px-8 h-14">
            Learn About Coaching
          </Button>
        </Link>
      </div>
    </section>
  );
};

export const Specialties = () => {
  const keywordRows = [
    [
      { text: "Online English Tutoring" },
      { text: "Private Writing Tutor" },
      { text: "Reading and Writing Tutor" },
    ],
    [
      { text: "Essay Writing Tutor" },
      { text: "Building Vocabulary Skills" },
      { text: "Creative Writing Tutor" },
      { text: "College Application Essays" },
      { text: "SAT Persuasive Writing Series" },
    ],
    [
      { text: "English Tutoring Near Me" },
      { text: "Online Writing Tutor" },
      { text: "English Tutor" },
    ],
  ];

  return (
    <section className="py-24 bg-white border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full w-3/4 h-full mx-auto -z-10"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          Tutoring Specialties & Focus Areas
        </h2>
        <div className="flex flex-col gap-6 px-4 py-8 items-center">
          {keywordRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center items-center gap-4 md:gap-6 animate-float"
              style={{
                animationDelay: `${rowIndex * 1.5}s`,
                animationDuration: `${14 + rowIndex * 4}s`,
              }}
            >
              {row.map((keyword) => (
                <span
                  key={keyword.text}
                  className={`px-6 py-3 border border-primary rounded-full text-sm md:text-base font-semibold shadow-sm transition-transform hover:scale-110 hover:z-10 cursor-default bg-primary text-primary-foreground`}
                >
                  {keyword.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground/60 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-6 font-medium">
          Miss Pam Teaches | Private Tutoring for Grades 4–12 | English, Math,
          Writing, Grammar, and Test Prep | Online and In-Person
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://www.teacherspayteachers.com/Store/Miss-Pam-Teaches"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Shop TPT Store
          </a>
          <Link
            to="/book-consultation"
            className="hover:text-white transition-colors"
          >
            Book a Consultation
          </Link>
          <Link to="/coaching" className="hover:text-white transition-colors">
            Learn About Coaching
          </Link>
          <a href="/sitemap.xml" className="hover:text-white transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export const SuccessStories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Real Student Success
          </h2>
          <p className="text-xl text-foreground/80">
            There is a difference between teaching gifted students and actually
            building a strong foundation from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-border/50 shadow-sm relative flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">
              780
            </div>
            <div className="font-semibold text-foreground/90 mb-6 uppercase tracking-wider text-sm">
              SAT English Score
            </div>
            <ul className="text-foreground/80 space-y-3 text-left w-full mb-6 relative z-10 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Wrote structurally sound essays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Learned exactly why errors didn't work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Built from foundational reading & writing</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-border/50 w-full font-medium text-primary">
              — 5 Year Student of Reading and Writing Academy
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-border/50 shadow-sm relative flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">
              740
            </div>
            <div className="font-semibold text-foreground/90 mb-6 uppercase tracking-wider text-sm">
              SAT English Score
            </div>
            <ul className="text-foreground/80 space-y-3 text-left w-full mb-6 relative z-10 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Scored 740 without much studying</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Built a strong foundation over 4-5 years</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Improved writing through clear structure</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-border/50 w-full font-medium text-primary">
              — 4-Year Writing & Math Student (SAT Math +20 pts/month in the 700
              range)
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-border/50 shadow-sm relative flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">
              5th-11th
            </div>
            <div className="font-semibold text-foreground/90 mb-6 uppercase tracking-wider text-sm">
              Reading and Writing Academy
              <span className="block italic normal-case tracking-normal text-xs mt-1 text-foreground/70">
                Skill Building Focus
              </span>
            </div>
            <ul className="text-foreground/80 space-y-3 text-left w-full mb-6 relative z-10 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Transforms weak paragraphs into essays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Builds foundation from the ground up</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Prepares younger students for high school</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-border/50 w-full font-medium text-primary">
              — Reading and Writing Mentorship Academy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MapSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Serving the DFW Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for in-person tutoring within 30 miles of DFW Airport
            (Grapevine, Coppell, Highland Park, Roanoke, Trophy Club, Southlake)
            and online tutoring everywhere.
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border/50 relative flex items-center justify-center">
          <iframe
            src="https://maps.google.com/maps?ll=32.8998,-97.0403&z=10&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DFW Area Map"
            className="absolute inset-0 pointer-events-none"
          ></iframe>
          {/* Static overlay to prevent map interaction so the circle stays aligned */}
          <div className="absolute inset-0 z-10 pointer-events-auto"></div>

          {/* 30 mile radius circle overlay */}
          <div className="absolute w-[320px] md:w-[400px] aspect-square rounded-full bg-red-500/20 border-2 border-red-500/40 pointer-events-none z-20 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-red-600 shadow-sm translate-y-12">
              30 Mile Radius
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
