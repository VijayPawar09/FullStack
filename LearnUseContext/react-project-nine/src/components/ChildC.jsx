import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext);
    const theme = ThemeContext(ThemeContext);
  return (
    <div>
      <button>
        Change Theme
        </button> 
    </div>
  )
}

export default ChildC