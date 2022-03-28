import * as React from "react"
import { SVGProps } from "react"

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_67_3708)">
      <path
        d="M13.8851 8.75509C13.7802 9.88989 13.3544 10.9714 12.6573 11.8729C11.9602 12.7745 11.0208 13.459 9.94891 13.8461C8.87706 14.2333 7.7171 14.3072 6.60478 14.0592C5.49246 13.8111 4.47377 13.2515 3.66793 12.4456C2.86208 11.6398 2.3024 10.6211 2.05438 9.50876C1.80636 8.39643 1.88026 7.23648 2.26742 6.16462C2.65458 5.09276 3.339 4.15333 4.24059 3.45626C5.14218 2.75918 6.22364 2.33329 7.35845 2.22842C6.69405 3.12727 6.37434 4.23472 6.45747 5.34937C6.54059 6.46401 7.02102 7.5118 7.81138 8.30216C8.60174 9.09252 9.64953 9.57295 10.7642 9.65607C11.8788 9.73919 12.9863 9.41948 13.8851 8.75509V8.75509Z"
        stroke="#180E19"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_67_3708">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
