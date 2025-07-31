import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Lenis context
declare global {
  interface Window {
    lenis: any;
  }
}

const useCaseCategories = [
  { id: "trading", title: "Trading" },
  { id: "yields", title: "Yields" },
  { id: "automated-tasks", title: "Automated Tasks" },
];

const tradingCards = [
  {
    id: 1,
    text: "Run technical analysis on POL and take a Long or Short position based on the results. Use leverage according to the signal's strength.",
  },
  {
    id: 2,
    text: "Analyze POL's on-chain metrics and go Long or Short based on the results. Use up to 3x leverage.",
  },
  {
    id: 3,
    text: "Execute arbitrage opportunities between Quickswap and other DEXs when price differences exceed 0.5%.",
  },
  {
    id: 4,
    text: "Set up stop-loss and take-profit orders for my WBTC position with dynamic trailing stops.",
  },
];

const yieldsCards = [
  {
    id: 5,
    text: "Use half of my QUICK to generate a low-risk yield strategy using only stablecoins.",
  },
  {
    id: 6,
    text: "Use all my POL to maximize net APR across available protocols.",
  },
  {
    id: 7,
    text: "Find the best yield farming opportunities for USDC with minimum 10% APY.",
  },
  {
    id: 8,
    text: "Create a balanced portfolio yielding strategy with 70% stablecoins and 30% POL.",
  },
];

const automatedTasksCards = [
  {
    id: 9,
    text: "Swap my WBTC for POL, supply it on Aave, borrow more POL, and stake them.",
  },
  {
    id: 10,
    text: "Swap half of my POL for QUICK and provide all POL and QUICK to POL/QUICK LP.",
  },
  {
    id: 11,
    text: "Automatically rebalance my portfolio weekly to maintain 60% POL, 30% QUICK, 10% USDC.",
  },
  {
    id: 12,
    text: "Monitor gas prices and execute transactions only when fees are below 30 gwei.",
  },
];

const allUseCaseCards = [tradingCards, yieldsCards, automatedTasksCards];

const UseCasesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);

  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [desktopAtBottom, setDesktopAtBottom] = useState(false);

  // New refs for GSAP horizontal scroll
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const progressDotsRef = useRef<HTMLDivElement[]>([]);

  const handleDesktopVerticalScroll = () => {
    if (!desktopScrollRef.current) return;
    const { scrollTop } = desktopScrollRef.current;
    setDesktopAtBottom(scrollTop > 0);
  };

  // GSAP Horizontal Scroll Effect for Desktop (≥1024px)
  useLayoutEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context;

    const initializeGSAP = () => {
      if (!sectionRef.current || !gridWrapperRef.current) return;

      // Connect ScrollTrigger to Lenis
      if (window.lenis) {
        window.lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
          window.lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      }

      ctx = gsap.context(() => {
        // Only apply on desktop
        ScrollTrigger.matchMedia({
          "(min-width: 1024px)": function () {
            const gridWrapper = gridWrapperRef.current!;
            const section = sectionRef.current!;
            const panelCount = useCaseCategories.length;

            // Calculate distance to scroll
            const scrollDistance = -window.innerWidth * (panelCount - 1);

            // Set initial positions for content and cards
            gsap.set(".content-animate", { opacity: 0 });
            gsap.set(".card-animate-left", { y: 80, opacity: 0 });
            gsap.set(".card-animate-right", { y: 100, opacity: 0 });

            // Main horizontal scroll animation with reduced sensitivity
            const scrollTween = gsap.to(gridWrapper, {
              x: scrollDistance,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${window.innerWidth * panelCount * 1.5}`, // Increased end distance for less sensitivity
                scrub: 2, // Increased scrub value for smoother scrolling
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  const progress = self.progress;
                  const activeIndex = Math.round(progress * (panelCount - 1));

                  // Update progress dots and category titles
                  progressDotsRef.current.forEach((dot, index) => {
                    const titleElement =
                      dot?.parentElement?.querySelector("h3");

                    if (dot && titleElement) {
                      if (index === activeIndex) {
                        gsap.to(dot, {
                          scale: 1.5,
                          backgroundColor: "#32ADE6",
                          duration: 0.4,
                          overwrite: "auto",
                        });
                        gsap.to(titleElement, {
                          scale: 1.05,
                          color: "#32ADE6",
                          duration: 0.4,
                          overwrite: "auto",
                        });
                      } else {
                        gsap.to(dot, {
                          scale: 1,
                          backgroundColor: "#9ca3af",
                          duration: 0.4,
                          overwrite: "auto",
                        });
                        gsap.to(titleElement, {
                          scale: 1,
                          color: "#ffffff",
                          duration: 0.4,
                          overwrite: "auto",
                        });
                      }
                    }
                  });

                  // Animate content for each panel with staggered card animations
                  useCaseCategories.forEach((_, index) => {
                    const panelProgress = progress * panelCount - index;
                    const isActive =
                      panelProgress >= -0.2 && panelProgress <= 1.2; // Wider range for smoother transitions

                    const contentElement =
                      gridWrapper.children[index]?.querySelector(
                        ".content-animate"
                      );
                    const leftCards =
                      gridWrapper.children[index]?.querySelectorAll(
                        ".card-animate-left"
                      );
                    const rightCards = gridWrapper.children[
                      index
                    ]?.querySelectorAll(".card-animate-right");

                    if (contentElement && leftCards && rightCards && isActive) {
                      // Animate container first
                      gsap.to(contentElement, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        overwrite: "auto",
                      });

                      // Staggered card animations - left cards first
                      leftCards.forEach((card, cardIndex) => {
                        gsap.to(card, {
                          y: 0,
                          opacity: 1,
                          duration: 0.8,
                          ease: "power2.out",
                          delay: 0.1 + cardIndex * 0.1,
                          overwrite: "auto",
                        });
                      });

                      // Right cards with slight delay
                      rightCards.forEach((card, cardIndex) => {
                        gsap.to(card, {
                          y: 0,
                          opacity: 1,
                          duration: 0.8,
                          ease: "power2.out",
                          delay: 0.3 + cardIndex * 0.1,
                          overwrite: "auto",
                        });
                      });
                    } else if (contentElement && leftCards && rightCards) {
                      // Reset when not active
                      gsap.set(contentElement, { opacity: 0 });
                      gsap.set(leftCards, { y: 80, opacity: 0 });
                      gsap.set(rightCards, { y: 100, opacity: 0 });
                    }
                  });
                },
              },
            });

            // Initial animation for first panel with staggered cards
            const firstContent =
              gridWrapper.children[0]?.querySelector(".content-animate");
            const firstLeftCards =
              gridWrapper.children[0]?.querySelectorAll(".card-animate-left");
            const firstRightCards = gridWrapper.children[0]?.querySelectorAll(
              ".card-animate-right"
            );
            const firstDot = progressDotsRef.current[0];
            const firstTitle = firstDot?.parentElement?.querySelector("h3");

            if (firstContent && firstLeftCards && firstRightCards) {
              // Container fades in first
              gsap.to(firstContent, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.3,
              });

              // Left cards slide up first (top row)
              firstLeftCards.forEach((card, index) => {
                gsap.to(card, {
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power2.out",
                  delay: 0.5 + index * 0.1,
                });
              });

              // Right cards follow with delay (bottom row)
              firstRightCards.forEach((card, index) => {
                gsap.to(card, {
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power2.out",
                  delay: 0.7 + index * 0.1,
                });
              });
            }

            if (firstDot && firstTitle) {
              gsap.to(firstDot, {
                scale: 1.5,
                backgroundColor: "#32ADE6",
                duration: 0.4,
                delay: 0.3,
              });
              gsap.to(firstTitle, {
                scale: 1.05,
                color: "#32ADE6",
                duration: 0.4,
                delay: 0.3,
              });
            }

            return () => {
              scrollTween.kill();
            };
          },
        });
      }, sectionRef);
    };

    // Wait for Lenis to be ready
    const timeoutId = setTimeout(() => {
      if (window.lenis) {
        initializeGSAP();
      } else {
        // Fallback if Lenis isn't available
        console.warn("Lenis not found, initializing without integration");
        initializeGSAP();
      }
    }, 100);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);

      // Disconnect from Lenis
      if (window.lenis) {
        window.lenis.off("scroll", ScrollTrigger.update);
      }

      ctx?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Scroll-lock effect for mobile gradient section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      const isInView = rect.top <= 0 && rect.bottom > window.innerHeight;

      if (isInView && window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
        setIsLocked(true);
      } else {
        document.body.style.overflow = "";
        setIsLocked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MobileCard = ({ categoryIndex }: { categoryIndex: number }) => {
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [mobileAtBottom, setMobileAtBottom] = useState(false);

    const handleMobileVerticalScroll = () => {
      if (!mobileScrollRef.current) return;
      const { scrollTop } = mobileScrollRef.current;
      setMobileAtBottom(scrollTop > 0);
    };

    const currentCards = allUseCaseCards[categoryIndex] || [];

    return (
      <div className="relative">
        <div
          ref={mobileScrollRef}
          className="h-[400px] overflow-y-auto scroll-smooth"
          onScroll={handleMobileVerticalScroll}
        >
          <div className="flex flex-col items-center gap-4">
            {currentCards.map((card, cardIndex) => (
              <div
                key={card.id}
                className={`w-[280px] h-[180px] rounded-2xl border-2 border-[#32ADE6] p-4 hover:scale-[1.02] transition duration-300 ${
                  cardIndex % 2 === 1 ? "bg-[#0f0f0f]" : ""
                }`}
              >
                <p
                  className="font-light tracking-[-0.54px] leading-[24px] text-sm"
                  style={{ color: "#FFFFFF", wordSpacing: "-3%" }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic bottom shadow for mobile */}
        <div
          className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            opacity: mobileAtBottom ? 0 : 1,
          }}
        />
      </div>
    );
  };

  return (
    <div
      id="use-cases"
      ref={sectionRef}
      className="bg-black mb-section text-white min-h-screen flex flex-col items-center justify-center p-4"
    >
      {/* Title - Only show on mobile and medium screens */}
      <h1 className="text-[35px] md:text-5xl lg:hidden font-semibold mb-8 tracking-[-1.44px] leading-[48px] md:leading-[57.6px]">
        A thousand use-cases.
      </h1>

      {/* ===== MOBILE VIEW ===== */}
      <div className="md:hidden w-full relative overflow-hidden">
        {/* Horizontal line with gradients */}
        <div className="absolute w-full h-[3px] top-[59px] bg-gray-100 z-0">
          <div className="absolute left-0 top-0 h-[3px] w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-[3px] w-10 bg-gradient-to-l from-black to-transparent z-10" />
        </div>

        {/* Scrollable categories/cards */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth relative scrollbar-none z-10"
        >
          <div className="flex w-full">
            {useCaseCategories.map((cat, index) => (
              <div
                key={cat.id}
                className="w-full min-w-full snap-start flex flex-col items-center gap-6 px-6 pt-2"
              >
                {/* Title + Dot */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="text-xl font-semibold">{cat.title}</div>
                  <div className="w-3 h-3 bg-gray-100 rounded-full" />
                </div>

                {/* Vertical scrollable container */}
                <MobileCard categoryIndex={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden lg:block relative w-full overflow-hidden">
        {/* Main section title */}
        <div className="text-center pt-24 pb-4">
          <h1 className="text-5xl font-semibold tracking-[-1.44px] leading-[57.6px] text-white">
            A thousand use-cases.
          </h1>
        </div>

        {/* Fixed top navigation bar with categories */}
        <div className="sticky top-24 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
          <div className="flex justify-center items-center py-3">
            <div className="flex items-center gap-16">
              {useCaseCategories.map((cat, index) => (
                <div key={cat.id} className="flex flex-col items-center gap-2">
                  <h3 className="text-xl font-semibold text-white transition-all duration-300">
                    {cat.title}
                  </h3>
                  <div
                    ref={(el) => {
                      progressDotsRef.current[index] = el!;
                    }}
                    className="w-2 h-2 bg-gray-400 rounded-full transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal scrolling container */}
        <div className="">
          <div
            ref={gridWrapperRef}
            className="flex w-max"
            style={{ width: `${useCaseCategories.length * 100}vw` }}
          >
            {useCaseCategories.map((cat, index) => (
              <div
                key={cat.id}
                className="w-screen h-screen flex justify-center items-center px-8"
              >
                {/* 2x2 Grid layout for better space utilization */}
                <div className="content-animate grid grid-cols-2 gap-6 max-w-6xl w-full">
                  {allUseCaseCards[index]?.map((card, cardIndex) => (
                    <div
                      key={card.id}
                      className={`group relative ${
                        cardIndex < 2
                          ? "card-animate-left"
                          : "card-animate-right"
                      }`}
                    >
                      <div className="w-full h-64 rounded-2xl border border-[#32ADE6]/80 p-6 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm hover:border-[#32ADE6] hover:scale-[1.02] transition-all duration-500 shadow-lg">
                        <div className="flex items-start gap-4 h-full">
                          <div className="w-2 h-2 bg-[#32ADE6] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/95 font-light leading-relaxed text-sm flex-1">
                            {card.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
