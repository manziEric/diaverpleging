import React, { ReactNode } from "react";
import styles from "styles/form.module.css";

const SubscribeForm = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className={styles.SubscribeContainer}>
      <form action="#" className={styles.subscribeForm}>
        {children}
      </form>
    </div>
  );
};

export default SubscribeForm;
