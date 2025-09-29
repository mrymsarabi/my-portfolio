import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-20 text-center">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <img
          src="https://via.placeholder.com/150/39ff14/1a1a1a?text=Avatar"
          alt="Your professional photo"
          className="rounded-full border-4 border-neon mb-6 mx-auto"
        />
        <p className="text-gray-300 mb-4">
          I'm a passionate front-end developer based in Tehran, Iran; specializing in turning complex challenges into simple, beautiful, and highly accessible user interfaces. I live by the philosophy that good code should be as clean and maintainable as the design is elegant.
        </p>
        <p className="text-gray-300 mb-8">
          I'm constantly exploring new tools to push the limits of web performance. Currently looking for opportunities to build the next generation of web applications.
        </p>
        <a href="your_resume.pdf" target="_blank" className="cta-button">
          Download Resume (.pdf)
        </a>
      </div>
    </section>
  );
};

export default AboutSection;