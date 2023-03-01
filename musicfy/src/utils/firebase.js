import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbA-0Kke0tVM3DntYNdqQRSTubxTeyd-4",
  authDomain: "musicfy-e38ad.firebaseapp.com",
  projectId: "musicfy-e38ad",
  storageBucket: "musicfy-e38ad.appspot.com",
  messagingSenderId: "873775707601",
  appId: "1:873775707601:web:5af442871eb500524d5cf0"
};

export const initFirebase = initializeApp(firebaseConfig)