import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="container mx-auto px-6 h-screen flex flex-col justify-center">
      <p className="font-mono text-lg text-gray-400">&gt; Hello, I'm</p>
      <h1 className="text-5xl md:text-7xl font-mono text-neon">
        [Your Name]
      </h1>
      <h2 className="text-2xl md:text-4xl font-sans text-gray-200 mt-2 mb-8">
        A React Specialist building{' '}
        <span className="font-mono text-neon">performant, accessible</span> web experiences.
      </h2>

      <div className="flex gap-4">
        <a href="#projects" className="cta-button">
          View Projects
        </a>
        <a href="https://github.com/yourusername" target="_blank" className="cta-button-secondary">
          Code: GitHub
        </a>
        <a href="mailto:your.email@example.com" className="cta-button-secondary">
          Contact: Email
        </a>
      </div>
    </section>
  );
};

export default HeroSection;