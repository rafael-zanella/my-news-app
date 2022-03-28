import * as React from "react"
import { SVGProps } from "react"

export const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_87_6090)">
      <path
        d="M8 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L8 11.8467L3.88 14.0133L4.66666 9.42668L1.33333 6.18001L5.93999 5.50668L8 1.33334Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_87_6090">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
