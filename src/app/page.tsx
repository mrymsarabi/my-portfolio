import ProjectCard from '../components/ProjectCard'; 
import React from 'react';

// NOTE: Global body/background styling is handled in globals.css

const Home = () => {
  return (
    <div className="min-h-screen antialiased">
      {/* 1. HERO SECTION */}
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

      <hr className="border-t border-gray-800" />

      {/* 2. SKILLS SECTION */}
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

      <hr className="border-t border-gray-800" />

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="section-title">Key Projects (Case Studies)</h2>

        <ProjectCard
          title="Enterprise Analytics Dashboard"
          role="Lead Front-End Developer. Developed the entire interactive user interface from Figma designs into a fully responsive, performant React application."
          challenge="Visualize millions of data points without sacrificing load speed or user experience on mobile devices."
          tech={['React', 'Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS']}
          liveLink="#"
          codeLink="https://github.com/yourusername/project1"
          imageAlt="Screenshot of Project 1 Dashboard"
        />

        <ProjectCard
          title="Modern E-Commerce Checkout Flow"
          role="Built the entire multi-step, dynamic checkout process and integrated with Stripe for secure payments."
          challenge="Achieved a 25% reduction in cart abandonment rates through streamlined UX and client-side form validation."
          tech={['Vue.js', 'Nuxt 3', 'Pinia', 'Stripe API', 'SASS']}
          liveLink="#"
          codeLink="https://github.com/yourusername/project2"
          imageAlt="Screenshot of Project 2 E-commerce site"
          reverse={true}
        />
        
      </section>

      <hr className="border-t border-gray-800" />

      {/* 4. ABOUT ME SECTION */}
      <section id="about" className="container mx-auto px-6 py-20 text-center">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <img
            src="https://via.placeholder.com/150/39ff14/1a1a1a?text=Avatar"
            alt="Your professional photo"
            className="rounded-full border-4 border-neon mb-6 mx-auto"
          />
          <p className="text-gray-300 mb-4">
            I'm a passionate front-end developer based in **[Your City]**, specializing in turning complex challenges into simple, beautiful, and highly accessible user interfaces. I live by the philosophy that good code should be as clean and maintainable as the design is elegant.
          </p>
          <p className="text-gray-300 mb-8">
            I'm constantly exploring new tools to push the limits of web performance. Currently looking for opportunities to build the next generation of web applications.
          </p>
          <a href="your_resume.pdf" target="_blank" className="cta-button">
            Download Resume (.pdf)
          </a>
        </div>
      </section>

      <hr className="border-t border-gray-800" />

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="bg-gray-800 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Let's Connect</h2>
          <p className="mb-8 text-gray-300">
            Have a project in mind or just want to talk about the latest JavaScript framework? Send a message!
          </p>
          <form
            className="max-w-xl mx-auto p-8 bg-gray-900 border border-neon"
            action="your-contact-form-endpoint"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 text-gray-200 focus:border-neon focus:ring-1 focus:ring-neon"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 text-gray-200 focus:border-neon focus:ring-1 focus:ring-neon"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 mb-6 bg-gray-700 border border-gray-600 text-gray-200 focus:border-neon focus:ring-1 focus:ring-neon"
            ></textarea>
            <button type="submit" className="w-full cta-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-center py-6 border-t border-gray-800">
        <p className="text-sm font-mono text-gray-400">
          Built with <span className="text-neon">Next.js</span> &amp; Tailwind CSS. &copy; 2025 [Your Name].
        </p>
      </footer>
    </div>
  );
};

export default Home;