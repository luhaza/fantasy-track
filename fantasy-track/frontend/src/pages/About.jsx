import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsInfoCircle } from 'react-icons/bs'
import heroImage from '../images/ncaa-d1-womens-hero.jpeg';
import NavUnSelected from '../components/NavUnSelected'; 
import NavSelected from '../components/NavSelected'; 
import LoginButton from '../components/LoginButton'; 

const About = () => {
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
                    <NavUnSelected route={`/current-competitions`} text={'Current Competitions'}/>
                    <NavUnSelected route={`/leaderboards`} text={'Leaderboards'}/>
                    <NavSelected route={`/about`} text={'About'}/>
                </ul>
            </div>
            <LoginButton/>
        </div>
      </nav>
      <div class="min-h-screen flex items-center bg-transparent">
        <div class="w-screen p-16">
          <p class="text-blue-500 text-4xl font-inter">About section coming soon!</p>
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

export default About