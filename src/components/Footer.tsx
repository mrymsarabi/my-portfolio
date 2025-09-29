import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-center py-6 border-t border-gray-800">
      <p className="text-sm font-mono text-gray-400">
        Built with <span className="text-neon">Next.js</span> &amp; Tailwind CSS. &copy; 2025 [Your Name].
      </p>
    </footer>
  );
};

export default Footer;