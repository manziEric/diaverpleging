import styles from "styles/form.module.css";

const Input = ({
  type,
  name,
  placeholder,
}: {
  type: string;
  name: string;
  placeholder: string;
}): JSX.Element => {
  return (
    <div className={styles.containerInput}>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
