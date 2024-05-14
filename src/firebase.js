// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlVPaX85N53QO7PmSncCuuMsQimqEAU1M',
  authDomain: 'books-da2e3.firebaseapp.com',
  projectId: 'books-da2e3',
  storageBucket: 'books-da2e3.appspot.com',
  messagingSenderId: '328775315241',
  appId: '1:328775315241:web:c6e3c4e84a3093b61b1138',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
