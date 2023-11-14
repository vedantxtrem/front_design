import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-[#1e1e1e] z-20 fixed top-0 w-[100vw] px-4 lg:x-14 h-16 flex items-center justify-center text-gray-300 font-mono">
      <div className="flex items-center justify-between w-full">
        <img src="./assets/Logo.png" className="w-24 h-5" alt="" />
        <ul className="hidden md:flex gap-5 font-semibold">
          <li className="md:mx-2 lg:mx-2 cursor-pointer text-xl hover:bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Features
          </li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer text-xl hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Solutions
          </li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer text-xl hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Company
          </li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer text-xl hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Resources
          </li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer text-xl hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Contact
          </li>
        </ul>
        <div className="md:hidden text-3xl text-[#043A53]">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="hidden md:flex">
          <div  className="md:px-2 lg:px-6 py-[6px] bg-blue-500 text-[#12141D] rounded-xl mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-2 border-white">
             Log in
          </div>
          <div className="md:px-2 lg:px-6 py-[6px] mx-2 text-white bg-pink-400 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-2 border-white">
            Sign Up
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;