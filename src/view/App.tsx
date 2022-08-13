import { DataGateaway } from "app/DataGateaway"
import { AddForm } from "components/add"
import { List } from "components/list"



export const App = () => {
  return (
    <DataGateaway>
      <AddForm />
      <List />
    </DataGateaway>
  )
}