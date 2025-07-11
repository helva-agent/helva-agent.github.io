
import React, { useEffect, useRef } from 'react';
import { PartnerCard } from './PartnerCard';
// import quickswapLogo from '/uploads/quickswap-logo.png';
// import polygonLogo from '/uploads/polygon-matic-logo.png';

const PartnershipsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
    <section id="partners" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="lg:w-[835px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-16 animate-on-scroll font-poppins">
          Built with the Best.
        </h2>

        {/* Description */}
        <div className="max-w-4xl mb-16 animate-on-scroll">
          <p className="text-lg text-gray-400 leading-relaxed font-poppins font-thin mb-6">
            Helva was co-incubated by Quickswap to become its natural DeFAI extension. Thanks to its modular architecture, any DeFi token or protocol can be integrated quickly and easily.
            <br />
            <ul className="list-disc ml-6 space-y-2">
              <li>Integrating a token means users can perform actions like swaps or LP management simply by mentioning the token name, instead of its contract address.</li>
              <li>Integrating a DeFi protocol means embedding its core functions directly into Helva, allowing anyone to access the protocol through a single prompt.</li>
            </ul>

            If you’d like to integrate your token or protocol, click “Apply for Partnerships” and fill out the form.Integration is free — we only ask for co-marketing in return!

          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:grid lg:grid-cols-3 lg:gap-[50px] mb-8 animate-on-scroll">
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


        {/* CTA Button */}
        <div className="text-center animate-on-scroll">
          <button className="bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white px-8 py-4 h-[43px] rounded-lg text-lg text-center font-normal transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 w-full max-w-4xl border border-gray-600">
            Apply for Partnership
          </button>
        </div>

      </div>
    </section>
  );
};

export default PartnershipsSection;
