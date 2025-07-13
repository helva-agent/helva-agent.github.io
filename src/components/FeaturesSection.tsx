import React, { useEffect, useRef } from 'react';
import { FeatureCard } from './FeatureCard';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-16 px-4 bg-black">
      <div className="max-w-[855px] mx-auto flex flex-col gap-[25px] sm:gap-[35px]">
        {/* Title */}
        <h2 className="text-[32px] w-full sm:text-[48px] font-semibold text-center text-white font-poppins animate-on-scroll" style={{ wordSpacing: '-3%' }}>
          DeFi,made smarter. But also faster.
        </h2>

        {/* --- Top Cards --- */}
        <div className="animate-on-scroll justify-center mt-[15px] sm:grid sm:grid-cols-3 sm:gap-[22px] hidden sm:grid">
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="DEXes" delay="0ms"  src={`${import.meta.env.BASE_URL}uploads/swap.png`} />
          </div>
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="Lending" delay="100ms"  src={`${import.meta.env.BASE_URL}uploads/lending.png`} />
          </div>
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="Perpetuals" delay="200ms"  src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`} />
          </div>
        </div>

        {/* Mobile top cards */}
        <div className="sm:hidden flex flex-col items-center mb-[50px] gap-[55px] w-full max-w-[340px] mx-auto">
          <div className="flex justify-center gap-[15px] w-full">
            <div className="w-[151px] h-[151px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <FeatureCard title="DEXes" delay="0ms"  src={`${import.meta.env.BASE_URL}uploads/swap.png`} />
            </div>
            <div className="w-[151px] h-[151px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <FeatureCard title="Lending" delay="100ms"  src={`${import.meta.env.BASE_URL}uploads/lending.png`} />
            </div>
          </div>
          <div className="w-[315px] h-[265px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="Perpetuals" delay="200ms"  src={`${import.meta.env.BASE_URL}uploads/perpetuals.png`} isLarge />
          </div>
        </div>

        {/* --- Helva Section --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 bg-[#191818] rounded-[20px] pt-4 border border-[#2e2e2e] animate-on-scroll">
          {/* Helva Image */}
          <div className="order-2 lg:order-none items-end h-full flex justify-center items-center" style={{ width: '100%', maxWidth: '223px' }}>
            <img src={`${import.meta.env.BASE_URL}uploads/front-no-bg.png`} alt="Helva AI" className="w-[223px] h-[334px]" />
          </div>

          {/* Helva Text */}
          <div className="font-poppins font-thin text-[18px] space-y-4 max-w-xl px-2 order-1 lg:order-none leading-relaxed" style={{ color: '#696969' }}>
            <p>
              Helva is the most <span className="text-white font-medium">accessible, fast, and smart</span> DeFi agent.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><span className="text-white font-medium">Accessible</span>: Use it directly from our anonymous, permissionless dApp — access Polygon’s DeFi just like chatting with an AI, then confirm from your wallet.</li>
              <li><span className="text-white font-medium">Fast</span>: No more jumping among dozens of dApps. Just tell Helva what you want to do and confirm your transaction.</li>
              <li><span className="text-white font-medium">Smart</span>: Trained on top DeFi strategies. Pick your asset and risk-profile, or let Helva analyze the market and go Long/Short with the right leverage.</li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Cards --- */}
        <div className="animate-on-scroll sm:grid sm:grid-cols-3 sm:gap-[22px] hidden sm:grid">
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="Yields & Staking" delay="0ms"  src={`${import.meta.env.BASE_URL}uploads/yields.png`}/>
          </div>
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="Data Analysis" delay="100ms"  src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`} />
          </div>
          <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://helva.gitbook.io/helva" target="_blank" rel="noopener noreferrer">
            <FeatureCard title="View Docs →" delay="200ms"  src={`${import.meta.env.BASE_URL}uploads/doc.png`} isHighlighted isLarge />
          </a>
          </div>
        </div>

        {/* Mobile bottom cards */}
        <div className="sm:hidden flex flex-col items-center gap-[85px] w-full max-w-[340px] mx-auto">
          <div className="flex justify-center gap-[15px] w-full">
            <div className="w-[151px] h-[151px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <FeatureCard title="Yields & Staking" delay="0ms"  src={`${import.meta.env.BASE_URL}uploads/yields.png`} />
            </div>
            <div className="w-[151px] h-[151px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <FeatureCard title="Data Analysis" delay="100ms" src={`${import.meta.env.BASE_URL}uploads/data-analysis.png`} />
            </div>
          </div>
          <div className="w-[315px] h-[265px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <FeatureCard title="View Docs →" delay="200ms" src={`${import.meta.env.BASE_URL}uploads/doc.png`}isHighlighted isLarge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
