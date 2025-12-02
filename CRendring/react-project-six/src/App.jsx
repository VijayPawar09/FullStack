import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const[isLoggedIn, setLoggedIn] = useState(true);
  
  return (
    <div>
      <h1>Welcome to codehelp web dev course</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )



  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn /> }
  //   </div>
  // )



  // if(isLoggedIn){
  //   return {
  //     <LogoutBtn />
  //   }
  // }
  // else{
  //   return {
  //     <LoginBtn />
  //   }
  // }

}

export default App
