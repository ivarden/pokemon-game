import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const IndexPage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  console.log(selectedPokemons);
  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      return { ...prevState, [key]: pokemon };
    });
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, handleSelectedPokemons }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default IndexPage;
