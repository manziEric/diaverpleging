import { ReactNode } from 'react';
import styles from 'styles/serviceCard.module.css';

interface ComponentProps {
  children: ReactNode;
}

function ServiceCards({ children }: ComponentProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>{children}</div>
    </div>
  );
}

export default ServiceCards;
