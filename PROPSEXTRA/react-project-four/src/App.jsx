import { useState } from "react";
import "./App.css";
import button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </button>

    
    <card name="Vijay Pawar">
    <h1>Best Web dev course</h1>
    <p>trying to be consistent in this</p>
    <p>will complete the course soon</p>
    </card>
    <card>
      Hello Everyone 
    </card>  
    </div>
  );
}

export default App;
