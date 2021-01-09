import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.scss';

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <p>Hello World!</p>

      <button onClick={() => setState(!state)}>{state ? 'On' : 'Off'}</button>
    </>
  );
}

render(<App />, document.getElementById('root'));
