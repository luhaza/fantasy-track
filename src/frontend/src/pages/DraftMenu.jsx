import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsInfoCircle } from 'react-icons/bs'
import heroImage from '../images/ncaa-d1-womens-hero.jpeg';
import '../fonts.css';
import AthleteSearch from './AthleteSearch.jsx'; 
import NavUnSelected from '../components/NavUnSelected.jsx'; 
import NavSelected from '../components/NavSelected.jsx'; 
import LoginButton from '../components/LoginButton.jsx'; 

const DraftMenu = () => {

  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/athletes')
      .then((response) => {
        setAthletes(response.data.data);
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

      <div class="flex items-start bg-transparent mt-20 ">
        
        <div class="w-screen p-4">
            <p class="text-blue-500 text-2xl font-inter mb-10">"Insert Meet Name": Register & Draft Athletes</p>
            <div class="flex border-blue-500 border">
                <div class="w-1/2 border-blue-500 border-r">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <tbody>
                                <tr class="bg-white">
                                    <td class="px-6 py-4">
                                        <div>
                                            <label for="team_name" class="block mb-2 text-sm">Team Name:</label>
                                            <input type="text" id="team_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="The Dream Team" required />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <td class="px-0">
                                        <div class="px-6 py-4">Your Team:</div>
                                        <div class="relative overflow-x-auto px-6">
                                            <table class="w-full border text-sm text-left rtl:text-right text-gray-500 ">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3">
                                                            Athlete
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            School
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Year
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Event
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Value
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            <span class="sr-only">Remove</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white border-b ">
                                                        <td class="px-6 py-4">
                                                            Luke Zanuck
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Williams College
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            3k
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            12/20
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Remove
                                                        </td>
                                                    </tr>
                                                    <tr class="bg-white border-b ">
                                                        <td class="px-6 py-4">
                                                            Luke Zanuck
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Williams College
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            2
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            3k
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            12/20
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            Remove
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="px-6 py-4">Total Team Value: 24/100</div>
                                    </td>
                                </tr>
                                <tr class="bg-white ">
                                    
                                    <td class="px-6 py-2">
                                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200">Finalize Draft & Enter Competition</button>
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="w-1/2">
                    <div class="relative overflow-x-auto max-h-screen">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <tbody>
                                <tr class="bg-white">
                                    <td class="">
                                        <div class="px-6 pt-4">
                                            <label for="team_name" class="block mb-2 text-sm">Find Athletes:</label>
                                            <form>   
                                                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                                                <div class="relative">
                                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                        </svg>
                                                    </div>
                                                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-t-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search" required />
                                                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="relative overflow-x-auto px-6 pb-4">
                                            <AthleteSearch athletes={athletes} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            
            {/* Menu for Draft, lots of things to add
            - draft stats/details, but not description
            - every time you make a new draft object, reset the database so no one is taken yet in draft
            - search bar with scroll for a athlete in the performance list
            - selecting an athlete
            - athlete showing up on user's team menu with point#/totalpoints allowed stat as well
            - ability to add and delete athletes
            - ability to name your team, then register you team for the meet day
            */}
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

export default DraftMenu