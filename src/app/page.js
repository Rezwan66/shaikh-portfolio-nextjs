import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0f]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-4 md:px-12">
        <div className="min-h-screen">
          <HeroSection />
          <AchievementsSection />
        </div>
        <AboutSection />
        <div className="section-divider my-4"></div>
        <SkillsSection />
        <div className="section-divider my-4"></div>
        <ExperienceSection />
        <div className="section-divider my-4"></div>
        <EducationSection />
        <div className="section-divider my-4"></div>
        <ProjectsSection />
        <div className="section-divider my-4"></div>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
