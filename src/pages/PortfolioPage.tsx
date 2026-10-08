import { StarBackground } from "@/components/portfolio/StarBackground.jsx";
import { HeroSection } from "@/components/portfolio/HeroSection.jsx";
import { AboutMe } from "@/components/portfolio/AboutMe.jsx";
import { SkillsSection } from "@/components/portfolio/SkillsSection.jsx";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection.jsx";
import { ContactSection } from "@/components/portfolio/ContactSection.jsx";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Toast provider */}
      <Toaster />

      {/* Cosmic background effects */}
      <StarBackground />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections from original portfolio */}
      <main className="relative z-10 pt-16">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
