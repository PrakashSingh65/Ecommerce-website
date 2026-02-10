import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbMenu2, TbMenuDeep } from "react-icons/tb";
import { IoSearch, IoCartOutline } from "react-icons/io5";

const Header = ({ children, className }) => {
  return (
    <header className={className}>
      {children}
    </header>
  );
};

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
        <Header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
            <nav className='max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[10vh]'>
                {/* Logo */}
                <Link to="/" className='text-3xl font-extrabold tracking-tight text-slate-900'>
                    Your<span className='text-green-500'>Shop</span>
                </Link>

                {/* Desktop Menu */}
                <ul className={`md:flex items-center gap-8 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row w-full md:w-auto px-6 md:px-0 py-6 md:py-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${showMenu ? 'flex translate-y-0 opacity-100' : 'hidden md:flex'}`}>
                    {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                         <li key={item} className='py-2 md:py-0'>
                            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className='font-medium text-slate-600 hover:text-green-500 transition-colors relative group'>
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                    
                    {/* Mobile Only Actions */}
                     <li className='md:hidden mt-4 flex flex-col gap-4'>
                        <Link to="/login" className='bg-green-500 text-center text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30'>
                            Login
                        </Link>
                     </li>
                </ul>

                {/* Actions */}
                <div className='flex items-center gap-4'>
                    {/* Search Desktop */}
                    <div className='hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-green-500/50 transition-all'>
                        <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none w-32 focus:w-48 transition-all text-sm text-slate-700 placeholder:text-slate-400'/>
                        <IoSearch className='text-slate-500 text-lg cursor-pointer hover:text-green-500 transition-colors'/>
                    </div>

                    {/* Cart Icon */}
                    <Link to="/cart" className='relative p-2 text-slate-700 hover:text-green-500 transition-colors'>
                        <IoCartOutline className='text-2xl' />
                        <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white'>3</span>
                    </Link>

                     {/* Login Desktop */}
                     <Link to="/login" className='hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
                        Login
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button onClick={toggleMenu} className='md:hidden text-slate-800 text-2xl p-1'>
                        {showMenu ? <TbMenuDeep/> : <TbMenu2 />}
                    </button>
                </div>
            </nav>
        </Header>
        {/* Spacer for fixed header */}
        <div className="h-[12vh]"></div>
    </>
  )
}

export default Navbar