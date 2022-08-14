import "./filter.sass"
import { writeFilter } from "service/data"
import { useData } from "app/context"
import { IFilter } from "app/types"
import { Checkbox } from "./Checkbox"



export const Filter = () => {

  const { filter } = useData()

  const handleFilter = (checked: boolean) => {
    let newfilter: IFilter
    if (checked)
      newfilter = filter === "DONE" ? "ALL" : "DONE"
    else
      newfilter = filter === "KEEN" ? "ALL" : "KEEN"
    writeFilter(newfilter)
  }

  const isKeen = () => filter === "KEEN"
  const isDone = () => filter === "DONE"

  return (
    <fieldset className="filter">
      <span className={filter !== "ALL" ? "active" : ""}>filter</span>
      <Checkbox
        checked={false}
        callback={handleFilter}
        isActive={isKeen}
      />
      <Checkbox
        checked={true}
        callback={handleFilter}
        isActive={isDone}
      />
    </fieldset>
  )
}