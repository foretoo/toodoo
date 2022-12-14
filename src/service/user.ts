import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth"
import { ref, set } from "firebase/database"
import { auth, catchError, db } from "service/init"




export const subscribeUser = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback)
}



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



export const quit = () => signOut(auth)