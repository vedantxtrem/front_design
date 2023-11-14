import React from 'react';
import Image1 from './assets/1.png';
import Image2 from './assets/ppt2.png';
import Image3 from './assets/DOC2.png';
import Image4 from './assets/excel2.png';


const Homebody = () => {
  return (
    <div className="z-10 bg-[#1e1e1e] font-mono ">
      <div className="h-fit  lg:h-screen w-full pt-16 flex flex-wrap">

        <div className="text-center self-center px-4 w-full lg:w-1/2 lg:h-[230px] lg:px-20   md:flex md:justify-center md:flex-col md:justify-between">
          <h3 className="text-5xl pt-10 mb-10 md:text-6xl font-bold pl-5 text-yellow-300 animate-bounce drop-shadow-[0_5px_5px_#ffffcf]">
            AI Files maker...
          </h3>
          <p className="w-full text-gray-300 font-bold hover:bg-[#3c3c3c] mt-6 md:mt-0 bg-[#111111] p-5 border-2 border-green-300  rounded-2xl  animate-bounce delay-150">
            AI build presentation document and Excel files Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ullam possimus asperiores sint nesciunt odio, eveniet a quidem esse excepturi optio.
          </p>

          <div className="text-white mt-10 ">
            <a href="#"
              className="ring-1 mr-2 rounded-full ml-2  bg-green-500 font-bold hover:bg-green-300 w-full px-4 py-3 ring-gray-900/10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Get started →
            </a>
          </div>

        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img
            src={Image1}
            className="hidden skew-x-3 lg:block w-[55%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            alt="robocessor image"
          />
        </div>
      </div>



      {/* Benificial section  */}
      <section className="mt-0 mx-2 py-6 ">
        <div className="w-full flex flex-wrap justify-evenly items-center">

          <div className="w-full lg:w-4/12 flex  text-center flex-col m-2">

            <div className="flex justify-center items-center"> <div className=" p-2 px-4 font-bold  text-2xl border rounded-2xl border-red-400 bg-red-400 text-white">Beneficial</div> </div>

            <div className="text-3xl font-semibold mt-6 text-red-400">
              Beneficial Elements
            </div>
            <div className="w-full mt-4 text-gray-300">An awesome & powerful tools for your business, increase business
              revenue.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo animi modi explicabo vitae beatae
              repellat molestias cupiditate earum, quam fugit neque unde voluptas illo? Quas.</div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="w-full md:w-72 p-4 m-2 flex flex-col bg-pink-300 rounded-xl hover:bg-pink-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img className="w-32" src={Image2} alt="" />
              <h2 className="text-lg font-semibold mt-4">
                Power Point Presentation
              </h2>
              <p className="mt-4">
                Productive agents are happy agents. Give them all the support tools and information
                they need to best serve your customers.
              </p>
            </div>
            <div className="w-full md:w-72 p-4 m-2 flex flex-col bg-cyan-300 rounded-xl hover:bg-cyan-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img className="w-32" src={Image3} alt="" />
              <h2 className="text-lg font-semibold mt-4">
                Document file
              </h2>
              <p className="mt-4">
                Productive agents are happy agents. Give them all the support tools and information
                they need to best serve your customers.
              </p>
            </div>
            <div className="w-full md:w-72 p-4 m-2 flex flex-col bg-green-200 rounded-xl hover:bg-green-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <img className="w-32" src={Image4} alt="" />
              <h2 className="text-lg font-semibold mt-4">
                Excel file
              </h2>
              <p className="mt-4">
                Productive agents are happy agents. Give them all the support tools and information
                they need to best serve your customers.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Homebody;
