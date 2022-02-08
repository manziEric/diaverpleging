import styles from "../../../styles/icons.module.css";

export default function IconsColumn({ IconSrc, title, text }) {
  return (
    <div>
      <div>
        <IconSrc className={styles.icon} />
        <br />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
