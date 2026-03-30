import { forwardRef } from "react";

const Shape2 = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => {
    return(
    <svg
      width="350"
      height="350"
      viewBox="0 0 495 495"
      fill="none"
      className={className}
      ref={ref}
    >
      <rect
        x="149.97"
        y="-2.63413"
        width="379.337"
        height="379.337"
        rx="24.179"
        transform="rotate(23.639 144.959 -6.34306)"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}
)
export default Shape2