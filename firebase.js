import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAw9WeoKZ-lDKCSt1MI_PVJHbQZwR1vz8g",
  authDomain: "eventapp-5a31e.firebaseapp.com",
  projectId: "eventapp-5a31e",
  storageBucket: "eventapp-5a31e.appspot.com",
  messagingSenderId: "836232824767",
  appId: "1:836232824767:web:2f5069264d1c4b19d0830a",
  measurementId: "G-JEMYLRDHL2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth, analytics };