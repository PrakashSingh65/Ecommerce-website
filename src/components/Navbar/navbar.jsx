import React from 'react'
import { AiFillDatabase } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

const Header = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};

const Navbar = () => {
  return (
    <div>
        <Header className='bg-white fixed top-0 right-0 left-0'>
            <nav className='max-w-[1400px] mx-auto px-10 h-[15vh] flex justify-between items-center'>
                <a href="#" className='text-3xl font-bold'>
                    Your<span className='text-green-400 uppercase'>C</span>ompanay
                </a>

                <ul className='flex items-center gap-x-15'>
                    <li>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-green-400'>Home</a>        
                    </li>
                    <li>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-red-700'>About Us</a>        
                    </li>
                    <li>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-yellow-700'>Process</a>        
                    </li>
                    <li>
                        <a href="#" className='font-semibold traking-wider text-zinc-700 hover:text-green-400'>Contect Us</a>        
                    </li>
                </ul>

                    <div className='flex p-1 border-2 border-green-500 rounded-full'>
                        <input type="text" name="text" id="text" placeholder='search...' autoComlete='off' 
                        className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                        <button className='bg-gradient-to-b from-red-600 to-green-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl'>
                            <IoSearch />
                        </button>
                    </div>
                    <a href="#" className='text-zince-800 text-2xl md:hidden'>
                        <AiFillDatabase />
                    </a>
            </nav>
        </Header>
    </div>
  )
}

export default Navbar