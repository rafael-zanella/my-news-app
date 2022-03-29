import * as React from 'react'
import { SVGProps } from 'react'

export const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
      stroke="#180E19"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M1.9375 13.5C2.55184 12.4357 3.43552 11.5519 4.49972 10.9374C5.56392 10.3229 6.77113 9.99944 8 9.99944C9.22887 9.99944 10.4361 10.3229 11.5003 10.9374C12.5645 11.5519 13.4482 12.4357 14.0625 13.5"
      stroke="#180E19"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
