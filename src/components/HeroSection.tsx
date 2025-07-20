// Updated HeroSection.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && (window as any).lenis) {
      (window as any).lenis.scrollTo(element);
    }
    setMenuOpen(false);
  };

  return (
    <section className="relative mb-[122px] min-h-screen flex flex-col items-center justify-center px-6 pt-28 text-center overflow-hidden">
      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        {/* Title - Using Montserrat */}
        <h1 className="font-montserrat text-display font-semibold text-white leading-[1.1]">
          DeFi, made smarter.
          <br />
          Meet Helva, your DeFAI Agent.
        </h1>

        {/* Subheading - Using Roboto */}
        <p className="font-roboto text-body-lg font-light text-gray-400">
          Helva is an Agent designed to access the entire Polygon & Quickswap
          Ecosystem from a simple conversational prompt.
        </p>

        {/* Enhanced Buttons */}
        <div className="flex flex-row sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            variant="helva-primary"
            size="helva-default"
            ripple={true}
            className="btn-magnetic"
            asChild
          >
            <a
              href="http://beta.helva.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to dApp
            </a>
          </Button>

          <Button
            variant="helva-secondary"
            size="helva-default"
            ripple={true}
            className="btn-magnetic"
            onClick={() => handleScrollToSection("features")}
          >
            Meet Helva
          </Button>
        </div>
      </div>

      {/* Video Container with Enhanced 3D Effects */}
      <div className="mt-20 sm:mt-24 relative w-[246px] h-[348px] sm:w-[368px] sm:h-[521px] rounded-2xl overflow-hidden card-3d hover-glow">
        <video
          src={`${import.meta.env.BASE_URL}uploads/tank-animated.mp4`}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
          style={{
            background: `
              linear-gradient(135deg, rgba(1, 1, 1, 0.8) 10%, transparent 45%) top left,
              linear-gradient(225deg, rgba(1, 1, 1, 0.8) 10%, transparent 45%) top right,
              linear-gradient(45deg, rgba(1, 1, 1, 0.8) 10%, transparent 45%) bottom left,
              linear-gradient(315deg, rgba(1, 1, 1, 0.8) 10%, transparent 45%) bottom right
            `,
            backgroundRepeat: "no-repeat",
            backgroundPosition:
              "top left, top right, bottom left, bottom right",
          }}
        />
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start hover:border-white/50 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
