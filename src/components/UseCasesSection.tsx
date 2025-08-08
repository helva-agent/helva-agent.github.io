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

          tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          })
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
            <div className="space-y-10 sm:space-y-12">
              {/* User Message (right) */}
              <div className="flex justify-end">
                <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl pb-10">
                  {/* Bubble */}
                  <div className="user-message bg-helva-primary rounded-2xl rounded-tr-lg px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
                    <p className="text-white font-poppins text-body-sm sm:text-body leading-relaxed">
                      {section.userMessage}
                    </p>
                  </div>
                  {/* Avatar + Label (to the right of avatar) */}
                  <div className="absolute -bottom-6 -right-3 flex items-center gap-2">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white shadow-sm bg-[#f7cecb]"
                      aria-label="You avatar"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white/80"
                      >
                        <path
                          d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
                          fill="currentColor"
                          opacity="0.9"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-xs font-poppins select-none">
                      You
                    </span>
                  </div>
                </div>
              </div>

              {/* Helva Message (left) */}
              <div className="flex justify-start">
                <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl pb-10">
                  {/* Bubble */}
                  <div className="helva-message rounded-2xl rounded-tl-lg px-4 py-3 sm:px-6 sm:py-4 shadow-sm bg-[#e3e3e3]">
                    <p className="text-neutral-900 font-poppins text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {section.helvaReply}
                    </p>
                  </div>
                  {/* Avatar + Label (label on the right side of avatar) */}
                  <div className="absolute -bottom-6 -left-3 flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white shadow-sm bg-black">
                      <img
                        src={`${
                          import.meta.env.BASE_URL
                        }uploads/helva-favicon.png`}
                        alt="Helva"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-gray-300 text-xs font-poppins select-none">
                      Helva
                    </span>
                  </div>
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
