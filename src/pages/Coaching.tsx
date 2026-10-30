import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";

const Coaching = () => {
  useSEO(
    "Academic Coaching | Advanced Middle School Writing & Debate Skills",
    "Deep academic coaching for motivated middle school students. Master logical writing, advanced reading analysis, and structured debate prep.",
  );
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Deep Skills for Motivated Students
          </h1>

          <div className="space-y-16">
            <section className="text-lg text-foreground/80 leading-relaxed space-y-4">
              <p>
                Miss Pam works with a small number of highly motivated families
                who want more than better grades — they want their student to
                think clearly, write with real logic, and read with genuine
                depth.
              </p>
              <p>
                This is not standard tutoring. This is a structured system built
                over 13 years of private tutoring experience, designed for
                students who are ready to go deeper and families who are serious
                about long-term results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                What Makes This Different
              </h2>
              <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Most students produce what looks like writing — a paragraph of
                  sentences with no clear logic, no real evidence, and no
                  explanation of what it means. Miss Pam's system fixes that at
                  the root.
                </p>
                <p>
                  Students learn to say what they mean, show the evidence,
                  explain what it proves, and connect it to the bigger idea.
                  That skill transfers to every subject, every test, and every
                  class — including AP courses, SAT reading and writing, and
                  college-level work.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Who This Is For
              </h2>
              <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Families who want real, lasting improvement — not a quick fix.
                </p>
                <p>
                  Students in middle school or younger who have time to build
                  the foundation properly.
                </p>
                <p>
                  Parents who understand that strong reading and writing skills
                  are a long-term investment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">
                This is not for every student.
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Miss Pam works with a limited number of coaching families at a
                time. If your student is already in high school and struggling,
                standard tutoring may be a better fit. Coaching works best when
                it starts early.
              </p>
            </section>

            <section className="bg-slate-50 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Ready to talk?
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Book a consultation to find out if coaching is the right fit for
                your student.
              </p>
              <Link to="/book-consultation">
                <Button size="lg" className="text-lg px-8 h-14">
                  Book a Consultation
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Coaching;
