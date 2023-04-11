import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const Context = ({ children }) => {
  const [appTitle, setAppTitle] = useState("");
  const value = {
    appTitle,
    updateTitle: (title) => {
      setAppTitle(title);
    },
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Context;
