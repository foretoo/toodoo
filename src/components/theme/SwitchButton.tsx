import { StateUpdater } from "preact/hooks"
import { IOutTheme } from "./ThemeContext"

export const SwitchButton = (
  { mode, theme, setTheme }: { mode: IOutTheme, theme: IOutTheme, setTheme: StateUpdater<IOutTheme> }
) => {
  return (
    <button
      className={theme === mode ? "active" : ""}
      onClick={() => setTheme(theme === mode ? "AUTO" : mode)}
    >
      {mode.toLocaleLowerCase()}
    </button>
  )
}