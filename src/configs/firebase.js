// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_APP_ID}`
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
// export const db = getFirestore(app)
const storage = getStorage(app)
const db = getFirestore(app)

if (process.browser) {
  enableIndexedDbPersistence(db)
    .catch((err) => {
      if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        console.log('persistence failed')
      } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.log('persistence is not available')
      }
    })
}

export { db, storage }
