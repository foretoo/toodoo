import { writeToDo } from "service/data"
import { useData } from "app/context"
import { useAnimation } from "./useAnimation"


export const AddButton = (
  { value, clearInput }: { value: string, clearInput: () => void }
) => {

  const data = useData()
  const ref = useAnimation(!!value)

  const handleAddNewDoo = (e: MouseEvent) => {
    e.preventDefault()
    const newdoo = [{ name: value, done: false }]
    const todo = newdoo.concat(data.todo)
    writeToDo(todo)
    clearInput()
  }

  return (
    <button
      ref={ref}
      onClick={handleAddNewDoo}
    >
      add
    </button>
  )
}