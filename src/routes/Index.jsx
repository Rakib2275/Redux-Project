import React from 'react'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../Layouts/Navbar'
import BooksView from '../fetaures/BooksView'
import AddBook from '../fetaures/AddBook'
import EditBook from '../fetaures/EditBook'
import Footer from '../Layouts/Footer'

function Index() {
  return <BrowserRouter>
  <Navbar />
    <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/show-books" element={<BooksView/>} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path='/edit-book' element={<EditBook />} />
    </Routes>
    </main>
    <Footer />
  </BrowserRouter>
}

export default Index
