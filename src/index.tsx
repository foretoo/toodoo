import { render } from "preact"
import { App } from "./app"
import "./index.css"

import.meta.hot && import.meta.hot.on("vite:beforeUpdate", console.clear)

render(<App />, document.getElementById("root")!)
