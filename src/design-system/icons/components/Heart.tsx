import * as React from 'react'
import { SVGProps } from 'react'

export const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={17}
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.0761 2.34319C16.6504 1.91736 16.1451 1.57956 15.5889 1.34909C15.0327 1.11862 14.4365 1 13.8344 1C13.2323 1 12.6362 1.11862 12.0799 1.34909C11.5237 1.57956 11.0184 1.91736 10.5927 2.34319L9.70941 3.22652L8.82608 2.34319C7.96633 1.48344 6.80027 1.00045 5.58441 1.00045C4.36855 1.00045 3.20249 1.48344 2.34274 2.34319C1.483 3.20293 1 4.36899 1 5.58485C1 6.80072 1.483 7.96678 2.34274 8.82652L3.22608 9.70985L9.70941 16.1932L16.1927 9.70985L17.0761 8.82652C17.5019 8.40089 17.8397 7.89553 18.0702 7.33932C18.3006 6.7831 18.4193 6.18693 18.4193 5.58485C18.4193 4.98278 18.3006 4.38661 18.0702 3.83039C17.8397 3.27418 17.5019 2.76882 17.0761 2.34319V2.34319Z"
      stroke="#180E19"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
