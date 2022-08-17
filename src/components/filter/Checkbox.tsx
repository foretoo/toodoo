import { DoneIcon, KeenIcon } from "components/shared"
import { forwardRef } from "preact/compat"

type BoxProps = {
  checked: boolean,
  callback: (checked: boolean) => void,
  isActive: () => boolean
}

export const Checkbox = forwardRef<HTMLLabelElement[], BoxProps>((
  { checked, callback, isActive },
  refs,
) => {

  const getValue = (e: Event) => {
    const label = e.target as HTMLLabelElement
    const icon = label.children[0] as SVGElement
    return icon.classList.contains("done")
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    callback(getValue(e))
  }

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault()
      callback(getValue(e))
    }
  }

  return (
    <label
      ref={(label) => refs.current![checked ? 1 : 0] = label!}
      className={isActive() ? "active" : ""}
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeypress}
    >
      {checked ? <DoneIcon /> : <KeenIcon />}
    </label>
  )
})