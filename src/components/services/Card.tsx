import React, { FC } from "react";
import styles from "../../../styles/card.module.css";

const Card = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2>01</h2>
            <h3>Card One</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              reprehenderit unde harum rerum ut deserunt suscipit deleniti
              nihil, eligendi voluptates eveniet placeat sunt quidem ex corporis
              dolorem, quos ad! Nulla?
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              reprehenderit unde harum rerum ut deserunt suscipit deleniti
              nihil, eligendi voluptates eveniet placeat sunt quidem ex corporis
              dolorem, quos ad! Nulla?
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              reprehenderit unde harum rerum ut deserunt suscipit deleniti
              nihil, eligendi voluptates eveniet placeat sunt quidem ex corporis
              dolorem, quos ad! Nulla?
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <button>Meer Lezen</button>
    </div>
  );
};

export default Card;
