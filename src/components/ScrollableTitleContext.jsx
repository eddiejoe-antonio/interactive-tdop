import React, { createContext, useState } from 'react';

export const ScrollableTitleContext = createContext();

export const ScrollableTitleProvider = ({ children }) => {
  const [refs, setRefs] = useState([]);

  const addScrollableTitleRef = (newRef) => {
    // Function to add a new ref if it's not already included
    setRefs((prevRefs) => {
      // Check if the ref is already included to prevent infinite updates
      return prevRefs.includes(newRef) ? prevRefs : [...prevRefs, newRef];
    });
  };

  return (
    <ScrollableTitleContext.Provider value={{ refs, addScrollableTitleRef }}>
      {children}
    </ScrollableTitleContext.Provider>
  );
};
