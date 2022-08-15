import { StateUpdater } from "preact/hooks"
import { ITheme } from "./ThemeSwitcher"

export const SwitchButton = (
  { mode, theme, setTheme }: { mode: ITheme, theme: ITheme, setTheme: StateUpdater<ITheme> }
) => {
  return (
    <button
      className={theme === mode ? "active" : ""}
      onClick={() => setTheme(mode)}
    >
      {mode.toLocaleLowerCase()}
    </button>
  )
}