import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();
const ListDispatch = createContext();

export function ListProvider({ children }) {
  const [context, dispatch] = useState([]);

  return (
    <ListContext.Provider value={context}>
      <ListDispatch.Provider value={dispatch}>
        {children}
      </ListDispatch.Provider>
    </ListContext.Provider>
  );
}

export function useListContext() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return context;
}

export function useListDispatch() {
  const dispatch = useContext(ListDispatch);
  if (!dispatch) {
    throw new Error('useListDispatch must be used within a ListProvider');
  }
  return dispatch;
}
