import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'> About </Link>
        </li>
        <li>
          <Link to='/Dashboard'> Dashboard </Link>
        </li>
      </ul>
      </div>
  )
}

export default Navbar