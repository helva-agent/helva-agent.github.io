// components/PartnershipsSection.tsx
import React, { useEffect, useRef } from "react";
import { FrostCard, FrostButton } from "@/components/ui/helva-buttons";

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
    <FrostCard
      className={`p-8 flex flex-col items-center justify-center text-center h-[180px] transition-all duration-300 hover:scale-105 ${
        fullWidth ? "lg:col-span-3" : ""
      }`}
      style={{ animationDelay: delay }}
    >
      {!isPlaceholder && src ? (
        <>
          <img
            src={src}
            alt={name}
            className="w-16 h-16 object-contain mb-4 filter brightness-110"
          />
          <h3 className="font-montserrat text-heading-sm text-white font-medium">
            {name}
          </h3>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-12 h-12 border-2 border-dashed border-white/30 rounded-lg mb-4 flex items-center justify-center bg-white/5 backdrop-blur-sm">
            <span className="text-2xl text-white/40">+</span>
          </div>
          <p className="font-roboto text-body text-white/60 font-light">
            {name}
          </p>
        </div>
      )}

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </FrostCard>
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
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black mb-section overflow-hidden"
    >
      {/* Frost Glass Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title Section with Frost Glass */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat text-heading-lg font-semibold text-white mb-6">
            Built with the Best.
          </h2>

          {/* Content in Frost Glass Container */}
          <FrostCard className="p-8 max-w-4xl mx-auto mb-8">
            <p className="font-roboto text-body-lg font-light text-white/90 leading-relaxed mb-6">
              Helva was co-incubated by Quickswap to become its natural DeFAI
              extension. Thanks to its modular architecture, any DeFi token or
              protocol can be integrated quickly and easily.
            </p>

            <div className="space-y-4 font-roboto text-body text-white/80">
              <div className="flex items-start justify-start text-left">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0"></span>
                <p>
                  <span className="font-medium text-white">
                    Integrating a token
                  </span>{" "}
                  means users can perform actions like swaps or LP management
                  simply by mentioning the token name, instead of its contract
                  address.
                </p>
              </div>

              <div className="flex items-start justify-start text-left">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0"></span>
                <p>
                  <span className="font-medium text-white">
                    Integrating a DeFi protocol
                  </span>{" "}
                  means embedding its core functions directly into Helva,
                  allowing anyone to access the protocol through a single
                  prompt.
                </p>
              </div>
            </div>

            <p className="font-roboto text-body text-white/70 mt-6">
              If you'd like to integrate your token or protocol, click "Apply
              for Partnerships" and fill out the form. Integration is free — we
              only ask for co-marketing in return!
            </p>
          </FrostCard>
        </div>

        {/* Partner Cards with Frost Glass */}
        <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-3 lg:gap-8 mb-12 animate-on-scroll">
          <PartnerCard
            name="Quickswap"
            src={`${import.meta.env.BASE_URL}uploads/quickswap-logo.png`}
            delay="0ms"
          />
          <PartnerCard
            name="Polygon"
            src={`${import.meta.env.BASE_URL}uploads/polygon-matic-logo.png`}
            delay="100ms"
          />
          <PartnerCard
            name="More yet to come."
            delay="200ms"
            isPlaceholder={true}
            fullWidth={true}
          />
        </div>

        {/* Enhanced Partnership CTA with Frost Glass */}
        <div className="text-center animate-on-scroll">
          <a
            href="https://form.typeform.com/to/CA2cRP6c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FrostButton
              variant="partnership"
              className="relative group mx-auto min-w-[280px] text-lg font-semibold"
              showIcon={true}
            >
              Apply for Partnership
            </FrostButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
