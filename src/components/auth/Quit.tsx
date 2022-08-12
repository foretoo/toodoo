import { quit } from "service/user"

export const Quit = () => {
  return (
    <button onClick={quit}>quit</button>
  )
}