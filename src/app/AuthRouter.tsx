import { useEffect, useState } from "preact/hooks"
import { subscribeUser } from "service/user"
import { App } from "view/App"
import { Auth } from "components/auth"



export const AuthRouter = () => {

  const [ content, setContent ] = useState<JSX.Element | null>(null)
  
  useEffect(() => {
    const unsubscribe = subscribeUser((user) => setContent(user ? <App /> : <Auth />))
    return unsubscribe
  }, [])

  return content
}