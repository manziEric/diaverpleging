// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCRJ41cSKxPYQSYWWCmQE3rW1GLOK4uJuM',
  authDomain: 'diaverpleging-c62df.firebaseapp.com',
  projectId: 'diaverpleging-c62df',
  storageBucket: 'diaverpleging-c62df.appspot.com',
  messagingSenderId: '704029548543',
  appId: '1:704029548543:web:9bcefb55ed093a5b8ad1ca',
  measurementId: 'G-7261491C01',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { db, analytics };
