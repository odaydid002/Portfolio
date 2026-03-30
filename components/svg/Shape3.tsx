import { forwardRef } from "react";

const Shape3 = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => {
    return(
    <svg 
      viewBox="0 0 98 31" 
      width="90"
      height="90"
      fill="none" 
      className={className}
      ref={ref}
    >
      <path
        d="M1.44211 1.38574L24.7203 25.6105L39.1905 7.99248L56.4918 25.6105L75.3659 7.99248L96.4421 29.3857"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  )
})

export default Shape3