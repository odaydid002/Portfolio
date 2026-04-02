import { forwardRef } from "react";

interface ShapeProps {
  className?: string;
}

const DatabaseIcon = forwardRef<SVGSVGElement, ShapeProps>(
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
          d="M59 39.3333C80.7232 39.3333 98.3333 32.7295 98.3333 24.5833C98.3333 16.4371 80.7232 9.83334 59 9.83334C37.2768 9.83334 19.6666 16.4371 19.6666 24.5833C19.6666 32.7295 37.2768 39.3333 59 39.3333Z"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M34.4166 53.3055C37.3744 54.1944 40.6821 54.927 44.25 55.4684"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M98.3333 59C98.3333 67.1464 80.7233 73.75 59 73.75C37.2767 73.75 19.6666 67.1464 19.6666 59"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M34.4166 87.7222C37.3744 88.6111 40.6821 89.3437 44.25 89.885"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M98.3333 24.5833V93.4167C98.3333 101.563 80.7233 108.167 59 108.167C37.2767 108.167 19.6666 101.563 19.6666 93.4167V24.5833"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    );
  }
);

DatabaseIcon.displayName = "DatabaseIcon";

export default DatabaseIcon;