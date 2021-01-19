import { createContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  const state = {
    mode: "dark",
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default Context;
