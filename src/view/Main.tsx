import { JSXChildren } from "../types"
import "./sass/main.sass"

type MainProps = { children: JSXChildren }

export const Main = (
  { children }: MainProps
) => {
  return <main>{children}</main>
}