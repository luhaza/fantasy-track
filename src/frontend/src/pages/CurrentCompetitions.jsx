import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsInfoCircle } from 'react-icons/bs'
import heroImage from '../images/ncaa-d1-womens-hero.jpeg';
import '../fonts.css';
import Meets from './Meets.jsx'; 
import NavUnSelected from '../components/NavUnSelected.jsx'; 
import NavSelected from '../components/NavSelected.jsx'; 
import LoginButton from '../components/LoginButton.jsx'; 


const CurrentCompetitions = () => {

    const [meets, setMeets] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:5555/meets')
        .then((response) => {
          setMeets(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);

  return (
    <div className="bg-white">

      <nav class="bg-white z-30 top-0 start-0 w-full fixed border-b border-blue-500">
        <div class="flex flex-wrap items-center justify-between pr-8 pl-8 pt-4 pb-4">
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse pr-8">
                <span class="self-center text-2xl font-bold font-inter text-blue-500 whitespace-nowrap">Fantasy Track</span>
                </a>
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-inter text-lg rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
                    <NavUnSelected route={`/`} text={'Home'}/>
                    <NavSelected route={`/current-competitions`} text={'Current Competitions'}/>
                    <NavUnSelected route={`/leaderboards`} text={'Leaderboards'}/>
                    <NavUnSelected route={`/about`} text={'About'}/>
                </ul>
            </div>
            <LoginButton/>
        </div>
      </nav>

      <div class="min-h-screen flex items-center bg-transparent mt-10">
        <div class="w-screen p-4">
          <p class="text-blue-500 text-4xl font-inter mb-10">Compete for the Fantasy Track Crown!</p>
          <div class="relative overflow-x-auto border border-blue-500 rounded-sm mb-10">
            <table class="z-20 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                    Meet-Day Drafts
                    <p class="mt-1 text-sm font-normal text-gray-500">Compete in a short draft competition that lasts the duration of the meet. Make a team comprised of athletes from the performance list. Most points after the meet wins.</p>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Open</span>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Meet
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Division
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Players
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Register by
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <Meets meets={meets} />
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
    </div>
  )
}

export default CurrentCompetitions