import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3TH1ypDCwDdPXL5xYQhUVVhgfmdhPCS0",
  authDomain: "lab07-e875e.firebaseapp.com",
  projectId: "lab07-e875e",
  storageBucket: "lab07-e875e.appspot.com",
  messagingSenderId: "84195649346",
  appId: "1:84195649346:web:c2483e2e002b8326aa0adb"
};

initializeApp(firebaseConfig);

export const database = getFirestore()