import "./add.sass"
import { useRef, useState } from "preact/hooks"
import { AddButton } from "./AddButton"
import { AddInput } from "./AddInput"



export const AddForm = () => {

  const [ value, setValue ] = useState("")

  const clearInput = useRef(() => setValue("")).current

  return (
    <form className="adddoo">
      <AddInput value={value} setValue={setValue} />
      <AddButton value={value} clearInput={clearInput} />
    </form>
  )
}