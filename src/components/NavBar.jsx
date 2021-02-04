import React from "react";
import cn from "classnames";
import styles from "./NavBar.module.css";

const NavBar = ({ isOpen, handleClickHamburger, bgActive = false }) => {
  const handleClik = () => {
    handleClickHamburger();
  };
  return (
    <nav className={cn(styles.navbar, { [styles.bgActive]: bgActive })}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>LOGO</p>
        <div
          className={cn(styles.menuButton, { [styles.active]: isOpen })}
          onClick={handleClik}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
