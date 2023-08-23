//  firebase AUTH and FIRESTORE.
// https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js
import {
  loginBtn,
  userEmail,
  userPassword,
  preventFormReload,
  spanPasswordErr,
  spanEmailErr,
  showPasswordInput,
  signUpButton,
  signUpEmail,
  signUpPassword,
} from "./auth-ui.js";
import { initializeApp } from " https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getFirestore, getDocs, collection } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from " https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVdVDTTza7lwXjMhKeWI77x5uZvVIWV6k",
  authDomain: "blog-authfirebase.firebaseapp.com",
  projectId: "blog-authfirebase",
  storageBucket: "blog-authfirebase.appspot.com",
  messagingSenderId: "1011017535521",
  appId: "1:1011017535521:web:1c290d6088e9110dfa5360",
  measurementId: "G-LFCFM1V80X",
};

const firebaseApp = initializeApp(firebaseConfig); // initilized the firebase app. this code is requierd to connect the web app to the firebase service online
// const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); // initialized the Authg service and pass in the firebase app config

//connectAuthEmulator(auth, "http://localhost:5660"); // connect to the emulator, for the auth services and use the localhost:5660

// Create new user and login  ======================================================================================================
const createNewUser = async () => {
  preventFormReload("signupForm");
  const email = signUpEmail.value;
  const password = signUpPassword.value;

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email)) {
    showPasswordInput();

    // await createUserWithEmailAndPassword(auth, email, password)
    //   .then((user) => {
    //     window.location.href = "index.html";
    //   })
    //   .catch((error) => {
    //     window.location.href = "404.html";
    //     // console.log(error.code);
    //     // console.log(error.message);
    //   });
  }
};

signUpButton.addEventListener("click", createNewUser);
