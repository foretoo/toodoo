import { setData } from "context"
import { quit } from "service/user"

export const Quit = () => {
  
  const handleQuit = () => {
    quit()
    setData(null!)
  }

  return (
    <button onClick={handleQuit}>quit</button>
  )
}