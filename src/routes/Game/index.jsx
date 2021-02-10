import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const match = useRouteMatch();
  const [pokemon, setPokemon] = useState([]);

  const handleAddPokemon = (pokemon_) => {
    // console.log(pokemon_);
    setPokemon((prev) => [...prev, pokemon_]);
  };

  // React.useEffect(() => {
  //   console.log(pokemon);
  // }, [pokemon]);

  return (
    <PokemonContext.Provider value={{ pokemon, handleAddPokemon }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={() => <StartPage />} />
        <Route path={`${match.path}/board`} component={() => <BoardPage />} />
        <Route path={`${match.path}/finish`} component={() => <FinishPage />} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
