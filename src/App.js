import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    
    const HandleClick = () => {
        setCount(count + 1)
    }

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={HandleClick}>Increment</button>
    </div>
  );
}

export default App;
