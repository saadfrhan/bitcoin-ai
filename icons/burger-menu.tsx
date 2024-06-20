import * as React from "react"
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#00F0FF"
      d="M18.017 14.5a1.5 1.5 0 0 1 .144 2.993l-.144.007h-16a1.5 1.5 0 0 1-.144-2.993l.144-.007h16Zm0-7a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 1 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3h16Z"
    />
  </svg>
)
export default SvgComponent
