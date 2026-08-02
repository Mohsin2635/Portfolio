import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gold" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      default:
        "bg-card text-foreground border border-border hover:border-gold/50 hover:bg-card/80 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]",
      gold:
        "bg-gold text-background font-semibold hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-[0.98]",
      outline:
        "border border-gold/40 text-gold bg-transparent hover:bg-gold/10 hover:border-gold",
      ghost: "hover:bg-accent/40 text-foreground hover:text-gold",
      link: "text-gold underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10 p-0",
    };

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref as any}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
