import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6yTdXn6W76DxeqKBndPtukAF_g0_5kNU",
  authDomain: "devter-a4069.firebaseapp.com",
  projectId: "devter-a4069",
  storageBucket: "devter-a4069.appspot.com",
  messagingSenderId: "572983934732",
  appId: "1:572983934732:web:abf24d3a45b3ff746f1329",
  measurementId: "G-9GRXT9VXSY",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const mapUserFromFirebaseAuth = (result) => {
  const { user } = result;
  const { reloadUserInfo } = user;
  const { screenName, photoUrl } = reloadUserInfo;

  return {
    avatar: photoUrl,
    username: screenName,
  };
};

export const onAuthStateChanged = (onChange) => {
  //funcion que se ejecutara cuando cambie si el usuario pasa de estar autentificado
  return auth()
  .onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user)
    onChange(normalizedUser)
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new GithubAuthProvider(); //creamos instancia de githubprovider
  return signInWithPopup(auth, githubProvider).then((result) => {
    return mapUserFromFirebaseAuth(result);
}).catch((error) => {
  console.error("Error during sign in with GitHub: ", error);
  throw error;
});
};



















