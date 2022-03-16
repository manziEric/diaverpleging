import { ReactNode } from 'react';
import useContactFormHandler from 'src/components/contactForm/useContactFormHandler';
import styles from 'styles/form.module.css';

interface ComponentProps {
  children: ReactNode;
  title: string;
}

function ContactForm({ children, title }: ComponentProps): JSX.Element {
  const [contactFormHandler] = useContactFormHandler();
  return (
    <div className={styles.contactContainer}>
      <h2>{title}</h2>
      <form onSubmit={contactFormHandler} className={styles.form}>
        {children}
      </form>
    </div>
  );
}

export default ContactForm;
