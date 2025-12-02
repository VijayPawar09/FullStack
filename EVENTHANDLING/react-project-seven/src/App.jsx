import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function handleClick(){
    alert("I am Clicked");
  }

  function handleMouseOver(){
    alert("Mouse on the para")
  }
  function handleInputChange(e){
    // console.log("Input main value change hui hain ")
    console.log("Value till now:", e.target.value)
  }
  function handlesubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour down .
    alert("form submit kardu kya");
  }
  return (
    <div>
      <button onClick={() => alert("Button click hua h")}>
        Click me
      </button>

      {<form onSubmit={handlesubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> }

    {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
      I am para
    </p>

      <button onClick={handleClick}>
        Click me
      </button> */} 
    </div>
  )
}

export default App
