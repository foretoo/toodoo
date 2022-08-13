import { IToDo } from "app/types"

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
      <input type="checkbox" checked={done} onChange={(e) => completeDoo(e, id)} />
      <span className={done ? "done" : ""}>{name}</span>
      <button className="del" onClick={() => deleteDoo(id)} >✕</button>
    </li>
  )
}