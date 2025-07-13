import React, { useState } from "react";
import { withBase } from "@/lib/utils";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  const handleScrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Ferme le menu mobile après clic
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={withBase("uploads/logo.png")}
              alt="Helva AI Agent"
              className="w-28 object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex font-poppins text-[18px] space-x-6 text-sm font-light">
            <button
              onClick={() => handleScrollToSection("features")}
              className={`px-4 py-1 rounded-lg transition-colors ${
                activeSection === "features"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
              }`}
            >
              What is
            </button>

            <button
              onClick={() => handleScrollToSection("use-cases")}
              className={`px-4 py-1 rounded-lg transition-colors ${
                activeSection === "use-cases"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
              }`}
            >
              Use-Cases
            </button>

            <button
              onClick={() => handleScrollToSection("partners")}
              className={`px-4 py-1 rounded-lg transition-colors ${
                activeSection === "partners"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
              }`}
            >
              Partners
            </button>

            <button
              onClick={() => handleScrollToSection("roadmap")}
              className={`px-4 py-1 rounded-lg transition-colors ${
                activeSection === "roadmap"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
              }`}
            >
              Roadmap
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://form.typeform.com/to/CA2cRP6c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black font-poppins font-semibold px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors shadow">
                Let’s Connect
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 border-t border-gray-700">
          <button
            onClick={() => handleScrollToSection("features")}
            className="block text-white text-base hover:text-gray-300"
          >
            What is
          </button>
          <button
            onClick={() => handleScrollToSection("use-cases")}
            className="block text-white text-base hover:text-gray-300"
          >
            Use-Cases
          </button>
          <button
            onClick={() => handleScrollToSection("partners")}
            className="block text-white text-base hover:text-gray-300"
          >
            Partners
          </button>
          <button
            onClick={() => handleScrollToSection("roadmap")}
            className="block text-white text-base hover:text-gray-300"
          >
            Roadmap
          </button>
          <a
            href="https://form.typeform.com/to/CA2cRP6c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full mt-2 bg-white text-black font-semibold font-poppins px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
              Let’s Connect
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
