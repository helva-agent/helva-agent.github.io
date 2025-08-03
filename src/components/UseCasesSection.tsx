import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useCaseSections = [
  {
    title: "Automatic Trades.",
    userMessage:
      "Analyze Bitcoin and execute your best strategy. Based on the outcome, go long or short using a maximum leverage of 10x proportional to the strength of your signal.",
    helvaReply:
      "Bitcoin is consolidating near $100,000, showing mild bullish momentum. Signal suggests a long position with moderate strength.\n\n→ Leverage: 5x\n→ Entry: $100,200\n→ Target: $105,000\n→ Stop: $97,500\n\nPosition opened. Monitoring closely.",
  },
  {
    title: "Yields Strategies",
    userMessage:
      "I have 1,000 USDC. Think and execute a strategy to maximize the passive incomes from these USDC's.",
    helvaReply:
      "Swapping half of those 1,000 USDC into 500 USDT. I will deposit them into USDC/USDT LP and earn an APR of 84% for you.",
  },
  {
    title: "Automated Tasks.",
    userMessage:
      "Supply all my xMATIC, borrow POL and stake on Stader, execute it in loop.",
    helvaReply:
      "Supplying all of your 1,000 xMATIC, borrowing with a moderate risk (60% of collateral) POL, staking them on Stader and supplying back xMATIC on Aave for three times more.",
  },
];

const UseCasesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections =
        sectionRef.current?.querySelectorAll(".use-case-section");

      if (sections) {
        sections.forEach((section, index) => {
          const userMsg = section.querySelector(".user-message");
          const helvaMsg = section.querySelector(".helva-message");
          const title = section.querySelector(".section-title");

          // Set initial states
          gsap.set([title, userMsg, helvaMsg], { opacity: 0, y: 30 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });

          tl.to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
            .to(
              userMsg,
              { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
              "-=0.3"
            )
            .to(
              helvaMsg,
              { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
              "-=0.3"
            );
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-primary"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-heading-lg sm:text-heading-xl md:text-hero-xs lg:text-hero-sm font-semibold text-text-primary mb-4 text-center font-poppins">
          A thousand use-cases.
        </h2>
        <p className="text-body sm:text-body-lg text-text-muted mb-16 text-center font-poppins">
          Ask Helva anything about DeFi, and watch the magic happen.
        </p>

        {useCaseSections.map((section, idx) => (
          <div
            key={idx}
            className="use-case-section mb-16 sm:mb-24 md:mb-32 last:mb-0"
          >
            {/* Section Title */}
            <h2 className="section-title text-heading-sm sm:text-heading md:text-heading-lg font-semibold text-text-primary mb-8 sm:mb-12 md:mb-16 font-poppins">
              {section.title}
            </h2>

            {/* Chat Container */}
            <div className="space-y-6 sm:space-y-8">
              {/* User Message */}
              <div className="flex justify-end items-start space-x-2 sm:space-x-4">
                <div className="user-message max-w-xs sm:max-w-lg md:max-w-2xl bg-helva-primary rounded-2xl rounded-tr-md px-4 py-3 sm:px-6 sm:py-4">
                  <p className="text-text-primary font-poppins text-body-sm sm:text-body leading-relaxed">
                    {section.userMessage}
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs sm:text-sm font-bold font-poppins">
                      You
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs font-poppins">
                    You
                  </span>
                </div>
              </div>

              {/* Helva Message */}
              <div className="flex justify-start items-start space-x-2 sm:space-x-4">
                <div className="flex flex-col items-center space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#32ADE6] to-[#1E88E5] rounded-full flex items-center justify-center overflow-hidden border border-white">
                    <img
                      src="/uploads/helva-favicon.png"
                      alt="Helva"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to text if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.innerHTML =
                          '<span class="text-white text-xs sm:text-sm font-bold font-poppins">H</span>';
                      }}
                    />
                  </div>
                  <span className="text-gray-400 text-xs font-poppins">
                    Helva
                  </span>
                </div>
                <div className="helva-message max-w-xs sm:max-w-lg md:max-w-2xl bg-gray-800 border border-gray-700 rounded-2xl rounded-tl-md px-4 py-3 sm:px-6 sm:py-4">
                  <p className="text-gray-300 font-poppins text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {section.helvaReply}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
