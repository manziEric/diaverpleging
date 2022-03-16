import Image from 'next/image';
import styles from 'styles/serviceSection.module.css';

interface ComponentProps {
  src: string | StaticImageData;
  alt: string;
}

function ImageSection({ src, alt }: ComponentProps): JSX.Element {
  return (
    <div className={styles.grid_item}>
      <Image src={src} alt={alt} />
    </div>
  );
}

export default ImageSection;
