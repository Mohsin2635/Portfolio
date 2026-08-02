import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "outline" | "secondary";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2";

  const variants = {
    default:
      "border-border bg-card/80 text-foreground hover:border-gold/40",
    gold:
      "border-gold/30 bg-gold/10 text-gold hover:bg-gold/20",
    outline:
      "border-gold/40 text-gold bg-transparent",
    secondary:
      "border-transparent bg-muted text-muted-foreground",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}

export { Badge };
