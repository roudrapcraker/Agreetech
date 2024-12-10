// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpv8AOPyWTZ8jdLy3IdR0BG6oHtZhBzI0",
  authDomain: "cse299-6a0e1.firebaseapp.com",
  projectId: "cse299-6a0e1",
  storageBucket: "cse299-6a0e1.appspot.com",
  messagingSenderId: "689363254632",
  appId: "1:689363254632:web:b6f20f8f7e84d5dc9f6add",
  measurementId: "G-FXPM8L92TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Handle Email/Password Sign Up
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert('Account created successfully!');
    console.log('User:', userCredential.user);
  } catch (error) {
    console.error('Error:', error.message);
    alert(error.message);
  }
});

// Handle Google Login
document.querySelector('.bg-red-500').addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    alert(`Welcome ${result.user.displayName}!`);
    console.log('User:', result.user);
  } catch (error) {
    console.error('Error:', error.message);
    alert(error.message);
  }
});

// Handle Facebook Login
document.querySelector('.bg-blue-600').addEventListener('click', async () => {
  const provider = new FacebookAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    alert(`Welcome ${result.user.displayName}!`);
    console.log('User:', result.user);
  } catch (error) {
    console.error('Error:', error.message);
    alert(error.message);
  }
});
