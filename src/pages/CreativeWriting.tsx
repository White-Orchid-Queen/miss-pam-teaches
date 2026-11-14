import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CreativeWriting = () => {
  useSEO(
    "Creative Writing Tutoring & Free Worksheets | Miss Pam Teaches",
    "1-on-1 creative writing tutoring that builds vocabulary, narrative structure, and confidence. Free downloadable writing packets for homeschool and classroom use.",
  );

  const [peekOpen, setPeekOpen] = useState(false);
  const [peekIndex, setPeekIndex] = useState(0);

  const peekPages = [
    {
      src: "https://vibe.filesafe.space/1778675984868425758/assets/c99e4bf6-bd22-4bd3-8ffe-c0bd3e066869.png",
      caption: "Window on Floor 209 — vivid setting & sensory atmosphere",
    },
    {
      src: "https://vibe.filesafe.space/1778675984868425758/assets/ff41d96a-84a2-469e-8f9c-67de6cd3853c.png",
      caption: "The Aerocab — stakes escalation & turning points",
    },
    {
      src: "https://vibe.filesafe.space/1778675984868425758/assets/e53a3ac1-29a2-4653-93d9-8c7afa9af22e.png",
      caption: "The Girl on the Billboard — voice, subtext & dialogue",
    },
    {
      src: "https://vibe.filesafe.space/1778675984868425758/assets/d0eb07ce-b0b4-489d-aa7a-403e1f7a045a.png",
      caption: "The Street That Disappeared — immersive world-building",
    },
  ];

  const nextPeek = () => setPeekIndex((i) => (i + 1) % peekPages.length);
  const prevPeek = () =>
    setPeekIndex((i) => (i - 1 + peekPages.length) % peekPages.length);

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-[1100px]">
          {/* 1. Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Creative Writing
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Unlock your student's imagination while building foundational
              writing skills through structured, story-driven challenges.
            </p>
          </div>

          <div className="space-y-10">
            {/* 2. Free Neon Vale Writing Sampler */}
            <section className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-52 shrink-0 flex justify-center">
                  <img
                    src="https://vibe.filesafe.space/1778675984868425758/attachments/3f0fc4c9-aa15-429b-95f1-1ca8de0e9258.png"
                    alt="Neon Vale Free 7-Page Writing Sampler Cover"
                    className="w-44 md:w-52 rounded-xl shadow-lg border border-border/50 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3 uppercase tracking-wider">
                    FREE 7-PAGE WRITING SAMPLER
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    Try It Free: Neon Vale Writing Sampler
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    Step into a futuristic city of glowing skylines and flying
                    cars. This free seven-page sampler helps young writers build
                    vivid settings, explore imaginative technology, and turn
                    ideas into stories through guided lessons and writing
                    challenges. Then choose any of seven Neon Vale Story
                    Architect adventures, $2 each, featuring a new situation and
                    a specific writing skill.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href="https://api.leadconnectorhq.com/widget/form/ISzthLfDpFB3cJ2FYIih?notrack=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="text-lg px-8 h-14 shadow-sm">
                        Download the Free Sampler
                      </Button>
                    </a>
                    <a
                      href="https://www.teacherspayteachers.com/Product/Neon-Vale-FREE-Sci-Fi-Creative-Writing-Prompts-Story-Architect-Sampler-16059611"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="text-lg px-8 h-14 border-2 border-primary text-primary hover:bg-primary/10"
                      >
                        Get It Free on TPT
                      </Button>
                    </a>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        setPeekIndex(0);
                        setPeekOpen(true);
                      }}
                      className="text-lg px-8 h-14 border-2 border-primary text-primary hover:bg-primary/10"
                    >
                      Peek Inside →
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Neon Vale Collection */}
            <section className="bg-slate-900 text-slate-100 p-6 md:p-10 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3">
                  Sci-Fi Creative Writing Series
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                  Neon Vale: 7 Stories. One City.
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  Enter Neon Vale. Each adventure begins with one impossible
                  problem. Your student decides what happens next.
                </p>
                <p className="text-slate-400 text-sm mt-3">
                  7 standalone creative writing challenges • Grades 6–12 •
                  250–350 words each
                </p>
              </div>

              {/* Showcase Banner from Graphic */}
              <div className="mb-10 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
                <img
                  src="https://vibe.filesafe.space/1778675984868425758/attachments/4e55016d-d5f3-40a8-93fd-fe019c13bb76.png"
                  alt="Neon Vale 7 Sci-Fi Creative Writing Adventures - Start with any story, no prior knowledge required"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* 7 Story Cards with Purchase Links */}
              <div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                  <div>
                    <p className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase mb-1">
                      Meet the People of Neon Vale
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      Story Architect Challenges (7 Adventures)
                    </h3>
                    <p className="text-sm text-slate-400">
                      Each story puts your student inside a different person's
                      point of view in Neon Vale, with one writing craft skill
                      to practice.
                    </p>
                  </div>
                  <a
                    href="https://www.teacherspayteachers.com/My-Products/category:1647875"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="bg-slate-800/80 hover:bg-slate-700 text-white border-slate-700"
                    >
                      Browse Full Series on TPT →
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      num: "01",
                      skill: "Suspense",
                      title: "Window on Floor 209",
                      accent:
                        "border-cyan-500/40 hover:border-cyan-400 bg-cyan-950/20 text-cyan-300",
                      badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
                      desc: "Build tension, pacing, and high-altitude sensory atmosphere as characters look out across the glowing spires.",
                      focus: "Sensory tension & cliffhangers",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-Window-on-Floor-209-Suspense-17826567",
                    },
                    {
                      num: "02",
                      skill: "Rising Action",
                      title: "The Aerocab That Wouldn't Stop",
                      accent:
                        "border-amber-500/40 hover:border-amber-400 bg-amber-950/20 text-amber-300",
                      badge:
                        "bg-amber-500/20 text-amber-300 border-amber-500/30",
                      desc: "Escalate stakes through obstacles, complications, and ticking clocks during an automated transit crisis.",
                      focus: "Stakes escalation & turning points",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-The-Aerocab-That-Wouldnt-Stop-Rising-Action-17826601",
                    },
                    {
                      num: "03",
                      skill: "Dialogue",
                      title: "The Girl on the Billboard",
                      accent:
                        "border-pink-500/40 hover:border-pink-400 bg-pink-950/20 text-pink-300",
                      badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",
                      desc: "Master realistic character voices, subtext, and mystery through conversations and holo-broadcasts.",
                      focus: "Voice, subtext & verbal conflict",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-The-Girl-on-the-Billboard-Dialogue-17826629",
                    },
                    {
                      num: "04",
                      skill: "Foreshadowing",
                      title: "The Photon Viper Mechanic",
                      accent:
                        "border-purple-500/40 hover:border-purple-400 bg-purple-950/20 text-purple-300",
                      badge:
                        "bg-purple-500/20 text-purple-300 border-purple-500/30",
                      desc: "Plant subtle mechanical clues, narrative breadcrumbs, and warnings that pay off in surprising revelations.",
                      focus: "Breadcrumbs, symbols & clues",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-The-Photon-Viper-Mechanic-Foreshadowing-17826660",
                    },
                    {
                      num: "05",
                      skill: "Characterization",
                      title: "Galactic Ramen at Midnight",
                      accent:
                        "border-yellow-500/40 hover:border-yellow-400 bg-yellow-950/20 text-yellow-300",
                      badge:
                        "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
                      desc: "Develop layered character motivations, distinct habits, and interpersonal bonds over late-night meals.",
                      focus: "Motivations, flaws & relationships",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-Galactic-Ramen-at-Midnight-Characterization-17826698",
                    },
                    {
                      num: "06",
                      skill: "World-Building",
                      title: "The Street That Disappeared",
                      accent:
                        "border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 text-emerald-300",
                      badge:
                        "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                      desc: "Craft immersive futuristic infrastructure, atmospheric alleyways, and shifting urban secrets.",
                      focus: "Immersive setting & environmental logic",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-The-Street-That-Disappeared-Worldbuilding-17826738",
                    },
                    {
                      num: "07",
                      skill: "Climax",
                      title: "The Last Light in Neon Vale",
                      accent:
                        "border-sky-500/40 hover:border-sky-400 bg-sky-950/20 text-sky-300",
                      badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
                      desc: "Bring story threads together into a decisive dilemma, decisive character resolution, and grand finale.",
                      focus: "Decisive moral dilemmas & resolution",
                      link: "https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-The-Last-Light-in-Neon-Vale-Climax-17826760",
                    },
                  ].map((story) => (
                    <div
                      key={story.num}
                      className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${story.accent}`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                            STORY {story.num}
                          </span>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${story.badge}`}
                          >
                            {story.skill}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {story.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {story.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                        <span className="text-[11px] text-slate-400 font-medium leading-snug">
                          <span className="block text-xs font-bold uppercase tracking-wider text-white">
                            Craft: {story.skill}
                          </span>
                          {story.focus}
                        </span>
                        <a
                          href={story.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0"
                        >
                          <Button
                            size="sm"
                            className="h-8 px-3 text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200"
                          >
                            Purchase Packet →
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bonus: Nova & Pip */}
                <div className="mt-6 p-5 md:p-6 rounded-2xl border border-teal-500/40 bg-teal-950/20 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                        MEET THE AI ROBOTS OF NEON VALE
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold border bg-teal-500/20 text-teal-300 border-teal-500/30">
                        Dialogue
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Nova &amp; Pip: Ninety Seconds to Dock
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Nova is an AI robot who looks like a woman and manages
                      transportation in Neon Vale: the flying cars over the city
                      and the docking of intergalactic spaceships landing on the
                      home planet. Pip is her robot dog. Together they keep the
                      city running smoothly and safely. Students write what
                      happens when the clock is ticking and every driver,
                      captain, and passenger needs to hear the right thing from
                      Nova.
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-3">
                      Guided story writing for young adult writers • Grades 6–12
                      • 8 pages • $3
                    </p>
                  </div>
                  <a
                    href="https://www.teacherspayteachers.com/Product/Sci-Fi-Creative-Writing-Prompt-Dialogue-Nova-Pip-Ninety-Seconds-to-Dock-18184645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <Button
                      size="sm"
                      className="h-9 px-4 text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200"
                    >
                      Purchase Packet →
                    </Button>
                  </a>
                </div>

                <div className="mt-8 text-center p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <p className="text-sm text-slate-300 mb-3">
                    Looking for the complete curriculum bundle or 1-on-1 guided
                    writing mentorship through Neon Vale?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://www.teacherspayteachers.com/My-Products/category:1647875"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="h-9 px-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium"
                      >
                        Get the Complete 7-Story Bundle on TPT
                      </Button>
                    </a>
                    <Link to="/book-consultation">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 px-5 bg-white text-primary border-2 border-primary hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        Explore Writing Tutoring.
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Why Creative Writing Matters */}
            <section className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Why Creative Writing Matters
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-3xl">
                Creative writing isn't just about making up stories. It teaches
                students how to structure a narrative, develop complex
                characters, and use descriptive language to paint a picture in
                the reader's mind. These skills directly translate to stronger
                academic writing.
              </p>
              <ul className="space-y-4 text-foreground/80 max-w-3xl">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">
                    •
                  </span>
                  <span className="text-lg">
                    Improves vocabulary and word choice
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">
                    •
                  </span>
                  <span className="text-lg">
                    Builds confidence in self-expression
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">
                    •
                  </span>
                  <span className="text-lg">
                    Teaches narrative structure (beginning, middle, end)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl leading-none">
                    •
                  </span>
                  <span className="text-lg">
                    Encourages empathy through character development
                  </span>
                </li>
              </ul>
            </section>

            {/* 5. Our Approach */}
            <section className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
                We use engaging prompts and guided exercises to help students
                overcome writer's block and discover their unique voice. From
                short stories to poetry, we provide the framework they need to
                let their creativity flow while maintaining structural
                integrity.
              </p>
            </section>

            <div className="text-center mt-8">
              <Link to="/book-consultation">
                <Button size="lg" className="text-lg px-10 h-14 shadow-sm">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {peekOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setPeekOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Peek inside the Neon Vale sampler"
        >
          <button
            type="button"
            onClick={() => setPeekOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPeek();
            }}
            className="absolute left-2 md:left-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPeek();
            }}
            className="absolute right-2 md:right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="flex flex-col items-center max-w-[90vw] md:max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={peekPages[peekIndex].src}
              alt={`Neon Vale sampler preview page ${peekIndex + 1}`}
              className="max-h-[72vh] w-auto rounded-xl shadow-2xl object-contain border border-white/10"
            />
            <div className="mt-4 flex items-center gap-2">
              {peekPages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPeekIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === peekIndex
                      ? "w-6 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to preview page ${i + 1}`}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-white/80 text-center max-w-sm">
              {peekPages[peekIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeWriting;
