// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9cKqCFqH5ayxjtBWwBs2Ehs9HMdbt5JA',
  authDomain: 'slack-clone-ec3e2.firebaseapp.com',
  projectId: 'slack-clone-ec3e2',
  storageBucket: 'slack-clone-ec3e2.appspot.com',
  messagingSenderId: '903616454305',
  appId: '1:903616454305:web:da2a572953742fbf25dae0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export default db
export { auth }

// https://unsplash.com/photos/9UVmlIb0wJU
