import { SVGProps } from 'react'

export const BookmarkSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.8333 19.5L12 15.3333L6.16667 19.5V6.16667C6.16667 5.72464 6.34227 5.30072 6.65483 4.98816C6.96739 4.67559 7.39131 4.5 7.83334 4.5H16.1667C16.6087 4.5 17.0326 4.67559 17.3452 4.98816C17.6577 5.30072 17.8333 5.72464 17.8333 6.16667V19.5Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
