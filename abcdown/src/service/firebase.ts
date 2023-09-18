// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAibUBU-pN2FfJ-mpxBHxgdLNoJS5k-h7s',
  authDomain: 'react-tcc-a46ff.firebaseapp.com',
  projectId: 'react-tcc-a46ff',
  storageBucket: 'react-tcc-a46ff.appspot.com',
  messagingSenderId: '28163922790',
  appId: '1:28163922790:web:a7ff4eb1acc4fbd05586a7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)