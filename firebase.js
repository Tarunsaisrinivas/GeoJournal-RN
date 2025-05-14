import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZdKpzUGfrdOPxS6ZWNN69G1Q6bNJcSLo",
  authDomain: "geojournal-9aa5b.firebaseapp.com",
  projectId: "geojournal-9aa5b",
  storageBucket: "geojournal-9aa5b.firebasestorage.app",
  messagingSenderId: "168446819670",
  appId: "1:168446819670:web:3ec4f7558e5b67880daaf7",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
