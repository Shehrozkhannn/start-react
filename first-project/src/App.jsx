import './App.css';
import { useState } from 'react';

function App() {
  let [counter , setCounter] = useState(15)
  // let counter = 5;

  const addValue = () => {
    setCounter(counter++)
  }

  const removeVal = () => {
    setCounter(counter--)
  }
  return (
    <>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeVal}>Remove Value</button>
    </>
  );
}

export default App;
