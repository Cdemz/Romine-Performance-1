import React, { useRef, useEffect, useState } from 'react';
import logo1 from '../assets/logo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="z-20 bg-black flex justify-between items-center text-white h-24 max-w-[1240px] mx-auto  ">
      <div className="z-20 fixed flex justify-between items-center bg-black w-full max-w-[1240px] mx-auto h-24 ">
        <div class="text-white flex items-center px-2 ">
          <img src={logo1} alt="company-logo" class="h-12" />
          <h2 class="font-raleway font-bold">ROMINE PERFORMANCE</h2>
        </div>
        <ul class="uppercase md:flex hidden mr-4">
          <li className="p-4">home</li>
          <li className="p-4">classes</li>
          <li className="p-4">about</li>
          <li className="p-4">schedules</li>
          <li className="p-4">contact</li>
        </ul>
        <div
          onClick={handleNav}
          className="md:hidden font-bold text-orange-500 mr-4 "
        >
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? 'fixed right-0 top-[5rem] w-[60%] rounded border-r border-r-gray-900  bg-black ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <ul class="uppercase p-4 text-center">
            {' '}
            <li className="p-4 border-b border-gray-600">home</li>
            <li className="p-4 border-b border-gray-600">classes</li>
            <li className="p-4 border-b border-gray-600">about</li>
            <li className="p-4 border-b border-gray-600">schedules</li>
            <li className="p-4">contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
