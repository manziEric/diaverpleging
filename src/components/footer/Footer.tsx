import React from "react";
import styles from "styles/footer.module.css";
import Image from "next/image";
import logo from "assets/Group597.svg";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image
            className={styles.logo}
            src={logo}
            alt="logo of diaverpleging"
          />
          <p>
            Book een verpleegster in u <br /> buurt in enkele minuten
          </p>

          <p className={styles.email}>
            Tel 0488888888 <br /> info@diaverpleging.be
          </p>
        </div>
        <div className={styles.col}>
          <h3>Bedrijf</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Diensten</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Contact</h3>
          <ul>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Algemene voorwaarde</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Volg ons op</h3>
          <FacebookIcon className={styles.icon} />
          <InstagramIcon className={styles.icon} />
          <TwitterIcon className={styles.icon} />
        </div>
      </div>
      <p className={styles.copyright}>
        <br />© {new Date().getFullYear()} DiaVerpleging
        <br />
        <a href="https://ericmanzi.com/" target="_blank" rel="noreferrer">
          Made By Eric.M
        </a>
      </p>
    </footer>
  );
};

export default Footer;