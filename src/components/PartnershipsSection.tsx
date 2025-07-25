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
        relative p-8 flex flex-col items-center justify-center text-center h-[180px] 
        bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm 
        border border-gray-700/50 rounded-2xl transition-all duration-300 ease-out
        hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105
        group ${fullWidth ? "lg:col-span-2" : ""}
      `}
      style={{ animationDelay: delay }}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10">
        {!isPlaceholder && src ? (
          <>
            <img
              src={src}
              alt={name}
              className="w-16 h-16 object-contain mb-4 filter brightness-110 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
              {name}
            </h3>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-12 h-12 border-2 border-dashed border-gray-600/60 rounded-lg mb-4 flex items-center justify-center bg-gray-800/40 group-hover:border-cyan-400/60 group-hover:bg-cyan-900/20 transition-all duration-300">
              <span className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
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
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
      style={{ marginBottom: "122px" }}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start animate-on-scroll">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
                Built with the Best.
              </h2>

              {/* Subheading */}
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Helva was co-incubated by Quickswap to become its natural DeFAI
                extension. Thanks to its modular architecture, any DeFi token or
                protocol can be integrated quickly and easily.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-col space-y-6">
              <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-gray-700/40 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative z-10 flex items-start text-left">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1.5 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Integrating a token
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      means users can perform actions like swaps or LP
                      management simply by mentioning the token name, instead of
                      its contract address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-gray-700/40 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative z-10 flex items-start text-left">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1.5 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Integrating a DeFi protocol
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      means embedding its core functions directly into Helva,
                      allowing anyone to access the protocol through a single
                      prompt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Partners & CTA */}
          <div className="flex-1 space-y-6">
            {/* Partners Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Our Partners
              </h3>

              {/* Partner Cards - 3 in a row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <PartnerCard
                  name="Quickswap"
                  src={`${import.meta.env.BASE_URL}uploads/quickswap-logo.png`}
                  delay="0ms"
                />
                <PartnerCard
                  name="Polygon"
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

              {/* CTA Card - Enhanced with gradient and noise */}
              <div className="flex-1">
                <div className="relative p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl border border-gray-700/50 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group h-full flex flex-col overflow-hidden">
                  {/* Noise texture overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.015] bg-repeat bg-[length:128px_128px]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Animated gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-purple-500/5 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/8 to-transparent rounded-full blur-xl" />

                  {/* Subtle mesh gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/[0.02] to-purple-500/[0.03]" />

                  <div className="relative z-10 flex-1">
                    <div className="text-left mb-6">
                      <h4 className="text-xl font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300 mb-3">
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
      </div>
    </section>
  );
};

export default PartnershipsSection;
