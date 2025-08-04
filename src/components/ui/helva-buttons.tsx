/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface FrostButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "partnership" | "nav";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  [key: string]: any;
}

const PrimaryFrostButton = React.forwardRef<
  HTMLButtonElement,
  FrostButtonProps
>(({ children, className, showIcon = true, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border backdrop-blur-md px-6 py-3 text-center font-medium text-white transition-all duration-300",
        "hover:shadow-lg hover:scale-105",
        "active:scale-95",
        "focus:outline-none focus:ring-2",
        className
      )}
      style={
        {
          borderColor: "rgba(50, 173, 230, 0.3)",
          backgroundColor: "rgba(50, 173, 230, 0.2)",
          "--hover-border": "rgba(50, 173, 230, 0.5)",
          "--hover-bg": "rgba(50, 173, 230, 0.3)",
          "--hover-shadow": "rgba(50, 173, 230, 0.25)",
          "--focus-ring": "rgba(50, 173, 230, 0.5)",
          "--effect-bg": "rgba(50, 173, 230, 0.4)",
          "--effect-hover-bg": "rgba(50, 173, 230, 0.2)",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.5)";
        target.style.backgroundColor = "rgba(50, 173, 230, 0.3)";
        target.style.boxShadow =
          "0 10px 15px -3px rgba(50, 173, 230, 0.25), 0 4px 6px -2px rgba(50, 173, 230, 0.1)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.3)";
        target.style.backgroundColor = "rgba(50, 173, 230, 0.2)";
        target.style.boxShadow = "none";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "2px solid rgba(50, 173, 230, 0.5)";
        e.currentTarget.style.outlineOffset = "2px";
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
      {...props}
    >
      <span className="relative z-20 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-2 flex items-center justify-between w-full px-4">
        <span>{children}</span>
        {showIcon && (
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        )}
      </span>
      <div
        className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
        style={
          {
            backgroundColor: "rgba(50, 173, 230, 0.4)",
            "--hover-bg": "rgba(50, 173, 230, 0.2)",
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(50, 173, 230, 0.2)";
        }}
      />
    </button>
  );
});

const SecondaryFrostButton = React.forwardRef<
  HTMLButtonElement,
  FrostButtonProps
>(({ children, className, showIcon = true, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border bg-gray-800/60 backdrop-blur-md px-6 py-3 text-center font-medium text-white transition-all duration-300",
        "hover:bg-gray-700/60 hover:shadow-lg hover:scale-105",
        "active:scale-95",
        "focus:outline-none focus:ring-2",
        className
      )}
      style={
        {
          borderColor: "rgba(50, 173, 230, 0.4)",
          "--hover-border": "rgba(50, 173, 230, 0.6)",
          "--hover-shadow": "rgba(50, 173, 230, 0.2)",
          "--focus-ring": "rgba(50, 173, 230, 0.5)",
          "--effect-bg": "rgba(50, 173, 230, 0.3)",
          "--effect-hover-bg": "rgba(50, 173, 230, 0.15)",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.6)";
        target.style.boxShadow =
          "0 10px 15px -3px rgba(50, 173, 230, 0.2), 0 4px 6px -2px rgba(50, 173, 230, 0.1)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.4)";
        target.style.boxShadow = "none";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "2px solid rgba(50, 173, 230, 0.5)";
        e.currentTarget.style.outlineOffset = "2px";
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
      {...props}
    >
      <span className="relative z-20 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-2 flex items-center justify-between w-full px-4">
        <span>{children}</span>
        {showIcon && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        )}
      </span>
      <div
        className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
        style={
          {
            backgroundColor: "rgba(50, 173, 230, 0.3)",
          } as React.CSSProperties
        }
      />
    </button>
  );
});

const PartnershipFrostButton = React.forwardRef<
  HTMLButtonElement,
  FrostButtonProps
>(({ children, className, showIcon = true, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border backdrop-blur-md px-8 py-4 text-center font-semibold text-white transition-all duration-300",
        "hover:shadow-xl hover:scale-[1.02]",
        "active:scale-[0.98]",
        "focus:outline-none focus:ring-2",
        className
      )}
      style={
        {
          borderColor: "rgba(50, 173, 230, 0.4)",
          background:
            "linear-gradient(to right, rgba(50, 173, 230, 0.2), rgba(50, 173, 230, 0.2))",
          "--hover-border": "rgba(50, 173, 230, 0.6)",
          "--hover-from": "rgba(50, 173, 230, 0.3)",
          "--hover-to": "rgba(50, 173, 230, 0.3)",
          "--hover-shadow": "rgba(50, 173, 230, 0.3)",
          "--focus-ring": "rgba(50, 173, 230, 0.5)",
          "--effect-bg": "rgba(50, 173, 230, 0.5)",
          "--effect-hover-bg": "rgba(50, 173, 230, 0.25)",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.6)";
        target.style.background =
          "linear-gradient(to right, rgba(50, 173, 230, 0.3), rgba(50, 173, 230, 0.3))";
        target.style.boxShadow = "0 25px 50px -12px rgba(50, 173, 230, 0.3)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.borderColor = "rgba(50, 173, 230, 0.4)";
        target.style.background =
          "linear-gradient(to right, rgba(50, 173, 230, 0.2), rgba(50, 173, 230, 0.2))";
        target.style.boxShadow = "none";
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = "2px solid rgba(50, 173, 230, 0.5)";
        e.currentTarget.style.outlineOffset = "2px";
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
      }}
      {...props}
    >
      <span className="relative z-20 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-2 flex items-center justify-between w-full">
        <span className="flex-1 text-left">{children}</span>
        {showIcon && (
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 flex-shrink-0 ml-4" />
        )}
      </span>
      <div
        className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
        style={
          {
            backgroundColor: "rgba(50, 173, 230, 0.5)",
          } as React.CSSProperties
        }
      />
      <div
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={
          {
            background:
              "linear-gradient(to right, rgba(50, 173, 230, 0), rgba(50, 173, 230, 0.1), rgba(50, 173, 230, 0))",
          } as React.CSSProperties
        }
      />
    </button>
  );
});

const NavFrostButton = React.forwardRef<HTMLButtonElement, FrostButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative cursor-pointer overflow-hidden rounded-full border border-transparent bg-transparent backdrop-blur-sm px-4 py-2 text-center text-sm font-normal text-white/80 transition-all duration-200",
          "hover:border-white/20 hover:bg-white/10 hover:text-white hover:backdrop-blur-md",
          "active:scale-95",
          "focus:outline-none focus:ring-2 focus:ring-white/50",
          className
        )}
        {...props}
      >
        <span className="relative z-10 transition-all duration-200 group-hover:text-white">
          {children}
        </span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </button>
    );
  }
);

const FrostCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
    </div>
  );
});

const FrostButton = React.forwardRef<HTMLButtonElement, FrostButtonProps>(
  ({ variant = "primary", children, ...props }, ref) => {
    switch (variant) {
      case "primary":
        return (
          <PrimaryFrostButton ref={ref} {...props}>
            {children}
          </PrimaryFrostButton>
        );
      case "secondary":
        return (
          <SecondaryFrostButton ref={ref} {...props}>
            {children}
          </SecondaryFrostButton>
        );
      case "partnership":
        return (
          <PartnershipFrostButton ref={ref} {...props}>
            {children}
          </PartnershipFrostButton>
        );
      case "nav":
        return (
          <NavFrostButton ref={ref} {...props}>
            {children}
          </NavFrostButton>
        );
      default:
        return (
          <PrimaryFrostButton ref={ref} {...props}>
            {children}
          </PrimaryFrostButton>
        );
    }
  }
);

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-2 text-center font-semibold text-white",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children || text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-white/30 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white/10"></div>
    </button>
  );
});

FrostButton.displayName = "FrostButton";
PrimaryFrostButton.displayName = "PrimaryFrostButton";
SecondaryFrostButton.displayName = "SecondaryFrostButton";
PartnershipFrostButton.displayName = "PartnershipFrostButton";
NavFrostButton.displayName = "NavFrostButton";
FrostCard.displayName = "FrostCard";
InteractiveHoverButton.displayName = "InteractiveHoverButton";

export {
  PrimaryFrostButton,
  SecondaryFrostButton,
  PartnershipFrostButton,
  NavFrostButton,
  FrostCard,
  FrostButton,
  InteractiveHoverButton,
};
