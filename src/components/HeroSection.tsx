import React from "react";

const HeroSection = () => {
  return (
    <section className="relative mb-[122px]  min-h-screen flex flex-col items-center justify-center px-6 pt-28 text-center overflow-hidden">
      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        {/* Title */}
        <h1
          className="text-[32px] sm:text-[48px] font-poppins font-semibold text-white leading-[1.1]"
          style={{ wordSpacing: '-3%' }}
        >
          DeFi, made smarter.
          <br />
          Meet Helva, your DeFAI Agent.
        </h1>

        {/* Subheading */}
        <p
          className="text-[16px] sm:text-[20px] font-thin font-poppins"
          style={{ color: '#696969', wordSpacing: '-3%' }}
        >
          Helva is an Agent designed to access the entire Polygon & Quickswap Ecosystem from a simple conversational prompt.
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-center justify-center gap-4 pt-2">
          <button className="shrink-0 w-[110px] h-[40px] min-w-[110px] min-h-[40px] bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium leading-none px-0 transition-transform duration-300 hover:scale-105 border border-cyan-400">
            Go to dApp
          </button>
          <button className="shrink-0 w-[110px] h-[40px] min-w-[110px] min-h-[40px] bg-white text-black rounded-lg text-sm font-medium leading-none px-0 transition-transform duration-300 hover:scale-105 border border-gray-300">
            Meet Helva
          </button>
        </div>
      </div>

      <div className="mt-20 sm:mt-24 relative w-[246px] h-[348px] sm:w-[368px] sm:h-[521px] rounded-2xl overflow-hidden shadow-[0_0_70px_rgba(1,1,1,1)]">
        {/* Video */}
        <video
          src={`${import.meta.env.BASE_URL}uploads/tank-animated.mp4`}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Shadow from all corners */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
          style={{
            background: `
      linear-gradient(135deg, rgba(1, 1, 1, 1) 10%, transparent 45%) top left,
      linear-gradient(225deg, rgba(1, 1, 1, 1) 10%, transparent 45%) top right,
      linear-gradient(45deg,rgba(1, 1, 1, 1) 10%, transparent 45%) bottom left,
      linear-gradient(315deg, rgba(1, 1, 1, 1) 10%, transparent 45%) bottom right
    `,
            backgroundRepeat: 'no-repeat',

            backgroundPosition: 'top left, top right, bottom left, bottom right',
          }}
        />

      </div>



      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
