import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo/logo.png';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('');
  const menuToggle = () => { headerClass === 'open' ? setHeaderClass('') : setHeaderClass('open'); }

  return (
    <header className={ headerClass }>
      <nav className="bg-white w-full z-20  start-0">
      <div className="bg-gray-200 py-2 w-full md:flex z-20 top-0 start-0  hidden" >
    
        <div className="items-center max-[600px]:justify-end  sm:flex justify-start mx-7 md:flex ">
          <ul className="flex flex-row max-[600px]:justify-end sm:justify-start p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-200 md:space-x-8 md:flex-row md:mt-0  md:bg-gray-200">
            <li>
              <a href="#" className="block py-2 px-3 text-green-700  hover:text-gray-700  rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-700" aria-current="page">تلامس</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700  hover:text-gray-700  rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-700" aria-current="page">تلامس</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الخدمات</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
            </li>
          </ul>
        </div>
        </div>
    
    
      <div className="max-w-screen-xl flex flex-row-reverse items-end sm:justify-end mx-auto pt-10 pb-4">
        
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <div className="absolute max-[600px]:left-5 sm:right-5 flex items-center z-40 pt-12 pb-8 px-8 top-0  rounded-br-3xl  rounded-bl-3xl justify-center bg-gray-50">
          <img src={logo} className="h-28" alt="Flowbite Logo"/>
          
        </div> 
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 ltr:space-x-reverse  max-[600px]:right-5">
          <button type="button" 
          className="text-white max-[600px]:hidden bg-gradient-to-r from-green-400 to-amber-500 hover:from-amber-500 hover:to-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-lg px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          تبدأ لنا لي</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className="items-end justify-between max-[600px]:z-50  hidden max-[600px]:w-11/12 sm:w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

        <div className="bg-gray-200 py-2 w-full flex z-20 top-0 start-0  sm:hidden" >
    
          <div className="items-center max-[600px]:justify-end flex max-[600px]:flex-wrap justify-start sm:mx-7 ">
            <ul className="flex flex-wrap flex-row max-[600px]:justify-end sm:justify-start p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-200 md:space-x-8 md:flex-row md:mt-0  md:bg-gray-200">
              <li>
                <a href="#" className="block py-2 px-3 text-green-700  hover:text-gray-700  rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-700" aria-current="page">تلامس</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-green-700  hover:text-gray-700  rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-700" aria-current="page">تلامس</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الخدمات</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
              </li>
            </ul>
          </div>
          </div>
        
        <ul className="flex flex-col flex-wrap items-end p-4 md:p-0 sm:mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
          <li>
            <a href="#" className="block py-2 px-3 text-green-700  hover:text-gray-700  rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-700" aria-current="page">تلامس</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-green-700  hover:text-gray-700  rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-700" aria-current="page">تلامس</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الخدمات</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-green-700 rounded hover:text-gray-700 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">الصفحة الرئيسية</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>    



    </header>
  )
};

export default Header;