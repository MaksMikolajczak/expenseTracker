import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [contracts, dispatch] = useReducer(contextReducer, initialState);

  const deleteContract = (id) => dispatch({type: 'DELETE_CONTRACT', payload: id})
  const addContract = (contract) => dispatch({type: 'ADD_CONTRACT', payload: contract})
  return (
    <ExpenseTrackerContext.Provider value={{deleteContract, addContract}}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default Provider