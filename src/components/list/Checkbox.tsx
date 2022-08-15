import { useHoverAnimation } from "./useHoverAnimation"

type CheckboxProps = {
  id: number,
  done: boolean,
  over: boolean,
  completeDoo: (e: Event, id: number) => void
}

export const Checkbox = (
  { id, done, over, completeDoo }: CheckboxProps
) => {

  const labelRef = useHoverAnimation(over)

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    completeDoo(e, id)
  }

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault()
      completeDoo(e, id)
    }
  }

  return (
    <label
      ref={labelRef}
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeypress}
    >
      <input
        type="checkbox"
        checked={done}
        onClick={(e) => e.preventDefault()}
        tabIndex={-1}
      />
    </label>
  )
}