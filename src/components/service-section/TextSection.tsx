import Button from 'src/components/button';
import styles from 'styles/serviceSection.module.css';

const TextSection = (): JSX.Element => {
  return (
    <div className={styles.grid_item}>
      <h2>Je Bent In Zorgende Handen</h2>
      <p>
        Dia Verpleging bestaat uit verplegers en verpleegsters met jarenlange
        ervaring. Mensen verzorgen doen we hart en ziel. Onze missie? Zorgen dat
        je je leven zo prettig mogelijk kan leiden. We geloven in de kracht van
        een hartverwarmende lach en een oprechte babbel.
      </p>
      <Button route="/diensten">Leer meer over ons</Button>
    </div>
  );
};

export default TextSection;
