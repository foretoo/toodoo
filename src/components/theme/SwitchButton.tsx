import { StateUpdater } from "preact/hooks"
import { ILocalTheme } from "./ThemeSwitcher"

export const SwitchButton = (
  { mode, theme, setTheme }: { mode: ILocalTheme, theme: ILocalTheme, setTheme: StateUpdater<ILocalTheme> }
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