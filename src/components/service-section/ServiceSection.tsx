import React, { createContext, ReactNode } from "react";
import styles from "styles/serviceSection.module.css";

const ServiceSectionContext = createContext<any>(null);

const ServiceSection = ({ children }: { children: ReactNode }) => {
  return (
    <ServiceSectionContext.Provider value={{}}>
      <div className={styles.container}>{children}</div>
    </ServiceSectionContext.Provider>
  );
};

export default ServiceSection;
