import "./auth.sass"
import { useRef } from "preact/hooks"
import { readUser, writeUser } from "service/user"



export const Auth = () => {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const getInput = useRef(() => ([
    emailRef.current!.value,
    passwordRef.current!.value,
  ])).current



  const handleSignUp = async (e: MouseEvent) => {
    e.preventDefault()
    const [ email, password ] = getInput()
    writeUser(email, password)
      .then((id) => console.log(id))
  }

  const handleSignIn = async (e: MouseEvent) => {
    e.preventDefault()
    const [ email, password ] = getInput()
    readUser(email, password)
      .then((id) => console.log(id))
  }



  return (
    <>
      <h1 className="auth-title">Too Doo</h1>


      <form className="auth-form">
        <input
          className="auth-email"
          type="email"
          ref={emailRef}
          placeholder="email"
        />
        <input
          className="auth-password"
          type="password"
          ref={passwordRef}
          placeholder="password"
        />


        <button
          className="auth-signin"
          onClick={handleSignIn}
        >
          sign in
        </button>
        <button
          className="auth-signup"
          onClick={handleSignUp}
        >
          sign up
        </button>
      </form>
    </>
  )
}