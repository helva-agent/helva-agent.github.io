import React, { useState, useRef, useEffect } from "react";

// Icon components as simple SVGs to avoid dependency issues
const ZapIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CoinsIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const BarChart3Icon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const ActivityIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const BookOpenIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const BrainIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    className="w-5 h-5"
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
);

// Enhanced noise texture component for cards - More prominent noise effect
const NoiseTexture = () => (
  <div
    className="absolute inset-0 w-full h-full scale-125 transform opacity-15"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundSize: "30%",
      maskImage: "radial-gradient(ellipse at center, #fff 0%, transparent 75%)",
      WebkitMaskImage:
        "radial-gradient(ellipse at center, #fff 0%, transparent 75%)",
    }}
  />
);

// Enhanced WobbleCard component styled for Helva
const HelvaWobbleCard = ({
  children,
  containerClassName = "",
  className = "",
  backgroundColor = "bg-gray-900/90",
  borderColor = "border-gray-700/50",
  onClick = null,
  href = null,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 25;
    const y = (clientY - (rect.top + rect.height / 2)) / 25;
    setMousePosition({ x, y });
  };

  const CardContent = () => (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onClick={onClick}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.15s ease-out",
        cursor: onClick || href ? "pointer" : "default",
      }}
      className={`relative rounded-2xl overflow-hidden border ${borderColor} ${backgroundColor} backdrop-blur-sm group hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20 ${containerClassName}`}
    >
      <div
        className="relative h-full overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(88% 100% at top, rgba(6,182,212,0.2), rgba(6,182,212,0)), linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
          boxShadow:
            "0 10px 32px rgba(0, 0, 0, 0.4), 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.15), 0 4px 6px rgba(0, 0, 0, 0.5), 0 24px 108px rgba(6, 182, 212, 0.1)",
        }}
      >
        <div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x * 0.5}px, ${
                  -mousePosition.y * 0.5
                }px, 0) scale3d(1.01, 1.01, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.15s ease-out",
          }}
          className={`h-full p-6 ${className}`}
        >
          <NoiseTexture />

          {/* Enhanced glowing overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Additional shimmer effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(45deg, transparent 30%, rgba(6,182,212,0.2) 50%, transparent 70%)",
              transform: isHovering ? "translateX(100%)" : "translateX(-100%)",
              transition: "transform 0.6s ease-out",
            }}
          />

          {/* Subtle animated glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-sm animate-pulse" />
          </div>

          {children}
        </div>
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

// Feature card component for smaller cards
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  href,
  className = "",
  backgroundColor = "bg-gradient-to-br from-gray-900/90 to-gray-800/90",
}) => (
  <HelvaWobbleCard
    containerClassName={`h-full ${className}`}
    backgroundColor={backgroundColor}
    href={href}
  >
    <div className="relative flex h-full flex-col gap-3 sm:gap-4 z-10 p-4 sm:p-6">
      {/* Icon */}
      <div className="w-fit rounded-lg border border-gray-600/50 bg-gray-800/60 p-2 sm:p-3 group-hover:border-cyan-400/50 group-hover:bg-cyan-900/20 transition-all duration-300">
        <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
          <Icon />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2 sm:space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
          {title}
        </h3>
        <p className="font-light text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow for external links */}
      {href && (
        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-cyan-400">
            <ArrowUpRightIcon />
          </div>
        </div>
      )}
    </div>
  </HelvaWobbleCard>
);

// Enhanced Helva showcase card
const HelvaShowcaseCard = () => {
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setLocalMousePosition({ x: x * 3, y: y * 3 });
  };

  return (
    <HelvaWobbleCard
      containerClassName="w-full h-[400px]"
      backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
      borderColor="border-cyan-400/30"
      className="!p-0" // Override default padding for this specific card
    >
      <div
        ref={cardRef}
        className="relative h-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setLocalMousePosition({ x: 0, y: 0 })}
      >
        {/* Content Section with manual padding */}
        <div className="relative h-full p-4 sm:p-6 pr-16 sm:pr-72 flex flex-col justify-center z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                Meet Helva
              </h2>
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>

            <p className="font-light text-base sm:text-lg text-gray-200 leading-relaxed">
              Helva is the most{" "}
              <span className="text-cyan-300 font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                accessible, fast, and smart
              </span>{" "}
              DeFi agent designed to revolutionize your trading experience.
            </p>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4 group/item">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-cyan-500/30 group-hover/item:border-cyan-400/50 transition-all duration-300">
                  <UserIcon />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base group-hover/item:text-cyan-100 transition-colors duration-300">
                    Accessible
                  </h4>
                  <p className="font-light text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors duration-300">
                    Use it directly from our anonymous, permissionless dApp —
                    access Polygon's DeFi just like chatting with an AI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 group/item">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-500/30 group-hover/item:border-green-400/50 transition-all duration-300">
                  <RocketIcon />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base group-hover/item:text-green-100 transition-colors duration-300">
                    Fast
                  </h4>
                  <p className="font-light text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors duration-300">
                    No more jumping among dozens of dApps. Just tell Helva what
                    you want to do and confirm your transaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 group/item">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/30 group-hover/item:border-purple-400/50 transition-all duration-300">
                  <BrainIcon />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base group-hover/item:text-purple-100 transition-colors duration-300">
                    Smart
                  </h4>
                  <p className="font-light text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors duration-300">
                    Trained on top DeFi strategies. Pick your asset and
                    risk-profile, or let Helva analyze the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character positioned at actual bottom edge */}
        <div className="absolute right-0 bottom-0 w-40 h-56 sm:w-64 sm:h-72 flex items-end justify-center">
          <img
            src={`${import.meta.env.BASE_URL || ""}uploads/front-no-bg.png`}
            alt="Helva AI"
            className="w-32 h-full sm:w-56 sm:h-full object-contain object-bottom drop-shadow-xl"
            style={{
              filter: "drop-shadow(0 10px 20px rgba(6, 182, 212, 0.15))",
              transform: `rotateY(${
                localMousePosition.x
              }deg) rotateX(${-localMousePosition.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      </div>
    </HelvaWobbleCard>
  );
};

// Main Features Section
const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black overflow-hidden"
      id="features"
      style={{ marginBottom: "122px" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(6,182,212,0.08), transparent 50%)",
            transform: `translate3d(${mousePosition.x * 30}px, ${
              mousePosition.y * 20
            }px, 0)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 70% 80%, rgba(59,130,246,0.06), transparent 50%)",
            transform: `translate3d(${mousePosition.x * -25}px, ${
              mousePosition.y * -15
            }px, 0)`,
            transition: "transform 0.7s ease-out",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-2 sm:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            DeFi, made smarter.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              But also faster.
            </span>
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block space-y-4 lg:space-y-6">
          {/* Top Row - 3 feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="h-[250px] lg:h-[280px]">
              <FeatureCard
                icon={ZapIcon}
                title="DEXes"
                description="Lightning-fast decentralized exchanges with optimal routing algorithms and minimal slippage for maximum efficiency."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>

            <div className="h-[250px] lg:h-[280px]">
              <FeatureCard
                icon={CoinsIcon}
                title="Lending"
                description="Smart lending protocols with automated yield strategies and intelligent risk management systems."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>

            <div className="h-[250px] lg:h-[280px] col-span-2 lg:col-span-1">
              <FeatureCard
                icon={TrendingUpIcon}
                title="Perpetuals"
                description="Advanced perpetual trading with leverage optimization and intelligent position management capabilities."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>
          </div>

          {/* Middle Row - Helva showcase */}
          <div className="h-[350px] lg:h-[400px]">
            <HelvaShowcaseCard />
          </div>

          {/* Bottom Row - Additional features */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="h-[250px] lg:h-[280px]">
              <FeatureCard
                icon={BarChart3Icon}
                title="Yields & Staking"
                description="Maximize returns with intelligent staking strategies and automated yield farming across protocols."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>

            <div className="h-[250px] lg:h-[280px]">
              <FeatureCard
                icon={ActivityIcon}
                title="Data Analysis"
                description="Real-time market analytics, portfolio insights, and predictive AI algorithms for informed decisions."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>

            <div className="h-[250px] lg:h-[280px] col-span-2 lg:col-span-1">
              <FeatureCard
                icon={BookOpenIcon}
                title="View Docs →"
                description="Complete guides, API references, and tutorials to get you started with Helva's ecosystem."
                href="https://helva.gitbook.io/helva"
                className="border-cyan-400/50 hover:border-cyan-400"
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col items-center gap-8 sm:gap-12 w-full max-w-[340px] mx-auto px-2">
          {/* Top cards */}
          <div className="flex justify-center gap-3 sm:gap-4 w-full">
            <div className="w-[140px] sm:w-[151px] h-[180px] sm:h-[200px]">
              <FeatureCard
                icon={ZapIcon}
                title="DEXes"
                description="Lightning-fast decentralized exchanges."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>
            <div className="w-[140px] sm:w-[151px] h-[180px] sm:h-[200px]">
              <FeatureCard
                icon={CoinsIcon}
                title="Lending"
                description="Smart lending protocols with yield strategies."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>
          </div>

          <div className="w-[295px] sm:w-[315px] h-[280px] sm:h-[320px]">
            <FeatureCard
              icon={TrendingUpIcon}
              title="Perpetuals"
              description="Advanced perpetual trading with leverage optimization and intelligent position management."
              backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
            />
          </div>

          {/* Helva showcase */}
          <div className="w-full h-[350px] sm:h-[400px]">
            <HelvaShowcaseCard />
          </div>

          {/* Bottom cards */}
          <div className="flex justify-center gap-3 sm:gap-4 w-full">
            <div className="w-[140px] sm:w-[151px] h-[180px] sm:h-[200px]">
              <FeatureCard
                icon={BarChart3Icon}
                title="Yields & Staking"
                description="Maximize returns with intelligent strategies."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>
            <div className="w-[140px] sm:w-[151px] h-[180px] sm:h-[200px]">
              <FeatureCard
                icon={ActivityIcon}
                title="Data Analysis"
                description="Real-time market analytics and insights."
                backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
              />
            </div>
          </div>

          <div className="w-[295px] sm:w-[315px] h-[220px] sm:h-[250px]">
            <FeatureCard
              icon={BookOpenIcon}
              title="View Docs →"
              description="Complete guides, API references, and tutorials to get you started with Helva."
              href="https://helva.gitbook.io/helva"
              className="border-cyan-400/50 hover:border-cyan-400"
              backgroundColor="bg-gradient-to-br from-gray-900/95 to-gray-800/95"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
