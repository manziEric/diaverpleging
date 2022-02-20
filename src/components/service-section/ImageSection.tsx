import React, { FC } from "react";
import styles from "styles/serviceSection.module.css";
import Image from "next/image";

const ImageSection = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): JSX.Element => {
  return (
    <div className={styles.grid_item}>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default ImageSection;
