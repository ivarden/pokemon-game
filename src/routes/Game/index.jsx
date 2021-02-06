import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";
import styles from "./style.module.css";

import database, { 
  updateDB, 
  // addCard, 
} from "../../service/firebase";

const GamePage = () => {
  const [pokemons, setPokemons] = React.useState({});

  useEffect(() => {
    database
      .ref("pokemons")
      .once("value", (snapshot) => setPokemons(snapshot.val()));
  }, []);

  useEffect(() => {
    updateDB("pokemons", pokemons);
  }, [pokemons]);

  const handleClickCard = (id) => {
    const pokemons_ = Object.entries(pokemons).map((card) =>
      card[0] === id
        ? [card[0], { ...card[1], isActive: !card[1].isActive }]
        : [card[0], { ...card[1] }]
    );
    setPokemons(Object.fromEntries(pokemons_));
  };

  const addNewCard = () => {
    const cardsCount = Object.entries(pokemons).length - 1;
    const randomNumber = Math.round(Math.random() * cardsCount);
    const randomCard = Object.entries(pokemons)[randomNumber][1];
    const newKey = database.ref().child("pokemons").push().key;
    const pokemons_ = Object.fromEntries([
      ...Object.entries(pokemons),
      [newKey, randomCard],
    ]);
    // addCard("pokemons", randomCard);
    setPokemons(pokemons_);
  };

  return (
    <>
      <Layout id="cards" title="Game" colorTitle="#FEFEFE" colorBg="#202736">
        <button onClick={addNewCard}>Add random card!</button>
        <div className={styles.flex}>
          {Object.entries(pokemons).map(
            ([key, { id, type, values, img, name, isActive }]) => (
              <PokemonCard
                key={key}
                key_={key}
                id={id}
                type={type}
                values={values}
                img={img}
                name={name}
                isActive={isActive || false}
                handleClickCard={handleClickCard}
              />
            )
          )}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
