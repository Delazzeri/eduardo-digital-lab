import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import MarketingSection from "@/components/MarketingSection";
import CertificatesSection from "@/components/CertificatesSection";
import TimelineSection from "@/components/TimelineSection";
import DifferentialSection from "@/components/DifferentialSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <MarketingSection />
      <CertificatesSection />
      <TimelineSection />
      <DifferentialSection />
      <ContactSection />
    </div>
  );
};

export default Index;
