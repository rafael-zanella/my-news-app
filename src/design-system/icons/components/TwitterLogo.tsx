import { SVGProps } from 'react'

export const TwitterLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_116_5986)">
      <g clipPath="url(#clip1_116_5986)">
        <path
          d="M15.0165 1.6415C14.3781 2.09182 13.6713 2.43624 12.9232 2.6615C12.5217 2.19984 11.9881 1.87263 11.3945 1.72412C10.801 1.57561 10.1762 1.61296 9.60457 1.83114C9.03296 2.04931 8.54215 2.43777 8.19851 2.94398C7.85487 3.45019 7.67498 4.04972 7.68319 4.6615V5.32817C6.51161 5.35854 5.3507 5.09871 4.30386 4.5718C3.25702 4.04489 2.35673 3.26726 1.68319 2.30817C1.68319 2.30817 -0.98348 8.30817 5.01652 10.9748C3.64354 11.9068 2.00796 12.3741 0.349854 12.3082C6.34985 15.6415 13.6832 12.3082 13.6832 4.6415C13.6826 4.4558 13.6647 4.27056 13.6299 4.08817C14.3103 3.41716 14.7904 2.56998 15.0165 1.6415V1.6415Z"
          stroke="#180E19"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_116_5986">
        <rect width={16} height={16} fill="white" />
      </clipPath>
      <clipPath id="clip1_116_5986">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default TwitterLogo
