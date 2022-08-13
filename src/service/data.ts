import { ref, onValue, set } from "firebase/database"
import { IData, IToDo } from "app/types"
import { auth, catchError, db } from "service/init"



export const subscribeData = (
  callback: (arg: IData) => void,
) => {
  const id = auth.currentUser!.uid
  const userRef = ref(db, "users/" + id)
  return onValue(userRef, (snapshot) => callback(snapshot.val()))
}

export const writeToDo = (
  todos: IToDo[],
) => {
  const userRef = ref(db, "users/" + auth.currentUser!.uid + "/todo")
  set(userRef, todos).catch(catchError)
}

export const writeCompleteToDo = (
  id: number,
  done: boolean,
) => {
  const userRef = ref(db, "users/" + auth.currentUser!.uid + "/todo/" + id + "/done")
  set(userRef, done).catch(catchError)
}