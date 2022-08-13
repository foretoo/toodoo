import "./add.sass"
import { useLayoutEffect, useRef, useState } from "preact/hooks"
import { writeToDo } from "service/data"
import { useData } from "app/context"
import anime from "animejs"



export const AddDoo = () => {

  const data = useData()
  const [ newDoo, setNewDoo ] = useState("")
  const [ animateTrigger, setAnimateTrigger ] = useState(!!newDoo)



  const buttonRef = useRef<HTMLButtonElement>(null!)
  const widthRef = useRef<number>(null!)

  useLayoutEffect(() => {
    widthRef.current = buttonRef.current.getBoundingClientRect().width
    buttonRef.current.style.marginRight = `${-widthRef.current}px`
  }, [])
  


  const handleAddNewDoo = (e: MouseEvent) => {
    e.preventDefault()
    const newdoo = [{ name: newDoo, done: false }]
    const todo = newdoo.concat(data.todo)
    writeToDo(todo)
    handleAnimation(false)
    setNewDoo("")
  }

  const handleInputNewDoo = (e: Event) => {
    e.preventDefault()
    const value = (e.target as HTMLInputElement).value
    handleAnimation(!!value)
    setNewDoo(value)
  }

  const handleAnimation = (trigger: boolean) => {
    if (trigger !== animateTrigger) {
      setAnimateTrigger(trigger)
      anime({
        targets: buttonRef.current,
        marginRight: `${trigger ? 0 : -widthRef.current}px`,
        easing: "easeOutCubic"
      })
    }
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
        ref={buttonRef}
        onClick={handleAddNewDoo}
      >
        add
      </button>
    </form>
  )
}