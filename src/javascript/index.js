import * as DomElems from "./auth-ui.js";

import { initializeApp } from " https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signOut,
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
const auth = getAuth(firebaseApp);

// Monitor Login Status

async function monitorAuthState() {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user logged in as: " + user.email);
      DomElems.showLoginNavElems(DomElems.logInNavItems);
    } else {
      DomElems.showLogoutNavElems(DomElems.logOutNavItems);
      console.log("user is not logged in ");
    }
  });
}

monitorAuthState();

async function logOut() {
  await signOut(auth);
  console.log("user log out");
}

DomElems.logOutBtn.addEventListener("click", logOut);
