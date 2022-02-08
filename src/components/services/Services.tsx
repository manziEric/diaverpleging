import React, { createContext, ReactNode } from "react";

const ServicesContext = createContext<any>(null);

const Services = ({ children }: { children: ReactNode }) => {
  return (
    <ServicesContext.Provider value={{}}>{children}</ServicesContext.Provider>
  );
};

export default Services;
