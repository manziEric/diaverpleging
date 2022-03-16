import { createContext, ReactNode } from 'react';

export const SubscribeFormHandlerContext = createContext<any | null>(null);

interface ComponentsProps {
  children: ReactNode;
}

function SubscribeFormHandler({ children }: ComponentsProps): JSX.Element {
  return (
    <SubscribeFormHandlerContext.Provider value={null}>
      {children}
    </SubscribeFormHandlerContext.Provider>
  );
}

export default SubscribeFormHandler;
