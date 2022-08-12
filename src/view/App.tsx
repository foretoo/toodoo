import { setData } from "context"
import { useEffect } from "preact/hooks"
import { subscribeData } from "service/data"

export const App = () => {

  useEffect(() => {
    const unsubscribe = subscribeData((data) => setData(data))
    return unsubscribe
  }, [])

  return (
    <h1>App</h1>
  )
}