import React from 'react';

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;