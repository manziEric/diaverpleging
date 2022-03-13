import styles from 'styles/form.module.css';

interface ComponentProps {
  name: string;
  rows: number;
  cols: number;
  placeholder: string;
}

const TextArea = ({
  name,
  rows,
  cols,
  placeholder,
}: ComponentProps): JSX.Element => {
  return (
    <div className={styles.containertextarea}>
      <textarea
        className={styles.textarea}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
