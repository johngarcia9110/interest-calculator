import React from 'react';
import { AppWrapper } from './styles';
import Calculator from '../Calculator/Calculator';

function App() {
  return (
      <div className="App">
        <AppWrapper>
            <h1>Interest Rate Calculator</h1>
            <Calculator/>
        </AppWrapper>
      </div>
  );
}

export default App;
