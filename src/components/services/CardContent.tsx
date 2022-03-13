import styles from 'styles/card.module.css';

interface ComponentProps {
  title: string;
  text: string;
}

const CardContent = ({ title, text }: ComponentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardCircle}></div>
      <div className={styles.content}>
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardContent;
