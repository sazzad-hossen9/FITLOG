"use client";
import { children, createContext, SetStateAction, useState } from "react";

import React from "react";
export const FitLogContext = createContext < IBookContext > {};
export default function BooksProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [save, setSave] = useState([]);
  const allContextValue = {
    plan,
    setPlan,
    save,
    setSave,
  };
  return (
    <div>
      <FitLogContext.Provider value={allContextValue}>
        {children}
      </FitLogContext.Provider>
    </div>
  );
}
