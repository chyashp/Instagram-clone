import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1l5m6_xV667e2LJ5eMNzsWT57gBlOcmQ",
  authDomain: "instagram-clone-21f3d.firebaseapp.com",
  projectId: "instagram-clone-21f3d",
  storageBucket: "instagram-clone-21f3d.appspot.com",
  messagingSenderId: "238217983425",
  appId: "1:238217983425:web:b9cc339b877ecd7f112b40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
