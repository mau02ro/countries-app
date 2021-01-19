import { createContext } from "react";

const STATE = {
  mode: "dark",
};

const context = createContext(STATE);

export default context;
