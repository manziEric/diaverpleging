import React, { createContext, ReactNode } from "react";

export const ContactFormContext = createContext<any>(null);

const ContactForm = ({ children }: { children: ReactNode }) => {
  return (
    <ContactFormContext.Provider value={{}}>
      {children}
    </ContactFormContext.Provider>
  );
};

export default ContactForm;
