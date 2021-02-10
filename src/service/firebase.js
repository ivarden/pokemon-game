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

const database = firebase.database();

const Firebase = {
  getPokemonsSoket: (cb) =>
    database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    }),

  getPokemonsOnce: async () =>
    await database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val()),

  postPokemon: (key, pokemon) => {
    database.ref(`pokemons/${key}`).update(pokemon);
  },

  addPokemon: (pokemon, cb) => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref(`pokemons/${newKey}`).set(pokemon);
  },
};

export default Firebase;
