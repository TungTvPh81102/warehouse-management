// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOJQ8zvIUzznkdQfMEEWSWUsFM49MwhVM",
  authDomain: "warehouse-fdccd.firebaseapp.com",
  projectId: "warehouse-fdccd",
  storageBucket: "warehouse-fdccd.appspot.com",
  messagingSenderId: "1017720419973",
  appId: "1:1017720419973:web:2c37855aeb877ce1d4dbec",
  measurementId: "G-DHEFWDKHE7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
auth.languageCode = "vi";
