import React from "react";
import cn from "classnames";
import routes from "../routes";
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
          {routes.map((rout) => (
            <li key={rout.id}>
              <a href={`#${rout.link}`}>{rout.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Menu;
