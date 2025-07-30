// components/Navigation.tsx
import React, { useState } from "react";
import { withBase } from "@/lib/utils";
import { FrostButton } from "@/components/ui/helva-buttons";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);

    if (element) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, {
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          offset: -80,
        });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={withBase("uploads/logo.png")}
              alt="Helva AI Agent"
              className="w-28 object-contain"
            />
          </div>

          {/* Desktop Links with Underline Selection */}
          <div className="hidden md:flex space-x-2">
            <FrostButton
              variant="nav"
              onClick={() => handleScrollToSection("features")}
              className={`relative ${
                activeSection === "features"
                  ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
            >
              What is
            </FrostButton>

            <FrostButton
              variant="nav"
              onClick={() => handleScrollToSection("use-cases")}
              className={`relative ${
                activeSection === "use-cases"
                  ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
            >
              Use-Cases
            </FrostButton>

            <FrostButton
              variant="nav"
              onClick={() => handleScrollToSection("partners")}
              className={`relative ${
                activeSection === "partners"
                  ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
            >
              Partners
            </FrostButton>

            <FrostButton
              variant="nav"
              onClick={() => handleScrollToSection("roadmap")}
              className={`relative ${
                activeSection === "roadmap"
                  ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
            >
              Roadmap
            </FrostButton>
          </div>

          {/* Desktop CTA with Original Style */}
          <div className="hidden md:block">
            <a
              href="https://form.typeform.com/to/CA2cRP6c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FrostButton
                variant="secondary"
                className="text-sm font-medium font-roboto"
                showIcon={false}
              >
                Let's Connect
              </FrostButton>
            </a>
          </div>

          {/* Mobile Menu Button with Frost Glass */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-gray-200 hover:text-white hover:border-white/30 hover:bg-white/20 transition-all duration-200"
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

      {/* Mobile Menu Dropdown with Frost Glass */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="px-6 py-4 space-y-3">
            <FrostButton
              variant="nav"
              className={`w-full justify-start text-left relative ${
                activeSection === "features"
                  ? "text-white after:absolute after:bottom-0 after:left-3 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
              onClick={() => handleScrollToSection("features")}
            >
              What is
            </FrostButton>
            <FrostButton
              variant="nav"
              className={`w-full justify-start text-left relative ${
                activeSection === "use-cases"
                  ? "text-white after:absolute after:bottom-0 after:left-3 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
              onClick={() => handleScrollToSection("use-cases")}
            >
              Use-Cases
            </FrostButton>
            <FrostButton
              variant="nav"
              className={`w-full justify-start text-left relative ${
                activeSection === "partners"
                  ? "text-white after:absolute after:bottom-0 after:left-3 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
              onClick={() => handleScrollToSection("partners")}
            >
              Partners
            </FrostButton>
            <FrostButton
              variant="nav"
              className={`w-full justify-start text-left relative ${
                activeSection === "roadmap"
                  ? "text-white after:absolute after:bottom-0 after:left-3 after:w-8 after:h-0.5 after:bg-[#32ADE6] after:rounded-full"
                  : ""
              }`}
              onClick={() => handleScrollToSection("roadmap")}
            >
              Roadmap
            </FrostButton>

            <div className="pt-2">
              <a
                href="https://form.typeform.com/to/CA2cRP6c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FrostButton
                  variant="secondary"
                  className="w-full font-medium font-roboto"
                  showIcon={false}
                >
                  Let's Connect
                </FrostButton>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
