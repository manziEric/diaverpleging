import React, { createContext, ReactNode } from "react";

export const SubscribeFormHandlerContext = createContext<any>(null);

const SubscribeFormHandler = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <SubscribeFormHandlerContext.Provider value={{}}>
      {children}
    </SubscribeFormHandlerContext.Provider>
  );
};

export default SubscribeFormHandler;
