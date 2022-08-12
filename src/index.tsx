import "./index.sass"
import { render } from "preact"
import { App } from "./app"

import.meta.hot && import.meta.hot.on("vite:beforeUpdate", console.clear)

render(<App />, document.getElementById("root")!)
