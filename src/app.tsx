import { Header } from "./view/Header"
import { Footer } from "./view/Footer"
import { Main } from "./view/Main"
import { Auth } from "./view/Auth"

export function App() {
  return (
    <>
      <Header />
      <Main><Auth /></Main>
      <Footer />
    </>
  )
}