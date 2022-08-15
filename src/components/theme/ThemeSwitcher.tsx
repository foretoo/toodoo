import "./theme-switcher.sass"
import { SwitchButton } from "./SwitchButton"
import { useTheme } from "./ThemeContext"



export const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme()

  return (
    <fieldset className="theme-switcher">
      <SwitchButton mode="DARK"  theme={theme} setTheme={setTheme} />
      <SwitchButton mode="LIGHT" theme={theme} setTheme={setTheme} />
    </fieldset>
  )
}