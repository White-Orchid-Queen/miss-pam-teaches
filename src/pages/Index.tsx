import {
  Navbar,
  Hero,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  SuccessStories,
  Specialties,
  MapSection,
  Footer,
} from "@/components/landing/LandingComponents";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useSEO(
    "Miss Pam Teaches | Middle School Writing Tutor & Debate Prep",
    "Expert private tutoring for middle school writing, reading comprehension, and debate prep. Build foundational English skills and confidence with Miss Pam.",
  );
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <SuccessStories />
        <Section5 />
        <Section6 />
        <Specialties />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
