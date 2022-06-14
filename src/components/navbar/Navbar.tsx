/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'src/components/button';
import logo from 'assets/Group597.svg';
import Image from 'next/image';

import styles from 'styles/nav.module.css';
import Link from 'next/link';

function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <nav className="navbar">
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src={logo} alt="company logo" />
          </div>
        </div>

        <ul className="nav_links">
          <div className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/diensten">Diensten</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={styles.listItem}>
              <Button route="/contact">Boek Je Afspraak</Button>
            </li>
          </div>
        </ul>

        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
        />
        <label htmlFor="menu-icon" />
        <nav className="nav">
          <ul className="pt-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/diensten">Diensten</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li className={styles.listItem}>
              <Button route="/contact">Boek Je Afspraak</Button>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
}

export default Navbar;
