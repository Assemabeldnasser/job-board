import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const lift =
  "hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-[3px] border-foreground font-mono text-[0.85rem] font-extrabold uppercase tracking-[0.06em] cursor-pointer transition-[transform,box-shadow,background,color] duration-100 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cobalt disabled:pointer-events-none disabled:opacity-45 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground shadow-hard-sm hover:bg-accent hover:text-accent-foreground ${lift}`,
        destructive: `bg-signal text-foreground shadow-hard-sm hover:bg-primary hover:text-primary-foreground ${lift}`,
        outline: `bg-card text-foreground shadow-hard-sm hover:bg-primary hover:text-primary-foreground ${lift}`,
        secondary: `bg-secondary text-secondary-foreground shadow-hard-sm hover:bg-accent hover:text-accent-foreground ${lift}`,
        ghost: "border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "border-transparent bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2.5",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-7 py-3 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
