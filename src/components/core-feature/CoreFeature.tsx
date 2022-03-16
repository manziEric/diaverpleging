import IconsColumn from 'src/components/icons-column/IconsColumn';
import data from 'src/components/core-feature/CoreFeature.data';
import styles from 'styles/icons.module.css';

function CoreFeature(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>Waarom Dia Verpleging</h2>
      <div className={styles.grid}>
        {data.map(({ id, IconSrc, title, text }) => (
          <IconsColumn key={id} IconSrc={IconSrc} title={title} text={text} />
        ))}
      </div>
    </div>
  );
}

export default CoreFeature;
