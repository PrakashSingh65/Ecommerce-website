import React from 'react'

const Header = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};

const navbar = () => {
  return (
    <div>
        <Header className="bg-white">
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

                <div>
                    <a href="#">
                        
                    </a>
                </div>
            </nav>
        </Header>
    </div>
  )
}

export default navbar