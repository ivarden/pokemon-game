import React from "react";
import styles from "./Layout.module.css";

const Layout = ({
  id = 1,
  title = "Title",
  descr = "Descripttion",
  urlBg = "",
  colorBg = "",
}) => {
  return (
    <section
      className={styles.root}
      id={id}
      style={{
        backgroundImage: `url(${urlBg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: `${colorBg}`,
      }}
    >
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={[styles.desc, styles.full]}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;