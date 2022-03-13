import Image from 'next/image';
import styles from 'styles/serviceCard.module.css';

interface ComponentProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const ServiceCardsContent = ({ image, title, text }: ComponentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardCircle}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCardsContent;
