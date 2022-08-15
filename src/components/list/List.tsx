import "./list.sass"
import { writeCompleteToDo, writeToDo } from "service/data"
import { useData } from "app/context"
import { Item } from "./Item"



export const List = () => {
  
  const data = useData()

  const completeDoo = (e: Event, id: number) => {
    const label = e.target as HTMLLabelElement
    const done = (label.children[0] as HTMLInputElement).checked
    writeCompleteToDo(id, !done)
  }
  
  const deleteDoo = (id: number) => {
    const todo = data.todo.filter((_, i) => i !== id)
    writeToDo(todo)
  }

  const list = data.todo.map(({ name, done }, id) => {
    if (data.filter === "DONE" && !done) return null
    if (data.filter === "KEEN" &&  done) return null
    return (
      <Item
        key={`${id}-${done}-${name}`}
        completeDoo={completeDoo}
        deleteDoo={deleteDoo}
        name={name}
        done={done}
        id={id}
      />
    )
  })

  return (
    <ul className="todo-list">
      {list}
    </ul>
  )
}