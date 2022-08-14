import { IFilter } from "app/types"

type BoxProps = {
  checked: boolean,
  callback: (checked: boolean) => void,
  isActive: () => boolean
}

export const Box = (
  { checked, callback, isActive }: BoxProps
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
}