import React, { createContext, ReactNode } from "react";

export const ContactFormHandlerContext = createContext<any>(null);

const ContactFormHandler = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <ContactFormHandlerContext.Provider value={{}}>
      {children}
    </ContactFormHandlerContext.Provider>
  );
};

export default ContactFormHandler;
