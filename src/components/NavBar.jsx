import React from "react";
import cn from "classnames";
import styles from "./NavBar.module.css";

const NavBar = ({ active, setActive }) => {
  const handleClik = () => {
    setActive((active) => !active);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>LOGO</p>
        <div
          className={cn([styles.menuButton], { [styles.active]: active })}
          onClick={handleClik}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
