import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Corsi from "./pages/Corsi";
import CorsoDetail from "./pages/CorsoDetail";
import News from "./pages/News";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/corsi" element={<Corsi />} />
            <Route path="/corsi/:slug" element={<CorsoDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
