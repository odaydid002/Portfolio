import { forwardRef } from "react";

interface ShapeProps {
  className?: string;
}

const AnymosIcon = forwardRef<SVGSVGElement, ShapeProps>(
  ({ className }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 118 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M49.1667 88.5C49.1667 80.3536 42.5629 73.75 34.4167 73.75C26.2706 73.75 19.6667 80.3536 19.6667 88.5C19.6667 96.6464 26.2706 103.25 34.4167 103.25C42.5629 103.25 49.1667 96.6464 49.1667 88.5Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M98.3333 88.5C98.3333 80.3536 91.7297 73.75 83.5833 73.75C75.4368 73.75 68.8333 80.3536 68.8333 88.5C68.8333 96.6464 75.4368 103.25 83.5833 103.25C91.7297 103.25 98.3333 96.6464 98.3333 88.5Z"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M9.83325 59H108.167"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M71.2916 80.3437C68.6489 76.3696 64.1305 73.75 58.9999 73.75C53.8694 73.75 49.351 76.3696 46.7083 80.3437"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M14.75 59L22.9198 28.0389C23.3961 26.234 23.6343 25.3315 23.8643 24.6916C27.216 15.368 38.1691 11.8052 46.0831 17.4644C46.6261 17.8528 47.3214 18.4516 48.712 19.6493C49.5103 20.337 49.9096 20.6809 50.2798 20.9613C55.4708 24.8939 62.5292 24.8939 67.7202 20.9613C68.0904 20.6809 68.4897 20.3371 69.2881 19.6493C70.6786 18.4516 71.3738 17.8528 71.9171 17.4644C79.8309 11.8052 90.7838 15.368 94.136 24.6916C94.3656 25.3315 94.604 26.2339 95.08 28.0389L103.25 59H14.75Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

AnymosIcon.displayName = "AnymosIcon";

export default AnymosIcon;