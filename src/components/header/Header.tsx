import Button from 'src/components/button/Button';
import styles from 'styles/header.module.css';

interface ComponentProps {
  title: string;
  tekst: string;
  isButton: boolean;
  isContact: boolean;
}

function Header({
  title,
  tekst,
  isButton,
  isContact,
}: ComponentProps): JSX.Element {
  return (
    <div className={styles.container}>
      {isContact ? (
        <div className={styles.backgroundContactImage} />
      ) : (
        <div className={styles.backgroundImage} />
      )}
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{tekst}</p>
        {isButton ? <Button route="/contact">Boek je afspraak</Button> : null}
      </div>
    </div>
  );
}

export default Header;
