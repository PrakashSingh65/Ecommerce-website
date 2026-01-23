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
                    Your<span className='text-green-400'>C</span>ompanay
                </a>

                <ul className='flex'>
                    <li>
                        <a href="#">Home</a>        
                    </li>
                    <li>
                        <a href="#">About Us</a>        
                    </li>
                    <li>
                        <a href="#">Process</a>        
                    </li>
                    <li>
                        <a href="#">Contect Us</a>        
                    </li>
                </ul>
            </nav>
        </Header>
    </div>
  )
}

export default navbar