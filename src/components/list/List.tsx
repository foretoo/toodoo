import "./list.sass"
import { useData } from "app/context"
import { Item } from "./Item"



export const List = () => {
  
  const data = useData()

  const list = data.todo.map(({ name, done }, i) => (
    <Item
      key={`${i}-${done}-${name}`}
      name={name}
      done={done}
    />
  ))

  return (
    <ul className="todo-list">
      {list}
    </ul>
  )
}