import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TbMenu2 } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { TbMenu3 } from "react-icons/tb";

const Header = ({ children, className }) => {
  return (
    <header className={className}>
      {children}
    </header>
  );
};

const Navbar = () => {

    const[showMenu, setShowMenu]=useState(false);
    const toggleMenu= () => {
        
        setShowMenu(!showMenu);
    }
  return (
    <div>
        <Header className="bg-white fixed top-0 right-0 left-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,.9)]">
            <nav className='max-w-350 mx-auto px-10 h-[15vh] flex justify-between items-center'>
                <a href="#" className='text-3xl font-bold'>
                    Your<span className='text-green-400 uppercase'>C</span>ompanay
                </a>

                <ul className={`md:flex items-center gap-x-15 absolute md:static top-[15vh] left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row w-full md:w-auto px-10 md:px-0 transition-all duration-300 ${showMenu ? 'flex' : 'hidden md:flex'}`}>
                    <li className='py-3 md:py-0'>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-green-400'>Home</a>        
                    </li>
                    <li className='py-3 md:py-0'>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-red-700'>About Us</a>        
                    </li>
                    <li className='py-3 md:py-0'>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-yellow-700'>Process</a>        
                    </li>
                <li className='py-3 md:py-0'>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-green-400'>Contect Us</a>        
                    </li>
                    <li className='py-3 md:py-0'>
                        <Link to="/login" className='bg-green-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-600 transition-all'>
                            Login
                        </Link>
                    </li>
                </ul>

                    <div className='hidden md:flex p-1 border-2 border-green-500 rounded-full'>
                        <input type="text" name="text" id="text" placeholder='search...' autoComlete='off' 
                        className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                        <button className='bg-linear-to-b from-red-600 to-green-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'>
                            <IoSearch />
                        </button>
                    </div>
                    <button onClick={toggleMenu} className='md:hidden text-zinc-800 text-2xl'>
                        {showMenu ? <TbMenu2/> :<TbMenu3 />}
                    </button>
            </nav>
        </Header>
    </div>
  )
}

export default Navbar