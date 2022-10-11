import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDQeIFFR3nl1g27nsYZYTqBb1r92q6L0-c",
    authDomain: "react-proyecto-coder.firebaseapp.com",
    projectId: "react-proyecto-coder",
    storageBucket: "react-proyecto-coder.appspot.com",
    messagingSenderId: "679574374398",
    appId: "1:679574374398:web:c3fae6ef912f7199f0e2af",
    measurementId: "G-JDZ1F56JNS"
  };

  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);