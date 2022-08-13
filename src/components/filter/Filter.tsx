import "./filter.sass"

export const Filter = () => {

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const label = e.target as HTMLLabelElement
    const input = label.children[0] as HTMLInputElement
    handleFilter(input.checked)
  }

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault()
      const label = e.target as HTMLLabelElement
      const input = label.children[0] as HTMLInputElement
      handleFilter(input.checked)
    }
  }

  const handleFilter = (checked: boolean) => {
    console.log(checked)
  }

  return (
    <fieldset className="filter">
      <span>filter</span>
      <label
        className={null ? "active" : ""}
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleKeypress}
      >
        <input
          type="checkbox"
          checked={false}
          disabled={null ? false : true}
          tabIndex={-1}
          onClick={(e) => e.preventDefault()}
        />
      </label>
      <label
        className={null ? "active" : ""}
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleKeypress}
      >
        <input
          type="checkbox"
          checked={true}
          disabled={null ? false : true}
          tabIndex={-1}
          onClick={(e) => e.preventDefault()}
        />
      </label>
    </fieldset>
  )
}