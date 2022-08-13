import "./list.sass"
import { useData } from "app/context"
import { Item } from "./Item"



export const List = () => {
  
  const data = useData()

  const list = data.todo.map(({ name, done }, id) => (
    <Item
      key={`${id}-${done}-${name}`}
      name={name}
      done={done}
      id={id}
    />
  ))

  return (
    <ul className="todo-list">
      {list}
    </ul>
  )
}