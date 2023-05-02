// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37iD4imgmchR8A5zn5NT-jN8XkqKojsE",
  authDomain: "the-chef-recipe-hunter-client.firebaseapp.com",
  projectId: "the-chef-recipe-hunter-client",
  storageBucket: "the-chef-recipe-hunter-client.appspot.com",
  messagingSenderId: "752126993026",
  appId: "1:752126993026:web:9bc497c7995d8965f2ca9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;