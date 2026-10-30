import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar, Footer } from "@/components/landing/LandingComponents";

const quotes = [
  {
    text: "Almost all good writing begins with terrible first efforts. You need to start somewhere.",
    author: "Anne Lamott",
  },
  {
    text: "A writer is a writer because, even when there is no hope, even when nothing you do shows any sign of promise, you keep writing anyway.",
    author: "Junot Díaz",
  },
];

const NotFound = () => {
  const location = useLocation();
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [location.pathname]);

  const floatingNumbers = [
    {
      id: 1,
      color: "text-primary/15",
      size: "text-5xl md:text-6xl",
      top: "15%",
      left: "15%",
      delay: "0s",
    },
    {
      id: 2,
      color: "text-academic-gold/25",
      size: "text-4xl md:text-5xl",
      top: "25%",
      left: "80%",
      delay: "1.5s",
    },
    {
      id: 3,
      color: "text-muted-foreground/20",
      size: "text-5xl md:text-6xl",
      top: "75%",
      left: "20%",
      delay: "3s",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden bg-slate-50/50 py-24">
        {/* Floating 404s */}
        {floatingNumbers.map((item) => (
          <div
            key={item.id}
            className={`absolute font-black select-none pointer-events-none ${item.color} ${item.size} animate-float`}
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              animationDuration: "8s",
            }}
          >
            404
          </div>
        ))}

        <div className="text-center relative z-10 max-w-2xl px-4">
          <div className="inline-block mb-6 relative">
            <h1 className="text-8xl md:text-[10rem] leading-none font-extrabold text-primary tracking-tight relative z-10">
              404
            </h1>
            <div className="absolute -inset-4 bg-primary/5 blur-2xl -z-20 rounded-full"></div>
          </div>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-foreground">
            Oops! Page not found
          </h2>
          <p className="mb-10 text-xl text-muted-foreground max-w-md mx-auto">
            It looks like this page got lost in the drafting process. Let's get
            you back to the main lesson.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all mb-12"
          >
            <Link to="/">Return to Home</Link>
          </Button>

          <div className="max-w-xl mx-auto mt-12 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm relative overflow-hidden group hover:bg-white/80 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
            <p className="text-lg text-foreground/80 italic mb-4 leading-relaxed">
              "{quote.text}"
            </p>
            <p className="text-sm text-primary font-semibold tracking-wide uppercase">
              — {quote.author}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
