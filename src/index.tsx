import "./index.sass"
import { render } from "preact"
import { Layout } from "view/Layout"
import { ContextProvider } from "app/context"

import.meta.hot?.on("vite:beforeUpdate", console.clear)

render(
  <ContextProvider>
    <Layout />
  </ContextProvider>, 
  document.getElementById("root")!
)
