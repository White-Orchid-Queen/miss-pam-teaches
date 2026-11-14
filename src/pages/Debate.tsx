import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { BubblesMark, BuildACaseLogo, SeriesLogo } from "@/components/BuildACaseLogo";
import { BYC_BOOK1_AMAZON_URL, BYC_BOOK1_TPT_URL } from "@/lib/buildYourCase";
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

// The six parts of every argument. Used every week.
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
    name: "Support",
    text: "Give a specific example that shows your reason.",
    Icon: Layers,
    tint: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    name: "Explanation",
    text: "Show how your support connects to your claim.",
    Icon: BookOpen,
    tint: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    name: "Counterclaim",
    text: "Describe the other side fairly.",
    Icon: Scale,
    tint: "bg-orange-50 text-orange-800 border-orange-200",
  },
  {
    name: "Response",
    text: "Answer that concern directly with clear reasoning.",
    Icon: ShieldCheck,
    tint: "bg-rose-50 text-rose-800 border-rose-200",
  },
];

// Weeks 1–8: matches the Build Your Case Book 1 workbook and its Parent & Teacher Guide.
const stages = [
  { weeks: "Weeks 1–3", name: "Learn from Models" },
  { weeks: "Weeks 4–5", name: "Find Your Own Reasons" },
  { weeks: "Week 6", name: "Independence Checkpoint" },
  { weeks: "Weeks 7–8", name: "Answer the Other Side" },
];

const supports: { name: string; text: string; Icon: LucideIcon; on: boolean[] }[] = [
  {
    name: "Clear Definitions",
    text: "Each part of the argument is explained every week.",
    Icon: Layers,
    on: [true, true, true, true],
  },
  {
    name: "Weak vs. Stronger Examples",
    text: "See what makes a claim, example, or explanation strong.",
    Icon: BookOpen,
    on: [true, true, false, false],
  },
  {
    name: "Lists of Possible Reasons",
    text: "Choose from reasons before writing your own.",
    Icon: FileText,
    on: [true, false, false, false],
  },
  {
    name: "Sentence Frames",
    text: "Starters in the Week 1 planner and the Weeks 7–8 counterclaim pages.",
    Icon: MessageCircle,
    on: [true, false, false, true],
  },
  {
    name: "Ask Yourself Questions",
    text: "Planning questions replace the models.",
    Icon: CheckSquare,
    on: [false, true, true, true],
  },
  {
    name: "Independent Planning",
    text: "Plan and write the whole argument yourself.",
    Icon: Target,
    on: [false, false, true, true],
  },
  {
    name: "Parent & Teacher Guide",
    text: "Model arguments and coaching questions for the adult.",
    Icon: Users,
    on: [true, true, true, true],
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
    name: "Weigh the Evidence",
    text: "Judge which supplied evidence is most reliable, and explain why.",
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

/**
 * Where to buy Book 1. Same book in two formats: a printable PDF on TPT and a
 * paperback on Amazon. Until BYC_BOOK1_AMAZON_URL is filled in, the Amazon
 * slot shows "Paperback coming soon on Amazon" instead of a link.
 */
const BookOneButtons = ({ stacked = false }: { stacked?: boolean }) => {
  const wrap = stacked
    ? "flex flex-col gap-3"
    : "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4";
  const size = stacked ? "w-full h-12 text-base" : "w-full sm:w-auto h-12 px-8 text-base";
  return (
    <div className={wrap}>
      <a href={BYC_BOOK1_TPT_URL} target="_blank" rel="noopener noreferrer" className={stacked ? "" : "w-full sm:w-auto"}>
        <Button className={`${size} shadow-sm`}>Get the Printable PDF on TPT</Button>
      </a>
      {BYC_BOOK1_AMAZON_URL ? (
        <a href={BYC_BOOK1_AMAZON_URL} target="_blank" rel="noopener noreferrer" className={stacked ? "" : "w-full sm:w-auto"}>
          <Button variant="outline" className={`${size} border-primary text-primary hover:bg-primary/5`}>
            Get the Paperback on Amazon
          </Button>
        </a>
      ) : (
        <p className={`${stacked ? "" : "w-full sm:w-auto"} text-sm font-semibold text-muted-foreground text-center`}>
          Paperback coming soon on Amazon
        </p>
      )}
    </div>
  );
};

const Debate = () => {
  useSEO(
    "Build Your Case: Argument Writing & Debate Prep for Grades 5–9 | Miss Pam Teaches",
    "Build Your Case is an argument writing and debate prep series. Argument Builder (grades 5–7) teaches claim, reason, support, explanation, counterclaim, and response with support that fades each week. Available as a printable PDF on TPT and as a paperback.",
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
              A debate and argument writing program. Students learn to build an
              argument, prove it with evidence, and defend it against the other
              side.
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
              Choose a Series
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm flex flex-col">
                <SeriesLogo grades="5th–7th Grade" title="Argument Builder" subtitle="Level 1 • Argument Foundations" className="mb-6" />
                <p className="text-sm font-bold uppercase tracking-wider text-center text-muted-foreground mb-3">
                  Book 1 (Weeks 1–8) available now
                </p>
                <p className="text-foreground/80 mb-6 flex-grow">
                  A 24-week path in three 8-week books. Book 1 teaches the six
                  parts of an argument with support that fades each week, plus
                  a Parent &amp; Teacher Guide. Books 2 and 3 make every part
                  stronger and move students to defending their case on their
                  own.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="#foundations">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-base border-primary text-primary hover:bg-primary/5"
                    >
                      See the Book 1 Plan
                    </Button>
                  </a>
                  <BookOneButtons stacked />
                </div>
              </div>
              <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm flex flex-col">
                <SeriesLogo grades="7th–9th Grade" title="Argument Challenger" subtitle="Level 2 • Analytical Foundations" className="mb-6" />
                <p className="text-sm font-bold uppercase tracking-wider text-center text-muted-foreground mb-3">
                  In Tutoring Now • Not on TPT Yet
                </p>
                <p className="text-foreground/80 mb-6 flex-grow">
                  The series for older students, taught one-on-one with Miss
                  Pam. It uses the same six-part process with harder topics and
                  stronger debate skills.
                </p>
                <div className="flex flex-col gap-3">
                  <Link to="/book-consultation">
                    <Button
                      variant="outline"
                      className="w-full h-12 text-base border-primary text-primary hover:bg-primary/5"
                    >
                      Ask About Argument Challenger
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
                Every week uses the same six parts. Students learn them in
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
                Argument Builder • Book 1 • Weeks 1–8 • Available Now
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-6 mb-4">
                Build the Foundation
              </h2>
              <p className="text-lg text-foreground/80">
                Students learn the six parts with plenty of support. Each stage
                removes a few supports, so students take more ownership every
                week. By Week 6, they plan and write a full argument on their
                own.
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
            <div className="text-center mt-8">
              <BookOneButtons />
              <p className="text-sm text-muted-foreground mt-3">
                89 pages: student workbook plus Parent &amp; Teacher Guide. Same
                book as a printable PDF or a paperback.
              </p>
            </div>
          </section>

          {/* Weeks 9–16 */}
          <section id="strengthen" className="mb-20 md:mb-24 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                Argument Builder • Book 2 • Weeks 9–16 • Coming Soon
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-6 mb-4">
                Strengthen the Case
              </h2>
              <p className="text-lg text-foreground/80">
                Students keep the same six-part process and use it on their
                own, while each week adds a harder reasoning or evidence skill.
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

          {/* Weeks 17–24 */}
          <section id="defend" className="mb-20 md:mb-24 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto">
              <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                Argument Builder • Book 3 • Weeks 17–24 • Coming Later
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-6 mb-4">
                Defend the Case
              </h2>
              <p className="text-lg text-foreground/80">
                Students write first, with no model or sentence frames. Then
                they test their argument against new situations, qualify their
                claim, propose a fair exception, and defend their case out loud.
              </p>
            </div>
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
                  series: "Argument Builder",
                  challenge:
                    "Learning the whole argument process and how all the parts fit together.",
                  experience:
                    "Worked through the lessons step by step, with guided practice and support.",
                  result:
                    "Gained a clear understanding of how to build a complete argument using a claim, reasons, support, explanation, counterclaim, and response.",
                },
                {
                  who: "Eighth Grade Student",
                  series: "Argument Challenger",
                  challenge:
                    "It took time to understand the argument-building process and use it independently.",
                  experience:
                    "Practiced developing claims, using evidence, explaining reasoning, and answering counterarguments through the lessons.",
                  result:
                    "Took part in a mock debate at school and said he felt prepared because he knew how to build and defend his case. He told Miss Pam he thought he won.",
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
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex gap-4">
                <Check className="w-7 h-7 shrink-0 text-emerald-600" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    Weeks 1–8 build confidence and independence.
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
                    Weeks 9–16 increase the rigor.
                  </h3>
                  <p className="text-foreground/80">
                    Students develop stronger support, deeper reasoning, careful
                    weighing of evidence, and more persuasive rebuttals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-7 h-7 shrink-0 text-emerald-600" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    Weeks 17–24 build independence.
                  </h3>
                  <p className="text-foreground/80">
                    Students write on their own, test their arguments, and
                    defend their case out loud.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center border-t border-border/50 pt-10">
              <BubblesMark className="w-16 mx-auto mb-4" />
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 font-medium">
                Build Your Case helps students move from learning the parts of an
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
