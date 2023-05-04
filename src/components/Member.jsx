import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gym1 from '../assets/gym.jpg';

const Member = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1500, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="text-white">
      <div className="overflow-hidden md:h-[18em] h-[21em] w-full flex flex-col relative">
        {/* image */}
        <div className="">
          <img
            src={gym1}
            alt=""
            className=" w-full h-[24em] md:h-full object-fill"
          />
        </div>
        {/* the text */}
        <div className="absolute bg-black h-full bg-opacity-75 items-center justify-center text-center md:py-4 py-0 w-full">
          <h1 className="mt-10 font-bold text-lg">
            DON'T <span className="text-orange-500">THINK</span> BEGIN TODAY!
          </h1>
          <p className=" md:w-[60%] w-[80%] mx-auto my-4">
            Join our gym to access state-of-the-art equipment, certified
            personal trainers, and a variety of fitness classes. We offer
            flexible membership options and amenities such as locker rooms,
            showers, on-site childcare, and smoothie bars. Start your journey
            towards a healthier, happier you today
          </p>
          <button
            data-aos="zoom-in"
            className="px-8 py-2 bg-orange-500 rounded-lg font-bold "
          >
            BECOME A MEMBER
          </button>
        </div>
        {/* end  */}
      </div>
    </div>
  );
};

export default Member;
