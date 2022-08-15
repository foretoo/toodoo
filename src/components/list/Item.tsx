import { IToDo } from "app/types"
import { useState } from "preact/hooks"
import { Button } from "./Button"
import { Checkbox } from "./Checkbox"

type ItemProps = IToDo & {
  id: number
  completeDoo: (e: Event, id: number) => void
  deleteDoo: (id: number) => void
}

export const Item = (
  { completeDoo, deleteDoo, name, done, id }: ItemProps
) => {

  const [ mouseOver, setMouseOver ] = useState(false)

  return (
    <li 
      className="todo-item"
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <Checkbox id={id} done={done} completeDoo={completeDoo} over={mouseOver} />
      <span className={done ? "done" : ""}>{name}</span>
      <Button id={id} over={mouseOver} deleteDoo={deleteDoo} />
    </li>
  )
}