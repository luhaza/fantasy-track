import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Leaderboards = () => {
  return (
    <div className='p-4'>
      <p> Leaderboards</p>
    </div>
  )
}

export default Leaderboards