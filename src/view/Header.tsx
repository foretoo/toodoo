import "./sass/header.sass"
import { Quit } from "components/auth"
import { useData } from "app/context"
import { Filter } from "components/filter"

export const Header = () => {
  const data = useData()
  return (
    <header>
      {data
        ? <>
            <Filter />
            <Quit />
          </>
        : null
      }
    </header>
  )
}