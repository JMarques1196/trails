import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { seedDatabase } from "src/helper/seed";

const firebaseConfig = {
  apiKey: "AIzaSyAf8j_Ec1bbwwHMPZ-R0ijpypC05eMlsgc",
  authDomain: "trails-950a2.firebaseapp.com",
  projectId: "trails-950a2",
  storageBucket: "trails-950a2.appspot.com",
  messagingSenderId: "203688722773",
  appId: "1:203688722773:web:d10b25a40bad8bc2bdafdc",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


//seedDatabase(db);


