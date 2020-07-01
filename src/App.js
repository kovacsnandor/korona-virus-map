import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    
    const HandleClick = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, [setCount])

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={HandleClick}>Increment</button>
    </div>
  )
}

export default App;
