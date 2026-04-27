import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary",
          {
            "bg-primary text-primary-foreground shadow-[0_18px_50px_-18px_hsl(var(--primary)/0.75)] hover:-translate-y-0.5 hover:brightness-105": variant === "primary",
            "bg-surface-elevated text-foreground border border-border hover:border-primary/30 hover:bg-surface": variant === "secondary",
            "border border-border bg-background/20 text-foreground hover:border-primary/40 hover:bg-surface/70": variant === "outline",
          },
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-5 text-sm": size === "md",
            "h-14 px-7 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
