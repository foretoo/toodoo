import "./add.sass"
import { useState } from "preact/hooks"
import { writeToDo } from "service/data"
import { useData } from "app/context"



export const AddDoo = () => {

  const data = useData()
  const [ newDoo, setNewDoo ] = useState("")

  const handleAddNewDoo = (e: MouseEvent) => {
    e.preventDefault()
    const newdoo = [{ name: newDoo, done: false }]
    const todo = newdoo.concat(data.todo)
    writeToDo(todo)
    setNewDoo("")
  }

  const handleInputNewDoo = (e: Event) => {
    e.preventDefault()
    const value = (e.target as HTMLInputElement).value
    setNewDoo(value)
  }
  
  return (
    <form className="adddoo">
      <input
        type="text"
        value={newDoo}
        onInput={handleInputNewDoo}
        placeholder="new ..."
      />
      <button
        onClick={handleAddNewDoo}
      >
        add
      </button>
    </form>
  )
}