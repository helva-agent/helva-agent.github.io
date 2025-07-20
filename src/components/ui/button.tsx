import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        // Original ShadCN variants
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Enhanced Helva-specific variants
        "helva-primary": [
          "bg-cyan-500 text-white border border-cyan-400 font-roboto font-medium",
          "hover:bg-cyan-600 hover:border-cyan-500 hover:scale-105",
          "hover:shadow-lg hover:shadow-cyan-500/25",
          "active:scale-95 active:shadow-inner",
          "transition-all duration-200",
          // Glow effect on hover
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-cyan-400 before:to-cyan-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
          // Ripple effect
          "after:absolute after:inset-0 after:rounded-lg after:bg-white after:opacity-0 after:scale-0 after:transition-all after:duration-500 active:after:opacity-30 active:after:scale-100",
        ],

        "helva-secondary": [
          "bg-white text-black border border-gray-300 font-roboto font-medium",
          "hover:bg-gray-50 hover:border-gray-400 hover:scale-105",
          "hover:shadow-lg hover:shadow-white/20",
          "active:scale-95 active:shadow-inner",
          "transition-all duration-200",
          // Subtle glow effect
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-gray-100 before:to-white before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-50",
          // Ripple effect
          "after:absolute after:inset-0 after:rounded-lg after:bg-gray-900 after:opacity-0 after:scale-0 after:transition-all after:duration-500 active:after:opacity-10 active:after:scale-100",
        ],

        "helva-partnership": [
          "bg-cyan-500 text-white border border-gray-600 font-roboto font-semibold text-lg",
          "hover:bg-cyan-600 hover:scale-[1.02] hover:border-cyan-500",
          "hover:shadow-xl hover:shadow-cyan-500/30",
          "active:scale-[0.98] active:shadow-inner",
          "transition-all duration-300",
          // Enhanced glow for partnership CTA
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-cyan-600 before:to-cyan-400 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-30",
          // Shimmer effect
          "overflow-hidden",
          "hover:after:absolute hover:after:top-0 hover:after:left-[-100%] hover:after:w-full hover:after:h-full hover:after:bg-gradient-to-r hover:after:from-transparent hover:after:via-white/20 hover:after:to-transparent hover:after:animate-[shimmer_1s_ease-out]",
        ],

        "nav-button": [
          "bg-transparent text-white border-none font-roboto font-normal",
          "hover:bg-gray-800/50 hover:backdrop-blur-sm hover:scale-105",
          "active:scale-95",
          "transition-all duration-200",
        ],
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
        // Custom sizes for Helva
        "helva-default": "h-11 px-6 py-3 text-sm",
        "helva-lg": "h-12 px-8 py-4 text-base",
        partnership: "h-14 px-10 py-4 text-lg min-w-[200px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ripple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, ripple = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Add ripple effect handler
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple) {
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
        `;

        button.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      }

      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
