import "./sass/header.sass"
import { Quit } from "components/auth"
import { useData } from "context"

export const Header = () => {
  const data = useData()
  return <header>{data ? <Quit /> : null}</header>
}