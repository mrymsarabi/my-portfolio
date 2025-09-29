import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <h2 className="section-title">Technical Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="skill-card">
          <h3 className="skill-title">Core Languages</h3>
          <ul>
            <li>HTML5 & Semantic Markup</li>
            <li>CSS3, Sass/SCSS</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Frameworks & Libraries</h3>
          <ul>
            <li className="font-bold text-neon">React & React Hooks</li>
            <li>Next.js (SSG/SSR)</li>
            <li>Vue.js / Nuxt.js</li>
            <li>Redux & Zustand</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Tools & Ecosystem</h3>
          <ul>
            <li>Git & GitHub Workflow</li>
            <li>Tailwind CSS / Styled Components</li>
            <li>Jest & React Testing Library (RTL)</li>
            <li>Web performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;