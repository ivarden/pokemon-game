import React from "react";
import styles from "./PokemonCard.module.css";

import cardBackSide from "../assets/card-back-side.jpg";

const PokemonCard = ({
  id,
  type,
  values: { top, right, bottom, left },
  img,
  name,
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={`${styles.pokemonCard}  ${show && styles.active}`}>
        <div className={styles.cardFront}>
          <div className={`${styles.wrap} ${styles.front}`}>
            <div className={`${styles.pokemon} ${styles[type]}`}>
              <div className={styles.values}>
                <div className={`${styles.count} ${styles.top}`}>{top}</div>
                <div className={`${styles.count} ${styles.right}`}>{right}</div>
                <div className={`${styles.count} ${styles.bottom}`}>
                  {bottom}
                </div>
                <div className={`${styles.count} ${styles.left}`}>{left}</div>
              </div>
              <div className={styles.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={styles.info}>
                <span className={styles.number}>#{id}</span>
                <h3 className={styles.name}>{name}</h3>
                <small className={styles.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardBack}>
          <div className={`${styles.wrap} ${styles.back}`}>
            <img src={cardBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
