import { JSXChildren } from "app/types"

type SvgProps = {
  className: string
  width: number
  height: number
  children: JSXChildren
}

export const Svg = (
  { className, width, height, children }: SvgProps
) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      {children}
    </svg>

  )
}