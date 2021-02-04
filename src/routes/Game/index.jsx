import React from "react";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";
import styles from "./style.module.css";
// import bg2 from "../../assets/bg1.jpg";

import POKEMONS from "../../data.json";

// const GamePage = ({ pokemons, handleClickCard }) => {
const GamePage = () => {
  const [pokemons, setPokemons] = React.useState([...POKEMONS]);

  const handleClickCard = (id) => {
    const pokemons_ = pokemons.map((card) =>
      card.id === id
        ? { ...card, isActive: !card.isActive }
        : { ...card, isActive: card.isActive }
    );
    setPokemons(pokemons_);
  };
  React.useEffect(() => {}, [pokemons]);

  return (
    <>
      <div>This is Game Page!</div>
      <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
        <div className={styles.flex}>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              type={pokemon.type}
              values={pokemon.values}
              img={pokemon.img}
              name={pokemon.name}
              isActive={pokemon.isActive || false}
              handleClickCard={handleClickCard}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
