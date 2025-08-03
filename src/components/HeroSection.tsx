/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { MessageSquare } from "lucide-react";
import { FrostButton } from "@/components/ui/helva-buttons";

const BackgroundEffects = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <>
    <div
      className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * 25}px, ${
          mousePosition.y * 25
        }px, 0)`,
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-to-tl from-black via-gray-800 to-black transition-transform duration-500 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * 45}px, ${
          mousePosition.y * 35
        }px, 0)`,
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-radial from-gray-700/20 via-black to-black transition-transform duration-700 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * -35}px, ${
          mousePosition.y * -25
        }px, 0)`,
      }}
    />
    <div
      className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-black to-gray-900/20 transition-transform duration-400 ease-out"
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
    {/* Updated grid with new cyan color #32ADE6 and enhanced 3D shadows */}
    <div
      className="absolute left-1/4 top-0 bottom-0 w-px shadow-lg"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(50, 173, 230, 0.6), transparent)",
      }}
    />
    <div
      className="absolute left-2/4 top-0 bottom-0 w-px shadow-lg"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(50, 173, 230, 0.5), transparent)",
      }}
    />
    <div
      className="absolute left-3/4 top-0 bottom-0 w-px shadow-lg"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(50, 173, 230, 0.55), transparent)",
      }}
    />
    <div
      className="absolute right-0 top-0 bottom-0 w-px shadow-lg"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(50, 173, 230, 0.4), transparent)",
      }}
    />

    <div
      className="absolute top-1/6 left-0 right-0 h-px shadow-md"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(50, 173, 230, 0.55), rgba(50, 173, 230, 0.4))",
      }}
    />
    <div
      className="absolute top-1/3 left-0 right-0 h-px shadow-md"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(50, 173, 230, 0.6), rgba(50, 173, 230, 0.45))",
      }}
    />
    <div
      className="absolute top-1/2 left-0 right-0 h-px shadow-md"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(50, 173, 230, 0.5), rgba(50, 173, 230, 0.35))",
      }}
    />
    <div
      className="absolute top-2/3 left-0 right-0 h-px shadow-md"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(50, 173, 230, 0.55), rgba(50, 173, 230, 0.4))",
      }}
    />
    <div
      className="absolute top-5/6 left-0 right-0 h-px shadow-md"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(50, 173, 230, 0.45), rgba(50, 173, 230, 0.3))",
      }}
    />

    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
    >
      <path
        d="M0,100 Q400,150 800,80"
        fill="none"
        stroke="rgba(50, 173, 230, 0.35)"
        strokeWidth="2"
        className="animate-pulse drop-shadow-lg"
      />
      <path
        d="M0,300 Q300,250 800,320"
        fill="none"
        stroke="rgba(50, 173, 230, 0.25)"
        strokeWidth="2"
        style={{ animationDelay: "1s" }}
        className="animate-pulse drop-shadow-lg"
      />
      <path
        d="M0,500 Q500,480 800,520"
        fill="none"
        stroke="rgba(50, 173, 230, 0.3)"
        strokeWidth="2"
        style={{ animationDelay: "2s" }}
        className="animate-pulse drop-shadow-lg"
      />
    </svg>

    <div
      className="absolute top-1/6 left-1/4 w-2 h-2 rounded-full shadow-lg"
      style={{
        backgroundColor: "rgba(50, 173, 230, 0.5)",
        boxShadow: "0 0 10px rgba(50, 173, 230, 0.4)",
      }}
    />
    <div
      className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full shadow-lg"
      style={{
        backgroundColor: "rgba(50, 173, 230, 0.45)",
        boxShadow: "0 0 10px rgba(50, 173, 230, 0.4)",
      }}
    />
    <div
      className="absolute top-2/3 left-1/2 w-2 h-2 rounded-full shadow-lg"
      style={{
        backgroundColor: "rgba(50, 173, 230, 0.55)",
        boxShadow: "0 0 10px rgba(50, 173, 230, 0.4)",
      }}
    />
    <div
      className="absolute top-5/6 right-1/4 w-2 h-2 rounded-full shadow-lg"
      style={{
        backgroundColor: "rgba(50, 173, 230, 0.4)",
        boxShadow: "0 0 10px rgba(50, 173, 230, 0.4)",
      }}
    />

    <div
      className="absolute top-1/4 left-0 w-full h-px transform rotate-12 origin-left shadow-md"
      style={{
        background:
          "linear-gradient(to right, rgba(50, 173, 230, 0.2), rgba(50, 173, 230, 0.4), rgba(50, 173, 230, 0.25))",
      }}
    />
    <div
      className="absolute top-3/4 left-0 w-full h-px transform -rotate-12 origin-left shadow-md"
      style={{
        background:
          "linear-gradient(to right, rgba(50, 173, 230, 0.15), rgba(50, 173, 230, 0.35), rgba(50, 173, 230, 0.2))",
      }}
    />
  </div>
);

const FloatingElements = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Updated floating elements with new cyan color #32ADE6 and enhanced 3D effects */}
    <div
      className="absolute top-1/4 left-1/4 w-8 h-8 border backdrop-blur-sm transform rotate-45 transition-transform duration-500 shadow-xl"
      style={{
        borderColor: "rgba(50, 173, 230, 0.3)",
        backgroundColor: "rgba(50, 173, 230, 0.1)",
        transform: `translate3d(${mousePosition.x * 50}px, ${
          mousePosition.y * 40
        }px, 0) rotateX(${mousePosition.y * 25}deg) rotateY(${
          mousePosition.x * 25
        }deg)`,
        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8))",
      }}
    />
    <div
      className="absolute top-3/4 right-1/4 w-6 h-6 border backdrop-blur-sm transform rotate-45 transition-transform duration-700 shadow-xl"
      style={{
        borderColor: "rgba(50, 173, 230, 0.2)",
        backgroundColor: "rgba(50, 173, 230, 0.05)",
        transform: `translate3d(${mousePosition.x * -40}px, ${
          mousePosition.y * -35
        }px, 0) rotateX(${mousePosition.y * -20}deg) rotateY(${
          mousePosition.x * -20
        }deg)`,
        filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.7))",
      }}
    />
    <div
      className="absolute top-1/2 right-1/6 w-4 h-4 border border-white/20 bg-white/5 backdrop-blur-sm transform rotate-45 transition-transform duration-600 shadow-lg"
      style={{
        transform: `translate3d(${mousePosition.x * 60}px, ${
          mousePosition.y * 50
        }px, 0) rotateX(${mousePosition.y * 30}deg) rotateY(${
          mousePosition.x * 30
        }deg)`,
        filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.6))",
      }}
    />
    <div
      className="absolute top-1/6 right-1/3 w-3 h-12 transition-transform duration-400 shadow-lg"
      style={{
        borderLeft: "1px solid rgba(50, 173, 230, 0.25)",
        transform: `translate3d(${mousePosition.x * 35}px, ${
          mousePosition.y * 30
        }px, 0) rotateZ(${mousePosition.x * 15}deg)`,
        filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
      }}
    />
    <div
      className="absolute bottom-1/4 left-1/3 w-10 h-3 border-t border-white/15 transition-transform duration-800 shadow-lg"
      style={{
        transform: `translate3d(${mousePosition.x * -45}px, ${
          mousePosition.y * -40
        }px, 0) rotateZ(${mousePosition.y * 20}deg)`,
        filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
      }}
    />
    <div
      className="absolute top-2/3 left-1/6 w-5 h-5 border rounded-full transition-transform duration-550 shadow-xl"
      style={{
        borderColor: "rgba(50, 173, 230, 0.2)",
        backgroundColor: "rgba(50, 173, 230, 0.05)",
        transform: `translate3d(${mousePosition.x * 55}px, ${
          mousePosition.y * 45
        }px, 0) scale(${1 + Math.abs(mousePosition.x * 0.2)})`,
        filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))",
      }}
    />
    <div
      className="absolute top-1/3 left-1/6 w-2 h-2 rounded-full shadow-2xl transition-transform duration-400"
      style={{
        backgroundColor: "rgba(50, 173, 230, 1)",
        boxShadow: "0 0 20px rgba(50, 173, 230, 0.5)",
        transform: `translate3d(${mousePosition.x * 65}px, ${
          mousePosition.y * 55
        }px, 0)`,
      }}
    />
    <div
      className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full shadow-2xl shadow-white/50 transition-transform duration-800"
      style={{
        transform: `translate3d(${mousePosition.x * -50}px, ${
          mousePosition.y * -45
        }px, 0)`,
      }}
    />
    <div
      className="absolute top-1/5 right-1/5 w-1 h-1 rounded-full shadow-xl transition-transform duration-600"
      style={{
        backgroundColor: "rgba(50, 173, 230, 0.8)",
        boxShadow: "0 0 15px rgba(50, 173, 230, 0.5)",
        transform: `translate3d(${mousePosition.x * 40}px, ${
          mousePosition.y * 35
        }px, 0)`,
      }}
    />
    <div
      className="absolute top-1/2 left-1/12 w-6 h-6 border border-white/10 transform rotate-45 transition-transform duration-900 shadow-xl"
      style={{
        transform: `translate3d(${mousePosition.x * 30}px, ${
          mousePosition.y * 25
        }px, 0) rotateX(${mousePosition.y * 15}deg) rotateY(${
          mousePosition.x * 15
        }deg) rotate(45deg)`,
        filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.5))",
      }}
    />
    <div
      className="absolute bottom-1/6 right-1/12 w-8 h-8 border transform rotate-12 transition-transform duration-750 shadow-xl"
      style={{
        borderColor: "rgba(50, 173, 230, 0.15)",
        transform: `translate3d(${mousePosition.x * -35}px, ${
          mousePosition.y * -30
        }px, 0) rotateX(${mousePosition.y * -18}deg) rotateY(${
          mousePosition.x * -18
        }deg) rotate(12deg)`,
        filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))",
      }}
    />
    <div
      className="absolute top-1/4 right-2/3 w-0.5 h-0.5 rounded-full transition-transform duration-300"
      style={{
        backgroundColor: "rgba(50, 173, 230, 1)",
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
      className="absolute top-3/5 left-1/2 w-0.5 h-0.5 rounded-full transition-transform duration-450"
      style={{
        backgroundColor: "rgba(50, 173, 230, 0.8)",
        transform: `translate3d(${mousePosition.x * 45}px, ${
          mousePosition.y * 40
        }px, 0)`,
        opacity: 0.5 + Math.abs(mousePosition.x * 0.3),
      }}
    />
    <div
      className="absolute top-1/3 left-1/4 w-16 h-px transition-transform duration-700 shadow-md"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(50, 173, 230, 0.2), transparent)",
        transform: `translate3d(${mousePosition.x * 25}px, ${
          mousePosition.y * 20
        }px, 0) rotateZ(${mousePosition.x * 10}deg)`,
      }}
    />
    <div
      className="absolute bottom-1/3 right-1/4 w-px h-12 transition-transform duration-600 shadow-md"
      style={{
        background:
          "linear-gradient(to top, transparent, rgba(255, 255, 255, 0.15), transparent)",
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
    <div className="space-y-8 pt-12">
      <h1 className="text-hero-xs sm:text-hero-sm md:text-hero lg:text-hero xl:text-hero-sm font-semibold text-text-primary leading-tight drop-shadow-2xl">
        DeFi, made smarter.
      </h1>
    </div>

    <p className="text-body-sm sm:text-body md:text-body-lg font-light text-text-secondary leading-relaxed max-w-md drop-shadow-lg">
      Helva is an Agent designed to access the entire Polygon & Quickswap
      Ecosystem from a simple conversational prompt.
    </p>

    <div className="flex flex-col gap-4">
      <a
        href="http://beta.helva.tech/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <FrostButton
          variant="primary"
          className="w-full h-[52px] text-base font-medium hover:scale-105 transition-all duration-300 shadow-2xl"
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
        className="w-full h-[52px] text-base font-medium hover:scale-105 transition-all duration-300 shadow-2xl"
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
  </div>
);

const HelvaModel = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <div className="lg:col-span-4 flex items-center justify-center relative">
    {/* Enhanced shadow effects with 3D gradients */}
    <div className="absolute bottom-4 w-40 h-8 bg-gradient-to-r from-gray-600/20 via-gray-500/30 to-gray-600/20 rounded-full blur-xl animate-pulse-shadow" />
    <div className="absolute bottom-2 w-32 h-6 bg-gradient-to-r from-black via-gray-800/50 to-black rounded-full blur-2xl" />

    <div
      className="relative rounded-full overflow-hidden w-96 h-96 lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[580px] transition-transform duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${
          mousePosition.y * 10
        }deg) rotateY(${mousePosition.x * 10}deg) translateZ(20px)`,
        filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.9))",
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}uploads/helva-high.png`}
        alt="Helva AI Agent"
        className="w-full h-full object-contain animate-float scale mt-4"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))",
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-gray-500/10 via-transparent to-transparent blur-2xl animate-gentle-glow transition-opacity duration-300"
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
}) => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prompts = [
    {
      user: "Create a yield strategy using only Stablecoins",
      helva: "Executing yield strategy using only stablecoins...",
      details: [
        { text: "Analyzing USDC, USDT, DAI pools", color: "green" },
        { text: "Optimizing for 12.5% APY", color: "blue" },
        { text: "Low risk profile detected", color: "purple" },
      ],
    },
    {
      user: "Analyze WBTC and go long or short using max x10 leverage according to your signal strength",
      helva: "Analyzing WBTC market signals...",
      details: [
        { text: "Strong bullish momentum detected", color: "green" },
        { text: "Executing LONG with 7x leverage", color: "blue" },
        { text: "Stop loss set at -15%", color: "orange" },
      ],
    },
    {
      user: "Supply POL, Borrow USDC, use them to add liquidity to USDC/USDT Pool",
      helva: "Executing leverage farming strategy...",
      details: [
        { text: "Supplying POL as collateral", color: "green" },
        { text: "Borrowing USDC at 3.2% APR", color: "blue" },
        { text: "Adding liquidity to USDC/USDT", color: "purple" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color: string) => {
    switch (color) {
      case "green":
        return { color: "rgba(34, 197, 94, 1)" }; // green-500
      case "blue":
        return { color: "rgba(50, 173, 230, 1)" }; // custom cyan
      case "purple":
        return { color: "rgba(168, 85, 247, 1)" }; // purple-500
      case "orange":
        return { color: "rgba(249, 115, 22, 1)" }; // orange-500
      default:
        return { color: "rgba(156, 163, 175, 1)" }; // gray-400
    }
  };

  const currentPrompt = prompts[currentPromptIndex];

  return (
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
      <div className="w-full relative z-5">
        <div
          className="border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl p-4 animate-fade-in shadow-2xl"
          style={{
            animationDelay: "0.5s",
            filter: "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.8))",
          }}
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse shadow-lg"
                style={{
                  backgroundColor: "rgba(50, 173, 230, 1)",
                  boxShadow: "0 0 10px rgba(50, 173, 230, 0.5)",
                }}
              />
              <span className="text-xs text-gray-400">Helva Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              {/* Prompt indicator dots */}
              <div className="flex gap-1">
                {prompts.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentPromptIndex ? "scale-125" : ""
                    }`}
                    style={{
                      backgroundColor:
                        index === currentPromptIndex
                          ? "rgba(50, 173, 230, 1)"
                          : "rgba(107, 114, 128, 1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={`space-y-3 transition-all duration-300 ${
              isTransitioning
                ? "opacity-50 transform translate-y-1"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-gray-500/20 border border-gray-400/30 rounded-lg px-3 py-2 max-w-[85%] shadow-lg">
                <p className="text-xs text-white">"{currentPrompt.user}"</p>
              </div>
            </div>

            {/* Helva response */}
            <div className="flex justify-start">
              <div className="bg-gray-800/60 border border-gray-600/40 rounded-lg px-3 py-2 max-w-[85%] shadow-lg">
                <p className="text-xs text-gray-300">{currentPrompt.helva}</p>
                <div className="mt-2 space-y-1">
                  {currentPrompt.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{
                          backgroundColor: getColorClass(detail.color).color,
                        }}
                      />
                      <p
                        className="text-xs"
                        style={getColorClass(detail.color)}
                      >
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
            <div className="flex gap-1">
              <div
                className="w-1 h-1 bg-gray-400 rounded-full animate-ping"
                style={{ animationDelay: "0s" }}
              />
              <div
                className="w-1 h-1 bg-gray-400 rounded-full animate-ping"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="w-1 h-1 bg-gray-400 rounded-full animate-ping"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <span className="text-xs text-gray-400">Helva is analyzing...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollIndicator = () => (
  <div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-0 hidden lg:block"
    style={{ marginLeft: "-12px" }}
  >
    <div
      className="w-8 h-12 border rounded-full flex justify-center items-start bg-black/20 backdrop-blur-sm transition-all duration-300 shadow-xl mx-auto"
      style={
        {
          borderColor: "rgba(255, 255, 255, 0.3)",
          "--hover-border": "rgba(50, 173, 230, 0.5)",
          "--hover-bg": "rgba(50, 173, 230, 0.1)",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.5)";
        target.style.backgroundColor = "rgba(50, 173, 230, 0.1)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(255, 255, 255, 0.3)";
        target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
      }}
    >
      <div
        className="w-1 h-4 rounded-full mt-3 animate-pulse shadow-lg"
        style={{
          backgroundColor: "rgba(50, 173, 230, 1)",
          boxShadow: "0 0 10px rgba(50, 173, 230, 0.5)",
        }}
      />
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
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-black"
      style={{ perspective: "1000px" }}
    >
      <BackgroundEffects mousePosition={mousePosition} />
      <RightSideGrid />
      <FloatingElements mousePosition={mousePosition} />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-items-center min-h-[80vh]">
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
