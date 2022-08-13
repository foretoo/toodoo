import { useEffect } from "preact/hooks"
import { JSXChildren } from "./types"
import { subscribeData } from "service/data"
import { setData, useData } from "app/context"



export const DataGateaway = (
  { children }: { children: JSXChildren }
) => {
  const data = useData()
  useEffect(() => {
    const unsubscribe = subscribeData((data) => setData(data))
    return unsubscribe
  }, [])
  return data ? <>{children}</> : null
}