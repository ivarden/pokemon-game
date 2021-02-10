import React, { useEffect, useContext } from "react";
import StartPage from "./StartPage";

import { FireBaseContext } from "../../../../context/fireBaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

const Container = () => {
  const Firebase = useContext(FireBaseContext);
  const { handleAddPokemon } = useContext(PokemonContext);
  const [pokemons, setPokemons] = React.useState({});

  useEffect(() => {
    Firebase.getPokemonsSoket((pokemons) => setPokemons(pokemons));
  }, [Firebase]);

  const handleClickCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (item[0] === id) {
          // pokemon.isActive = !pokemon.isActive;
          pokemon.isSelected = !pokemon.isSelected;
        }
        acc[item[0]] = pokemon;

        // Firebase.postPokemon(item[0], pokemon);
        return acc;
      }, {});
    });
  };

  const addPokemon = () => {
    console.log("addPokemon")
    // const cardsCount = Object.entries(pokemons).length - 1;
    // const randomNumber = Math.round(Math.random() * cardsCount);
    // const randomCard = Object.entries(pokemons)[randomNumber];
    // Firebase.addPokemon(randomCard[1]);
  };

  return (
    <StartPage
      pokemons={pokemons}
      addPokemon={addPokemon}
      handleClickCard={handleClickCard}
    />
  );
};

export default Container;
