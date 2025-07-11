import React, { useState } from "react";
import { withBase } from "@/lib/utils";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              // src="/uploads/logo.png"
               src={withBase("uploads/logo.png")}

              // src={`${import.meta.env.BASE_URL}uploads/logo.png`}

              alt="Helva AI Agent"
              className="w-28 object-contain"
            />
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex font-poppins text-[18px] space-x-6 text-sm font-light">
            <a
              href="#what-is"
              onClick={() => setActiveSection("what-is")}
              className={`px-4 py-1 rounded-lg transition-colors ${activeSection === "what-is"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
                }`}
            >
              What is
            </a>
            <a
              href="#use-cases"
              onClick={() => setActiveSection("use-cases")}
              className={`px-4 py-1 rounded-lg transition-colors ${activeSection === "use-cases"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
                }`}
            >
              Use-Cases
            </a>
            <a
              href="#partners"
              onClick={() => setActiveSection("partners")}
              className={`px-4 py-1 rounded-lg transition-colors ${activeSection === "partners"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
                }`}
            >
              Partners
            </a>
            <a
              href="#roadmap"
              onClick={() => setActiveSection("roadmap")}
              className={`px-4 py-1 rounded-lg transition-colors ${activeSection === "roadmap"
                  ? "bg-[#1E1E1E] text-white"
                  : "text-white hover:text-gray-300 font-poppins"
                }`}
            >
              Roadmap
            </a>
          </div>


          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-white text-black font-poppins font-semibold px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors shadow">
              Let’s Connect
            </button>
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
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 border-t border-gray-700">
          <a href="#what-is" className="block text-white text-base hover:text-gray-300">What is</a>
          <a href="#use-cases" className="block text-white text-base hover:text-gray-300">Use-Cases</a>
          <a href="#partners" className="block text-white text-base hover:text-gray-300">Partners</a>
          <a href="#roadmap" className="block text-white text-base hover:text-gray-300">Roadmap</a>
          <button className="w-full mt-2 bg-white text-black font-semibold  font-poppins px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
            Let’s Connect
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
