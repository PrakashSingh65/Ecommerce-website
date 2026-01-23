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
        <Header>
            <nav className='flex'>
                <a href="#">
                    Your<span>C</span>ompanay
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