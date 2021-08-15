
import React, { useRef, useState } from 'react';
import './App.css';
import isBalanced from '../algorithms/balancer';

function App() {
  const textRef = useRef("");
  const [balancedResponse, setBalanced] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const textVal = textRef.current.value;
    setBalanced(isBalanced(textVal));
  }

  return (
    <div className="App">
      <header className="App-header">
        <input ref={textRef} data-testid="balancer-input" type="text" onChange={handleChange}></input>
        <h3>Is it Balanced?</h3>
        <div data-testid="balancer-output">{balancedResponse ? "Yes" : "No"}</div>
      </header>
    </div>
  );
}

export default App;
