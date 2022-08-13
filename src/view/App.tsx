import { useEffect } from "preact/hooks"
import { subscribeData } from "service/data"
import { setData } from "context"
import { List } from "components/list"

export const App = () => {

  useEffect(() => {
    const unsubscribe = subscribeData((data) => setData(data))
    return unsubscribe
  }, [])

  return (
    <List />
  )
}