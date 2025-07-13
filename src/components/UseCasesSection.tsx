import React, { useEffect, useRef, useState } from "react";

const useCaseCategories = [
  { id: "trading", title: "Trading" },
  { id: "yields", title: "Yields" },
  { id: "automated-tasks", title: "Automated Tasks" },
];

const topRowCards = [
  {
    id: 1,
    text: "Run technical analysis on POL and take a Long or Short position based on the results. Use leverage according to the signal's strength.",
  },
  {
    id: 2,
    text: "Use half of my QUICK to generate a low-risk yield strategy using only stablecoins.",
  },
  {
    id: 3,
    text: "Swap my WBTC for POL, supply it on Aave, borrow more POL, and stake them.",
  },
];

const bottomRowCards = [
  {
    id: 4,
    text: "Analyze POL's on-chain metrics and go Long or Short based on the results. Use up to 3x leverage.",
  },
  {
    id: 5,
    text: "Use all my POL to maximize net APR.",
  },
  {
    id: 6,
    text: "Swap half of my POL for QUICK and provide all POL and QUICK to POL/QUICK LP.",
  },
];

const UseCasesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);

  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [desktopAtBottom, setDesktopAtBottom] = useState(false);

  const handleDesktopVerticalScroll = () => {
    if (!desktopScrollRef.current) return;
    const { scrollTop } = desktopScrollRef.current;
    setDesktopAtBottom(scrollTop > 0);
  };

  // Scroll-lock effect for mobile gradient section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      const isInView = rect.top <= 0 && rect.bottom > window.innerHeight;

      if (isInView && window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
        setIsLocked(true);
      } else {
        document.body.style.overflow = "";
        setIsLocked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MobileCard = ({ categoryIndex }: { categoryIndex: number }) => {
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [mobileAtBottom, setMobileAtBottom] = useState(false);

    const handleMobileVerticalScroll = () => {
      if (!mobileScrollRef.current) return;
      const { scrollTop } = mobileScrollRef.current;
      setMobileAtBottom(scrollTop > 0);
    };

    return (
      <div className="relative">
        <div 
          ref={mobileScrollRef}
          className="h-[300px] overflow-y-auto scroll-smooth"
          onScroll={handleMobileVerticalScroll}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Top Card */}
            <div className="w-[247px] h-[211px] rounded-2xl border-2 border-cyan-400 p-4 hover:scale-[1.02] transition duration-300">
              <p className=" font-light tracking-[-0.54px] leading-[28px]" style={{ color: '#FFFFFF', wordSpacing: '-3%' }}>
                {topRowCards[categoryIndex].text}
              </p>
            </div>

            {/* Bottom Card */}
            <div className="relative w-[247px] h-[211px]">
              <div className="w-full h-full rounded-2xl border-2 border-cyan-400 p-4 bg-[#0f0f0f] hover:scale-[1.02] transition duration-300 relative z-10">
                <p className=" font-light tracking-[-0.54px] leading-[28px]" style={{ color: '#FFFFFF', wordSpacing: '-3%' }}>
                  {bottomRowCards[categoryIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dynamic bottom shadow for mobile */}
        <div
          className="absolute bottom-0 left-0 w-full h-[320px] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
            opacity: mobileAtBottom ? 0 : 1,
          }}
        />
      </div>
    );
  };

  return (
    <div
      id="use-cases"
      ref={sectionRef}
      className="bg-black mb-section text-white min-h-screen flex flex-col items-center justify-center p-4"
    >
      {/* Title */}
      <h1 className="text-[35px] md:text-5xl font-semibold mb-8 tracking-[-1.44px] leading-[48px] md:leading-[57.6px]">
        A thousand use-cases.
      </h1>

      {/* ===== MOBILE VIEW ===== */}
      <div className="md:hidden w-full relative overflow-hidden">
        {/* Horizontal line with gradients */}
        <div className="absolute w-full h-[3px] top-[59px] bg-gray-100 z-0">
          <div className="absolute left-0 top-0 h-[3px] w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-[3px] w-10 bg-gradient-to-l from-black to-transparent z-10" />
        </div>

        {/* Scrollable categories/cards */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth relative scrollbar-none z-10"
        >
          <div className="flex w-full">
            {useCaseCategories.map((cat, index) => (
              <div
                key={cat.id}
                className="w-full min-w-full snap-start flex flex-col items-center gap-6 px-6 pt-2"
              >
                {/* Title + Dot */}
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="text-xl font-semibold">{cat.title}</div>
                  <div className="w-3 h-3 bg-gray-100 rounded-full" />
                </div>

                {/* Vertical scrollable container */}
                <MobileCard categoryIndex={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden md:flex flex-col items-center mt-8">
        <div className="relative w-full max-w-[1000px] h-[52px] mb-10">
          {/* Horizontal line */}
          <div
            className="absolute left-0 right-0 mx-auto w-[1000px] h-[3px] top-[44px] z-10 rounded"
            style={{
              backgroundImage: `
      linear-gradient(to right, black 20%, transparent 80%),
      linear-gradient(to left, rgba(0,0,0,0.9) 0%, transparent 60%),
      linear-gradient(#d1d5db, #d1d5db)
    `,
              backgroundRepeat: 'no-repeat, no-repeat, repeat-x',
              backgroundPosition: 'left top, right top, center top',
              backgroundSize: '40px 3px, 60px 3px, 100% 3px',
            }}
          />

          {/* Titles + Dots */}
          <div className="grid grid-cols-3 text-center relative z-10">
            {useCaseCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center gap-2">
                <div className="text-2xl font-semibold">{cat.title}</div>
                <div className="w-3 h-3 bg-gray-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Cards with vertical scroll */}
        <div className="relative max-w-[894px] w-full mx-auto scrollbar-none">
          <div 
            ref={desktopScrollRef}
            className="h-[400px] overflow-y-auto scroll-smooth"
            onScroll={handleDesktopVerticalScroll}
          >
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {useCaseCategories.map((cat, index) => (
                <div key={cat.id} className="flex flex-col items-center gap-8">
                  {/* Top Card */}
                  <div className="w-[247px] h-[211px] rounded-2xl border-2 border-cyan-400 p-4 hover:scale-[1.02] transition duration-300">
                    <p className="text-white font-light tracking-[-0.54px] leading-[28px]">
                      {topRowCards[index].text}
                    </p>
                  </div>

                  {/* Bottom Card */}
                  <div className="relative w-[247px] h-[211px]">
                    <div className="w-full h-full rounded-2xl border-2 border-cyan-400 p-4 bg-[#0f0f0f] hover:scale-[1.02] transition duration-300 relative z-10">
                      <p className="text-white font-light tracking-[-0.54px] leading-[28px]">
                        {bottomRowCards[index].text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dynamic bottom shadow for desktop */}
          <div
            className="absolute bottom-0 left-0 w-full h-[320px] pointer-events-none z-30 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
              opacity: desktopAtBottom ? 0 : 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;