import * as React from 'react'
import { SVGProps } from 'react'

export const PaperPlaneTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_109_7030)">
      <path
        d="M17.2567 8.7846L4.85899 9.86926"
        stroke="#180E19"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2567 8.7846L2.68226 17.4417L4.85899 9.86926L1.40039 2.78985L17.2567 8.7846Z"
        stroke="#180E19"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_109_7030">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
