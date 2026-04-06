import { forwardRef } from "react";

const Shape4 = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => {
    return(
    <svg 
      viewBox="0 0 51 60" 
      width="60"
      height="60"
      fill="none" 
      className={className}
      ref={ref}
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="31"
        cy="40"
        r="19.5"
        stroke="var(--color-primary)"
      />
    </svg>
  )
}
)
export default Shape4