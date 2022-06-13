import Button from 'src/components/button';
import logo from 'assets/Group597.svg';
import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/nav.module.css';
import { useState } from 'react';

function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      {/* <div className={styles.item}>
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
       </div> */}
      <nav className="navbar">
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src={logo} alt="company logo" />
          </div>
        </div>

        <ul className="nav_links">
          {/* <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label> */}

          <div className="menu">
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
          </div>
        </ul>

        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
        />
        <label htmlFor="menu-icon"></label>
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
