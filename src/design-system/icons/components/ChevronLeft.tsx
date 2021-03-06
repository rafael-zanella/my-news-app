import * as React from 'react'
import { SVGProps } from 'react'

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#180E19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15 18-6-6 6-6"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChevronLeft
