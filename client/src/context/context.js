import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  
  return (
    <ExpenseTrackerContext.Provider value={{hello}}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default Provider