import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";

const MathTutoring = () => {
  useSEO(
    "Algebra & Math Tutoring | Miss Pam Teaches",
    "Private algebra and math tutoring for grades 4-11. Personalized, one-on-one instruction that builds real number sense and problem-solving confidence.",
  );
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Math &amp; Algebra Tutoring
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Not every student is ready for algebra yet — and that's okay. Miss
              Pam Teaches builds math skills in order: first number sense, then
              early algebra, then advanced problem-solving.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Start Here: Choose Your Student’s Level
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Level 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                  Best for Grades 4–6
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                1. Math Foundations
              </h3>
              <p className="text-foreground/80 mb-8 flex-grow">
                For students who need to strengthen core number sense before
                algebra.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Students learn:
                  </h4>
                  <p className="text-sm text-foreground/80 font-medium">
                    Fractions &amp; Decimals → Multi-Step Word Problems → Order
                    of Operations → Ratios &amp; Proportions
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Good for students who:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Struggle with
                      multi-step problems
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Mix up
                      fraction/decimal operations
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Rush through
                      word problems
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need a
                      stronger number sense base
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Packet/Class:
                  </h4>
                  <p className="text-sm text-primary font-bold">
                    Grades 4–6 Math Foundations
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/book-consultation">
                  <Button className="w-full h-12 text-base shadow-sm">
                    Start with Math Foundations
                  </Button>
                </Link>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                  Best for Grades 6–8
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                2. Early Algebra
              </h3>
              <p className="text-foreground/80 mb-8 flex-grow">
                For students moving into pre-algebra and early algebra concepts.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Students learn:
                  </h4>
                  <p className="text-sm text-foreground/80 font-medium">
                    Variables &amp; Expressions → Solving Equations → Ratios
                    &amp; Proportional Reasoning → Intro to Functions
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Good for students who:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Are new to
                      variables and equations
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Get confused
                      switching between arithmetic and algebra
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need concrete
                      step-by-step methods
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Are preparing
                      for Algebra I
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Packet/Class:
                  </h4>
                  <p className="text-sm text-primary font-bold">
                    Early Algebra Skill Builder
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/book-consultation">
                  <Button className="w-full h-12 text-base shadow-sm">
                    Build Early Algebra Skills
                  </Button>
                </Link>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                  Best for Grades 8–11
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                3. Algebra I &amp; II Support
              </h3>
              <p className="text-foreground/80 mb-8 flex-grow">
                For students working through Algebra I/II coursework who need
                reinforcement.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Students learn:
                  </h4>
                  <p className="text-sm text-foreground/80 font-medium">
                    Linear Equations &amp; Graphing → Systems of Equations →
                    Quadratics → Functions &amp; Polynomials
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Good for students who:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Are currently
                      taking Algebra I or II
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need help
                      keeping pace with class
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Want to build
                      confidence before tests
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Are aiming to
                      prep for the SAT eventually
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Packet/Class:
                  </h4>
                  <p className="text-sm text-primary font-bold">
                    Algebra I &amp; II Tutoring Support
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/book-consultation">
                  <Button className="w-full h-12 text-base shadow-sm">
                    Get Algebra I &amp; II Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Simple Graphic Section */}
          <div className="bg-white border border-border/50 rounded-3xl p-8 md:p-10 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Curriculum At a Glance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-primary/10">
                    <th className="py-4 px-6 font-bold text-primary text-lg">
                      Start Here
                    </th>
                    <th className="py-4 px-6 font-bold text-primary text-lg">
                      Best For
                    </th>
                    <th className="py-4 px-6 font-bold text-primary text-lg">
                      Main Skill
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-primary">
                      Math Foundations
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Grades 4–6
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Number sense &amp; operations
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-primary">
                      Early Algebra
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Grades 6–8
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Variables &amp; equations
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-primary">
                      Algebra I &amp; II Support
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Grades 8–11
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Advanced algebra &amp; functions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SAT Math Preparation & Bootcamps */}
          <section className="mt-16 max-w-[900px] mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-3">
                SAT Math Preparation & Bootcamps
              </h2>
              <p className="text-lg text-primary/80 font-semibold mb-4">
                Diagnose Weaknesses. Build Skills. Master the Test.
              </p>
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                SAT Math success requires more than taking practice tests. Miss
                Pam Teaches uses diagnostic assessments and targeted instruction
                to help students identify weaknesses, strengthen mathematical
                reasoning, and practice questions at increasing levels of
                difficulty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Algebra",
                "Advanced Math",
                "Problem-Solving & Data Analysis",
                "Geometry & Trigonometry",
              ].map((domain) => (
                <div
                  key={domain}
                  className="bg-slate-50 rounded-2xl p-6 border border-border/50 shadow-sm text-center"
                >
                  <h3 className="text-base font-bold text-primary leading-snug">
                    {domain}
                  </h3>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground/80 leading-relaxed mb-8 max-w-3xl mx-auto">
              SAT instruction includes diagnostic assessment, skill-specific
              lessons, easy, medium, and hard practice questions, accuracy and
              pacing strategies, and focused SAT Math bootcamp preparation.
            </p>

            <div className="text-center">
              <a
                href="https://1600sat.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 text-base px-8 shadow-sm">
                  Explore SAT Math Programs
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MathTutoring;
