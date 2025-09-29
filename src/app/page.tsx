// app/page.tsx (Final Assembly)

import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen antialiased">
      <HeroSection />

      <hr className="border-t border-gray-800" />

      <SkillsSection />

      <hr className="border-t border-gray-800" />

      <ProjectsSection />

      <hr className="border-t border-gray-800" />

      <AboutSection />

      <hr className="border-t border-gray-800" />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Home;