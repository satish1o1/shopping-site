import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBXQdoih_Zpu0RRl6eFHe-ZKBvNKT9VoUo",
  authDomain: "shopping-site-ba1a3.firebaseapp.com",
  projectId: "shopping-site-ba1a3",
  storageBucket: "shopping-site-ba1a3.appspot.com",
  messagingSenderId: "918492835595",
  appId: "1:918492835595:web:34fb71b9d6b8a891e33c0e",
};

 initializeApp(config);
const db = getFirestore();
const provider = new GoogleAuthProvider();
export const auth = getAuth();
const signWithGoogle = () => signInWithPopup(auth, provider);
export default signWithGoogle;

export const createUserProfileDocument = async (userAuth, ...addtionalData) => {
  if (!userAuth) return;

  const querySnapshot = await getDocs(collection(db, "users"));
  var exits = false;
  querySnapshot.forEach((doc) => {
    if (doc.id == userAuth.uid) {
      exits = true;
    }
  });

  if (!exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    await setDoc(doc(db, "users", `${userAuth.uid}`), {
      displayName,
      email,
      createdAt,
    });
  }
};
//
//   const q = query(collection(firestore, 'users'))
//   const querySnapshot = await getDocs(q ).get()

//   console.log(querySnapshot)
//};

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const config = {
//   apiKey: "AIzaSyBXQdoih_Zpu0RRl6eFHe-ZKBvNKT9VoUo",
//   authDomain: "shopping-site-ba1a3.firebaseapp.com",
//   projectId: "shopping-site-ba1a3",
//   storageBucket: "shopping-site-ba1a3.appspot.com",
//   messagingSenderId: "918492835595",
//   appId: "1:918492835595:web:34fb71b9d6b8a891e33c0e",
// };

// firebase.initializeApp(config);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account",
// });

// export const SignInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
