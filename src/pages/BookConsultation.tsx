import { Navbar, Footer } from "@/components/landing/LandingComponents";
import { useSEO } from "@/hooks/use-seo";
import GhlFormEmbed from "@/components/GhlFormEmbed";

const BookConsultation = () => {
  useSEO(
    "Book a Consultation | Miss Pam Teaches",
    "Schedule a free consultation to discuss your student's needs in middle school writing, math, or debate prep.",
  );
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
            Let's Talk About Your Student
          </h1>

          <p className="text-lg text-center text-foreground/80 leading-relaxed mb-12">
            Book a free consultation with Miss Pam to find out if tutoring or
            coaching is the right fit. Sessions are available online or
            in-person.
          </p>

          <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm">
            <GhlFormEmbed
              formId="C8nHmdMX1y6Jm1l78IUm"
              notrack
              className="w-full"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookConsultation;
