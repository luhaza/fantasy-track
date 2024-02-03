import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BsInfoCircle } from 'react-icons/bs'
import heroImage from '../images/ncaa-d1-womens-hero.jpeg';
import '../style.css';

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, []);

  return (
    <div className="bg-blue-500">
      {/* className="relative h-screen" */}
      {/* <img src={backgroundWallpaper} alt="wallpaper" className="w-full h-full object-cover" style={{ filter: 'blur(5px)' }} /> */}
      {/* navbar */}
      {/* absolute inset-0  */}
      <nav class="bg-white z-20 top-0 start-0 w-full fixed">
        {/* max-w-screen-xl dark:bg-gray-900 */}
        <div class="flex flex-wrap items-center justify-between pr-8 pl-8 pt-4 pb-4">
        
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse pr-8">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/> */}
              <span class="self-center text-2xl font-bold font-inter whitespace-nowrap text-blue-500">Fantasy Track</span>
          </a>
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-inter text-lg rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <a href="#" class="block py-2 px-3 mx-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <Link class="block py-2 px-3 mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"to={`/current-competitions`}>Current Competitions</Link>
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
          <button type="button" class="text-blue-500 text-md bg-transparent hover:bg-blue-500 hover:text-white border border-blue-500 border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-inter rounded-lg px-6 py-2 text-center ">Login</button>
          {/* <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button> */}
        </div>
        
        </div>
      </nav>


      <div class="min-h-screen flex items-center bg-transparent">
        <div class="w-screen p-4">
          <section class="bg-transparent ">
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                  <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Fantasy Track & Field is Finally Here</h1>
                  <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 ">Create your track & field superteam. Play in exciting drafts. Earn bragging rights.</p>
                  <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                      <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-blue-500 rounded-lg bg-white hover:shadow-lg">
                          Get started
                          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                      <a href="#moreinfo" class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-white hover:text-blue-500">
                          Learn more
                      </a>  
                  </div>
              </div>
          </section>
        </div>
      </div>

      <div class="min-h-screen bg-white flex items-center bg-transparent">
        <div class="w-screen">
          <section class="bg-white" id="moreinfo">
              <div class="pb-14 px-4 pt-20 mx-auto max-w-screen-xl">
                  <div class="grid md:grid-cols-2 gap-8">
                      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                              <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
                              </svg>
                              Tutorial
                          </a>
                          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">How to play fantasy track & field</h2>
                          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Fantasy sports are synonymous with complex rules & a lot of data. Learn how to navigate the fantasy track website and play in a meet-day draft.</p>
                          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                          </a>
                      </div>
                      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                          <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                              <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
                              </svg>
                              Development Journey
                          </a>
                          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">This wasn't developed overnight</h2>
                          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Our dev team has put in countless hours developing a competitive and nice-looking track & field draft. Read what we've accomplished so far, the setbacks we've faced, and our hopes for the future.</p>
                          <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
        </div>
      </div>




      {/* <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div> */}
      {/* {loading ? (
        <Spinner />
      ) : (
        <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {book.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {book.author}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {book.publishYear}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </div>
  )
}

export default Home