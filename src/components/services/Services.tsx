import { createContext, ReactNode } from 'react';

const ServicesContext = createContext<any | null>(null);

function Services({ children }: { children: ReactNode }) {
  return (
    <ServicesContext.Provider value={null}>{children}</ServicesContext.Provider>
  );
}

export default Services;
