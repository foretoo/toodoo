import { useEffect, useState } from "preact/hooks"
import { subscribeUser } from "service/user"
import { Header } from "view/Header"
import { Footer } from "view/Footer"
import { Main } from "view/Main"
import { Auth } from "components/auth"
import { App } from "./App"



const Entry = () => {

  const [ content, setContent ] = useState<JSX.Element | null>(null)
  
  useEffect(() => {
    const unsubscribe = subscribeUser((user) => setContent(user ? <App /> : <Auth />))
    return unsubscribe
  }, [])

  return content
}



export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Entry />
      </Main>
      <Footer />
    </>
  )
}