import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { EducationSection } from "@/components/sections/Education";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { AntigravityBackground } from "@/components/effects/AntigravityBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <AuroraBackground />
      <AntigravityBackground />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
