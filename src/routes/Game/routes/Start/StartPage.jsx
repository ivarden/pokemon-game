import React from "react";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";

import styles from "./style.module.css";

const GamePage = ({ pokemons, addPokemon, handleClickCard }) => {
  return (
    <Layout id="cards" title="Game" colorTitle="#FEFEFE" colorBg="#202736">
      <div>
        <button onClick={addPokemon}>Start Game</button>
      </div>
      <div className={styles.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, type, values, img, name, isActive, isSelected }]) => (
            <PokemonCard
              key={key}
              key_={key}
              id={id}
              type={type}
              values={values}
              img={img}
              name={name}
              isActive={!isActive ? true : false}
              isSelected={isSelected}
              handleClickCard={handleClickCard}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default GamePage;
