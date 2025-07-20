// components/HeroSection.tsx (FIXED VERSION)
import React, { useState } from "react";
import { FrostButton } from "@/components/ui/helva-buttons";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("what-is");

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && (window as any).lenis) {
      (window as any).lenis.scrollTo(element, {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        offset: -80,
      });
    }
    setMenuOpen(false);
  };

  return (
    <section className="relative mb-[122px] min-h-screen flex flex-col items-center justify-center px-6 pt-28 text-center overflow-hidden">
      {/* Frost Glass Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05),transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-fade-in">
        {/* Title - Using Montserrat */}
        <h1 className="font-montserrat text-display font-semibold text-white leading-[1.1]">
          DeFi, made smarter.
          <br />
          Meet Helva, your DeFAI Agent.
        </h1>

        {/* Subheading - Using Roboto */}
        <p className="font-roboto text-body-lg font-light text-gray-300">
          Helva is an Agent designed to access the entire Polygon & Quickswap
          Ecosystem from a simple conversational prompt.
        </p>

        {/* Fixed Frost Glass Buttons with Proper Spacing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
          <a
            href="http://beta.helva.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FrostButton
              variant="primary"
              className="w-[160px] h-[48px] text-sm font-medium font-roboto"
              showIcon={true}
            >
              Go to dApp
            </FrostButton>
          </a>

          <FrostButton
            variant="secondary"
            className="w-[160px] h-[48px] text-sm font-medium font-roboto"
            onClick={() => handleScrollToSection("features")}
            showIcon={true}
          >
            Meet Helva
          </FrostButton>
        </div>
      </div>

      {/* Video Container with Enhanced Frost Glass Effect */}
      <div className="relative z-10 mt-20 sm:mt-24 w-[246px] h-[348px] sm:w-[368px] sm:h-[521px] rounded-2xl overflow-hidden group">
        {/* Frost Glass Border */}
        <div className="absolute inset-0 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10"></div>

        {/* Video */}
        <video
          src={`${import.meta.env.BASE_URL}uploads/tank-animated.mp4`}
          className="relative z-10 w-full h-full object-cover rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Enhanced Frost Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-75"></div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-cyan-500/20 transition-all duration-500 group-hover:shadow-cyan-500/40"></div>
      </div>

      {/* Enhanced Scroll Indicator with Frost Glass */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-12 border border-white/30 rounded-full flex justify-center items-start bg-white/5 backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-300">
          <div className="w-1 h-4 bg-white/60 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
