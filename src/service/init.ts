import { initializeApp } from "firebase/app"
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCZGszdfI1FT0tNR44pNA6_P-i27dluFT0",
  authDomain: "toodoo-4b888.firebaseapp.com",
  projectId: "toodoo-4b888",
  storageBucket: "toodoo-4b888.appspot.com",
  messagingSenderId: "1090264029067",
  appId: "1:1090264029067:web:ab84238c3bc7c7164dc18e",
  databaseURL: "https://toodoo-4b888-default-rtdb.europe-west1.firebasedatabase.app",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)

setPersistence(auth, browserLocalPersistence)

export const catchError = (e: unknown) => console.log(e)