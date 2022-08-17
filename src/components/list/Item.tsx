import { IToDo } from "app/types"
import { useState } from "preact/hooks"
import { Button } from "./Button"
import { Checkbox } from "./Checkbox"

type ItemProps = IToDo & {
  id: number
  deleteDoo: (id: number) => void
}

export const Item = (
  { deleteDoo, name, done, id }: ItemProps
) => {

  const [ mouseOver, setMouseOver ] = useState(false)

  return (
    <li 
      className="todo-item"
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <Checkbox id={id} done={done} over={mouseOver} />
      <span className={done ? "done" : ""}>{name}</span>
      <Button id={id} over={mouseOver} deleteDoo={deleteDoo} />
    </li>
  )
}