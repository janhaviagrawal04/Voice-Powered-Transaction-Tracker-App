import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const TransactionTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = ( id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = ( transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Payables' ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

    return (
        <TransactionTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </TransactionTrackerContext.Provider>
    );
}