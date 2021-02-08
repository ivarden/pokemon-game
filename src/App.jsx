import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import styles from "./App.module.css";

import POKEMONS from "./data.json";

const App = () => {
  const match = useRouteMatch("/");

  const [pokemons, setPokemons] = React.useState([...POKEMONS]);

  const handleClickCard = (id) => {
    const pokemons_ = pokemons.map((card) =>
      card.id === id
        ? { ...card, isActive: !card.isActive }
        : { ...card, isActive: card.isActive }
    );
    setPokemons(pokemons_);
  };

  return (
    <Switch>
      <Route path="/404" render={() => <h1>404 Not Found!</h1>} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div
            className={`${styles.wrap} ${match.isExact && styles.isHomePage}`}
          >
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <HomePage
                    pokemons={pokemons}
                    handleClickCard={handleClickCard}
                  />
                )}
              />
              <Route
                path="/game"
                component={() => (
                  <GamePage
                    pokemons={pokemons}
                    handleClickCard={handleClickCard}
                  />
                )}
              />
              <Route path="/about" render={() => <h1>About</h1>} />
              <Route path="/contact" render={() => <h1>Contact</h1>} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;
