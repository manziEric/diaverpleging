import { ReactNode } from 'react';
import useButtonHandler from 'src/components/button/useButtonHandler';
import styles from 'styles/form.module.css';

interface ComponentProps {
  children: ReactNode;
  route: string;
}

function Button({ children, route }: ComponentProps): JSX.Element {
  const [handleButtonClick] = useButtonHandler();
  return (
    <div className={styles.containerButton}>
      <button
        className={styles.button}
        type="submit"
        onClick={() => handleButtonClick(route)}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
