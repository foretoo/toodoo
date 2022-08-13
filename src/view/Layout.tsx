import { Header } from "view/Header"
import { Footer } from "view/Footer"
import { Main } from "view/Main"
import { AuthRouter } from "components/auth/AuthRouter"



export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <AuthRouter />
      </Main>
      <Footer />
    </>
  )
}