// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARbTCtyUHE29n6A2rzw4VMX6c3CVbx6l8',
  authDomain: 'restaurant-management-we-d57a4.firebaseapp.com',
  projectId: 'restaurant-management-we-d57a4',
  storageBucket: 'restaurant-management-we-d57a4.firebasestorage.app',
  messagingSenderId: '935870445080',
  appId: '1:935870445080:web:935c4f0310d9f39123356d',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
