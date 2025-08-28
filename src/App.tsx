import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CrisisSupport from "./pages/CrisisSupport";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
import YouthConnect from "./pages/YouthConnect";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PeerSupportTraining from "./pages/PeerSupportTraining";
import CommunityOutreach from "./pages/CommunityOutreach";
import EducationalWorkshops from "./pages/EducationalWorkshops";
import VolunteerRegistration from "./pages/VolunteerRegistration";
import StartChapter from "./pages/StartChapter";
import WellnessTracker from "./pages/WellnessTracker";
import PeerSupportChat from "./pages/PeerSupportChat";
import ResourceLibrary from "./pages/ResourceLibrary";
import CommunityForum from "./pages/CommunityForum";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crisis-support" element={<CrisisSupport />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/youth-connect" element={<YouthConnect />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/peer-support-training" element={<PeerSupportTraining />} />
          <Route path="/community-outreach" element={<CommunityOutreach />} />
          <Route path="/educational-workshops" element={<EducationalWorkshops />} />
          <Route path="/volunteer-registration" element={<VolunteerRegistration />} />
          <Route path="/start-chapter" element={<StartChapter />} />
          <Route path="/wellness-tracker" element={<WellnessTracker />} />
          <Route path="/peer-support-chat" element={<PeerSupportChat />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/community-forum" element={<CommunityForum />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
