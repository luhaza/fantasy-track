import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavUnSelected = ({ route, text }) => {
  return (
    <li>
        <Link class="block py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"to={route}>{text}</Link>
    </li>
  )
}

export default NavUnSelected; 