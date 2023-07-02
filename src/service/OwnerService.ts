import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGVZPw5ChtJFyprVQgaOOyupePtZbuv2c",
  authDomain: "appartamentowners.firebaseapp.com",
  databaseURL: "https://appartamentowners-default-rtdb.firebaseio.com",
  projectId: "appartamentowners",
  storageBucket: "appartamentowners.appspot.com",
  messagingSenderId: "776846932639",
  appId: "1:776846932639:web:0d51df7b0fc6538cc700aa",
};

const app = initializeApp({
  apiKey: "AIzaSyBGVZPw5ChtJFyprVQgaOOyupePtZbuv2c",
  authDomain: "appartamentowners.firebaseapp.com",
  databaseURL: "https://appartamentowners-default-rtdb.firebaseio.com",
  projectId: "appartamentowners",
  storageBucket: "appartamentowners.appspot.com",
  messagingSenderId: "776846932639",
  appId: "1:776846932639:web:0d51df7b0fc6538cc700aa",
});

export const db = getDatabase(app);
