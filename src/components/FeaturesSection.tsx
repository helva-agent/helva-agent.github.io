import React, { useEffect, useRef } from "react";

// Updated FeatureCard component with square shapes and no hover effects
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
        relative h-full w-full rounded-xl overflow-hidden
        ${
          isHighlighted
            ? "bg-gradient-to-br from-gray-900/95 to-black/90 border"
            : "bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700/50"
        }
        backdrop-blur-sm transition-all duration-300 ease-out
        hover:scale-105
        group
      `}
      style={{
        animationDelay: delay,
        borderColor: isHighlighted ? "rgba(50, 173, 230, 0.5)" : undefined,
      }}
    >
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
          font-semibold text-white transition-colors duration-300
          ${isLarge ? "text-xl" : "text-lg"}
        `}
        >
          {title}
        </h3>

        {/* Arrow for external links */}
        {href && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "rgba(50, 173, 230, 1)" }}
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

// Updated Helva showcase section with bigger wallpaper and smaller text box
const HelvaShowcase = () => (
  <div className="relative h-full bg-gradient-to-br from-gray-900/95 to-black/90 rounded-xl border border-gray-700/50 backdrop-blur-sm transition-all duration-300 overflow-hidden group hover:scale-105">
    {/* Content arranged responsively */}
    <div className="relative h-full flex flex-col lg:flex-row items-center">
      {/* Text content - Reduced size */}
      <div className="flex-1 p-4 lg:p-6 space-y-3 lg:space-y-4 z-10 w-full lg:pr-32">
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white transition-colors duration-300">
            Meet Helva
          </h2>
          <div
            className="h-1 w-12 rounded-full"
            style={{
              background:
                "linear-gradient(to right, rgba(50, 173, 230, 1), rgba(59, 130, 246, 1))",
            }}
          />
        </div>

        <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
          Helva is the most{" "}
          <span className="text-white font-semibold">
            accessible, fast, and smart
          </span>{" "}
          DeFi agent designed to revolutionize your trading experience.
        </p>

        <div className="space-y-2 lg:space-y-3 text-gray-400 text-xs lg:text-sm">
          <div className="flex items-start gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"
              style={{ backgroundColor: "rgba(50, 173, 230, 1)" }}
            />
            <div>
              <span className="text-white font-semibold">Accessible</span>: Use
              it directly from our anonymous, permissionless dApp — access
              Polygon's DeFi just like chatting with an AI.
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"
              style={{ backgroundColor: "rgba(50, 173, 230, 1)" }}
            />
            <div>
              <span className="text-white font-semibold">Fast</span>: No more
              jumping among dozens of dApps. Just tell Helva what you want to do
              and confirm your transaction.
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"
              style={{ backgroundColor: "rgba(50, 173, 230, 1)" }}
            />
            <div>
              <span className="text-white font-semibold">Smart</span>: Trained
              on top DeFi strategies. Pick your asset and risk-profile, or let
              Helva analyze the market.
            </div>
          </div>
        </div>
      </div>

      {/* Character image - Made bigger and more prominent */}
      <div className="relative lg:absolute lg:right-0 lg:bottom-0 w-full lg:w-80 h-40 lg:h-full flex items-center lg:items-end justify-center overflow-hidden mt-4 lg:mt-0">
        <img
          src={`${import.meta.env.BASE_URL || ""}uploads/front-no-bg.png`}
          alt="Helva AI"
          className="w-40 lg:w-72 h-40 lg:h-full object-contain object-center lg:object-bottom drop-shadow-xl"
          style={{
            filter: "drop-shadow(0 10px 20px rgba(50, 173, 230, 0.15))",
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
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(to right, rgba(50, 173, 230, 1), rgba(59, 130, 246, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              But also faster.
            </span>
          </h2>
          <div
            className="h-1 w-24 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(to right, rgba(50, 173, 230, 1), rgba(59, 130, 246, 1))",
            }}
          />
        </div>

        {/* Desktop Bento Grid - Equal width, proportional height */}
        <div className="hidden lg:block animate-on-scroll">
          {/* Top section - Equal width cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="h-[200px]">
              <FeatureCard
                title="DEXes"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/swap.png`}
              />
            </div>
            <div className="h-[200px]">
              <FeatureCard
                title="Lending"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/lending.png`}
                isLarge
              />
            </div>
            <div className="h-[200px]">
              <FeatureCard
                title="Perpetuals"
                delay="200ms"
                src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
              />
            </div>
          </div>

          {/* Large Helva showcase */}
          <div className="mb-6">
            <div className="h-[300px]">
              <HelvaShowcase />
            </div>
          </div>

          {/* Bottom section - Equal width cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="h-[200px]">
              <FeatureCard
                title="Yields & Staking"
                delay="300ms"
                src={`${import.meta.env.BASE_URL}uploads/yields.png`}
                isLarge
              />
            </div>
            <div className="h-[200px]">
              <FeatureCard
                title="Data Analysis"
                delay="400ms"
                src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
              />
            </div>
            <div className="h-[200px]">
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

        {/* Tablet Layout - Equal width, reasonable height */}
        <div className="hidden sm:block lg:hidden animate-on-scroll">
          <div className="space-y-6">
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-[180px]">
                <FeatureCard
                  title="DEXes"
                  delay="0ms"
                  src={`${import.meta.env.BASE_URL}uploads/swap.png`}
                />
              </div>
              <div className="h-[180px]">
                <FeatureCard
                  title="Lending"
                  delay="100ms"
                  src={`${import.meta.env.BASE_URL}uploads/lending.png`}
                  isLarge
                />
              </div>
              <div className="h-[180px]">
                <FeatureCard
                  title="Perpetuals"
                  delay="200ms"
                  src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
                />
              </div>
            </div>

            {/* Helva Showcase */}
            <div className="h-[280px]">
              <HelvaShowcase />
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-[180px]">
                <FeatureCard
                  title="Yields & Staking"
                  delay="0ms"
                  src={`${import.meta.env.BASE_URL}uploads/yields.png`}
                  isLarge
                />
              </div>
              <div className="h-[180px]">
                <FeatureCard
                  title="Data Analysis"
                  delay="100ms"
                  src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
                />
              </div>
              <div className="h-[180px]">
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

        {/* Mobile Layout - Equal width, reasonable proportions */}
        <div className="sm:hidden flex flex-col items-center gap-6 w-full max-w-[340px] mx-auto animate-on-scroll">
          {/* Top cards */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="h-[140px]">
              <FeatureCard
                title="DEXes"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/swap.png`}
              />
            </div>
            <div className="h-[140px]">
              <FeatureCard
                title="Lending"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/lending.png`}
              />
            </div>
          </div>

          <div className="w-full h-[160px]">
            <FeatureCard
              title="Perpetuals"
              delay="200ms"
              src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
              isLarge
            />
          </div>

          {/* Helva showcase */}
          <div className="w-full h-[320px]">
            <HelvaShowcase />
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="h-[140px]">
              <FeatureCard
                title="Yields & Staking"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/yields.png`}
              />
            </div>
            <div className="h-[140px]">
              <FeatureCard
                title="Data Analysis"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
              />
            </div>
          </div>

          <div className="w-full h-[160px]">
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
