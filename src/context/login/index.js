import React, { createContext, useState, useContext } from 'react';

const LoginContext = createContext();
const LoginDispatch = createContext();

export function LoginProvider({ children }) {
  const [context, dispatch] = useState(null);

  return (
    <LoginContext.Provider value={context}>
      <LoginDispatch.Provider value={dispatch}>
        {children}
      </LoginDispatch.Provider>
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }
  return context;
}

export function useLoginDispatch() {
  const dispatch = useContext(LoginDispatch);
  if (!dispatch) {
    throw new Error('useLoginDispatch must be used within a LoginProvider');
  }
  return dispatch;
}
