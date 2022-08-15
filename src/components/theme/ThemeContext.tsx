import { JSXChildren } from "app/types"
import { createContext } from "preact"
import { StateUpdater, useContext, useState } from "preact/hooks"



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



export type IOutTheme = "DARK" | "LIGHT" | "AUTO"
export type IInnTheme = "DARK" | "LIGHT"
type IThemeContext = { theme: IOutTheme, setTheme: StateUpdater<IOutTheme> }

const ThemeContext = createContext<IThemeContext>(null!)

const localTheme: IOutTheme = localStorage.getItem("theme") as IOutTheme | undefined || "AUTO"



export const ThemeContextProvider = (
  { children }: { children: JSXChildren }
) => {



  const [ theme, setTheme ] = useState<IOutTheme>(localTheme)

  let innTheme: IInnTheme

  if (theme === "AUTO")
    innTheme =
      window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "DARK" : "LIGHT"
      : "LIGHT"
  else innTheme = theme

  const body = document.body as HTMLBodyElement
  body.setAttribute("style", innTheme === "DARK" ? rule.dark : rule.light)
  if (theme !== "AUTO") localStorage.setItem("theme", theme)
  else localStorage.removeItem("theme")



  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}



export const useTheme = () => useContext(ThemeContext)