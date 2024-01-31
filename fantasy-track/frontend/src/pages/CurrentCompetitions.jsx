import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsInfoCircle } from 'react-icons/bs'
import heroImage from '../images/ncaa-d1-womens-hero.jpeg';

const CurrentCompetitions = () => {
  return (
    <div className="bg-white">
      <nav class="bg-white z-20 top-0 start-0 w-full fixed border-b border-blue-500">
        {/* max-w-screen-xl dark:bg-gray-900 */}
        <div class="flex flex-wrap items-center justify-between pr-8 pl-8 pt-4 pb-4">
        
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <a href="https://google.com/" class="flex items-center space-x-3 rtl:space-x-reverse pr-8">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/> */}
              <span class="self-center text-2xl font-bold font-inter whitespace-nowrap">Fantasy Track</span>
          </a>
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-inter text-lg rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <Link class="block py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"to={`/`}>Home</Link>
            </li>
            <li>
              <Link class="block py-2 px-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" to={`/current-competitions`}>Current Competitions</Link>
            </li>
            <li>
              <Link class="block py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"to={`/leaderboards`}>Leaderboards</Link>
            </li>
            <li>
              <Link class="block py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"to={`/about`}>About</Link>
            </li>
          </ul>
        </div>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-inter rounded-lg text-sm px-4 py-2 text-center ">Sign Up</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        
        </div>
      </nav>


      <div class="min-h-screen flex items-center bg-transparent">
        <div class="w-screen p-4">
          <p class="text-blue-500 text-4xl font-inter mb-10">Compete for the Fantasy Track Crown!</p>
          <div class="relative overflow-x-auto border border-blue-500 rounded-sm mb-10">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                    Meet-Day Drafts
                    <p class="mt-1 text-sm font-normal text-gray-500">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Meet
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Players
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            BU Valentine
                        </th>
                        <td class="px-6 py-4">
                            All Divisions
                        </td>
                        <td class="px-6 py-4">
                            2/14/2024
                        </td>
                        <td class="px-6 py-4">
                            10/10
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-grey  hover:underline">Register</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Stanford Invitational
                        </th>
                        <td class="px-6 py-4">
                            All Divisions
                        </td>
                        <td class="px-6 py-4">
                            3/26/2024
                        </td>
                        <td class="px-6 py-4">
                            12/16
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Register</a>
                        </td>
                    </tr>
                    <tr class="bg-white ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            NCAA Division 1 Outdoor National Championship
                        </th>
                        <td class="px-6 py-4">
                            Division 1
                        </td>
                        <td class="px-6 py-4">
                            6/10/2024
                        </td>
                        <td class="px-6 py-4">
                            28/40
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 hover:underline">Register</a>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>

          <div class="relative overflow-x-auto border border-blue-500 rounded-sm">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                    Draft Leagues
                    <p class="mt-1 text-sm font-normal text-gray-500">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            League
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dates
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Players
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Quick-starters 
                        </th>
                        <td class="px-6 py-4">
                            All Divisions, 1 Month
                        </td>
                        <td class="px-6 py-4">
                            12/8/2023 - 1/31/2024
                        </td>
                        <td class="px-6 py-4">
                            24/36
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Register</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Mid-table Greatness
                        </th>
                        <td class="px-6 py-4">
                            All Divisions, 2 Months
                        </td>
                        <td class="px-6 py-4">
                            3/2/2024 - 5/2/2024
                        </td>
                        <td class="px-6 py-4">
                            8/16
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Register</a>
                        </td>
                    </tr>
                    <tr class="bg-white ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            D3 Championship Season
                        </th>
                        <td class="px-6 py-4">
                            Division 3, 1 Month
                        </td>
                        <td class="px-6 py-4">
                            5/10/2024 - 6/10/2024
                        </td>
                        <td class="px-6 py-4">
                            20/60
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 hover:underline">Register</a>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* <div class="min-h-screen flex items-center bg-transparent z-10">
        <div class="h-screen/2 bg-white">
          <p>Hello world</p>
        </div>
      </div> */}
    </div>
  )
}

export default CurrentCompetitions