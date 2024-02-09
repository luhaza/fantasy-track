import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavSelected = ({ route, text }) => {
  return (
    <li>
        <Link class="block py-2 px-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" to={route}>{text}</Link>
    </li>
  )
}

export default NavSelected; 