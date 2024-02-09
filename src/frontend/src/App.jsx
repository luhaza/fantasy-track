import React from 'react'
import {Routes, Route} from 'react-router-dom' // so page never refreshes when switching
import Home from './pages/Home'
import CurrentCompetitions from './pages/CurrentCompetitions'
import Leaderboards from './pages/Leaderboards'
import About from './pages/About'
import DraftMenu from './pages/DraftMenu'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import EnterBeta from './pages/EnterBeta'
import Login from './pages/Login'

//Use App.jsx as a Router Menu
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EnterBeta />} />
      <Route path='/current-competitions' element={<CurrentCompetitions />} />
      <Route path='/leaderboards' element={<Leaderboards />} />
      <Route path='/about' element={<About />} />
      <Route path='/draft-menu' element={<DraftMenu />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dash' element={<Dashboard />} />
      <Route path='/beta' element={<EnterBeta />} />
    </Routes>
  )
}

export default App