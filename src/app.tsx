import { Header } from "./view/Header"
import { Footer } from "./view/Footer"
import { Main } from "./view/Main"
import { Auth } from "./components/auth"

export function App() {
  return (
    <>
      <Header />
      <Main><Auth /></Main>
      <Footer />
    </>
  )
}