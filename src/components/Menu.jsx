import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import routes from "../routes";
import styles from "./Menu.module.css";

const Menu = ({ isOpen, handleClickHamburger }) => {
  return (
    <div
      className={cn(styles.menuContainer, {
        [styles.active]: isOpen === true,
        [styles.deactive]: isOpen === false,
      })}
    >
      <div className={styles.overlay} />
      <div>
        <ul>
          {routes.map(({ id, link, title }) => (
            <li key={id}>
              {/* <a href={link}>{title}</a> */}
              <Link to={link} onClick={handleClickHamburger}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Menu;
