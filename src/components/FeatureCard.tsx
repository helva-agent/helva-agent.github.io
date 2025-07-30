import React from "react";

interface FeatureCardProps {
  title: string;
  delay: string;
  iconColor?: string;
  isHighlighted?: boolean;
  src?: string;
  alt?: string;
  isLarge?: boolean;
}

export const FeatureCard = ({
  title,
  delay,
  iconColor,
  isHighlighted = false,
  src,
  alt = title,
  isLarge = false,
}: FeatureCardProps) => {
  return (
    <div
      className={`
    bg-[#191818] rounded-[20px] flex flex-col items-center justify-center
    text-center transition-transform duration-300 hover:scale-105 border border-[#2e2e2e]
    ${isHighlighted ? "ring-4 ring-[#32ADE6]/40 shadow-xl" : "shadow-md"}
    animate-on-scroll pb-[20px]
  `}
      style={{ animationDelay: delay }}
    >
      <div
        className={`
      w-[123px] h-[123px] sm:w-[220px] sm:h-[220px]
      ${isLarge ? "w-[236px] h-[236px] sm:w-[220px] sm:h-[220px]" : ""}
      flex items-center justify-center
    `}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3
        style={{
          fontSize: "24px",
          marginTop: "8px", // increase margin a bit for breathing room
          fontFamily: "Poppins",
          fontWeight: 600,
          color: "white",
          lineHeight: "1.2",
        }}
      >
        {title}
      </h3>
    </div>
  );
};
