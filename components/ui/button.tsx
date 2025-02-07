import React from "react"
import { cn } from "@/lib/utils"

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline"
  }
>(({ className, variant = "primary", ...props }, ref) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
        {
          "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500": variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500": variant === "secondary",
          "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500": variant === "outline",
        },
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

