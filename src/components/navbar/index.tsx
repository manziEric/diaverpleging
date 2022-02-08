import Image from "next/image";
import { FC } from "react";
import styles from "../../../styles/nav.module.css";
import logo from "../../../assets/Group597.svg";

export const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src={logo} alt="company logo" />
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Diensten</li>
          <li className={styles.listItem}>Over Ons</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
    </div>
  );
};
