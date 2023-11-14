import React from 'react';
import Image1 from './assets/ppt1.png';

function PowerPointTemplateSelector() {
  return (
    <div className="bg-[#1e1e1e] font-mono">
      <div className="w-full h-auto flex justify-center items-center mt-10 pt-10 transition-all">
        <h2 className="text-xl md:text-3xl lg:text-5xl text-green-300 font-bold font-mono transition-colors animate-pulse border-2 p-2 rounded-lg border-green-400">
          Select your PowerPoint Template
        </h2>
      </div>

      <div className="w-[100vw] mt-5 px-4 lg:x-14 h-16 flex items-center justify-center text-gray-300">
        <div className="flex items-center justify-evenly w-full">
          <ul className="hidden md:flex gap-5 font-semibold">
            <li className="md:mx-2 lg:mx-2 cursor-pointer hover:bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Category -&gt;
            </li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer hover:bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Business
            </li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Technology
            </li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Cyber
            </li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Educational
            </li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer hover-bg-[#3c3c3c] p-2 rounded-xl hover:border-b-2 border-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Slides
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center pt-5 h-screen mt-0">
        <div className="w-11/12  md:mx-20 m-2 md:my-10 md:w-[80%] border-2 border-green-300 rounded-3xl md:h-[80%] bg-[#3c3c3c] grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-4 overflow-y-auto   p-5" >

          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>
          <a href="./Homepage.html"> <img src={Image1} className="rounded-md" alt=""/> </a>

        </div>

      </div>
    </div>
  );
}

export default PowerPointTemplateSelector;