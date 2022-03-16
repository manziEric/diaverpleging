import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from 'assets/Group597.svg';
import styles from 'styles/footer.module.css';

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
            Boek een verpleegster in u <br /> buurt in enkele minuten
          </p>
          <p className={styles.email}>
            Tel +32 (0) 469 13 36 62 <br /> info@diaverpleging.be
          </p>
        </div>
        <div className={styles.col}>
          <h3>Bedrijf</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/diensten">Diensten</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
              <Link href="/">Algemene voorwaarden</Link>
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
