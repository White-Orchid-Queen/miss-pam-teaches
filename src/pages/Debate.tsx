import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { BubblesMark, BuildACaseLogo, SeriesLogo } from "@/components/BuildACaseLogo";
import {
  BarChart3,
  BookOpen,
  Check,
  CheckSquare,
  FileText,
  Layers,
  Lightbulb,
  Link2,
  MessageCircle,
  Scale,
  Search,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

type Step = {
  name: string;
  text: string;
  Icon: LucideIcon;
  tint: string;
};

// The six parts of every argument. Used in all 16 weeks.
const steps: Step[] = [
  {
    name: "Claim",
    text: "State your position or conclusion.",
    Icon: Target,
    tint: "bg-violet-50 text-violet-800 border-violet-200",
  },
  {
    name: "Reason",
    text: "Give a clear and logical reason.",
    Icon: Lightbulb,
    tint: "bg-blue-50 text-blue-800 border-blue-200",
  },
  {
    name: "Evidence",
    text: "Use relevant facts, examples, or data.",
    Icon: Layers,
    tint: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    name: "Explanation",
    text: "Show how the evidence supports your claim.",
    Icon: BookOpen,
    tint: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    name: "Counterclaim",
    text: "Present a reasonable opposing viewpoint.",
    Icon: Scale,
    tint: "bg-orange-50 text-orange-800 border-orange-200",
  },
  {
    name: "Response",
    text: "Answer the counterclaim with evidence and reasoning.",
    Icon: ShieldCheck,
    tint: "bg-rose-50 text-rose-800 border-rose-200",
  },
];

// Weeks 1–8: the supports students get, and which stages still use them.
const stages = [
  { weeks: "Weeks 1–2", name: "Watch and Learn" },
  { weeks: "Weeks 3–4", name: "Try It Together" },
  { weeks: "Weeks 5–6", name: "Take the Lead" },
  { weeks: "Weeks 7–8", name: "Build Your Own Case" },
];

const supports: { name: string; text: string; Icon: LucideIcon; on: boolean[] }[] = [
  {
    name: "Model Examples",
    text: "See what a strong argument looks like.",
    Icon: BookOpen,
    on: [true, true, false, false],
  },
  {
    name: "Sentence Starters",
    text: "Get help getting started.",
    Icon: MessageCircle,
    on: [true, true, false, false],
  },
  {
    name: "Guided Questions",
    text: "Think through each part.",
    Icon: CheckSquare,
    on: [true, true, true, false],
  },
  {
    name: "Evidence Cards",
    text: "Practice finding and using evidence.",
    Icon: FileText,
    on: [true, true, true, false],
  },
  {
    name: "Planning Templates",
    text: "Organize your ideas.",
    Icon: Layers,
    on: [true, true, true, false],
  },
  {
    name: "Step-by-Step Instructions",
    text: "Follow a clear process.",
    Icon: Users,
    on: [true, false, false, false],
  },
  {
    name: "Independent Practice",
    text: "Build the whole case on your own.",
    Icon: Target,
    on: [false, false, false, true],
  },
];

// Weeks 9–16: same six parts, more rigor each week.
const ladder: { weeks: string; name: string; text: string; Icon: LucideIcon }[] = [
  {
    weeks: "Weeks 9–10",
    name: "Strengthen the Evidence",
    text: "Choose the most relevant and convincing evidence.",
    Icon: BarChart3,
  },
  {
    weeks: "Week 11",
    name: "Understand Types of Support",
    text: "Tell facts from examples and explain how each is used.",
    Icon: Layers,
  },
  {
    weeks: "Week 12",
    name: "Evaluate Sources",
    text: "Check credibility, purpose, and reliability.",
    Icon: Search,
  },
  {
    weeks: "Week 13",
    name: "Explain the Connection",
    text: "Show clearly how the evidence supports the claim.",
    Icon: Link2,
  },
  {
    weeks: "Week 14",
    name: "Compare Competing Evidence",
    text: "Analyze evidence for different positions.",
    Icon: Scale,
  },
  {
    weeks: "Week 15",
    name: "Strengthen the Rebuttal",
    text: "Address a real weakness in the opposing view.",
    Icon: ShieldCheck,
  },
  {
    weeks: "Week 16",
    name: "Defend the Complete Case",
    text: "Write and present a fully developed, polished argument.",
    Icon: Trophy,
  },
];

const Debate = () => {
  useSEO(
    "Build a Case: Debate Prep for Grades 5–9 | Miss Pam Teaches",
    "Build a Case is a debate and argument writing program in two series: Build the Foundations of an Argument (grades 5–7) and Build and Defend a Case (grades 7–9). Students learn claim, reason, evidence, explanation, counterclaim, and response.",
  );

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16 md:mb-20">
            <BuildACaseLogo className="mb-8 max-w-full" />
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              A debate and argument writing program in two series. Students
              learn to build an argument, prove it with evidence, and defend it
              against the other side.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                  Discuss Debate Tutoring
                </Button>
              </Link>
              <a href="#series" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 text-base border-primary text-primary hover:bg-primary/5"
                >
                  Choose a Series
                </Button>
              </a>
            </div>
          </div>

          {/* The two series */}
          <section id="series" className="mb-20 md:mb-24 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
              Two Series, One Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm flex flex-col">
                <SeriesLogo grades="5th–7th Grade" title="Build the Foundations of an Argument" className="mb-6" />
                <p className="text-foreground/80 mb-6 flex-grow">
                  Students learn the six parts of an argument with plenty of
                  support, then use fewer supports each week until they build a
                  case on their own.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="#foundations">
                    <Button className="w-full h-12 text-base shadow-sm">See the Foundations Plan</Button>
                  </a>
                  <a
                    href="https://www.teacherspayteachers.com/Product/Argument-Writing-Debate-Prep-Grades-57-8-Weeks-Teacher-Guide-17404401"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-12 text-base border-primary text-primary hover:bg-primary/5"
                    >
                      Get the Workbook on TPT
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm flex flex-col">
                <SeriesLogo grades="7th–9th Grade" title="Build and Defend a Case" className="mb-6" />
                <p className="text-foreground/80 mb-6 flex-grow">
                  Students keep the same six-part process and make every part
                  stronger: better evidence, source checks, deeper reasoning,
                  and rebuttals that hold up in a real debate.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="#defend">
                    <Button className="w-full h-12 text-base shadow-sm">See the Build and Defend Plan</Button>
                  </a>
                  <Link to="/book-consultation">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-base border-primary text-primary hover:bg-primary/5"
                    >
                      Ask About This Series
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* The six-part process */}
          <section className="mb-20 md:mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                The Case-Building Process
              </h2>
              <p className="text-lg text-foreground/80">
                Both series use the same six parts. Students learn them in
                order, then make each part stronger.
              </p>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map(({ name, text, Icon, tint }, i) => (
                <li
                  key={name}
                  className="bg-slate-50 rounded-2xl p-6 border border-border/50 shadow-sm flex gap-4"
                >
                  <div
                    className={`w-12 h-12 shrink-0 rounded-xl border flex items-center justify-center ${tint}`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Step {i + 1}
                    </p>
                    <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
                    <p className="text-sm text-foreground/80">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Weeks 1–8 */}
          <section id="foundations" className="mb-20 md:mb-24 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                Series 1 • 5th–7th Grade • Weeks 1–8
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-6 mb-4">
                Build the Foundations of an Argument
              </h2>
              <p className="text-lg text-foreground/80">
                Students learn the six parts with plenty of support. Each stage
                removes a few supports, so students take more ownership every
                week.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stages.map((s, i) => (
                <div
                  key={s.name}
                  className="bg-white rounded-2xl p-5 border border-border/50 shadow-sm text-center"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    {i + 1}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {s.weeks}
                  </p>
                  <h3 className="text-lg font-bold text-primary">{s.name}</h3>
                </div>
              ))}
            </div>

            <div className="bg-white border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-center text-primary mb-6">
                How the Support Fades
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px] text-sm">
                  <thead>
                    <tr className="border-b-2 border-primary/10">
                      <th className="py-3 px-4 font-bold text-primary">Support</th>
                      {stages.map((s) => (
                        <th key={s.name} className="py-3 px-2 font-bold text-primary text-center">
                          {s.weeks}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {supports.map(({ name, text, Icon, on }) => (
                      <tr key={name} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                            <div>
                              <p className="font-bold text-primary">{name}</p>
                              <p className="text-xs text-muted-foreground">{text}</p>
                            </div>
                          </div>
                        </td>
                        {on.map((yes, i) => (
                          <td key={i} className="py-3 px-2 text-center">
                            {yes ? (
                              <Check className="w-5 h-5 mx-auto text-emerald-600" aria-label="Used" />
                            ) : (
                              <span className="text-slate-300" aria-label="Not used">
                                —
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 text-sm font-semibold text-primary bg-slate-50 rounded-xl px-5 py-3 border border-border/50">
                <span>More support</span>
                <span aria-hidden="true" className="flex-1 border-t-2 border-dashed border-primary/20" />
                <span>More independence</span>
              </div>
            </div>
          </section>

          {/* Weeks 9–16 */}
          <section id="defend" className="mb-20 md:mb-24 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                Series 2 • 7th–9th Grade • Weeks 9–16
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-6 mb-4">
                Build and Defend a Case
              </h2>
              <p className="text-lg text-foreground/80">
                Picks up where Foundations ends. Students use the six-part
                process on their own, and each week adds a harder reasoning or
                evidence skill.
              </p>
            </div>
            <ol className="relative max-w-3xl mx-auto space-y-4 before:absolute before:left-6 before:top-6 before:bottom-6 before:w-0.5 before:bg-primary/10">
              {ladder.map(({ weeks, name, text, Icon }) => (
                <li
                  key={name}
                  className="relative bg-slate-50 rounded-2xl p-5 border border-border/50 shadow-sm flex items-center gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center text-primary relative z-10 -ml-[1px]">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {weeks}
                    </p>
                    <h3 className="text-lg font-bold text-primary">{name}</h3>
                    <p className="text-sm text-foreground/80">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Student experiences */}
          <section className="mb-20 md:mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Real Student Experiences
              </h2>
              <p className="text-lg text-foreground/80">
                From learning the process to using it in a real debate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  who: "Sixth Grade Student",
                  series: "Build the Foundations of an Argument",
                  challenge:
                    "Learning the whole argument process and how all the parts fit together.",
                  experience:
                    "Worked through the lessons step by step, with guided practice and support.",
                  result:
                    "Gained a clear understanding of how to build a complete argument using a claim, reasons, evidence, explanation, counterclaim, and response.",
                },
                {
                  who: "Eighth Grade Student",
                  series: "Build and Defend a Case",
                  challenge:
                    "It took time to understand the argument-building process and use it independently.",
                  experience:
                    "Practiced developing claims, using evidence, explaining reasoning, and answering counterarguments through the lessons.",
                  result:
                    "Took part in an after-school debate program (not school-sponsored) and said he felt prepared because he knew how to build and defend his case. He reported that he believed he earned first place.",
                },
              ].map((s) => (
                <div
                  key={s.who}
                  className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-primary">{s.who}</h3>
                  <p className="text-sm font-semibold text-teal-700 mb-6">{s.series}</p>
                  <dl className="space-y-5 text-foreground/80">
                    <div>
                      <dt className="font-bold text-primary text-sm uppercase tracking-wider mb-1">
                        The Challenge
                      </dt>
                      <dd>{s.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-primary text-sm uppercase tracking-wider mb-1">
                        The Experience
                      </dt>
                      <dd>{s.experience}</dd>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-border/50">
                      <dt className="font-bold text-primary text-sm uppercase tracking-wider mb-1">
                        The Result
                      </dt>
                      <dd>{s.result}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          {/* Big picture + CTA */}
          <section className="bg-gradient-to-b from-white to-slate-50 border border-border/50 rounded-3xl p-6 md:p-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
              The Big Picture for Parents
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <Check className="w-7 h-7 shrink-0 text-emerald-600" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    Foundations builds confidence and independence.
                  </h3>
                  <p className="text-foreground/80">
                    Students learn the parts of an argument with clear support
                    that gradually fades.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-7 h-7 shrink-0 text-emerald-600" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    Build and Defend increases the rigor.
                  </h3>
                  <p className="text-foreground/80">
                    Students develop stronger evidence, deeper reasoning, source
                    evaluation, and more persuasive rebuttals.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center border-t border-border/50 pt-10">
              <BubblesMark className="w-16 mx-auto mb-4" />
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 font-medium">
                Build a Case helps students move from learning the parts of an
                argument to using those skills in real discussions and debates.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book-consultation" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-sm">
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/persuasive-writing" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-8 text-base border-primary text-primary hover:bg-primary/5"
                  >
                    See the Persuasive Writing Path
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Debate;
