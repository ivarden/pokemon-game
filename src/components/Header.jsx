import React from "react";
import styles from "./Header.module.css";

const Header = ({
  title = "Title",
  descr = "Descripttion",
  setPage,
  children,
}) => {
  const handleClick = () => {
    setPage && setPage("game");
  };
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
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
