import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { getDatabase } from 'firebase/database';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyDmgVa9G4ZjUxfikjQ-GedoLu-A0bPRM14",
//   authDomain: "toptal-a70b0.firebaseapp.com",
//   databaseURL: "https://toptal-a70b0-default-rtdb.firebaseio.com",
//   projectId: "toptal-a70b0",
//   storageBucket: "toptal-a70b0.appspot.com",
//   messagingSenderId: "95283398379",
//   appId: "1:95283398379:web:0190bc2118fab8715920ae",
//   measurementId: "G-1XK2V739CP",
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCuDzDjyxCFw5rZVPzvdokSOj-2sBaEkd8',
  authDomain: 'toothyinsurance.firebaseapp.com',
  databaseURL: 'https://toothyinsurance-default-rtdb.firebaseio.com',
  projectId: 'toothyinsurance',
  storageBucket: 'toothyinsurance.appspot.com',
  messagingSenderId: '1025159031864',
  appId: '1:1025159031864:web:e6931268a31b5cd4d64acd',
  measurementId: 'G-SP2J4ZXQ8N',
};

export const app = !getApps()?.length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const database = getDatabase(app);
export const storage = getStorage(app);
