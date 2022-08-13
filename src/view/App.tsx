import { DataGateaway } from "app/DataGateaway"
import { AddDoo } from "components/add"
import { List } from "components/list"



export const App = () => {
  return (
    <DataGateaway>
      <AddDoo />
      <List />
    </DataGateaway>
  )
}