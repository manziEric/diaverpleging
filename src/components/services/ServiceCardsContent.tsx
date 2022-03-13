import Image from 'next/image';
import styles from 'styles/serviceCard.module.css';

interface ComponentProps {
  image: StaticImageData;
  title: string;
  text: string;
  alt: string;
}

const ServiceCardsContent = ({ image, title, text, alt }: ComponentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardCircle}>
        <Image src={image} alt={alt} />
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCardsContent;
