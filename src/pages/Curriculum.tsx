import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  ChevronRight,
  BookOpen,
  PenTool,
  LayoutTemplate,
  MessageSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              10-Week Program Breakdown
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              A Step-By-Step Path to{" "}
              <span className="text-primary">Stronger Writing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every lesson is designed to build confidence and move students
              from basic summaries to deep, analytical thinking.
            </p>
          </div>

          {/* Curriculum Modules */}
          <div className="space-y-12">
            {[
              {
                phase: "Phase 1: The Foundation",
                title: "Mastering the SAY & SHOW Steps",
                duration: "Weeks 1-3",
                icon: <BookOpen className="w-6 h-6 text-primary" />,
                description:
                  "We start by breaking bad habits. Students learn what a strong claim looks like and how to select the right evidence, rather than just copying random quotes.",
                lessons: [
                  "The difference between summary and analysis",
                  "How to write clear, debatable claims (SAY)",
                  "Selecting the strongest evidence (SHOW)",
                  "Properly introducing quotes and evidence",
                ],
              },
              {
                phase: "Phase 2: The Core Skill",
                title: "Deepening the EXPLAIN Step",
                duration: "Weeks 4-6",
                icon: <MessageSquare className="w-6 h-6 text-primary" />,
                description:
                  "This is where the magic happens. We spend three weeks exclusively on teaching students HOW to explain their evidence without repeating themselves.",
                lessons: [
                  "The 'Because' framework for deeper thinking",
                  "Why evidence doesn't speak for itself",
                  "Connecting evidence back to the claim",
                  "Avoiding the 'This shows that' trap",
                ],
              },
              {
                phase: "Phase 3: The Big Picture",
                title: "Mastering the CONNECT Step",
                duration: "Weeks 7-8",
                icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
                description:
                  "Students learn to zoom out and connect their specific analysis to broader themes, author's purpose, or historical context.",
                lessons: [
                  "Understanding theme vs. topic",
                  "The 'So What?' test for conclusions",
                  "Connecting paragraphs to the main thesis",
                  "Writing powerful concluding sentences",
                ],
              },
              {
                phase: "Phase 4: Synthesis",
                title: "Building the Full Essay",
                duration: "Weeks 9-10",
                icon: <PenTool className="w-6 h-6 text-primary" />,
                description:
                  "We bring all the steps together into full, multi-paragraph essays. Students practice stamina and structural flow.",
                lessons: [
                  "Structuring the 5-paragraph analytical essay",
                  "Writing engaging introductions",
                  "Transitions between paragraphs",
                  "Self-editing and revision strategies",
                ],
              },
            ].map((module, i) => (
              <Card
                key={i}
                className="p-8 border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary tracking-wider uppercase">
                        {module.phase}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {module.duration}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{module.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {module.lessons.map((lesson, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2 text-sm font-medium"
                        >
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-slate-50 p-10 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start the transformation?
            </h3>
            <p className="text-muted-foreground mb-8">
              Get instant lifetime access to the entire 10-week curriculum.
            </p>
            <Button size="lg" className="px-10 h-14 text-lg">
              Get the Writing System for $27
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;
