import React, { useContext } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";

const BoardPage = () => {
  const { selectedPokemons } = useContext(PokemonContext);
  const handleClickCard = () => {
    console.log("BoardPage|handleClickCard");
  };
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.entries(selectedPokemons).map(
          ([key, { id, type, values, img, name, isActive, isSelected }]) => (
            <PokemonCard
              key={key}
              key_={key}
              id={id}
              type={type}
              values={values}
              img={img}
              name={name}
              minimize={true}
              className={"card"}
              isActive={true}
              isSelected={true}
              handleClickCard={handleClickCard}
            />
          )
        )}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
