import "./list.sass"
import { useData } from "context"



export const List = () => {
  
  const data = useData()

  const list = data.todo.map(({ name, done }, i) => (
    <li className="todo-item" key={`${i}-${done}-${name}`}>
      <span className={done ? "done" : ""}>{name}</span>
    </li>
  ))

  return (
    <ul className="todo-list">
      {list}
    </ul>
  )
}