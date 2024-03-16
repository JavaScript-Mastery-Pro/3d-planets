import { createContext, useState } from "react";

export const AllContext = createContext({});

export const AllProvider = ({ children }) => {
  const [clickId, setClickId] = useState(Number); // spherre id number
  const [isOrbiting, setIsOrbiting] = useState(false); // orbit state

  const value = {
    clickId,
    setClickId,
    isOrbiting,
    setIsOrbiting,
  };

  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};
