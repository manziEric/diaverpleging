import React from "react";
import styles from "styles/header.module.css";
import Button from "src/components/button/Button";

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.textImage}>
        <h1>Thuisverpleging in zorgende handen</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Aperiam fuga a in eum quos tenetur adipisci consequatur <br />
          consectetur iste sequi assumenda maxime obcaecati,
          <br /> nobis quibusdam ducimus quaerat, accusamus explicabo.
          Distinctio.
        </p>
        <Button>Boek je afspraak</Button>
      </div>
    </div>
  );
};

export default Header;
