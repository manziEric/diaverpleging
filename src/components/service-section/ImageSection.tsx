import React, { FC } from 'react';
import styles from 'styles/serviceSection.module.css';
import Image from 'next/image';

interface ComponentProps {
  src: string | StaticImageData;
  alt: string;
}

const ImageSection = ({ src, alt }: ComponentProps): JSX.Element => {
  return (
    <div className={styles.grid_item}>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default ImageSection;
