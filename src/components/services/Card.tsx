import React from "react";
import styles from "styles/card.module.css";
import Button from "src/components/button/Button";

const Card = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>Onze Diensten</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardCircle}></div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque explicabo dolorem maiores rem nobis, inventore
              praesentium
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardCircle}></div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque explicabo dolorem maiores rem nobis, inventore
              praesentium
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardCircle}></div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque explicabo dolorem maiores rem nobis, inventore
              praesentium
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardCircle}></div>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque explicabo dolorem maiores rem nobis, inventore
              praesentium
            </p>
          </div>
        </div>
      </div>
      <Button>Ontdek al onze diensten</Button>
    </div>
  );
};

export default Card;
