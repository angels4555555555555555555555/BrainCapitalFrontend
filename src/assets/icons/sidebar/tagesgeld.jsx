import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.99967 14.6666H9.99967C13.333 14.6666 14.6663 13.3333 14.6663 9.99992V5.99992C14.6663 2.66659 13.333 1.33325 9.99967 1.33325H5.99967C2.66634 1.33325 1.33301 2.66659 1.33301 5.99992V9.99992C1.33301 13.3333 2.66634 14.6666 5.99967 14.6666Z"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4737 6.11992L8.58703 7.99992L10.4737 9.87992"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.52637 9.87992L7.41304 7.99992L5.52637 6.11992"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
