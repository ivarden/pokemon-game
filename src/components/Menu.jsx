import React from "react";
import cn from "classnames";
import styles from "./Menu.module.css";

const Menu = ({ active }) => {
  return (
    <div
      className={cn([styles.menuContainer], {
        [styles.active]: active,
      })}
    >
      <div className={styles.overlay} />
      <div className={styles.menuItems}>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#game">GAME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;