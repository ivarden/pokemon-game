import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({
  title = "Title",
  descr = "Descripttion",
  setPage,
  children,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/game");
  };
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.silhouette}></div>
      <div className={styles.moon}></div>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button className={styles.button} onClick={handleClick}>
          Start Game
        </button>
        {children}
      </div>
    </header>
  );
};

export default Header;
