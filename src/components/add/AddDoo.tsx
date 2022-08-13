import "./add.sass"
import { useState } from "preact/hooks"



export const AddDoo = () => {

  const [ newDoo, setNewDoo ] = useState("")

  const handleAddNewDoo = (e: MouseEvent) => {
    e.preventDefault()
    setNewDoo("")
  }

  const handleInputNewDoo = (e: Event) => {
    e.preventDefault()
    const value = (e.target as HTMLInputElement).value
    console.log(value)
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