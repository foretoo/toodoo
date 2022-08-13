import { IToDo } from "app/types"

export const Item = (
  { name, done, id }: IToDo & { id: number }
) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={done} onChange={() => console.log(id)} />
      <span className={done ? "done" : ""}>{name}</span>
      <button onClick={() => console.log(id)} >✕</button>
    </li>
  )
}