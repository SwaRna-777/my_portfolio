import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SpotlightCard({ children, className, onMouseMove, ...props }: SpotlightCardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    onMouseMove?.(event);
  }

  return (
    <div className={cn("spotlight-card", className)} onMouseMove={handleMouseMove} {...props}>
      {children}
    </div>
  );
}
