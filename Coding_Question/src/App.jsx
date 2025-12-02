import React, { useState } from 'react'
import './index.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="min-h-screen bg-yellow-600 text-white font-bold text-2xl flex items-center justify-center">
//       <div className="flex flex-col items-center space-y-4">
//         <p className="bg-blue-500 px-6 py-2 rounded">Count: {count}</p>
        
//         <button 
//           className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded transition"
//           onClick={() => setCount(count - 1)}
//         >
//           Decrement
//         </button>

//         <button 
//           className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition"
//           onClick={() => setCount(count + 1)}
//         >
//           Increment
//         </button>

//         <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded transition"onClick={() => setCount(0)}> Reset </button>
      
//       </div>
//     </div>
//   )
// }

// export default App


export default function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button onClick = {() => setIsOn(!isOn)}
       className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out
        ${isOn ? 'bg-green-500' : 'bg-green-400'}`}
        >
        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-8': 'translate-x-0'}`}>

        </div>

      </button>
      <span className="ml-4 text-lg font-semibold">{isOn ? 'ON' : 'OFF'} </span>
    </div>
  )
}