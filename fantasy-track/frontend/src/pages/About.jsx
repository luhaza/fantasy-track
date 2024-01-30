import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const About = () => {
  return (
    <div className='p-4'>
      <p>About</p>
    </div>
  )
}

export default About