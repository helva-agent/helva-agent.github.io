import React, { useEffect, useRef } from "react";

// Updated FeatureCard component for vertical alignment
const FeatureCard = ({
                         title,
                         src,
                         delay = "0ms",
                         isLarge = false,
                         isHighlighted = false,
                         href = null,
                         mobileBig = false,
                     }) => {
    const CardContent = () => (
        <div
            className={`
        relative h-full w-full rounded-xl overflow-hidden
        ${
                isHighlighted
                    ? "bg-gradient-to-br from-surface-secondary/95 to-surface-primary/90 border-borders-accent ring-1 ring-helva-primary/80"
                    : "bg-gradient-to-br from-surface-secondary/90 to-surface-primary/90 border border-borders-primary"
            }
        backdrop-blur-sm transition-all duration-300 ease-out
        hover:scale-105
        group
      `}
            style={{
                animationDelay: delay,
            }}
        >
            {/*
        KEY CHANGE: We use a flex-col layout.
        The icon's container will use 'flex-grow' to push the title to the bottom.
        'justify-center' is removed from here.
      */}
            <div className="relative z-10 h-full flex flex-col items-center sm:p-4 text-center">
                {/*
          KEY CHANGE: This wrapper now grows and centers the icon within itself.
          This ensures the icon is vertically centered in the available space above the title.
        */}
                <div className="flex-grow flex items-center justify-center w-full transition-transform duration-300 group-hover:scale-110">
                    <img
                        src={src}
                        alt={title}
                        className={`object-contain ${
                            isLarge
                                ? mobileBig
                                    ? "w-48 h-48 sm:w-40 sm:h-40"
                                    : "w-28 h-28 sm:w-40 sm:h-40"
                                : mobileBig
                                    ? "w-40 h-40 sm:w-36 sm:h-36"
                                    : "w-28 h-full sm:w-36 sm:h-36"
                        }`}
                    />
                </div>

                {/* Title: We add a margin-top to ensure consistent spacing from the icon area */}
                <h3
                    className={`
           sm:mt-3 mb-3 font-semibold text-text-primary transition-colors duration-300
          ${
                        isLarge
                            ? "text-feature sm:text-subheading-sm md:text-subheading"
                            : "text-base sm:text-feature md:text-subheading-sm"
                    }
        `}
                >
                    {title}
                </h3>

                {/* Arrow for external links (hide on mobile) */}
                {href && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                        <svg
                            className="w-5 h-5 text-helva-primary"
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
            aria-label={title}
        >
            <CardContent />
        </a>
    ) : (
        <CardContent />
    );
};

// Updated Helva showcase section with mobile grid to avoid overlap
const HelvaShowcase = () => (
  <div className="relative h-full bg-gradient-to-br from-surface-secondary/95 to-surface-primary/90 rounded-xl border border-borders-primary backdrop-blur-sm transition-all duration-300 overflow-hidden group hover:scale-105">
    {/* Mobile: grid rows (text, portrait). Tablet (≥640px): switch to flex row. Desktop: absolute as before */}
    <div className="relative h-full grid grid-rows-[auto_26rem] items-stretch sm:flex sm:flex-row">
      {/* Text content - add width/pr to avoid overlap on tablet */}
      <div className="lg:w-3/5 sm:w-3/5 p-3 sm:p-4 lg:p-6 sm:pr-4 md:pr-6 space-y-2 sm:space-y-3 lg:space-y-4 z-10 pb-2 sm:pb-6 md:pb-8 lg:pb-0">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-heading-sm sm:text-heading md:text-heading-lg lg:text-heading-xl font-bold text-text-primary transition-colors duration-300">
            Meet Helva
          </h2>
          <div className="h-1 w-10 sm:w-14 rounded-full bg-gradient-to-r from-helva-primary to-helva-secondary" />
        </div>

        <p className="text-body-xs sm:text-body-sm lg:text-body-lg text-text-secondary leading-relaxed">
          Helva is the most{" "}
          <span className="text-text-primary font-semibold">
            accessible, fast, and smart
          </span>{" "}
          DeFi agent.
        </p>

        <div className="space-y-1.5 sm:space-y-2 lg:space-y-3 text-text-muted text-body-xs sm:text-body-xs lg:text-body">
          <div className="flex items-start gap-1.5 sm:gap-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-helva-primary" />
            <div className="leading-relaxed">
              <span className="text-text-primary font-semibold">
                Analyze & Execute Trades
              </span>
              : With over 30 Trading Indicators, you can consult real-time analytics or execute perpetual trades directly through Helva, with leverage up to 100x.
            </div>
          </div>

          <div className="flex items-start gap-1.5 sm:gap-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-helva-primary" />
            <div className="leading-relaxed">
              <span className="text-text-primary font-semibold">Yield Your Tokens</span>:
                Helva autonomously manages and executes yield strategies, categorized by token type (Stables, Bluechips, Memecoins, etc.) and tailored to your risk profile.
            </div>
          </div>

          <div className="flex items-start gap-1.5 sm:gap-2">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-helva-primary" />
            <div className="leading-relaxed">
              <span className="text-text-primary font-semibold">Automate DeFi Tasks</span>:
                Forget about switching between dozens of apps. Helva streamlines and accelerates your entire DeFi experience, giving you full ecosystem access in one place.
            </div>
          </div>
        </div>
      </div>

      {/* Helva portrait: mobile bottom row; tablet inline right; desktop absolute */}
      <div className="row-start-2 row-end-3 h-full flex items-start justify-center z-20 sm:row-start-auto sm:row-end-auto sm:h-full sm:w-2/5 sm:justify-end sm:items-end lg:inset-auto lg:right-0 lg:top-2 lg:bottom-0 lg:h-full lg:w-2/5 lg:justify-end lg:items-end lg:absolute">
        <img
          src={`${import.meta.env.BASE_URL || ""}uploads/front-no-bg.png`}
          alt="Helva AI"
          className="w-[70%] max-w-[240px] h-auto sm:w-auto sm:max-w-none sm:h-[200px] md:h-[220px] lg:h-full lg:w-auto object-contain drop-shadow-xl flex-shrink-0"
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
    <section
      ref={sectionRef}
      id="what-is"
      className="py-8 pt-28 px-4 bg-surface-primary"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title visible on mobile too */}
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="text-heading-xl sm:text-hero-xs md:text-hero-sm lg:text-hero font-semibold text-text-primary mb-4">
            DeFi, made smarter.
            <br />
            <span className="text-helva-primary">But also faster.</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full bg-helva-primary" />
        </div>
        {/* Desktop Bento Grid - Square cards with reduced container width */}
        <div className="pt-20 hidden lg:block animate-on-scroll">
          {/* Top section - Square cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="aspect-square">
              <FeatureCard
                title="DEXes"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/swap.png`}
              />
            </div>
            <div className="aspect-square">
              <FeatureCard
                title="Lending"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/lending.png`}
                isLarge
              />
            </div>
            <div className="aspect-square">
              <FeatureCard
                title="Perpetuals"
                delay="200ms"
                src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
              />
            </div>
          </div>

          {/* Large Helva showcase */}
          <div className="mb-6">
            <div className="h-[520px]">
              <HelvaShowcase />
            </div>
          </div>

          {/* Bottom section - Square cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="aspect-square">
              <FeatureCard
                title="Yields & Staking"
                delay="300ms"
                src={`${import.meta.env.BASE_URL}uploads/yields.png`}
                isLarge
              />
            </div>
            <div className="aspect-square">
              <FeatureCard
                title="Data Analysis"
                delay="400ms"
                src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
              />
            </div>
            <div className="aspect-square">
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
        {/* Tablet Layout - Square cards with reduced container */}
        <div className="hidden sm:block lg:hidden animate-on-scroll">
          <div className="space-y-6">
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square">
                <FeatureCard
                  title="DEXes"
                  delay="0ms"
                  src={`${import.meta.env.BASE_URL}uploads/swap.png`}
                />
              </div>
              <div className="aspect-square">
                <FeatureCard
                  title="Lending"
                  delay="100ms"
                  src={`${import.meta.env.BASE_URL}uploads/lending.png`}
                  isLarge
                />
              </div>
              <div className="aspect-square">
                <FeatureCard
                  title="Perpetuals"
                  delay="200ms"
                  src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
                />
              </div>
            </div>

            {/* Helva Showcase */}
            <div className="h-[440px]">
              <HelvaShowcase />
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square">
                <FeatureCard
                  title="Yields & Staking"
                  delay="0ms"
                  src={`${import.meta.env.BASE_URL}uploads/yields.png`}
                  isLarge
                />
              </div>
              <div className="aspect-square">
                <FeatureCard
                  title="Data Analysis"
                  delay="100ms"
                  src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
                />
              </div>
              <div className="aspect-square">
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
        {/* Mobile Layout - Equal width, tuned to screenshot */}
        <div className="sm:hidden flex flex-col items-center gap-2 w-full px-4 animate-on-scroll">
          {/* Top cards */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
            <div className="aspect-square">
              <FeatureCard
                title="DEXes"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/swap.png`}
              />
            </div>
            <div className="aspect-square">
              <FeatureCard
                title="Lending"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/lending.png`}
              />
            </div>
          </div>

          <div className="w-full max-w-sm aspect-[3/2]">
            <FeatureCard
              title="Perpetuals"
              delay="200ms"
              src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`}
              isLarge
              mobileBig
            />
          </div>

          {/* Helva showcase */}
          <div className="w-full max-w-sm h-[540px]">
            <HelvaShowcase />
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
            <div className="aspect-square">
              <FeatureCard
                title="Yields"
                delay="0ms"
                src={`${import.meta.env.BASE_URL}uploads/yields.png`}
              />
            </div>
            <div className="aspect-square">
              <FeatureCard
                title="Data Analysis"
                delay="100ms"
                src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`}
              />
            </div>
          </div>

          <div className="w-full max-w-sm aspect-[3/2]">
            <FeatureCard
              title="View Docs →"
              delay="200ms"
              src={`${import.meta.env.BASE_URL}uploads/doc.png`}
              isLarge
              isHighlighted
              mobileBig
              href="https://helva.gitbook.io/helva"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
