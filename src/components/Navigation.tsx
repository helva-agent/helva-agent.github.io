import React, { useState } from "react";
import { withBase } from "@/lib/utils";
import { useLenisContext } from "@/contexts/LenisContext";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  // Updated scroll function to work with new Lenis setup
  // const handleScrollToSection = (id: string) => {
  //   setActiveSection(id);
  //   const element = document.getElementById(id);

  //   if (element) {
  //     // Check if Lenis is available on window
  //     if ((window as any).lenis) {
  //       (window as any).lenis.scrollTo(element, {
  //         duration: 1.5,
  //         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  //         offset: -80, // Account for fixed navbar
  //       });
  //     } else {
  //       // Fallback to native smooth scroll
  //       element.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start"
  //       });
  //     }
  //   }
  //   setMenuOpen(false);
  // };

  // Alternative using the hook (if you want to use it directly)

  const { scrollTo } = useLenisContext();

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);

    if (element) {
      scrollTo(element, {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        offset: -80,
      });
    }
    setMenuOpen(false);
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
          <div className="hidden md:flex font-roboto text-body space-x-6">
            <button
              onClick={() => handleScrollToSection("features")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === "features"
                  ? "bg-gray-800 text-white"
                  : "text-white hover:text-gray-300 hover:bg-gray-800/50"
              }`}
            >
              What is
            </button>

            <button
              onClick={() => handleScrollToSection("use-cases")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === "use-cases"
                  ? "bg-gray-800 text-white"
                  : "text-white hover:text-gray-300 hover:bg-gray-800/50"
              }`}
            >
              Use-Cases
            </button>

            <button
              onClick={() => handleScrollToSection("partners")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === "partners"
                  ? "bg-gray-800 text-white"
                  : "text-white hover:text-gray-300 hover:bg-gray-800/50"
              }`}
            >
              Partners
            </button>

            <button
              onClick={() => handleScrollToSection("roadmap")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === "roadmap"
                  ? "bg-gray-800 text-white"
                  : "text-white hover:text-gray-300 hover:bg-gray-800/50"
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
              <button className="bg-white text-black font-roboto font-semibold px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow">
                Let's Connect
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 hover:text-white transition-colors duration-200"
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
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 border-t border-gray-700 backdrop-blur-md">
          <button
            onClick={() => handleScrollToSection("features")}
            className="block text-white text-body hover:text-gray-300 transition-colors duration-200"
          >
            What is
          </button>
          <button
            onClick={() => handleScrollToSection("use-cases")}
            className="block text-white text-body hover:text-gray-300 transition-colors duration-200"
          >
            Use-Cases
          </button>
          <button
            onClick={() => handleScrollToSection("partners")}
            className="block text-white text-body hover:text-gray-300 transition-colors duration-200"
          >
            Partners
          </button>
          <button
            onClick={() => handleScrollToSection("roadmap")}
            className="block text-white text-body hover:text-gray-300 transition-colors duration-200"
          >
            Roadmap
          </button>
          <a
            href="https://form.typeform.com/to/CA2cRP6c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full mt-2 bg-white text-black font-semibold font-roboto px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-all duration-200 hover:scale-105">
              Let's Connect
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
