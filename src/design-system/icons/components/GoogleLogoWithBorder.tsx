import * as React from "react";
import { SVGProps } from "react";

export const GoogleLogoWithBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="42"
    fill="none"
    viewBox="0 0 45 42"
    {...props}
  >
    <rect
      width="43"
      height="40"
      x="1"
      y="1"
      strokeWidth="1.5"
      rx="5"
    ></rect>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 21h8.25a8.26 8.26 0 11-2.419-5.831"
    ></path>
  </svg>
);
