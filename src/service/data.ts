import { ref, onValue } from "firebase/database"
import { IData } from "app/types"
import { auth, db } from "service/init"



export const subscribeData = (
  callback: (arg: IData) => void,
) => {
  const id = auth.currentUser!.uid
  const userRef = ref(db, "users/" + id)
  return onValue(userRef, (snapshot) => callback(snapshot.val()))
}