// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.Vite_projectId,
  storageBucket:import.meta.env.Vite_storageBucket,
  messagingSenderId:import.meta.env.Vite_messagingSenderId,
  appId:import.meta.env.Vite_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;