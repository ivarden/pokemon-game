import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCNI9EF8-qeIKBZu6S15RBvjdO7otlmPHE",
  authDomain: "pokemon-85ae6.firebaseapp.com",
  databaseURL: "https://pokemon-85ae6-default-rtdb.firebaseio.com",
  projectId: "pokemon-85ae6",
  storageBucket: "pokemon-85ae6.appspot.com",
  messagingSenderId: "979956206249",
  appId: "1:979956206249:web:ed3d9462c9f319513fb7b8",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;

export const readDB = async (dbName) =>
  await database.ref(dbName).once("value");

export const updateDB = async (dbName, data) => {
  return await database.ref(dbName).update(data);
};

export const addCard = (dbName, data) => {
  database
    .ref()
    .child(dbName)
    .push(data)
    .then(() => {
      console.log("Item succesfully added!");
    })
    .catch((error) => {
      console.error("Error add item: ", error);
    });
};
