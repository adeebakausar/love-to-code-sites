import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import EndometriosisScan from "./pages/EndometriosisScan";
import WomensHealth from "./pages/WomensHealth";
import MensHealth from "./pages/MensHealth";
import HealthChecks from "./pages/HealthChecks";
import CorporateWellness from "./pages/CorporateWellness";
import LocationPage from "./pages/Locations";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/endometriosis-scan" element={<EndometriosisScan />} />
            <Route path="/services/womens-health" element={<WomensHealth />} />
            <Route path="/services/mens-health" element={<MensHealth />} />
            <Route path="/services/health-checks" element={<HealthChecks />} />
            <Route path="/corporate-wellness" element={<CorporateWellness />} />
            <Route path="/locations/:location" element={<LocationPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
