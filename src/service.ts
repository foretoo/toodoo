import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
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
const auth = getAuth(app)
const db = getDatabase(app)