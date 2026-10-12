import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse border-[3px] border-foreground/25 bg-foreground/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
