import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { BYC_BOOK1_AMAZON_URL, BYC_BOOK1_TPT_URL, FOTA_AMAZON_URL, FOTA_TPT_URL } from "@/lib/buildYourCase";

const PersuasiveWriting = () => {
  useSEO(
    "Persuasive Writing & SAT Prep Tutoring | Miss Pam Teaches",
    "Build persuasive writing and SAT reading skills step by step, from grades 5–12. Personalized tutoring plans for writing foundations, pre-SAT prep, and SAT mastery.",
  );
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Persuasive Writing
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Not every student is ready for SAT work yet — and that is okay.
              Miss Pam Teaches helps students build the skills in order: first
              clear writing, then deeper reading and analysis, then SAT-level
              precision.
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
                  Best for Grades 5–7
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                1. Writing Foundations
              </h3>
              <p className="text-foreground/80 mb-8 flex-grow">
                For students who need help writing clear paragraphs.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Students learn:
                  </h4>
                  <p className="text-sm text-foreground/80 font-medium">
                    Claim → Evidence → Explanation → Counterclaim → Response
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Good for students who:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Write short
                      answers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Skip
                      explanation
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need paragraph
                      frames
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need concrete
                      topics
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Packet/Class:
                  </h4>
                  <p className="text-sm text-primary font-bold">
                    Middle School Persuasive Writing Level 1
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/book-consultation">
                  <Button className="w-full h-12 text-base shadow-sm">
                    Start with Writing Foundations
                  </Button>
                </Link>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                  Best for Grades 7–9
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                2. Pre-SAT Reading & Writing
              </h3>
              <p className="text-foreground/80 mb-8 flex-grow">
                For students who are advanced or in honors/IB classes, but still
                need help reading carefully and explaining ideas.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Students learn:
                  </h4>
                  <p className="text-sm text-foreground/80 font-medium">
                    Read carefully → Find evidence → Explain thinking → Answer
                    harder questions
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Good for students who:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Rush through
                      reading
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Struggle with
                      literature analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Give shallow
                      answers
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need stronger
                      academic thinking
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Packet/Class:
                  </h4>
                  <p className="text-sm text-primary font-bold">
                    Pre-SAT Academic Reading & Writing
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/book-consultation">
                  <Button className="w-full h-12 text-base shadow-sm">
                    Build Pre-SAT Skills
                  </Button>
                </Link>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                  Best for Grades 9–12
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                3. SAT Reading & Writing
              </h3>
              <p className="text-foreground/80 mb-8 flex-grow">
                For students preparing for the SAT.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Students learn:
                  </h4>
                  <p className="text-sm text-foreground/80 font-medium">
                    Grammar → Evidence → Main idea → Inference → Timed accuracy
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
                    Good for students who:
                  </h4>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Are taking the
                      SAT soon
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Need score
                      improvement
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>Can already
                      read and explain fairly well
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl border border-border/50">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Packet/Class:
                  </h4>
                  <p className="text-sm text-primary font-bold">
                    SAT Reading & Writing Skill Ladder
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/book-consultation">
                  <Button className="w-full h-12 text-base shadow-sm">
                    Prepare for the SAT
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
                      Writing Foundations
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Grades 5–7
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Build strong paragraphs
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-primary">
                      Pre-SAT Reading & Writing
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Grades 7–9
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Read, analyze, explain
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-primary">
                      SAT Reading & Writing
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Grades 9–12
                    </td>
                    <td className="py-5 px-6 text-foreground/80 font-medium">
                      Test prep and precision
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION: FROM OPINIONS TO ARGUMENTS — 3-WEEK STARTER WORKBOOK */}
          <div className="mt-20 bg-white border border-sky-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-sky-50 text-sky-800 text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 border border-sky-200">
                <span>Start Here</span>
                <span>•</span>
                <span>3 Weeks</span>
                <span>•</span>
                <span>Grades 6–8</span>
                <span>•</span>
                <span>Paperback or PDF</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                From Opinions to Arguments
              </h2>
              <p className="text-xl text-sky-900 font-semibold mb-4">
                A hands-on argument writing workbook: turn an opinion into a
                clear claim, support it, and explain your thinking.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Each week focuses on one skill and follows the same four steps:
                learn the skill, guided practice, independent writing, and
                revision. It is a short, low-pressure way to begin before the
                8-week Build Your Case series.
              </p>
            </div>

            <ol className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { week: "Week 1", skill: "Turn an opinion into a claim", topic: "Should students help create classroom rules?" },
                { week: "Week 2", skill: "Support a claim with a reason", topic: "Should students choose their school projects?" },
                { week: "Week 3", skill: "Explain how your reason works", topic: "Should schools hold outdoor learning days?" },
              ].map((w) => (
                <li key={w.week} className="bg-slate-50 rounded-2xl p-6 border border-border/50 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">{w.week}</p>
                  <h3 className="text-lg font-bold text-primary mb-2">{w.skill}</h3>
                  <p className="text-sm text-foreground/80">{w.topic}</p>
                </li>
              ))}
            </ol>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={FOTA_AMAZON_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 px-8 text-base shadow-sm bg-sky-700 hover:bg-sky-800 text-white"
                  >
                    Paperback on Amazon
                  </Button>
                </a>
                <a href={FOTA_TPT_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-8 text-base border-sky-700 text-sky-800 hover:bg-sky-50"
                  >
                    Printable PDF on TPT
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Paperback: 26 pages, $9.99 • Printable PDF: 18 pages, $3.50
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Ready for more? Continue with Build Your Case below.
              </p>
            </div>
          </div>

          {/* SECTION: BUILD YOUR CASE — ARGUMENT BUILDER (DEBATE SECTION) */}
          <div className="mt-20 bg-gradient-to-b from-white to-slate-50 border border-emerald-200/80 rounded-3xl p-8 md:p-12 shadow-sm">
            {/* Header / Intro */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 border border-emerald-200">
                <span>Weeks 1–8</span>
                <span>•</span>
                <span>Level 1</span>
                <span>•</span>
                <span>Grades 5–7</span>
                <span>•</span>
                <span>Pre-Debate &amp; Argument Writing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Build Your Case — Argument Builder
              </h2>
              <p className="text-xl text-emerald-900 font-semibold mb-4">
                Help your student move from stating an opinion to building a
                clear, thoughtful argument.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  Homeschool
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  Parent-Guided
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  Critical Thinking &amp; Problem Solving
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  Gifted &amp; Advanced Younger Students
                </span>
              </div>
            </div>

            {/* Two Main Cards: Student Workbook + Parent & Teacher Support */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card 1: The Student Workbook */}
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  The Student Workbook
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Eight weekly lessons guide students through choosing a
                  position, giving reasons, developing specific examples,
                  explaining their thinking, and answering the other side
                  fairly.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto">
                  Readable pages include planning space, writing practice, and
                  checklists so students can build and review their own
                  arguments.
                </p>
              </div>

              {/* Card 2: Parent and Teacher Support */}
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Parent and Teacher Support
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The companion guide helps you understand what to teach, what
                  to look for, and how to help when your student gets stuck. It
                  includes teaching notes, sample case plans, model paragraphs,
                  activity guidance, and coaching questions.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mb-4">
                  Use the guide to help your student strengthen a vague reason,
                  explain an example more clearly, or respond directly to an
                  opposing argument. Guidance for different positions helps you
                  evaluate the reasoning—even when your student chooses a
                  different side.
                </p>
                <p className="text-xs text-muted-foreground italic border-t border-slate-100 pt-3">
                  Tip: Keep completed models separate during planning and
                  drafting. After your student’s first attempt, use a model to
                  discuss one skill and guide a revision.
                </p>
              </div>
            </div>

            {/* Core Philosophy Callout */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 text-center max-w-3xl mx-auto mb-12">
              <p className="text-base md:text-lg text-emerald-950 font-semibold leading-relaxed">
                "Your student does the thinking and writing. You have practical
                support for guiding the process."
              </p>
            </div>

            {/* Curriculum Grid / Specifications Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-12">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                Curriculum Recommendation &amp; Overview Grid
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 text-primary">
                      <th className="py-3 px-4 font-bold">Field</th>
                      <th className="py-3 px-4 font-bold">
                        Recommendation / Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        Grades
                      </td>
                      <td className="py-3 px-4 text-foreground/80 font-medium">
                        Keep 5th, 6th, and 7th (Level 1)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        Subject Areas
                      </td>
                      <td className="py-3 px-4 text-foreground/80">
                        Writing and Writing–Essays; English Language Arts
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        Custom Category
                      </td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">
                        Pre-Debate: Argument Writing &amp; Case Building
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        Format
                      </td>
                      <td className="py-3 px-4 text-foreground/80">
                        Print-and-go PDF (with editable companion guides where
                        applicable)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        Core Tags
                      </td>
                      <td className="py-3 px-4 text-foreground/80">
                        Homeschool, Parents, Critical Thinking, Problem Solving,
                        Advanced Students
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        Key Focus Phrases
                      </td>
                      <td className="py-3 px-4 text-foreground/80">
                        Argument writing, persuasive writing, debate prep,
                        argumentative writing grades 5–7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Educational Standards Codes Table */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-12">
              <div className="text-center max-w-2xl mx-auto mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Education Standards Codes
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  The strongest starting choices are writing organization and
                  revision standards:
                </p>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-emerald-100 bg-emerald-50/50 text-emerald-950">
                      <th className="py-3 px-4 font-bold">Standard Codes</th>
                      <th className="py-3 px-4 font-bold">
                        Connection to Your Resource
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-800">
                        W.5.4, W.6.4, W.7.4
                      </td>
                      <td className="py-3 px-4 text-foreground/80">
                        Clear, organized writing appropriate to the assignment
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-800">
                        W.5.5, W.6.5, W.7.5
                      </td>
                      <td className="py-3 px-4 text-foreground/80">
                        Planning, revising, and improving writing with guidance
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Argument-Specific Skills Note */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-xs md:text-sm text-foreground/80 space-y-3">
                <p>
                  <strong className="text-primary font-semibold">
                    Argument-Specific Skills Supported:{" "}
                  </strong>
                  Matches{" "}
                  <span className="font-mono font-bold text-primary">
                    W.5.1.a, W.5.1.d, W.6.1.a, W.6.1.e, W.7.1.a, and W.7.1.e
                  </span>{" "}
                  — stating and organizing a position, acknowledging opposition
                  (introduced in seventh grade), and writing a logical
                  conclusion.
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  <em>Scope Note:</em> This packet supports planning, structure,
                  reasoning, and revision skills rather than fully covering
                  every research citation requirement (full 6th and 7th-grade
                  standards also require credible external sources).
                </p>
              </div>
            </div>

            {/* Purchase CTA to TPT & Consultation */}
            <div className="text-center pt-2">
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Get the "Build Your Case" 8-Week Workbook
              </h4>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-sm">
                Student workbook plus Parent &amp; Teacher Guide. Available as a
                printable PDF on Teachers Pay Teachers
                {BYC_BOOK1_AMAZON_URL ? " or as a paperback on Amazon" : " (paperback coming soon on Amazon)"},
                or paired with weekly 1-on-1 coaching sessions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={BYC_BOOK1_TPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 px-8 text-base shadow-sm bg-emerald-700 hover:bg-emerald-800 text-white"
                  >
                    Printable PDF on TPT
                  </Button>
                </a>
                {BYC_BOOK1_AMAZON_URL && (
                  <a
                    href={BYC_BOOK1_AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto h-12 px-8 text-base border-emerald-700 text-emerald-800 hover:bg-emerald-50"
                    >
                      Paperback on Amazon
                    </Button>
                  </a>
                )}
                <Link to="/book-consultation" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-13 px-8 text-base border-primary text-primary hover:bg-primary/5"
                  >
                    Discuss Debate Tutoring
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Ready for more?{" "}
                <Link to="/debate" className="font-semibold text-primary underline underline-offset-4">
                  See the full Build Your Case debate series
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PersuasiveWriting;
