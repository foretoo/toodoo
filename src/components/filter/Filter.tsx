import { writeFilter } from "service/data"
import { useData } from "app/context"
import { IFilter } from "app/types"
import "./filter.sass"

export const Filter = () => {

  const { filter } = useData()

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
    let newfilter: IFilter
    if (checked)
      newfilter = filter === "DONE" ? "ALL" : "DONE"
    else
      newfilter = filter === "KEEN" ? "ALL" : "KEEN"
    writeFilter(newfilter)
  }

  return (
    <fieldset className="filter">
      <span>filter</span>
      <label
        className={filter === "KEEN" ? "active" : ""}
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleKeypress}
      >
        <input
          type="checkbox"
          checked={false}
          disabled={filter === "KEEN" ? false : true}
          tabIndex={-1}
          onClick={(e) => e.preventDefault()}
        />
      </label>
      <label
        className={filter === "DONE" ? "active" : ""}
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleKeypress}
      >
        <input
          type="checkbox"
          checked={true}
          disabled={filter === "DONE" ? false : true}
          tabIndex={-1}
          onClick={(e) => e.preventDefault()}
        />
      </label>
    </fieldset>
  )
}