import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { ref, set } from "firebase/database"
import { auth, catchError, db } from "./init"



export const writeUser = async (
  email: string,
  password: string,
): Promise<string | undefined> => {

  const credential = await createUserWithEmailAndPassword(auth, email, password).catch(catchError)
  const id = credential?.user.uid
  if (id) {
    const userRef = ref(db, "users/" + id)
    await set(userRef, { created: Date.now() }).catch(catchError)
  }
  return id
}



export const readUser = async (
  email: string,
  password: string,
): Promise<string | undefined> => {

  const credential = await signInWithEmailAndPassword(auth, email, password).catch(catchError)
  const id = credential?.user.uid
  return id
}