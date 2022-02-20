import Image from "next/image";
import React from "react";
import styles from "styles/serviceCard.module.css";

const ServiceCards = ({
  text,
  image1,
  image2,
}: {
  text: string;
  image1: StaticImageData;
  image2: StaticImageData;
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardCircle}>
            <Image src={image1} alt="" />
          </div>
          <div className={styles.content}>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardCircle}>
            <Image src={image2} alt="" />
          </div>
          <div className={styles.content}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
