import React, { ReactNode } from 'react';
import useContactFormHandler from 'src/components/contactForm/useContactFormHandler';
import styles from 'styles/form.module.css';

const SubscribeForm = ({ children }: { children: ReactNode }): JSX.Element => {
  const [contactFormHandler] = useContactFormHandler();

  return (
    <div className={styles.SubscribeContainer}>
      <form
        onSubmit={(e) => contactFormHandler(e, true)}
        className={styles.subscribeForm}
      >
        {children}
      </form>
    </div>
  );
};

export default SubscribeForm;
