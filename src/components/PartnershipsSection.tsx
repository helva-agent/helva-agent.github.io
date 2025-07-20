import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

interface PartnerCardProps {
  name: string;
  src?: string;
  delay: string;
  isPlaceholder?: boolean;
  fullWidth?: boolean;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  src,
  delay,
  isPlaceholder = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={`card-3d bg-gray-900 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[180px] hover:border-gray-600 transition-all duration-300 ${
        fullWidth ? "lg:col-span-3" : ""
      }`}
      style={{ animationDelay: delay }}
    >
      {!isPlaceholder && src ? (
        <>
          <img src={src} alt={name} className="w-16 h-16 object-contain mb-4" />
          <h3 className="font-montserrat text-heading-sm text-white font-medium">
            {name}
          </h3>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-12 h-12 border-2 border-dashed border-gray-600 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-2xl text-gray-600">+</span>
          </div>
          <p className="font-roboto text-body text-gray-400 font-light">
            {name}
          </p>
        </div>
      )}
    </div>
  );
};

const PartnershipsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="partners"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black mb-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* ... existing content ... */}

        {/* Enhanced Partnership CTA Button */}
        <div className="text-center animate-on-scroll">
          <Button
            variant="helva-partnership"
            size="partnership"
            ripple={true}
            className="partnership-glow btn-3d relative group"
            asChild
          >
            <a
              href="https://form.typeform.com/to/CA2cRP6c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Apply for Partnership
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
