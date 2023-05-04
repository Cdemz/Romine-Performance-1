import React from 'react';
import Typed from 'react-typed';
import girl from '../assets/20230430_192918.png';

const Hero = () => {
  return (
    <div className="bg-black  text-white ">
      <div className=" relative">
        <div className=" max-w-[100%]  w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <img
            className="w-full h-full object-cover"
            src={girl}
            alt="20230430_192918"
          />
        </div>
        <div className=" max-w-[100%] w-full h-screen mx-auto text-center flex flex-col justify-center absolute z-10 top-0 bg-black bg-opacity-50">
          <p className="text-orange-500 font-bold  uppercase">
            join rOMINE PERFORMANCE today!.
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 ">
            Grow with data.
          </h1>
          <div className="md:texl-5xl sm-text-4xl text-xl font-bold flex gap-1 justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text=xl font-bold">
              Top-of-the-
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text=xl font-bold uppercase md:p-4 pl-2"
              strings={['line equipment', 'expert trainers', 'gym culture ']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-400">
            Download our complete brochure to get started today!.
          </p>

          <button className="bg-orange-500 w-[9rem] rounded-md font-medium my-6 mx-auto py-3 hover:bg-transparent hover:border-orange-500 hover:border hover:text-orange-500 text-black ">
            DOWNlOAD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
