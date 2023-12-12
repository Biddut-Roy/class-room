
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APIKEY,
//     authDomain: import.meta.env.VITE_AUTHDOMAIN,
//     projectId: import.meta.env.VITE_PROJECTID,
//     storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//     appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBo6H2PoookCoOPf_W0qokzgj0pT7y1iGc",
    authDomain: "class-room-ef3b0.firebaseapp.com",
    projectId: "class-room-ef3b0",
    storageBucket: "class-room-ef3b0.appspot.com",
    messagingSenderId: "1008768734300",
    appId: "1:1008768734300:web:28a7629714cfdf4ae34299"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;