// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyADTqyT9zBx1i4IKdCcU7-Whu2-jJhBAu4',
    authDomain: 'react-cursos-c43f9.firebaseapp.com',
    projectId: 'react-cursos-c43f9',
    storageBucket: 'react-cursos-c43f9.appspot.com',
    messagingSenderId: '614420084300',
    appId: '1:614420084300:web:d33250872fbc252af966e9',
    measurementId: 'G-PD5L54J946',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

//const analytics = getAnalytics(app);
