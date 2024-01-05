// ScrollContext.js
import React, { createContext, useState, useContext } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
