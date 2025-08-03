import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/**
 * HELVA DESIGN SYSTEM
 * ===================
 *
 * This Tailwind config contains a unified design system for Helva's website.
 *
 * TYPOGRAPHY SCALE (Mobile-First):
 * - Hero: hero (40px), hero-sm (36px), hero-xs (32px) - Main landing headings (mobile base)
 * - Headings: heading-xl (32px), heading-lg (30px), heading (28px), heading-sm (20px) - Section headings
 * - Subheadings: subheading (18px), subheading-sm (16px) - Card/component titles
 * - Body: body-lg (18px), body (16px), body-sm (14px), body-xs (12px) - Content text
 * - Features: feature (14px), feature-sm (12px), feature-xs (10px) - Card/button text
 *
 * RESPONSIVE USAGE:
 * - Always use responsive classes: text-heading-lg sm:text-heading-xl md:text-hero-xs
 * - Mobile first: smaller base size, scales up with breakpoints
 * - Breakpoints: sm (640px+), md (768px+), lg (1024px+), xl (1280px+)
 *
 * COLOR SYSTEM:
 * - helva-primary: #32ADE6 - Main brand blue
 * - helva-secondary: #3B82F6 - Secondary brand blue
 * - text-primary: #FFFFFF - Primary text (white)
 * - text-secondary: #D1D5DB - Secondary text (gray-300)
 * - text-muted: #9CA3AF - Muted text (gray-400)
 * - surface-primary: #000000 - Main background (black)
 * - surface-secondary: #111827 - Secondary background (gray-900)
 * - borders-primary: rgba(75, 85, 99, 0.5) - Standard borders
 * - borders-accent: rgba(50, 173, 230, 0.5) - Accent borders
 *
 * USAGE EXAMPLES:
 * - Section title: text-heading-lg sm:text-heading-xl md:text-hero-xs text-text-primary
 * - Card title: text-subheading sm:text-heading-sm text-text-primary
 * - Body text: text-body-sm sm:text-body text-text-secondary
 * - Background: bg-surface-primary
 * - Accent color: text-helva-primary or bg-helva-primary
 */

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Helva Brand Colors
        helva: {
          primary: "#32ADE6", // Main Helva blue
          secondary: "#3B82F6", // Secondary blue
          gradient: {
            from: "#32ADE6",
            to: "#3B82F6",
          },
        },
        // Semantic Colors
        text: {
          primary: "#FFFFFF", // White text
          secondary: "#D1D5DB", // Gray-300
          muted: "#9CA3AF", // Gray-400
          subtle: "#6B7280", // Gray-500
        },
        surface: {
          primary: "#000000", // Black background
          secondary: "#111827", // Gray-900
          tertiary: "#1F2937", // Gray-800
          card: "rgba(17, 24, 39, 0.9)", // Semi-transparent gray-900
          "card-hover": "rgba(31, 41, 55, 0.95)", // Semi-transparent gray-800
        },
        borders: {
          primary: "rgba(75, 85, 99, 0.5)", // Gray-600 with opacity
          secondary: "rgba(107, 114, 128, 0.3)", // Gray-500 with opacity
          accent: "rgba(50, 173, 230, 0.5)", // Helva blue with opacity
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        // Enhanced Button Animations
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
          },
        },
        buttonBounce: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "40%": {
            transform: "translateY(-3px) scale(1.05)",
          },
          "60%": {
            transform: "translateY(-2px) scale(1.02)",
          },
        },
        gradientShift: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        // Hero Section Animations
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        pulseShadow: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.6",
          },
        },
        gentleGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(50, 173, 230, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(50, 173, 230, 0.6)",
          },
        },
        tilt: {
          "0%": {
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(10deg) rotateY(10deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        tilt: "tilt 0.3s ease-out forwards",
        // Enhanced Button Animations
        ripple: "ripple 0.6s linear",
        shimmer: "shimmer 1s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "button-bounce": "buttonBounce 0.6s ease-in-out",
        "gradient-shift": "gradientShift 3s ease infinite",
        // Hero Section Animations
        "pulse-shadow": "pulseShadow 3s ease-in-out infinite",
        "gentle-glow": "gentleGlow 3s ease-in-out infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        // Updated font families
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        // Mobile-first responsive typography scale for Helva
        // Hero and main headings - smaller base sizes for mobile
        hero: ["2.5rem", { lineHeight: "1.1", fontWeight: "600" }], // 40px base
        "hero-sm": ["2.25rem", { lineHeight: "1.1", fontWeight: "600" }], // 36px base
        "hero-xs": ["2rem", { lineHeight: "1.2", fontWeight: "600" }], // 32px base

        // Section headings - mobile optimized
        "heading-xl": ["2rem", { lineHeight: "1.1", fontWeight: "600" }], // 32px base
        "heading-lg": ["1.875rem", { lineHeight: "1.2", fontWeight: "600" }], // 30px base
        heading: ["1.75rem", { lineHeight: "1.2", fontWeight: "600" }], // 28px base
        "heading-sm": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }], // 20px base

        // Subheadings - mobile friendly
        subheading: ["1.125rem", { lineHeight: "1.4", fontWeight: "500" }], // 18px base
        "subheading-sm": ["1rem", { lineHeight: "1.4", fontWeight: "500" }], // 16px base

        // Body text - optimized for readability
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px base
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px base
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px base
        "body-xs": ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }], // 12px base

        // Feature/Card text - compact for cards
        feature: ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }], // 14px base
        "feature-sm": ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }], // 12px base
        "feature-xs": ["0.625rem", { lineHeight: "1.3", fontWeight: "500" }], // 10px base

        // Legacy support (keeping for backward compatibility)
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        display: ["3rem", { lineHeight: "1.1", fontWeight: "600" }],
      },
      spacing: {
        // 8px grid system
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      boxShadow: {
        "3d": "0 25px 50px rgba(0, 0, 0, 0.25)",
        glow: "0 0 30px rgba(50, 173, 230, 0.4)",
        "glow-lg": "0 0 60px rgba(50, 173, 230, 0.6)",
        "button-primary": "0 8px 25px rgba(6, 182, 212, 0.3)",
        "button-secondary": "0 8px 25px rgba(255, 255, 255, 0.2)",
        "button-hover": "0 12px 35px rgba(6, 182, 212, 0.4)",
      },
      backgroundImage: {
        "gradient-button":
          "linear-gradient(-45deg, #06b6d4, #0891b2, #0e7490, #155e75)",
      },
      backgroundSize: {
        "400": "400% 400%",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
