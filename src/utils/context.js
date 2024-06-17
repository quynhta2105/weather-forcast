import React, { createContext, useState, useContext } from 'react';

// Create a context object
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [date, setDate] = useState(1);
  
  return (
    <DataContext.Provider value={{ date, setDate }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => {
  return useContext(DataContext);
};
