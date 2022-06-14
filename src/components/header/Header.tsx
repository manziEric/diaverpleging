import Button from 'src/components/button/Button';
import styles from 'styles/header.module.css';

interface ComponentProps {
  title: string;
  tekst: string;
  isButton: boolean;
  isContact: boolean;
  address: string;
}

function Header({
  title,
  tekst,
  isButton,
  isContact,
  address,
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
        <p className={styles.textAboveButton}>{address}</p>
        {isButton ? <Button route="/afspraak">Boek je afspraak</Button> : null}
      </div>
    </div>
  );
}

export default Header;
