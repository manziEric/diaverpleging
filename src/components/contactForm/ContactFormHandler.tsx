import { createContext, ReactNode } from 'react';

export const ContactFormHandlerContext = createContext<any | null>(null);

interface ComponentProps {
  children: ReactNode;
}
function ContactFormHandler({ children }: ComponentProps): JSX.Element {
  return (
    <ContactFormHandlerContext.Provider value={null}>
      {children}
    </ContactFormHandlerContext.Provider>
  );
}

export default ContactFormHandler;
