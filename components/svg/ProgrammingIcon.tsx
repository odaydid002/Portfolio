import { forwardRef } from "react";

interface ShapeProps {
  className?: string;
}

const ProgrammingIcon = forwardRef<SVGSVGElement, ShapeProps>(
  ({ className }, ref) => {
    return (
      <svg
        ref={ref}
        width="118"
        height="118"
        viewBox="0 0 118 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M98.3334 71.2917V31.9583C98.3334 22.6874 98.3334 18.0519 95.4532 15.1718C92.573 12.2917 87.9376 12.2917 78.6667 12.2917H39.3334C30.0624 12.2917 25.427 12.2917 22.5469 15.1718C19.6667 18.0519 19.6667 22.6874 19.6667 31.9583V71.2917"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.1965 76.284L19.7626 71.2917H98.0963L100.803 76.284C107.897 89.3702 109.664 95.9129 106.967 100.811C104.271 105.708 97.1218 105.708 82.8231 105.708H35.1768C20.8781 105.708 13.7288 105.708 11.0323 100.811C8.33578 95.9129 10.1024 89.3702 17.1965 76.284Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.2083 34.4167L80.7311 38.315C82.6324 39.954 83.5833 40.7734 83.5833 41.7917C83.5833 42.81 82.6324 43.6294 80.7311 45.2683L76.2083 49.1667"
          stroke="var(--color-primary)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.7917 34.4167L37.2689 38.315C35.3675 39.954 34.4167 40.7734 34.4167 41.7917C34.4167 42.81 35.3674 43.6294 37.2689 45.2683L41.7917 49.1667"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.9166 29.5L54.0833 54.0833"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ProgrammingIcon.displayName = "ProgrammingIcon";

export default ProgrammingIcon;