import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeDovmjVupX8mX36CmHATnmHMPcvuFSwc",
  authDomain: "sajal-portfolio.firebaseapp.com",
  projectId: "sajal-portfolio",
  storageBucket: "sajal-portfolio.appspot.com",
  messagingSenderId: "609090228941",
  appId: "1:609090228941:web:852918d654abf0e034cf84",
  measurementId: "G-RPFEVKW5V7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore()