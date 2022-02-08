import React, { FC } from "react";
import styles from "styles/form.module.css";

const Form: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <form action="#" className={styles.form}>
        {children}
      </form>
    </div>
  );
};

export default Form;
