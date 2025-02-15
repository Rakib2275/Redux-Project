import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/show-books" className='nav-link'>Show Book</Link>
        <Link to="/add-book" className='nav-link'>Add Book</Link>
      </nav>
    </div>
  )
}

export default Navbar
