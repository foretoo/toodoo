import { IToDo } from "app/types"
import { Checkbox } from "./Checkbox"

type ItemProps = IToDo & {
  id: number
  completeDoo: (e: Event, id: number) => void
  deleteDoo: (id: number) => void
}

export const Item = (
  { completeDoo, deleteDoo, name, done, id }: ItemProps
) => {

  return (
    <li className="todo-item">
      <Checkbox id={id} done={done} completeDoo={completeDoo} />
      <span className={done ? "done" : ""}>{name}</span>
      <button className="del" onClick={() => deleteDoo(id)} >✕</button>
    </li>
  )
}