import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Adjust path if necessary

const ProjectsSection: React.FC = () => {
  return (
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
  );
};

export default ProjectsSection;