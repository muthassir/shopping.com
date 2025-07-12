import React from 'react';
import cart from '../assets/bag-4-svgrepo-com 1.svg';
import heart from '../assets/heart-svgrepo-com (1) 1.svg';
import person from '../assets/person 1.svg';

const Header = () => {
  return (
    <header className='flex justify-between items-center py-6 px-4 lg:px-20 bg-[#EFF5E1] w-full text-[#2d3b36]'>

      {/* Logo - always visible */}
      <h1 className='text-xl lg:text-2xl'>SKINCARE</h1>

      {/* Navigation - only visible on medium and larger screens */}
      <nav className='hidden sm:block'>
        <ul className='flex gap-6 text-sm sm:text-base'>
          <li>All Products</li>
          <li>Serum</li>
          <li>Sunscreen</li>
          <li>Bundle</li>
        </ul>
      </nav>

      {/* Icons - always visible */}
      <div className='flex items-center gap-4'>
        <button className='btn lg:h-12 h-10 lg:w-12 w-10 bg-[#EFF5E1]'><img src={cart} alt="cart" /></button>
        <p className='hidden sm:block text-sm'>Cart (1)</p>
        <button className='btn lg:h-12 h-10 lg:w-12 w-10 bg-[#EFF5E1]'><img src={heart} alt="heart" /></button>
        <button className='btn lg:h-12 h-10 lg:w-12 w-10 bg-[#EFF5E1]'><img src={person} alt="person" /></button>
      </div>

    </header>
  );
};

export default Header;
