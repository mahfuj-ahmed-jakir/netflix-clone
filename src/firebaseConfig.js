// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYnjPcp5elFoAoMIumIeQDNuqy1f7bqWg",
  authDomain: "mahfuj-netflix-clone.firebaseapp.com",
  projectId: "mahfuj-netflix-clone",
  storageBucket: "mahfuj-netflix-clone.appspot.com",
  messagingSenderId: "64116408524",
  appId: "1:64116408524:web:71a8be7fce22b3f862c269",
  measurementId: "G-3TLC1X0W2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
