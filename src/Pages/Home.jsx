import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Library of Book</h2>
      <div className='home-nav'>
      <Link to="/add-book" className='home-addBook'>Add Book</Link>
      <Link to="/show-books" className='home-addBook'>Show Book</Link>
      </div>
      <p className='para'>Details for Book Name and Author.</p>
      <img src="https://img.freepik.com/premium-vector/open-blue-book_251819-703.jpg?semt=ais_hybrid" alt="" />
    </div>
  )
}

export default Home
