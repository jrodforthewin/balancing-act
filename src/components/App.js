
import React, {useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import isBalanced from '../algorithms/balancer';

function App() {
  const textRef = useRef("");
  const [balancedResponse, setBalanced] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const textVal = textRef.current.value;
    setBalanced(isBalanced(textVal));
  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={submit}>
       <input ref={textRef} type="text" onChange={submit}></input>
       <button>Send Ref</button>
       </form>
       <h3>My app</h3>
       <div>{balancedResponse? "Yes" : "No"}</div>
       Learn react
      </header>
    </div>
  );
}

export default App;
