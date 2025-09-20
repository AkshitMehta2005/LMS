import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginvirtualcources-8268a.firebaseapp.com",
  projectId: "loginvirtualcources-8268a",
  storageBucket: "loginvirtualcources-8268a.firebasestorage.app",
  messagingSenderId: "497363485832",
  appId: "1:497363485832:web:54cab69ca22c53d9aa0b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDlw2MHN3qgdnm_H6nuoEScbqcNknxU--c",
//   authDomain: "loginvirtualcources-8268a.firebaseapp.com",
//   projectId: "loginvirtualcources-8268a",
//   storageBucket: "loginvirtualcources-8268a.firebasestorage.app",
//   messagingSenderId: "497363485832",
//   appId: "1:497363485832:web:54cab69ca22c53d9aa0b3d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);