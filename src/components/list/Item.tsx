import { IToDo } from "app/types"

export const Item = (
  { name, done }: IToDo
) => {
  return (
    <li className="todo-item">
      <span className={done ? "done" : ""}>{name}</span>
    </li>
  )
}