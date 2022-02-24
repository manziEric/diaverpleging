import styles from "styles/card.module.css";

interface ComponentProps {
  text: string;
}

const CardContent = ({ text }: ComponentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardCircle}></div>
      <div className={styles.content}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardContent;
