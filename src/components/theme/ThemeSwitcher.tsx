import { useState } from "preact/hooks"
import { SwitchButton } from "./SwitchButton"
import "./theme-switcher.sass"


export type ITheme = "DARK" | "AUTO" | "LIGHT"
export const ThemeSwitcher = () => {

  const [ theme, setTheme ] = useState<ITheme>("AUTO")

  return (
    <fieldset className="theme-switcher">
      <SwitchButton mode="DARK"  theme={theme} setTheme={setTheme} />
      <SwitchButton mode="AUTO"  theme={theme} setTheme={setTheme} />
      <SwitchButton mode="LIGHT" theme={theme} setTheme={setTheme} />
    </fieldset>
  )
}