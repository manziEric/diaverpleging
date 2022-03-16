import Button from 'src/components/button/Button';
import styles from 'styles/header.module.css';

interface ComponentProps {
  title: string;
  tekst: string;
  isButton: boolean;
}

function Header({ title, tekst, isButton }: ComponentProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{tekst}</p>
        {isButton ? <Button route="/contact">Boek je afspraak</Button> : null}
      </div>
    </div>
  );
}

export default Header;
