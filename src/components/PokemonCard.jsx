import React from "react";
import cn from "classnames";
import styles from "./PokemonCard.module.css";

import cardBackSide from "../assets/card-back-side.jpg";

const PokemonCard = ({
  id,
  type,
  values: { top, right, bottom, left },
  img,
  name,
  isActive,
  handleClickCard,
}) => {
  const handleClick = () => {
    handleClickCard(id);
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={cn([styles.pokemonCard], { [styles.active]: isActive })}>
        <div className={styles.cardFront}>
          <div className={cn([styles.wrap], [styles.front])}>
            <div className={cn([styles.pokemon], [styles[type]])}>
              <div className={styles.values}>
                <div className={cn([styles.count], [styles.top])}>{top}</div>
                <div className={cn([styles.count], [styles.right])}>
                  {right}
                </div>
                <div className={cn([styles.count], [styles.bottom])}>
                  {bottom}
                </div>
                <div className={cn([styles.count], [styles.left])}>{left}</div>
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
          <div className={cn([styles.wrap], [styles.back])}>
            <img src={cardBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
