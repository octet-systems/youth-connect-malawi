// 21st Generation NGO - Mental Health Support for Youth in Malawi

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamsSection from "@/components/TeamsSection";
import ResourcesSection from "@/components/ResourcesSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <TeamsSection />
        <ResourcesSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
