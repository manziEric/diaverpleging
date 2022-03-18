import { ReactNode } from 'react';
import Button from 'src/components/button';
import styles from 'styles/card.module.css';

interface ComponentProps {
  children: ReactNode;
}

function Card({ children }: ComponentProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>Onze Diensten</h2>
      <div className={styles.cardContainer}>{children}</div>
      <Button route="/diensten">Ontdek al onze diensten</Button>
    </div>
  );
}

export default Card;
