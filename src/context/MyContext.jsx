import { useSignal } from "@preact/signals-react";
import React, { createContext } from "react";

export const textContext = createContext();

const MyContext = ({ children }) => {
  const test = useSignal("Hema");
  return (
    <textContext.Provider value={{ name: test.value }}>
      {children}
    </textContext.Provider>
  );
};

export default MyContext;
