import "./sass/footer.sass"
import { ThemeSwitcher } from "components/theme"

export const Footer = () => {
  return (
    <footer>
      <ThemeSwitcher />
      <a href="https://github.com/foretoo/toodoo">repo</a>
    </footer>
  )
}