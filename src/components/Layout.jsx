import React from "react";
import cn from "classnames";
import styles from "./Layout.module.css";

const Layout = ({
  id = 1,
  title = "",
  descr = "",
  urlBg = "",
  colorBg = "",
  children,
}) => {
  return (
    <section
      className={styles.root}
      id={id}
      style={{
        backgroundImage: `url(${urlBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: `${colorBg}`,
      }}
    >
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={cn([styles.desc], [styles.full])}>
            <p>{descr}</p>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
