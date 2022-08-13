import { StateUpdater } from "preact/hooks"

export const AddInput = (
  { value, setValue }: { value: string, setValue: StateUpdater<string> }
) => {

  const handleInput = (e: Event) => {
    e.preventDefault()
    const value = (e.target as HTMLInputElement).value
    setValue(value)
  }

  return (
    <input
      type="text"
      value={value}
      onInput={handleInput}
      placeholder="new ..."
    />
  )
}