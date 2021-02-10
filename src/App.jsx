import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

import { FireBaseContext } from "./context/fireBaseContext";
import Firebase from "./service/firebase";

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import styles from "./App.module.css";

const App = () => {
  const match = useRouteMatch("/");

  return (
    <FireBaseContext.Provider value={Firebase}>
      <Switch>
        <Route path="/404" render={() => <h1>404 Not Found!</h1>} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div
              className={`${styles.wrap} ${match.isExact && styles.isHomePage}`}
            >
              <Switch>
                <Route exact path="/" component={() => <HomePage />} />
                <Route path="/game" component={() => <GamePage />} />
                <Route path="/about" render={() => <h1>About</h1>} />
                <Route path="/contact" render={() => <h1>Contact</h1>} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  );
};

export default App;
