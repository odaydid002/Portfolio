import { forwardRef } from "react";

interface ShapeProps {
  className?: string;
}

const JavaIcon = forwardRef<SVGSVGElement, ShapeProps>(
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
          d="M30.3594 50.8044C24.4229 52.8084 20.7507 55.5775 20.7507 58.6362C20.7507 62.8065 27.5774 66.4384 37.6621 68.3259M37.6621 68.3259C33.9167 70.2213 31.6766 72.626 31.6766 75.2432C31.6766 81.3575 43.9058 86.314 58.9916 86.314C62.8762 86.314 66.5716 85.9856 69.9174 85.3931M37.6621 68.3259C42.3634 69.206 47.7726 69.7075 53.5287 69.7075C61.9234 69.7075 69.5811 68.6411 75.3803 66.8883M80.8432 49.7773C73.9023 51.828 64.2288 53.1005 53.5287 53.1005C32.4086 53.1005 15.2877 48.1435 15.2877 42.029C15.2877 37.3076 25.496 33.2764 39.871 31.6847"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M108.167 93.7603C108.167 101.717 86.1538 108.167 59 108.167C31.846 108.167 9.83337 101.717 9.83337 93.7603C9.83337 88.1042 18.2276 83.2092 34.4167 80.8516"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M92.2323 43.2076C112.958 37.8306 115.918 70.093 86.3107 80.8487"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86.328 9.83334C82.6853 10.4404 75.8378 13.8395 77.5862 22.5802C79.3346 31.321 76.8585 35.9342 75.4017 37.1482"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.4713 9.83334C60.8291 10.5617 53.9816 14.6408 55.73 25.1296C57.4784 35.6185 55.0023 38.4229 53.5455 39.8796"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

JavaIcon.displayName = "JavaIcon";

export default JavaIcon;