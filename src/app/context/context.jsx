"use client";
import { createContext, useState } from "react";
export const FitLogContext = createContext({});
export default function FitLogProvide({ children }) {
  const [plan, setPlan] = useState([]);
  const [save, setSave] = useState([]);
  const allContextValue = {
    plan,
    setPlan,
    save,
    setSave,
  };
  return (
    <FitLogContext.Provider value={allContextValue}>
      {children}
    </FitLogContext.Provider>
  );
}
