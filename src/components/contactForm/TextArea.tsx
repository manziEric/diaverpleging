import React from "react";
import styles from "styles/form.module.css";

const TextArea = ({
  name,
  rows,
  cols,
  placeholder,
}: {
  name: string;
  rows: number;
  cols: number;
  placeholder: string;
}): JSX.Element => {
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
