import { writeCompleteToDo } from "service/data"
import { useHoverAnimation } from "./useHoverAnimation"

type CheckboxProps = {
  id: number,
  done: boolean,
  over: boolean,
}

export const Checkbox = (
  { id, done, over }: CheckboxProps
) => {

  const labelRef = useHoverAnimation<HTMLLabelElement>(over)

  const handleDone = (id: number) => {
    const icon = labelRef.current!.children[0] as SVGElement
    const done = icon.classList.contains("done")
    writeCompleteToDo(id, !done)
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    handleDone(id)
  }

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault()
      handleDone(id)
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