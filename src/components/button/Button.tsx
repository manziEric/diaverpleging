import React, { ReactNode } from "react";
import styles from "styles/form.module.css";

const Button = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className={styles.containerButton}>
      <button className={styles.button} type="submit">
        {children}
      </button>
    </div>
  );
};

export default Button;
