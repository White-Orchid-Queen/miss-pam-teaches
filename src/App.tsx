import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Curriculum from "./pages/Curriculum";
import Tutoring from "./pages/Tutoring";
import Coaching from "./pages/Coaching";
import Shop from "./pages/Shop";
import BookConsultation from "./pages/BookConsultation";
import PersuasiveWriting from "./pages/PersuasiveWriting";
import CreativeWriting from "./pages/CreativeWriting";
import StateTesting from "./pages/StateTesting";
import Grammar from "./pages/Grammar";
import MathTutoring from "./pages/MathTutoring";
import EnglishWritingPrograms from "./pages/EnglishWritingPrograms";
import SatPrep from "./pages/SatPrep";
import Debate from "./pages/Debate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/persuasive-writing" element={<PersuasiveWriting />} />
          <Route path="/creative-writing" element={<CreativeWriting />} />
          <Route path="/state-testing" element={<StateTesting />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/math-tutoring" element={<MathTutoring />} />
          <Route
            path="/english-writing-programs"
            element={<EnglishWritingPrograms />}
          />
          <Route path="/sat-prep" element={<SatPrep />} />
          <Route path="/debate" element={<Debate />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
