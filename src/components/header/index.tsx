import Image from "next/image";
import React, { FC } from "react";
import styles from "../../../styles/header.module.css";
import textImage from "../../../assets/Group595.svg";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.textImage}>
        <Image src={textImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
