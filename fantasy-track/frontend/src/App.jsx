import React from 'react'
import {Routes, Route} from 'react-router-dom' // so page never refreshes when switching
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import CurrentCompetitions from './pages/CurrentCompetitions'
import Leaderboards from './pages/Leaderboards'
import About from './pages/About'
import DraftMenu from './pages/DraftMenu'

//Use App.jsx as a Router Menu
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/current-competitions' element={<CurrentCompetitions />} />
      <Route path='/leaderboards' element={<Leaderboards />} />
      <Route path='/about' element={<About />} />
      <Route path='/draft-menu' element={<DraftMenu />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App