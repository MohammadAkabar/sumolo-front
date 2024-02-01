// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvgMechdgAyFTdoFPsk50wq3RCbdHJ6aQ',
  authDomain: 'sumolo-app.firebaseapp.com',
  projectId: 'sumolo-app',
  storageBucket: 'sumolo-app.appspot.com',
  messagingSenderId: '36486755880',
  appId: '1:36486755880:web:9eb0e04fc4d0f9de67a71d',
  measurementId: 'G-9HVP14ZERB'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
