import * as React from 'react'
import { SVGProps } from 'react'

export const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={23}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_87_1503)" filter="url(#filter0_d_87_1503)">
      <path
        d="M4.66669 7.99999C4.66669 7.99999 7.33335 2.66666 12 2.66666C16.6667 2.66666 19.3334 7.99999 19.3334 7.99999C19.3334 7.99999 16.6667 13.3333 12 13.3333C7.33335 13.3333 4.66669 7.99999 4.66669 7.99999Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_87_1503"
        x={0}
        y={0}
        width={24}
        height={24}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_87_1503"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_87_1503"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_87_1503">
        <rect width={16} height={16} fill="white" transform="translate(4)" />
      </clipPath>
    </defs>
  </svg>
)
