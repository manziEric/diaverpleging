import Image from 'next/image';
import styles from 'styles/serviceCard.module.css';

interface ComponentProps {
  image: StaticImageData;
  title: string;
  text: string;
  alt: string;
}

function ServiceCardsContent({ image, title, text, alt }: ComponentProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardCircle}>
        <Image src={image} alt={alt} />
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServiceCardsContent;
