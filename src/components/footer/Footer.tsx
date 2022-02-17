import React from "react";
import Link from "next/link";
import menuItems from "src/components/footer/footer-data";
import styles from "styles/footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container} id="footer">
      <div>
        <br />
        <div className={styles.footerTopArea}>
          {menuItems.map(({ header, items, icons }, i) => (
            <div className={styles.menus} key={i}>
              <header className={styles.heading}>{header}</header>
              <nav>
                {items.map(({ path, label, icon, link }, i) => (
                  <div key={i}>
                    {link ? (
                      <a
                        className={styles.icon}
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {icon}
                      </a>
                    ) : (
                      // <Link path={path} label={label} className={styles.link} />
                      "link"
                    )}
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <p className={styles.copyright}>
          <br />© {new Date().getFullYear()} MC Collectables
          <br />
          <a href="https://ericmanzi.com/" rel="noreferrer" target="_blank">
            Made By Eric.M
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
