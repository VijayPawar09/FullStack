import { useState } from 'react'
import './App.css'
import Card from './components/Card'

// A pattern where state is moved from a child component to a prent componenet to share data between siblings or manage global state:
//Avoid prop drilling (passing props through multiple layer)
//keep the single source of truth in paret component:
function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwa dunga.
  const [name, setName] = useState('');

  return (
    <div>
      <Card title="card1" name={name} setName={setName} />
      <Card title="card2" name={name} setName={setName} />
      {/* <p>I am inside parent component and value of name is: {name} </p> */}
    </div>
    
  )
}

export default App
