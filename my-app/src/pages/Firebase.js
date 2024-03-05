import { initializeApp } from "firebase/app";
import { set, get, remove, ref, update, getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClRiTiWOU944NUaZpuyJ0c600qI2kMrfQ",
    authDomain: "raj-db.firebaseapp.com",
    databaseURL: "https://raj-db-default-rtdb.firebaseio.com",
    projectId: "raj-db",
    storageBucket: "raj-db.appspot.com",
    messagingSenderId: "990266556799",
    appId: "1:990266556799:web:6b0e5b240ba493bae2da4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { db }
