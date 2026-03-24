import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEZ3OQgZt6FhYEQ0AnzhEDbZ3WlRRCfjM",
  authDomain: "cardindex-6e3e1.firebaseapp.com",
  projectId: "cardindex-6e3e1",
  storageBucket: "cardindex-6e3e1.firebasestorage.app",
  messagingSenderId: "12210357958",
  appId: "1:12210357958:web:d4df38f0f5c8bdece6f9c7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);