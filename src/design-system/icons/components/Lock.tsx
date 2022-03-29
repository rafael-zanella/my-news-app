import * as React from 'react'
import { SVGProps } from 'react'

export const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_87_2998)">
      <path
        d="M12.6667 7.33334H3.33333C2.59695 7.33334 2 7.9303 2 8.66668V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66668C14 7.9303 13.403 7.33334 12.6667 7.33334Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66667 7.33334V4.66668C4.66667 3.78262 5.01786 2.93478 5.64298 2.30965C6.2681 1.68453 7.11595 1.33334 8 1.33334C8.88406 1.33334 9.73191 1.68453 10.357 2.30965C10.9821 2.93478 11.3333 3.78262 11.3333 4.66668V7.33334"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_87_2998">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
