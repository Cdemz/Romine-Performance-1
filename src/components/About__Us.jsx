import React from 'react';
import { FaDumbbell, FaUsers, FaHardHat } from 'react-icons/fa';
import ahero from '../assets/VideoCapture_20230430-191357.jpg';

const About__Us = () => {
  return (
    <div className=" ">
      {/* main container  */}
      <div className="bg-white p-6 md:p-8 flex flex-col gap-5 md:flex-row ">
        <div className="md:w-[50%] h-full">
          <h2 className="text-orange-500 text-2xl font-bold">About our gym</h2>
          <h1 className="font-extrabold py-2 text-4xl">
            SAFE BODY <br /> BUILDING
          </h1>
          <p className="text-center">
            We are a fitness center dedicated to helping our clients achieve
            their health and wellness goals. Our state-of-the-art facility
            features top-of-the-line equipment, expert trainers, and a welcoming
            and inclusive atmosphere. Whether you're a seasoned athlete or just
            starting your fitness journey, our team is here to support and guide
            you every step of the way. Come visit us and discover how we can
            help you become your best self!
          </p>
          {/* icon section  */}
          <div>
            <ul className="flex flex-col gap-8 mt-4 w-[80%]">
              {/* icon 1  */}
              <li className="flex items-center">
                <div>
                  <FaDumbbell className="mr-4 text-2xl text-orange-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    The latest and greatest gym equipment
                  </h4>
                </div>
              </li>

              {/* icon 2  */}
              <li className="flex items-center">
                <div>
                  <FaHardHat className="mr-4 text-2xl text-orange-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    5-inch, quality foam floor padding
                  </h4>
                </div>
              </li>

              {/* icon 1  */}
              <li className="flex items-center">
                <div>
                  <FaUsers className="mr-4 text-2xl text-orange-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    Certifield professional trainers
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* image container  */}
        <div className="md:w-[50%] h-[30em] ">
          <img src={ahero} alt="gym" className=" w-full h-full rounded-2xl " />
        </div>
      </div>
    </div>
  );
};

export default About__Us;
