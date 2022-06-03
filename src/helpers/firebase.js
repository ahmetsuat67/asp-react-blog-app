import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyA1GJOEVz8IVOqR6zhhIbeXFWcMee882z0",
  authDomain: "asp-blog-app.firebaseapp.com",
  databaseURL: "https://asp-blog-app-default-rtdb.firebaseio.com",
  projectId: "asp-blog-app",
  storageBucket: "asp-blog-app.appspot.com",
  messagingSenderId: "225115491400",
  appId: "1:225115491400:web:753dec366d2f15b75adc7d"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
