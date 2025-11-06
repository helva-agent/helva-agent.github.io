import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const roadmapData = [
  {
    title: "Helva V1 Mainnet Release - Q1 2026",
    text: `Helva V1 will be free-to-use, with no fees. Users will be able to instantly perform core functions: swaps, LP management, perpetuals, analyses, lending, borrowing, and liquid staking. At launch, integrations will include Quickswap, Stader, Morpho, Aave, and over 110 tokens.`,
    delay: 200,
  },
  {
    title: "Market Intelligence Engine & Helva V2 Release - Q3 2026",
    text: `Helva V2 will make the agent even smarter: farming optimization by selecting the highest APYs across multiple protocols, integration of new DeFi protocols, and the introduction of Helva’s Market Intelligence Engine—a brain that gathers and processes information on the micro and macro crypto context, enabling Helva to deliver more powerful analyses and higher-quality support. Additionally, this engine will autonomously manage Helva’s X account.`,
    delay: 400,
  },
  {
    title: "Cross-Chain Features - 2026",
    text: `In 2026, the goal is to make DeFi not only smarter but also more interoperable. We will integrate Helva with other EVM ecosystems for an unmatched user experience. Additionally, we will introduce a new asynchronous architecture, where Helva will autonomously manage your positions—imagine an agent that decides where to deposit your USDC for the highest yield and continuously monitors/manages the position if it finds better opportunities.`,
    delay: 600,
  },
];

const roadmapData2 = [
  {
    title: "Helva V1 - Q3 2025",
    text: `Helva V1 will launch on mainnet completely free to use — with no additional fees beyond those of the integrated protocols. At launch, users will be able to interact seamlessly with major Base DeFi platforms like Quickswap, Uniswap, Aave, Morpho, and Stader. From day one, Helva will be smart enough to understand and execute any type of user prompt — from yield strategies and trades to full task automation.`,
    delay: 200,
  },
  {
    title: "Market Intelligence - Q4 2025",
    text: `Helva V2 will unlock key additional features, such as optimized swap routing and the ability to choose between multiple lending protocols based on real-time APRs. The integrated Market Intelligence Engine will enable Helva to perform more accurate, context-aware analyses — leading to smarter and more effective trades and its outputs will be shared also on Helva's X Account.`,
    delay: 400,
  },
  {
    title: "Cross-Chain Features - 2026",
    text: `Helva's EVM-compatible architecture allows it to be deployed across virtually any EVM ecosystem. Once Helva is established as the leading DeFAI agent on Polygon, we will leverage its modular and interoperable design to make Polygon an even more interoperable and AI-driven ecosystem.`,
    delay: 600,
  },
];

const RoadmapSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ScrollTrigger Pin Animation (Desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip GSAP animations on mobile

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // Create master timeline (Desktop only)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%", // Reduced scroll distance
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          refreshPriority: -1, // Lower priority to avoid conflicts
        },
      });

      // Desktop animation only
      if (timelineRef.current) {
        const timeline = timelineRef.current.querySelector(".timeline-line");
        const items = timelineRef.current.querySelectorAll(".roadmap-item");
        const dots = timelineRef.current.querySelectorAll(".timeline-dot");

        // Set initial states
        gsap.set(timeline, { scaleY: 0, transformOrigin: "top" });
        gsap.set(items, { x: 100, opacity: 0 });
        gsap.set(dots, { scale: 0, backgroundColor: "#ffffff" });

        // Add animations to timeline
        tl.to(timeline, {
          scaleY: 0.3,
          duration: 1,
          ease: "power2.out",
        })
          .to(
            items[0],
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            0.5
          )
          .to(
            dots[0],
            {
              scale: 1,
              backgroundColor: "#ffffff",
              duration: 1,
              ease: "power2.out",
            },
            0.5
          )
          .to(timeline, {
            scaleY: 0.6,
            duration: 1,
            ease: "power2.out",
          })
          .to(
            items[1],
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            1.5
          )
          .to(
            dots[1],
            {
              scale: 1,
              backgroundColor: "#ffffff",
              duration: 1,
              ease: "power2.out",
            },
            1.5
          )
          .to(timeline, {
            scaleY: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to(
            items[2],
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            2.5
          )
          .to(
            dots[2],
            {
              scale: 1,
              backgroundColor: "#ffffff",
              duration: 1,
              ease: "power2.out",
            },
            2.5
          );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  // Simple mobile animation with Intersection Observer
  useEffect(() => {
    if (!isMobile) return; // Only run on mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const mobileItems =
      mobileTimelineRef.current?.querySelectorAll(".roadmap-item");
    mobileItems?.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-surface-primary ${
        isMobile ? "min-h-auto" : "min-h-screen"
      } flex items-center`}
    >
      <div className="mx-auto lg:w-[766px] w-full">
        <h2 className="text-heading-lg sm:text-heading-xl md:text-hero-xs lg:text-hero-sm font-semibold text-text-primary mb-16 font-poppins">
          Roadmap
        </h2>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <div className="relative" ref={mobileTimelineRef}>
            {/* Extended timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white timeline-line" />

            {/* Fade effect at top */}
            <div
              className="absolute left-[22px] top-0 w-[6px] h-16 z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 100%)",
              }}
            />

            {/* Fade effect at bottom */}
            <div
              className="absolute left-[22px] bottom-0 w-[6px] h-16 z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
              }}
            />

            {roadmapData2.map((item, idx) => (
              <div
                key={idx}
                className={`relative pl-16 mb-20 roadmap-item opacity-0 translate-y-8 transition-all duration-700 ease-out ${
                  idx === 0 ? "pt-12" : ""
                }`}
                data-delay={item.delay}
              >
                <span
                  className={`absolute left-[25px] ${
                    idx === 0 ? "top-16" : "top-4"
                  } w-4 h-4 rounded-full bg-white font-poppins font-thin z-10 -translate-y-1/2 -translate-x-1/2 timeline-dot`}
                />
                <h3 className="text-subheading sm:text-heading-sm md:text-heading font-semibold text-text-primary font-poppins">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm sm:text-body font-light font-poppins text-text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="relative" ref={timelineRef}>
            {/* Extended timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2.5px] bg-white timeline-line" />

            {/* Fade effect at top */}
            <div
              className="absolute left-[30px] top-0 w-[7px] h-20 z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 100%)",
              }}
            />

            {/* Fade effect at bottom */}
            <div
              className="absolute left-[30px] bottom-0 w-[7px] h-20 z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
              }}
            />

            {roadmapData.map((item, idx) => (
              <div
                key={idx}
                className={`relative pl-20 mb-20 roadmap-item ${
                  idx === 0 ? "pt-16" : ""
                }`}
                data-delay={item.delay}
              >
                <span
                  className={`absolute left-[33px] ${
                    idx === 0 ? "top-19" : "top-3"
                  } w-4 h-4 rounded-full bg-white z-10 -translate-y-1/2 -translate-x-1/2 timeline-dot`}
                />
                <h3 className="text-subheading sm:text-heading-sm md:text-heading font-semibold text-text-primary font-poppins">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm sm:text-body font-light font-poppins text-text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for mobile animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .roadmap-item:nth-child(1) {
          transition-delay: 0ms;
        }
        .roadmap-item:nth-child(2) {
          transition-delay: 200ms;
        }
        .roadmap-item:nth-child(3) {
          transition-delay: 400ms;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;
