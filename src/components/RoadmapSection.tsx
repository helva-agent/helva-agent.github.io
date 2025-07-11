import React, { useEffect, useRef, useState } from 'react';

const roadmapData = [
  {
    title: 'Helva V1 Mainnet Release - Q3 2025',
    text: `Helva V1 will launch on mainnet completely free to use — with no additional fees beyond those of the integrated protocols. At launch, users will be able to interact seamlessly with major Polygon DeFi platforms like Quickswap, Aave, Morpho, and Stader. From day one, Helva will be smart enough to understand and execute any type of user prompt — from yield strategies and trades to full task automation.`,
    delay: 200,
  },
  {
    title: 'Market Intelligence Engine & Helva V2 Release - Q4 2025',
    text: `Helva V2 will unlock key additional features, such as optimized swap routing and the ability to choose between multiple lending protocols based on real-time APRs. The integrated Market Intelligence Engine will enable Helva to perform more accurate, context-aware analyses — leading to smarter and more effective trades and its outputs will be shared also on Helva's X Account.`,
    delay: 400,
  },
  {
    title: 'Cross-Chain Features - 2026',
    text: `Helva's EVM-compatible architecture allows it to be deployed across virtually any EVM ecosystem. Once Helva is established as the leading DeFAI agent on Polygon, we will leverage its modular and interoperable design to make Polygon an even more interoperable and AI-driven ecosystem.`,
    delay: 600,
  },
];

const roadmapData2 = [
  {
    title: 'Helva V1 - Q3 2025',
    text: `Helva V1 will launch on mainnet completely free to use — with no additional fees beyond those of the integrated protocols. At launch, users will be able to interact seamlessly with major Polygon DeFi platforms like Quickswap, Aave, Morpho, and Stader. From day one, Helva will be smart enough to understand and execute any type of user prompt — from yield strategies and trades to full task automation.`,
    delay: 200,
  },
  {
    title: 'Market Intelligence - Q4 2025',
    text: `Helva V2 will unlock key additional features, such as optimized swap routing and the ability to choose between multiple lending protocols based on real-time APRs. The integrated Market Intelligence Engine will enable Helva to perform more accurate, context-aware analyses — leading to smarter and more effective trades and its outputs will be shared also on Helva's X Account.`,
    delay: 400,
  },
  {
    title: 'Cross-Chain Features - 2026',
    text: `Helva's EVM-compatible architecture allows it to be deployed across virtually any EVM ecosystem. Once Helva is established as the leading DeFAI agent on Polygon, we will leverage its modular and interoperable design to make Polygon an even more interoperable and AI-driven ecosystem.`,
    delay: 600,
  },
];

const RoadmapSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom] = useState(false);

  // Detect bottom of scroll container
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
  };

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => entry.target.classList.add('animate-fade-in'), delay);
        }
      }),
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="py-24 px-4 mb-section sm:px-6 lg:px-8 bg-black"
    >
      <div className="mx-auto lg:w-[766px]">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-16 font-poppins">
          Roadmap
        </h2>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="relative flex flex-col gap-20 overflow-y-auto scroll-smooth pr-3"
            style={{ maxHeight: '70vh' }}
          >
            <style>{`#roadmap-mobile ::-webkit-scrollbar { display: none; }`}</style>
            <div id="roadmap-mobile" className="relative">
              {/* Extended timeline line to top */}
              <div className="absolute left-6 top-[-60px] bottom-0 w-[2px] bg-white" />
              
              {/* Top extension with 3 dots */}
              <div className="absolute left-6 top-[-60px] flex flex-col items-center">
                <div className="w-1 h-1 bg-white rounded-full mb-2"></div>
                <div className="w-1 h-1 bg-white rounded-full mb-2"></div>
                <div className="w-1 h-1 bg-white rounded-full mb-2"></div>
              </div>

              {roadmapData2.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-16 mb-20 animate-on-scroll"
                  data-delay={item.delay}
                >
                  <span className="absolute left-4 top-4 w-4 h-4 rounded-full bg-gray-100 font-poppins font-thin z-10 -translate-y-1/2" />
                  <h3 className="text-2xl font-semibold text-white font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-light font-poppins"
                     style={{ color: '#696969', wordSpacing: '-3%' }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}

              {/* Bottom shadow */}
              {!atBottom && (
                <div
                  className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="relative flex flex-col gap-30 overflow-y-auto scroll-smooth pr-3"
            style={{ maxHeight: '68vh' }}
          >
            <style>{`#roadmap-desktop ::-webkit-scrollbar { display: none; }`}</style>
            <div id="roadmap-desktop" className="relative">
              
              {/* Extended timeline line to top */}
              <div className="absolute left-8 top-[-80px] bottom-0 w-[2.5px] bg-white" />
              
              {/* Top extension with 3 dots */}
              <div className="absolute left-8 top-[-80px] flex flex-col items-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full mb-3"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full mb-3"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full mb-3"></div>
              </div>

              {roadmapData.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-20 mb-20 animate-on-scroll"
                  data-delay={item.delay}
                >
                  <span className="absolute left-6 top-3 w-4 h-4 rounded-full bg-gray-100 z-10 -translate-y-1/2" />
                  <h3 className="text-2xl font-semibold text-white font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-light font-poppins"
                     style={{ color: '#696969', wordSpacing: '-3%' }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}

              {/* Bottom shadow */}
              {!atBottom && (
                <div
                  className="absolute bottom-0 left-0 w-full h-[420px] pointer-events-none z-30 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;