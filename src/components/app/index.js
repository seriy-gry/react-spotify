import React from 'react';
import { LoginProvider, ListProvider, PlayerProvider } from 'src/context';
import AppComponent from './app';

function App() {
  return (
    <LoginProvider>
      <PlayerProvider>
        <ListProvider>
          <AppComponent />
        </ListProvider>
      </PlayerProvider>
    </LoginProvider>
  );
}

export default App;
