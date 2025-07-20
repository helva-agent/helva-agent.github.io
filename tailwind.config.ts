import type { Config } from "tailwindcss";

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
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
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
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        tilt: "tilt 0.3s ease-out forwards",
        // Enhanced Button Animations
        ripple: "ripple 0.6s linear",
        shimmer: "shimmer 1s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "button-bounce": "buttonBounce 0.6s ease-in-out",
        "gradient-shift": "gradientShift 3s ease infinite",
      },
      fontFamily: {
        // Updated font families
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        // Standardized typography scale
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        display: ["3rem", { lineHeight: "1.1", fontWeight: "600" }],
        "heading-lg": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        heading: ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
