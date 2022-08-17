import "./sass/svg-icon.sass"
import { Svg } from "./Svg"

export const DoneIcon = () => {
  return (
    <Svg width={20} height={20} className="doo-icon done" >
      <circle cx={10} cy={10} r={5} />
      <path className="up-right" d="M10 1A9 9 0 0 1 19 10" />
      <path className="up-left" d="M10 1A9 9 0 0 0 1 10" />
      <path className="bottom-right" d="M10 19A9 9 0 0 0 19 10" />
      <path className="bottom-left" d="M10 19A9 9 0 0 1 1 10" />
    </Svg>
  )
}