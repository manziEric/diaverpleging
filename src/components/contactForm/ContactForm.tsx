import React, { ReactNode } from "react";
import styles from "styles/form.module.css";

const ContactForm = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className={styles.contactContainer}>
      <h2>Vraag meteen Je consulatie aan</h2>
      <form action="#" className={styles.form}>
        {children}
      </form>
    </div>
  );
};

export default ContactForm;
