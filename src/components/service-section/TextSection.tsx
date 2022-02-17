import React from "react";
import styles from "../../../styles/serviceSection.module.css";
import Button from "../button/Button";

const TextSection = () => {
  return (
    <div className={styles.grid_item}>
      <h1>Je Bent In Zorgende Handen</h1>
      <p>
        Dia Verpleging bestaat uit verplegers en verpleegsters met jarenlange
        ervaring. Mensen verzorgen doen we hart en ziel. Onze missie? Zorgen dat
        je je leven zo prettig mogelijk kan leiden. We geloven in de kracht van
        een hartverwarmende lach en een oprechte babbel.
      </p>
      <Button>Leer meer over ons</Button>
    </div>
  );
};

export default TextSection;
