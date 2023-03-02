import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9V2dGiLtkggBfgsEkjIc-KDoKIMpdV5w",
  authDomain: "whatsapp-2-913e7.firebaseapp.com",
  projectId: "whatsapp-2-913e7",
  storageBucket: "whatsapp-2-913e7.appspot.com",
  messagingSenderId: "733086874226",
  appId: "1:733086874226:web:49219660bec7df245120eb"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};