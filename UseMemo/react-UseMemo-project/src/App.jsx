import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function expensiveTask(num) {
    console.log("Inside expensive task");
    for (let i = 0; i <= 10000000; i++) {}
    return num * 2;
  }

  const doubleValue = useMemo(() => expensiveTask(4), []); // `[]` ensures this runs only once.

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <div>
        Double: {doubleValue}
      </div>
    </div>
  );
}

export default App;
