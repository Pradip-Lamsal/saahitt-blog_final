import * as React from "react"

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative overflow-auto ${className}`}
    {...props}
  >
    {children}
  </div>
))
ScrollArea.displayName = "ScrollArea"

interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

const ScrollBar = React.forwardRef<
  HTMLDivElement,
  ScrollBarProps
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex touch-none select-none ${
      orientation === "horizontal" ? "h-2.5 flex-col" : "w-2.5 flex-row"
    } ${className}`}
    {...props}
  />
))
ScrollBar.displayName = "ScrollBar"

export { ScrollArea, ScrollBar }
