import Button from 'src/components/button';
import logo from 'assets/Group597.svg';
import Image from 'next/image';

import styles from 'styles/nav.module.css';

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
