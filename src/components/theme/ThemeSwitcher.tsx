import { useState } from "preact/hooks"
import "./theme-switcher.sass"


export type Theme = "DARK" | "AUTO" | "LIGHT"
export const ThemeSwitcher = () => {

  const [ theme, setTheme ] = useState<Theme>("AUTO")

  return (
    <fieldset className="theme-switcher">
      <button
        className={theme === "DARK" ? "active" : undefined}
        onClick={() => setTheme("DARK")}
        >
          dark
        </button>
      <button
        className={theme === "AUTO" ? "active" : undefined}
        onClick={() => setTheme("AUTO")}
        >
          auto
        </button>
      <button
        className={theme === "LIGHT" ? "active" : undefined}
        onClick={() => setTheme("LIGHT")}
        >
          light
        </button>
    </fieldset>
  )
}