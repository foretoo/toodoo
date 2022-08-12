import "./sass/main.sass"
import { JSXChildren } from "../types"

type MainProps = { children: JSXChildren }

export const Main = (
  { children }: MainProps
) => {
  return <main>{children}</main>
}