import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  let location = useLocation();

  return (
    <>
    <header className='w-full h-20 flex justify-between items-center px-14 py-6 sticky top-0 bg-white'>
        <h2 className='text-2xl cursor-pointer text-[#0f6bac] font-semibold'>iNoteBook</h2>
        <nav>
            <ul>
                <li className={`text-lg inline-block px-4 hover:border-b-[1px] transition-all duration-150 hover:border-black ${location.pathname==="/" ? "font-bold" : ""}`}>
                  <Link to='/'>Home</Link>
                  </li>
                <li className={`text-lg inline-block px-4 hover:border-b-[1px] transition-all duration-150 hover:border-black ${location.pathname==="/about" ? "font-bold" : ""}`}>
                  <Link to='/about'>About</Link>
                  </li>
                <li className={`text-lg inline-block px-4 hover:border-b-[1px] transition-all duration-150 hover:border-black ${location.pathname==="/contact" ? "font-bold" : ""}`}>
                  <Link to='/contact'>Contact</Link>
                  </li>
            </ul>
        </nav>
        <Link to='/'><button className='px-6 py-2 bg-[#0f6bac] text-white font-semibold rounded-lg hover:bg-[#0f6bacc6] transition-all duration-150 focus:ring-4 focus:ring-[#0f6bac6a]'>Login</button></Link>
    </header>
        <hr className='text-base'></hr>
    </>
  )
}

export default Navbar