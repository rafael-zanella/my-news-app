import * as React from 'react'
import { SVGProps } from 'react'

export const Bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    stroke="#180E19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5.33334C12 4.27247 11.5786 3.25505 10.8284 2.50491C10.0783 1.75476 9.06087 1.33334 8 1.33334C6.93913 1.33334 5.92172 1.75476 5.17157 2.50491C4.42143 3.25505 4 4.27247 4 5.33334C4 10 2 11.3333 2 11.3333H14C14 11.3333 12 10 12 5.33334Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.15333 14C9.03612 14.2021 8.86789 14.3698 8.66548 14.4864C8.46307 14.6029 8.23358 14.6643 8 14.6643C7.76641 14.6643 7.53692 14.6029 7.33451 14.4864C7.1321 14.3698 6.96387 14.2021 6.84666 14"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
