// v9 compat packages are API compatible with v8 code
import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../data';

const firebaseConfig = {
    apiKey: "AIzaSyA2UprKTo5hBGbTPRfa6fsdCV51_N5e4x8",
    authDomain: "netflixclone-001.firebaseapp.com",
    projectId: "netflixclone-001",
    storageBucket: "netflixclone-001.appspot.com",
    messagingSenderId: "758173033410",
    appId: "1:758173033410:web:d2fe8782399979e90f6c5b"
  };

  const firebase = Firebase.initializeApp(firebaseConfig);

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };