type CheckboxProps = {
  id: number,
  done: boolean,
  completeDoo: (e: Event, id: number) => void
}

export const Checkbox = (
  { id, done, completeDoo }: CheckboxProps
) => {

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