import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "secondary"
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono transition-colors",
          {
            "bg-surface-elevated text-foreground-secondary": variant === "default",
            "border border-border bg-background/30 text-foreground-secondary": variant === "outline",
            "bg-primary/12 text-primary border border-primary/20": variant === "secondary",
          },
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export { Badge }
