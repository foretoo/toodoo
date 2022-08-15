import "./theme-switcher.sass"
import { useEffect, useState } from "preact/hooks"
import { SwitchButton } from "./SwitchButton"



const rule = {
  dark:
    "background-color: black; "  +
    "--bg: var(--light-1); "     +
    "--fill: #222; "             +
    "--key: #444; "              +
    "--text: var(--light-5); "   +
    "--text-m: var(--light-3); " +
    "--text-l: var(--light-2)",
  light:
    "background-color: #eee; "    +
      "--bg: var(--dark-1); "     +
      "--fill: white; "           +
      "--key: white; "            +
      "--text: var(--dark-5); "   +
      "--text-m: var(--dark-3); " +
      "--text-l: var(--dark-2)",
}

const localTheme: ILocalTheme = localStorage.getItem("theme") as ILocalTheme | undefined || "AUTO"

export type ILocalTheme = "DARK" | "AUTO" | "LIGHT"
export type IAppTheme = "DARK" | "LIGHT"
export const ThemeSwitcher = () => {

  const [ trigger, forceUpdate ] = useState(false)
  const [ theme, setTheme ] = useState<ILocalTheme>(localTheme)

  let appTheme: IAppTheme

  if (theme === "AUTO")
    appTheme =
      window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "DARK"
        : "LIGHT"
      : "LIGHT"
  else appTheme = theme



  useEffect(() => {
    if (!window.matchMedia) return
    const themeHandler = () => theme === "AUTO" && forceUpdate(!trigger)
    const darkSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)")
    darkSchemeQuery.addEventListener("change", themeHandler)
    return () => darkSchemeQuery.removeEventListener("change", themeHandler)
  }, [])



  useEffect(() => {
    const body = document.body as HTMLBodyElement
    body.setAttribute("style", appTheme === "DARK" ? rule.dark : rule.light)
    if (theme !== "AUTO") localStorage.setItem("theme", theme)
    else localStorage.removeItem("theme")
  })



  return (
    <fieldset className="theme-switcher">
      <SwitchButton mode="DARK"  theme={theme} setTheme={setTheme} />
      <SwitchButton mode="AUTO"  theme={theme} setTheme={setTheme} />
      <SwitchButton mode="LIGHT" theme={theme} setTheme={setTheme} />
    </fieldset>
  )
}