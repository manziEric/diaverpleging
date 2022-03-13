import React, { ReactNode } from 'react';
import styles from 'styles/form.module.css';
import useButtonHandler from 'src/components/button/useButtonHandler';

interface ComponentProps {
  children: ReactNode;
  route: string;
}

const Button = ({ children, route }: ComponentProps): JSX.Element => {
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
};

export default Button;
