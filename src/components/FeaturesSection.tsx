import React, { useEffect, useRef } from "react";

// Simple FeatureCard component like your previous version
const FeatureCard = ({
  title,
  src,
  delay = "0ms",
  isLarge = false,
  isHighlighted = false,
  href = null,
}) => {
  const CardContent = () => (
    <div
      className={`
        relative h-full w-full rounded-2xl overflow-hidden
        ${
          isHighlighted
            ? "bg-gradient-to-br from-gray-900/95 to-black/90 border border-cyan-400/50"
            : "bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700/50"
        }
        backdrop-blur-sm transition-all duration-300 ease-out
        hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105
        group
      `}
      style={{ animationDelay: delay }}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
        {/* Icon Image - Made much bigger */}
        <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
          <img
            src={src}
            alt={title}
            className={`object-contain ${isLarge ? "w-28 h-28" : "w-24 h-24"}`}
          />
        </div>

        {/* Title */}
        <h3
          className={`
          font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300
          ${isLarge ? "text-xl" : "text-lg"}
        `}
        >
          {title}
        </h3>

        {/* Arrow for external links */}
        {href && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <CardContent />
    </a>
  ) : (
    <CardContent />
  );
};

// Clean Helva showcase section with character touching bottom
const HelvaShowcase = () => (
  <div className="relative h-full bg-gradient-to-br from-gray-900/95 to-black/90 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden group">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Content arranged horizontally */}
    <div className="relative h-full flex items-center">
      {/* Text content on left */}
      <div className="flex-1 p-6 lg:p-8 space-y-6 z-10">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
            Meet Helva
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>

        <p className="text-lg text-gray-300 leading-relaxed">
          Helva is the most{" "}
          <span className="text-white font-semibold">
            accessible, fast, and smart
          </span>{" "}
          DeFi agent designed to revolutionize your trading experience.
        </p>

        <div className="space-y-4 text-gray-400">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
            <div>
              <span className="text-white font-semibold">Accessible</span>: Use
              it directly from our anonymous, permissionless dApp — access
              Polygon's DeFi just like chatting with an AI.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
            <div>
              <span className="text-white font-semibold">Fast</span>: No more
              jumping among dozens of dApps. Just tell Helva what you want to do
              and confirm your transaction.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
            <div>
              <span className="text-white font-semibold">Smart</span>: Trained
              on top DeFi strategies. Pick your asset and risk-profile, or let
              Helva analyze the market.
            </div>
          </div>
        </div>
      </div>

      {/* Character image on right - TOUCHING BOTTOM */}
      <div className="absolute right-0 bottom-0 w-64 h-full flex items-end justify-center overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL || ""}uploads/front-no-bg.png`}
          alt="Helva AI"
          className="w-52 h-full object-contain object-bottom drop-shadow-xl"
          style={{
            filter: "drop-shadow(0 10px 20px rgba(6, 182, 212, 0.15))",
          }}
        />
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} id="features" className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            DeFi, made smarter.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              But also faster.
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Desktop Bento Grid - TRUE ASYMMETRIC LAYOUT */}
        <div className="hidden lg:block animate-on-scroll">
          {/* Top section - ASYMMETRIC: small, large, small */}
          <div className="grid grid-cols-10 gap-6 mb-10">
            <div className="col-span-2 h-[240px]">
              <FeatureCard
                title="DEXes"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/swap.png`}
              />
            </div>
            <div className="col-span-6 h-[240px]">
              <FeatureCard
                title="Lending"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/lending.png`}
                isLarge
              />
            </div>
            <div className="col-span-2 h-[240px]">
              <FeatureCard
                title="Perpetuals"
                delay="200ms"
                src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
              />
            </div>
          </div>

          {/* Large Helva showcase - SEPARATE SECTION */}
          <div className="mb-10">
            <div className="h-[380px]">
              <HelvaShowcase />
            </div>
          </div>

          {/* Bottom section - ASYMMETRIC: large, small, large */}
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-3 h-[240px]">
              <FeatureCard
                title="Yields & Staking"
                delay="300ms"
                src={`${import.meta.env.BASE_URL}uploads/yields.png`}
                isLarge
              />
            </div>
            <div className="col-span-2 h-[240px]">
              <FeatureCard
                title="Data Analysis"
                delay="400ms"
                src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
              />
            </div>
            <div className="col-span-5 h-[240px]">
              <FeatureCard
                title="View Docs →"
                delay="500ms"
                src={`${import.meta.env.BASE_URL}uploads/doc.png`}
                isHighlighted
                isLarge
                href="https://helva.gitbook.io/helva"
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden animate-on-scroll">
          <div className="space-y-10">
            {/* Top Cards */}
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-2 h-52">
                <FeatureCard
                  title="DEXes"
                  delay="0ms"
                  src={`${import.meta.env.BASE_URL}uploads/swap.png`}
                />
              </div>
              <div className="col-span-3 h-52">
                <FeatureCard
                  title="Lending"
                  delay="100ms"
                  src={`${import.meta.env.BASE_URL}uploads/lending.png`}
                  isLarge
                />
              </div>
              <div className="col-span-2 h-52">
                <FeatureCard
                  title="Perpetuals"
                  delay="200ms"
                  src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
                />
              </div>
            </div>

            {/* Helva Showcase */}
            <div className="h-80">
              <HelvaShowcase />
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-3 h-52">
                <FeatureCard
                  title="Yields & Staking"
                  delay="0ms"
                  src={`${import.meta.env.BASE_URL}uploads/yields.png`}
                  isLarge
                />
              </div>
              <div className="col-span-2 h-52">
                <FeatureCard
                  title="Data Analysis"
                  delay="100ms"
                  src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
                />
              </div>
              <div className="col-span-2 h-52">
                <FeatureCard
                  title="View Docs →"
                  delay="200ms"
                  src={`${import.meta.env.BASE_URL}uploads/doc.png`}
                  isHighlighted
                  href="https://helva.gitbook.io/helva"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col items-center gap-12 w-full max-w-[340px] mx-auto animate-on-scroll">
          {/* Top cards */}
          <div className="flex justify-center gap-4 w-full">
            <div className="w-[151px] h-[151px]">
              <FeatureCard
                title="DEXes"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/swap.png`}
              />
            </div>
            <div className="w-[151px] h-[151px]">
              <FeatureCard
                title="Lending"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/lending.png`}
              />
            </div>
          </div>

          <div className="w-[315px] h-[200px]">
            <FeatureCard
              title="Perpetuals"
              delay="200ms"
              src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
              isLarge
            />
          </div>

          {/* Helva showcase */}
          <div className="w-full h-[400px]">
            <HelvaShowcase />
          </div>

          {/* Bottom cards */}
          <div className="flex justify-center gap-4 w-full">
            <div className="w-[151px] h-[151px]">
              <FeatureCard
                title="Yields & Staking"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/yields.png`}
              />
            </div>
            <div className="w-[151px] h-[151px]">
              <FeatureCard
                title="Data Analysis"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
              />
            </div>
          </div>

          <div className="w-[315px] h-[200px]">
            <FeatureCard
              title="View Docs →"
              delay="200ms"
              src={`${import.meta.env.BASE_URL}uploads/doc.png`}
              isLarge
              isHighlighted
              href="https://helva.gitbook.io/helva"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
