import React, { useState } from "react";

import "./App.css";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";

const App = () => {
  const [page, setPage] = useState("app");

  switch (page) {
    // case "app":
    //   return <HomePage setPage={setPage} />;
    case "game":
      return <GamePage />;
    default:
      return <HomePage setPage={setPage} />;
  }
};

export default App;
