import "./index.sass"
import { render } from "preact"
import { Layout } from "view/Layout"
import { ContextProvider } from "app/context"
import { ThemeContextProvider } from "components/theme"

import.meta.hot && import.meta.hot.on("vite:beforeUpdate", console.clear)

render(
  <ThemeContextProvider>
  <ContextProvider>
    <Layout />
  </ContextProvider>
  </ThemeContextProvider>, 
  document.getElementById("root")!
)
