import React, { useState } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  const handleScrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      try {
        window.history.pushState(null, "", `#${id}`);
      } catch {
        // no-op
      }
    }
    setMenuOpen(false); // Ferme le menu mobile après clic
  };

  return (
    <footer className=" mb-section1  flex justify-center px-4">
      <div className="w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-[624px_repeat(3,minmax(0,1fr))] items-start [column-gap:150px]">
          {/* Brand Section */}
          <div className="space-y-4 lg:w-[624px]">
            <div className="w-32 h-12 rounded-lg flex">
              <img
                src={`${import.meta.env.BASE_URL}uploads/logo.png`}
                alt="Helva AI Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md font-poppins font-poppins font-light">
              Conversational DeFi Agent for EVM Ecosystems.
              <br />© 2025 Helva. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 lg:w-[105px]">
            <h4 className="text-white font-medium text-lg font-poppins">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                onClick={() => handleScrollToSection("what-is")}
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                What is
              </a>
              <a
                onClick={() => handleScrollToSection("use-cases")}
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Use-Cases
              </a>
              <a
                onClick={() => handleScrollToSection("partners")}
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Partners
              </a>
              <a
                onClick={() => handleScrollToSection("roadmap")}
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Roadmap
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-2 lg:w-[105px]">
            <h4 className="text-white font-medium text-lg font-poppins">
              Support
            </h4>
            <div className="space-y-2">
              <a
                href="https://helva.gitbook.io/helva"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Documentation
              </a>
              <a
                href="https://form.typeform.com/to/CA2cRP6c"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Apply for Partnerships
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-2 lg:w-[105px]">
            <h4 className="text-white font-medium text-lg font-poppins">
              Contacts
            </h4>
            <div className="space-y-2">
              <a
                href="https://x.com/HelvaAgent"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Twitter
              </a>
              <a
                href="https://t.me/helva_agent/1"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Telegram
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dev@helva.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
