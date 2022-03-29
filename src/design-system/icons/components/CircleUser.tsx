import * as React from 'react'
import { SVGProps } from 'react'

export const CircleUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_87_4588)">
      <path
        d="M8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.25C9.5533 10.25 10.8125 8.9908 10.8125 7.4375C10.8125 5.8842 9.5533 4.625 8 4.625C6.4467 4.625 5.1875 5.8842 5.1875 7.4375C5.1875 8.9908 6.4467 10.25 8 10.25Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.48593 13.0203C3.90915 12.1867 4.55493 11.4866 5.3517 10.9975C6.14847 10.5085 7.0651 10.2496 7.99999 10.2496C8.93488 10.2496 9.85151 10.5085 10.6483 10.9975C11.4451 11.4866 12.0908 12.1867 12.5141 13.0203"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_87_4588">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
