import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useCaseConversations = [
  {
    userMessage: "Help me execute some profitable trades",
    helvaReply:
      "I can run technical analysis on POL and take a Long or Short position based on the results, using leverage according to the signal's strength. I can also execute arbitrage opportunities between Quickswap and other DEXs when price differences exceed 0.5%, or set up dynamic stop-loss and take-profit orders for your positions.",
    category: "Trading",
  },
  {
    userMessage: "I want to maximize my yield farming returns",
    helvaReply:
      "I'll help you optimize your yield strategies! I can use your QUICK to generate low-risk yield using stablecoins, maximize net APR across available protocols with your POL, or find the best yield farming opportunities with minimum 10% APY. I can also create balanced portfolio strategies with optimal risk distribution.",
    category: "Yields",
  },
  {
    userMessage: "Can you automate my DeFi portfolio management?",
    helvaReply:
      "Absolutely! I can swap your WBTC for POL, supply it on Aave, borrow more POL and stake them automatically. I can also provide liquidity to POL/QUICK pools, rebalance your portfolio weekly to maintain target allocations, and monitor gas prices to execute transactions only when fees are optimal.",
    category: "Automated Tasks",
  },
];

const UseCasesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Enhanced scroll animations for conversation items
  useEffect(() => {
    const ctx = gsap.context(() => {
      const conversations =
        sectionRef.current?.querySelectorAll(".conversation-item");
      const userMessages =
        sectionRef.current?.querySelectorAll(".user-message");
      const helvaMessages =
        sectionRef.current?.querySelectorAll(".helva-message");
      const categoryBadges =
        sectionRef.current?.querySelectorAll(".category-badge");

      if (conversations) {
        // Set initial states
        gsap.set(userMessages, { x: 100, opacity: 0 });
        gsap.set(helvaMessages, { x: -100, opacity: 0 });
        gsap.set(categoryBadges, { y: 20, opacity: 0, scale: 0.8 });

        // Animate each conversation group
        conversations.forEach((conversation, index) => {
          const userMsg = conversation.querySelector(".user-message");
          const helvaMsg = conversation.querySelector(".helva-message");
          const badge = conversation.querySelector(".category-badge");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: conversation,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });

          // User message slides in from right
          tl.to(userMsg, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          })
            // Helva message slides in from left with slight delay
            .to(
              helvaMsg,
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.3"
            )
            // Category badge pops in
            .to(
              badge,
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.7)",
              },
              "-=0.2"
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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 text-center font-poppins">
          A thousand use-cases.
        </h2>
        <p className="text-xl text-gray-400 mb-16 text-center font-poppins">
          Ask Helva anything about DeFi, and watch the magic happen.
        </p>

        <div className="space-y-12">
          {useCaseConversations.map((conversation, idx) => (
            <div key={idx} className="conversation-item">
              {/* User Message */}
              <div className="flex justify-end mb-6">
                <div className="user-message max-w-lg bg-gray-800 border border-gray-700 rounded-2xl rounded-br-md px-6 py-4 shadow-lg">
                  <p className="text-white font-poppins text-base sm:text-lg">
                    {conversation.userMessage}
                  </p>
                </div>
              </div>

              {/* Helva Reply */}
              <div className="flex justify-start mb-4">
                <div className="helva-message max-w-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl rounded-bl-md px-6 py-6 shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#32ADE6] to-[#1E88E5] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold font-poppins">
                          H
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 font-poppins text-base sm:text-lg leading-relaxed">
                        {conversation.helvaReply}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="flex justify-start ml-14">
                <span className="category-badge inline-block px-4 py-2 bg-[#32ADE6]/10 border border-[#32ADE6]/30 text-[#32ADE6] text-sm font-medium rounded-full font-poppins shadow-md">
                  {conversation.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
