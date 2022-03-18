import { createContext, ReactNode } from 'react';
import styles from 'styles/serviceSection.module.css';

const ServiceSectionContext = createContext<any | null>(null);

function ServiceSection({ children }: { children: ReactNode }) {
  return (
    <ServiceSectionContext.Provider value={null}>
      <div className={styles.container}>{children}</div>
    </ServiceSectionContext.Provider>
  );
}

export default ServiceSection;
