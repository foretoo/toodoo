import { setData } from "context"
import { quit } from "service/user"

export const Quit = () => {
  
  const handleQuit = () => {
    quit()
    setData(null!)
  }

  return (
    <button className="auth-quit" onClick={handleQuit}>quit</button>
  )
}