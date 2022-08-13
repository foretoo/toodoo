import "./list.sass"
import { writeCompleteToDo, writeToDo } from "service/data"
import { useData } from "app/context"
import { Item } from "./Item"



export const List = () => {
  
  const data = useData()

  const completeDoo = (e: Event, id: number) => {
    const done = (e.target as HTMLInputElement).checked
    writeCompleteToDo(id, done)
  }
  
  const deleteDoo = (id: number) => {
    const todo = data.todo.filter((_, i) => i !== id)
    writeToDo(todo)
  }

  const list = data.todo.map(({ name, done }, id) => (
    <Item
      key={`${id}-${done}-${name}`}
      completeDoo={completeDoo}
      deleteDoo={deleteDoo}
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