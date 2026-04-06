import { forwardRef } from "react";

const Shape1 = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => {
    return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      viewBox="0 0 105 121"
      fill="none"
      className={className}
      ref={ref}
    >
      <path
        d="M83.0243 50.3177L32.1093 78.1454L33.4667 20.1368L83.0243 50.3177Z"
        stroke="#E7E7E7"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M90.6198 71.3643L36.6644 100.854L38.1032 39.3818L90.6198 71.3643Z"
        stroke="var(--color-primary)"
        strokeLinejoin="round"
      />
    </svg>
  )
})

export default Shape1