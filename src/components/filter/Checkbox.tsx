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
    const input = label.children[0] as HTMLInputElement
    return input.checked
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
      <input
        type="checkbox"
        checked={checked}
        disabled={isActive() ? false : true}
        tabIndex={-1}
        onClick={(e) => e.preventDefault()}
      />
    </label>
  )
})