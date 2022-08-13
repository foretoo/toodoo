import "./sass/main.sass"
import { JSXChildren } from "app/types"
import { useData } from "app/context"

type MainProps = { children: JSXChildren }

export const Main = (
  { children }: MainProps
) => {

  const data = useData()
  
  return <main className={data ? "app" : "auth"}>{children}</main>
}