import "./index.sass"
import { render } from "preact"
import { App } from "./app"
import { ContextProvider } from "./context"

import.meta.hot && import.meta.hot.on("vite:beforeUpdate", console.clear)

render(
  <ContextProvider>
    <App />
  </ContextProvider>, 
  document.getElementById("root")!
)
