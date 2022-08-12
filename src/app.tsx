import { useEffect, useState } from "preact/hooks"
import { subscribeUser } from "service/user"
import { Header } from "./view/Header"
import { Footer } from "./view/Footer"
import { Main } from "./view/Main"
import { Auth } from "./components/auth"

export function App() {

  const [ content, setContent ] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const unsubscribe = subscribeUser((user) => setContent(user ? null : <Auth />))
    return () => unsubscribe()
  }, [])

  return (
    <>
      <Header />
      <Main>{content}</Main>
      <Footer />
    </>
  )
}