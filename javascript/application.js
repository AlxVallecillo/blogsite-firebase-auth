//  firebase AUTH and FIRESTORE.
// https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js
import {
  loginBtn,
  userEmail,
  userPassword,
  preventFormReload,
  spanPasswordErr,
  spanEmailErr,
  signUpButton,
  signUpEmail,
  signUpPassword,
} from "./auth-ui.js";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); // initialized the Authg service and pass in the firebase app config

connectAuthEmulator(auth, "http://localhost:5660"); // connect to the emulator, for the auth services and use the localhost:5660

// Sigun with email and password, name

// login with email and password
const loginWithEmailAndPassword = async () => {
  preventFormReload("loginForm");
  const loginEmail = userEmail.value;
  const loginPassword = userPassword.value;

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(userCredentials.user);
  } catch (error) {
    if (error.code == "auth/wrong-password") {
      spanPasswordErr();
      console.log(error.code);
    }
    if (error.code == "auth/user-not-found") {
      spanEmailErr();
      console.log(error.code);
    }
  }
};

// Trigger event listener when login with email and password and call the above fuinction
loginBtn.addEventListener("click", loginWithEmailAndPassword);

// Create new user and login  ======================================================================================================

const createNewUser = async () => {
  preventFormReload("signupForm");
  const signupEmail = signUpEmail.value;
  const signupPassword = signUpPassword.value;

  try {
    const newUser = await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword
    );

    console.log(newUser.user);
  } catch (error) {
    console.log(error);
  }
};

signUpButton.addEventListener("click", createNewUser);
