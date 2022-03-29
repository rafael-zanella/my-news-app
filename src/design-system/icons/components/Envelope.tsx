import * as React from 'react'
import { SVGProps } from 'react'

export const Envelope = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.66666 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 3.99999V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66666C1.93333 13.3333 1.33333 12.7333 1.33333 12V3.99999C1.33333 3.26666 1.93333 2.66666 2.66666 2.66666Z"
      stroke="#180E19"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6667 4L8 8.66667L1.33333 4"
      stroke="#180E19"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
