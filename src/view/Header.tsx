import "./sass/header.sass"
import { Quit } from "components/auth"
import { useData } from "app/context"

export const Header = () => {
  const data = useData()
  return <header>{data ? <Quit /> : null}</header>
}