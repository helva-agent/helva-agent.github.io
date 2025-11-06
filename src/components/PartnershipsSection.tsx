import React, { useEffect, useRef } from "react";
import { FrostButton } from "@/components/ui/helva-buttons";

interface PartnerCardProps {
  name: string;
  src?: string;
  delay: string;
  isPlaceholder?: boolean;
  fullWidth?: boolean;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  src,
  delay,
  isPlaceholder = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={`
        relative p-6 flex flex-col items-center justify-center text-center h-[200px] 
        bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm 
        border border-gray-700/50 rounded-2xl transition-all duration-300 ease-out
        hover:border-[#32ADE6]/60 hover:shadow-lg hover:shadow-[#32ADE6]/20 hover:scale-105
        group ${fullWidth ? "lg:col-span-2" : ""}
      `}
      style={{ animationDelay: delay }}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#32ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10">
        {!isPlaceholder && src ? (
          <>
            <img
              src={src}
              alt={name}
              className="w-20 h-20 object-contain mb-4 mx-auto filter brightness-110 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-white group-hover:text-[#32ADE6]/90 transition-colors duration-300">
              {name}
            </h3>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 border-2 border-dashed border-gray-600/60 rounded-lg mb-4 flex items-center justify-center bg-gray-800/40 group-hover:border-[#32ADE6]/60 group-hover:bg-[#32ADE6]/20 transition-all duration-300">
              <span className="text-3xl text-gray-400 group-hover:text-[#32ADE6] transition-colors duration-300">
                +
              </span>
            </div>
            <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const PartnershipsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface-primary overflow-hidden"
      style={{ marginBottom: "40px" }}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-primary via-surface-secondary/30 to-surface-primary" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-helva-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-helva-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-stretch animate-on-scroll">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8 h-full">
            {/* Header */}
            <div>
              <h2 className="text-heading-lg sm:text-heading-xl md:text-hero-xs lg:text-hero-sm font-semibold text-text-primary mb-6">
                Built with the Best.
              </h2>

              {/* Subheading */}
              <p className="text-body sm:text-body-lg text-text-secondary leading-relaxed mb-8">
                  Co-incubated with Quickswap, Helva aims to become the hub of DeFAI—starting on Base and expanding to all EVM ecosystems. Thanks to its modular architecture, integrating your token or a DeFi protocol has never been easier.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-col justify-between flex-1 gap-6">
              <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-gray-700/40 rounded-xl hover:border-[#32ADE6]/50 transition-all duration-300 group flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#32ADE6]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative z-10 flex items-start text-left h-full">
                  <div className="flex flex-col justify-center h-full">
                    <h4 className="font-semibold text-white mb-2">
                        Integrate your Token
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        By integrating your token, you can go beyond standard liquidity management and swap functions, adding trading indicator calculation and retrieval for an above-average user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-gray-700/40 rounded-xl hover:border-[#32ADE6]/50 transition-all duration-300 group flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#32ADE6]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative z-10 flex items-start text-left h-full">
                  <div className="flex flex-col justify-center h-full">
                    <h4 className="font-semibold text-white mb-2">
                        Integrate your DeFi Protocol
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        By integrating your DeFi protocol, users will be able to leverage your dApp directly through Helva’s conversational prompt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Partners & CTA */}
          <div className="flex flex-col h-full">
            {/* Partners Section */}
            <div className="flex-shrink-0">
              <h3 className="text-heading font-semibold text-text-primary mb-8 text-center">
                Our Partners
              </h3>

              {/* Partner Cards - 3 in a row on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <PartnerCard
                  name="Quickswap"
                  src={`${import.meta.env.BASE_URL}uploads/quickswap-logo.png`}
                  delay="0ms"
                />
                <PartnerCard
                  name="CDP"
                  src={`${
                    import.meta.env.BASE_URL
                  }uploads/polygon-matic-logo.png`}
                  delay="100ms"
                />
                <PartnerCard
                  name="More coming"
                  delay="200ms"
                  isPlaceholder={true}
                />
              </div>
            </div>

            {/* CTA Card - Enhanced with gradient and noise */}
            <div className="flex-1">
              <div className="relative p-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl border border-gray-700/50 hover:border-[#32ADE6]/60 hover:shadow-lg hover:shadow-[#32ADE6]/20 transition-all duration-300 group h-full flex flex-col overflow-hidden">
                {/* Animated background graphics */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {/* Moving orbs with random paths */}
                  <div
                    className="absolute w-12 h-12 bg-gradient-to-br from-[#32ADE6]/25 to-purple-500/15 rounded-full blur-lg opacity-60"
                    style={{
                      animation: "float1 8s ease-in-out infinite",
                      animationDelay: "0s",
                    }}
                  />
                  <div
                    className="absolute w-8 h-8 bg-gradient-to-tr from-[#32ADE6]/20 to-blue-500/10 rounded-full blur-md opacity-70"
                    style={{
                      animation: "float2 10s ease-in-out infinite",
                      animationDelay: "2s",
                    }}
                  />
                  <div
                    className="absolute w-6 h-6 bg-gradient-to-r from-[#32ADE6]/30 to-transparent rounded-full blur-sm opacity-50"
                    style={{
                      animation: "float3 12s ease-in-out infinite",
                      animationDelay: "4s",
                    }}
                  />
                  <div
                    className="absolute w-10 h-10 bg-gradient-to-bl from-[#32ADE6]/15 to-purple-400/8 rounded-full blur-lg opacity-40"
                    style={{
                      animation: "float4 14s ease-in-out infinite",
                      animationDelay: "6s",
                    }}
                  />

                  {/* Animated lines */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#32ADE6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#32ADE6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200" />

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#32ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#32ADE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>

                {/* CSS Keyframes for random orbital movements */}
                <style jsx>{`
                  @keyframes float1 {
                    0%,
                    100% {
                      transform: translate(20px, 30px) scale(1);
                    }
                    25% {
                      transform: translate(280px, 80px) scale(1.2);
                    }
                    50% {
                      transform: translate(180px, 200px) scale(0.8);
                    }
                    75% {
                      transform: translate(50px, 150px) scale(1.1);
                    }
                  }

                  @keyframes float2 {
                    0%,
                    100% {
                      transform: translate(300px, 50px) scale(1);
                    }
                    25% {
                      transform: translate(80px, 180px) scale(0.9);
                    }
                    50% {
                      transform: translate(250px, 160px) scale(1.3);
                    }
                    75% {
                      transform: translate(120px, 40px) scale(0.7);
                    }
                  }

                  @keyframes float3 {
                    0%,
                    100% {
                      transform: translate(150px, 180px) scale(1);
                    }
                    25% {
                      transform: translate(40px, 60px) scale(1.1);
                    }
                    50% {
                      transform: translate(320px, 120px) scale(0.8);
                    }
                    75% {
                      transform: translate(200px, 200px) scale(1.2);
                    }
                  }

                  @keyframes float4 {
                    0%,
                    100% {
                      transform: translate(80px, 120px) scale(1);
                    }
                    25% {
                      transform: translate(270px, 40px) scale(0.9);
                    }
                    50% {
                      transform: translate(60px, 220px) scale(1.1);
                    }
                    75% {
                      transform: translate(320px, 180px) scale(0.8);
                    }
                  }
                `}</style>

                {/* Noise texture overlay */}
                <div
                  className="absolute inset-0 opacity-[0.015] bg-repeat bg-[length:128px_128px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Animated gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#32ADE6]/8 via-purple-500/5 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#32ADE6]/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/8 to-transparent rounded-full blur-xl" />

                {/* Subtle mesh gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#32ADE6]/[0.02] to-purple-500/[0.03]" />

                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="text-left mb-8">
                    <h4 className="text-xl font-semibold text-white group-hover:text-[#32ADE6]/90 transition-colors duration-300 mb-4">
                      Ready to Partner?
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Join the future of DeFAI and integrate your token or
                      protocol with Helva's modular architecture for seamless
                      user experiences.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <a
                    href="https://form.typeform.com/to/CA2cRP6c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FrostButton
                      variant="partnership"
                      className="w-full text-base font-semibold hover:scale-105 transition-all duration-300"
                      showIcon={true}
                    >
                      Apply for Partnership
                    </FrostButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
