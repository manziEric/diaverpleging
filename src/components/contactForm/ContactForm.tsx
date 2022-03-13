import React, { ReactNode } from 'react';
import styles from 'styles/form.module.css';
import useContactFormHandler from 'src/components/contactForm/useContactFormHandler';

interface ComponentProps {
  children: ReactNode;
  title: string;
}

const ContactForm = ({ children, title }: ComponentProps): JSX.Element => {
  const [contactFormHandler] = useContactFormHandler();
  return (
    <div className={styles.contactContainer}>
      <h2>{title}</h2>
      <form onSubmit={contactFormHandler} className={styles.form}>
        {children}
      </form>
    </div>
  );
};

export default ContactForm;
