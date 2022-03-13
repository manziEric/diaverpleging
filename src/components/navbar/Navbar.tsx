import Image from 'next/image';
import Link from 'next/link';
import Button from 'src/components/button';
import logo from 'assets/Group597.svg';
import styles from 'styles/nav.module.css';

const Navbar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src={logo} alt="company logo" />
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/diensten">Diensten</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.listItem}>
            <Button route="/contact">Boek Je Afspraak</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
