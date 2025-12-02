import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';
import ChildC from './components/ChildC';


//step 1:create context 
const UserContext = createContext();

//step 2: wrap all the child inside a provider.
//step 3:pass value 
//step 4: consumer ke ander jake value consume karlo 

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"Love"});

  const [theme, setTheme] = useState('Light');

  return (
  
    <ThemeContext.Provider value={theme}>
      <ChildA />
    </ThemeContext.Provider>



    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA />
    // </UserContext.Provider>
    // </>
  )
}

export default App
// export {UserContext}-
export {ThemeContext}
