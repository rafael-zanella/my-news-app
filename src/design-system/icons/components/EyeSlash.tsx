import { SVGProps } from 'react'

export const EyeSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_87_1505)" filter="url(#filter0_d_87_1505)">
      <g clipPath="url(#clip1_87_1505)">
        <path
          d="M13.4134 9.41334C13.2303 9.60984 13.0095 9.76744 12.7641 9.87675C12.5188 9.98607 12.254 10.0448 11.9854 10.0496C11.7169 10.0543 11.4501 10.0049 11.2011 9.90433C10.9521 9.80374 10.7258 9.65403 10.5359 9.46411C10.346 9.27419 10.1963 9.04797 10.0957 8.79893C9.9951 8.5499 9.9457 8.28315 9.95044 8.01461C9.95518 7.74607 10.014 7.48124 10.1233 7.2359C10.2326 6.99057 10.3902 6.76977 10.5867 6.58667M15.96 11.96C14.8204 12.8287 13.4328 13.3099 12 13.3333C7.33335 13.3333 4.66669 8.00001 4.66669 8.00001C5.49595 6.4546 6.64611 5.10441 8.04002 4.04001L15.96 11.96ZM10.6 2.82667C11.0589 2.71926 11.5287 2.66557 12 2.66667C16.6667 2.66667 19.3334 8.00001 19.3334 8.00001C18.9287 8.75708 18.4461 9.46983 17.8934 10.1267L10.6 2.82667Z"
          stroke="#180E19"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66669 0.666656L19.3334 15.3333"
          stroke="#180E19"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_87_1505"
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
          result="effect1_dropShadow_87_1505"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_87_1505"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_87_1505">
        <rect width={16} height={16} fill="white" transform="translate(4)" />
      </clipPath>
      <clipPath id="clip1_87_1505">
        <rect width={16} height={16} fill="white" transform="translate(4)" />
      </clipPath>
    </defs>
  </svg>
)

export default EyeSlash
