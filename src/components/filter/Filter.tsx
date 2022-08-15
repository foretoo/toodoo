import "./filter.sass"
import { useRef } from "preact/hooks"
import { writeFilter } from "service/data"
import { useData } from "app/context"
import { IFilter } from "app/types"
import { Checkbox } from "./Checkbox"
import { Track } from "./Track"



export const Filter = () => {

  const { filter } = useData()

  const labelRefs = useRef<HTMLLabelElement[]>([])

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
        ref={labelRefs}
        checked={false}
        callback={handleFilter}
        isActive={isKeen}
      />
      <Checkbox
        ref={labelRefs}
        checked={true}
        callback={handleFilter}
        isActive={isDone}
      />
      <Track refs={labelRefs} />
    </fieldset>
  )
}