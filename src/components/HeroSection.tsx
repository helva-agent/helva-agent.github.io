/* eslint-disable @typescript-eslint/no-explicit-any */
// components/HeroSection.tsx
import React, { useState, useEffect, useRef } from "react";
import { FrostButton } from "@/components/ui/helva-buttons";
import { MessageSquare } from "lucide-react";

const BackgroundEffects = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <>
    <div
      className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * 25}px, ${
          mousePosition.y * 25
        }px, 0)`,
      }}
    />
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)] transition-transform duration-500 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * 45}px, ${
          mousePosition.y * 35
        }px, 0)`,
      }}
    />
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)] transition-transform duration-700 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * -35}px, ${
          mousePosition.y * -25
        }px, 0)`,
      }}
    />
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_40%)] transition-transform duration-400 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * 60}px, ${
          mousePosition.y * 45
        }px, 0)`,
      }}
    />
  </>
);

const RightSideGrid = () => (
  <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-30">
    <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />
    <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
    <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/55 to-transparent" />
    <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

    <div className="absolute top-1/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/55 to-cyan-400/40" />
    <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-cyan-400/45" />
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-400/35" />
    <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/55 to-cyan-400/40" />
    <div className="absolute top-5/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-cyan-400/30" />

    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
    >
      <path
        d="M0,100 Q400,150 800,80"
        fill="none"
        stroke="rgba(6,182,212,0.35)"
        strokeWidth="2"
        className="animate-pulse"
      />
      <path
        d="M0,300 Q300,250 800,320"
        fill="none"
        stroke="rgba(6,182,212,0.25)"
        strokeWidth="2"
        style={{ animationDelay: "1s" }}
        className="animate-pulse"
      />
      <path
        d="M0,500 Q500,480 800,520"
        fill="none"
        stroke="rgba(6,182,212,0.3)"
        strokeWidth="2"
        style={{ animationDelay: "2s" }}
        className="animate-pulse"
      />
    </svg>

    <div className="absolute top-1/6 left-1/4 w-2 h-2 bg-cyan-400/50 rounded-full shadow-sm shadow-cyan-400/40" />
    <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-cyan-400/45 rounded-full shadow-sm shadow-cyan-400/40" />
    <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-cyan-400/55 rounded-full shadow-sm shadow-cyan-400/40" />
    <div className="absolute top-5/6 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full shadow-sm shadow-cyan-400/40" />

    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-cyan-400/20 via-cyan-400/40 to-cyan-400/25 transform rotate-12 origin-left" />
    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-cyan-400/15 via-cyan-400/35 to-cyan-400/20 transform -rotate-12 origin-left" />
  </div>
);

const FloatingElements = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="absolute top-1/4 left-1/4 w-8 h-8 border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-sm transform rotate-45 transition-transform duration-500"
      style={{
        transform: `translate3d(${mousePosition.x * 50}px, ${
          mousePosition.y * 40
        }px, 0) rotateX(${mousePosition.y * 25}deg) rotateY(${
          mousePosition.x * 25
        }deg)`,
      }}
    />
    <div
      className="absolute top-3/4 right-1/4 w-6 h-6 border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm transform rotate-45 transition-transform duration-700"
      style={{
        transform: `translate3d(${mousePosition.x * -40}px, ${
          mousePosition.y * -35
        }px, 0) rotateX(${mousePosition.y * -20}deg) rotateY(${
          mousePosition.x * -20
        }deg)`,
      }}
    />
    <div
      className="absolute top-1/2 right-1/6 w-4 h-4 border border-white/20 bg-white/5 backdrop-blur-sm transform rotate-45 transition-transform duration-600"
      style={{
        transform: `translate3d(${mousePosition.x * 60}px, ${
          mousePosition.y * 50
        }px, 0) rotateX(${mousePosition.y * 30}deg) rotateY(${
          mousePosition.x * 30
        }deg)`,
      }}
    />
    <div
      className="absolute top-1/6 right-1/3 w-3 h-12 border-l border-cyan-400/25 transition-transform duration-400"
      style={{
        transform: `translate3d(${mousePosition.x * 35}px, ${
          mousePosition.y * 30
        }px, 0) rotateZ(${mousePosition.x * 15}deg)`,
      }}
    />
    <div
      className="absolute bottom-1/4 left-1/3 w-10 h-3 border-t border-white/15 transition-transform duration-800"
      style={{
        transform: `translate3d(${mousePosition.x * -45}px, ${
          mousePosition.y * -40
        }px, 0) rotateZ(${mousePosition.y * 20}deg)`,
      }}
    />
    <div
      className="absolute top-2/3 left-1/6 w-5 h-5 border border-cyan-400/20 rounded-full bg-cyan-500/5 transition-transform duration-550"
      style={{
        transform: `translate3d(${mousePosition.x * 55}px, ${
          mousePosition.y * 45
        }px, 0) scale(${1 + Math.abs(mousePosition.x * 0.2)})`,
      }}
    />
    <div
      className="absolute top-1/3 left-1/6 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 transition-transform duration-400"
      style={{
        transform: `translate3d(${mousePosition.x * 65}px, ${
          mousePosition.y * 55
        }px, 0)`,
      }}
    />
    <div
      className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full shadow-lg shadow-white/50 transition-transform duration-800"
      style={{
        transform: `translate3d(${mousePosition.x * -50}px, ${
          mousePosition.y * -45
        }px, 0)`,
      }}
    />
    <div
      className="absolute top-1/5 right-1/5 w-1 h-1 bg-cyan-300 rounded-full shadow-md shadow-cyan-300/50 transition-transform duration-600"
      style={{
        transform: `translate3d(${mousePosition.x * 40}px, ${
          mousePosition.y * 35
        }px, 0)`,
      }}
    />
    <div
      className="absolute top-1/2 left-1/12 w-6 h-6 border border-white/10 transform rotate-45 transition-transform duration-900"
      style={{
        transform: `translate3d(${mousePosition.x * 30}px, ${
          mousePosition.y * 25
        }px, 0) rotateX(${mousePosition.y * 15}deg) rotateY(${
          mousePosition.x * 15
        }deg) rotate(45deg)`,
      }}
    />
    <div
      className="absolute bottom-1/6 right-1/12 w-8 h-8 border border-cyan-400/15 transform rotate-12 transition-transform duration-750"
      style={{
        transform: `translate3d(${mousePosition.x * -35}px, ${
          mousePosition.y * -30
        }px, 0) rotateX(${mousePosition.y * -18}deg) rotateY(${
          mousePosition.x * -18
        }deg) rotate(12deg)`,
      }}
    />
    <div
      className="absolute top-1/4 right-2/3 w-0.5 h-0.5 bg-cyan-400 rounded-full transition-transform duration-300"
      style={{
        transform: `translate3d(${mousePosition.x * 70}px, ${
          mousePosition.y * 60
        }px, 0)`,
        opacity: 0.6 + Math.abs(mousePosition.x * 0.4),
      }}
    />
    <div
      className="absolute bottom-1/5 left-2/3 w-0.5 h-0.5 bg-white rounded-full transition-transform duration-500"
      style={{
        transform: `translate3d(${mousePosition.x * -55}px, ${
          mousePosition.y * -50
        }px, 0)`,
        opacity: 0.4 + Math.abs(mousePosition.y * 0.4),
      }}
    />
    <div
      className="absolute top-3/5 left-1/2 w-0.5 h-0.5 bg-cyan-300 rounded-full transition-transform duration-450"
      style={{
        transform: `translate3d(${mousePosition.x * 45}px, ${
          mousePosition.y * 40
        }px, 0)`,
        opacity: 0.5 + Math.abs(mousePosition.x * 0.3),
      }}
    />
    <div
      className="absolute top-1/3 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700"
      style={{
        transform: `translate3d(${mousePosition.x * 25}px, ${
          mousePosition.y * 20
        }px, 0) rotateZ(${mousePosition.x * 10}deg)`,
      }}
    />
    <div
      className="absolute bottom-1/3 right-1/4 w-px h-12 bg-gradient-to-t from-transparent via-white/15 to-transparent transition-transform duration-600"
      style={{
        transform: `translate3d(${mousePosition.x * -30}px, ${
          mousePosition.y * -25
        }px, 0) rotateZ(${mousePosition.y * 12}deg)`,
      }}
    />
  </div>
);

const HeroContent = ({
  mousePosition,
  handleScrollToSection,
}: {
  mousePosition: { x: number; y: number };
  handleScrollToSection: (id: string) => void;
}) => (
  <div
    className="lg:col-span-4 space-y-8 text-left transition-transform duration-300"
    style={{
      transform: `translate3d(${mousePosition.x * 5}px, ${
        mousePosition.y * 5
      }px, 0)`,
    }}
  >
    <div className="space-y-4">
      <h1 className="font-montserrat text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
        DeFi, made smarter.
      </h1>
      <h2 className="font-montserrat text-2xl lg:text-3xl font-medium text-cyan-300">
        Meet Helva, your DeFAI Agent.
      </h2>
    </div>

    <p className="font-roboto text-lg lg:text-xl font-light text-gray-300 leading-relaxed max-w-md">
      Helva is an Agent designed to access the entire Polygon & Quickswap
      Ecosystem from a simple conversational prompt.
    </p>

    <div className="flex flex-col sm:flex-row gap-6">
      <a
        href="http://beta.helva.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FrostButton
          variant="primary"
          className="w-[180px] h-[52px] text-base font-medium font-roboto hover:scale-110 transition-all duration-300"
          showIcon={true}
          style={{
            transform: `perspective(500px) rotateX(${
              mousePosition.y * 5
            }deg) rotateY(${mousePosition.x * 5}deg)`,
          }}
        >
          Go to dApp
        </FrostButton>
      </a>

      <FrostButton
        variant="secondary"
        className="w-[180px] h-[52px] text-base font-medium font-roboto hover:scale-110 transition-all duration-300"
        onClick={() => handleScrollToSection("features")}
        showIcon={true}
        style={{
          transform: `perspective(500px) rotateX(${
            mousePosition.y * 5
          }deg) rotateY(${mousePosition.x * 5}deg)`,
        }}
      >
        Meet Helva
      </FrostButton>
    </div>

    <div className="pt-8 space-y-4">
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <img
          src={`${import.meta.env.BASE_URL}uploads/polygon-matic-logo.png`}
          alt="Polygon"
          className="w-5 h-5"
        />
        <span>Live on Polygon Network</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <img
          src={`${import.meta.env.BASE_URL}uploads/quickswap-logo.png`}
          alt="Quickswap"
          className="w-5 h-5"
        />
        <span>Integrated with Quickswap</span>
      </div>
    </div>
  </div>
);

const HelvaModel = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <div className="lg:col-span-4 flex items-center justify-center relative">
    <div className="absolute bottom-4 w-40 h-8 bg-cyan-500/20 rounded-full blur-xl animate-pulse-shadow" />

    <div
      className="relative rounded-full overflow-hidden w-96 h-96 lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[580px] transition-transform duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${
          mousePosition.y * 10
        }deg) rotateY(${mousePosition.x * 10}deg) translateZ(20px)`,
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}uploads/helva-high.png`}
        alt="Helva AI Agent"
        className="w-full h-full object-contain animate-float filter drop-shadow-2xl scale mt-4"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-2xl animate-gentle-glow transition-opacity duration-300"
        style={{
          opacity:
            0.3 +
            Math.abs(mousePosition.x * 0.3) +
            Math.abs(mousePosition.y * 0.3),
        }}
      />
    </div>
  </div>
);

const InteractiveChat = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <div
    className="lg:col-span-4 flex items-end transition-transform duration-300 relative"
    style={{
      transform: `perspective(800px) rotateX(${
        mousePosition.y * 8
      }deg) rotateY(${mousePosition.x * 8}deg) translate3d(${
        mousePosition.x * -5
      }px, ${mousePosition.y * -5}px, 10px)`,
    }}
  >
    <div className="w-full relative z-10">
      <div
        className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-4 animate-fade-in shadow-2xl"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Helva Agent</span>
          </div>
          <MessageSquare className="w-4 h-4 text-cyan-400" />
        </div>

        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-lg px-3 py-2 max-w-[80%] shadow-lg">
              <p className="text-xs text-white">
                "Swap 100 USDC for MATIC on Quickswap"
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 max-w-[80%] shadow-lg">
              <p className="text-xs text-gray-300">
                ✅ Transaction executed successfully!
              </p>
              <p className="text-xs text-cyan-400 mt-1">Gas saved: 15%</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
          <div className="flex gap-1">
            <div
              className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <span className="text-xs text-gray-400">Helva is analyzing...</span>
        </div>
      </div>
    </div>
  </div>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <div className="w-8 h-12 border border-white/30 rounded-full flex justify-center items-start bg-white/5 backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-300">
      <div className="w-1 h-4 bg-white/60 rounded-full mt-3 animate-pulse" />
    </div>
  </div>
);

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState("what-is");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

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
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <BackgroundEffects mousePosition={mousePosition} />
      <RightSideGrid />
      <FloatingElements mousePosition={mousePosition} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <HeroContent
            mousePosition={mousePosition}
            handleScrollToSection={handleScrollToSection}
          />
          <HelvaModel mousePosition={mousePosition} />
          <InteractiveChat mousePosition={mousePosition} />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
