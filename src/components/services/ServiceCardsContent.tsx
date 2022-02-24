import Image from "next/image";
import styles from "styles/serviceCard.module.css";

interface ComponentProps {
  image: StaticImageData;
  text: string;
}

const ServiceCardsContent = ({ image, text }: ComponentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardCircle}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.content}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCardsContent;
