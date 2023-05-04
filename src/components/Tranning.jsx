import React from 'react';
import video1 from '../assets/video.jpg';
import video2 from '../assets/video 2.jpg';
import video3 from '../assets/video 3.jpg';
import video4 from '../assets/video 4.jpg';

const Tranning = () => {
  return (
    <div className="text-white p-6 md:p-8 flex flex-col items-center md:flex-row md:gap-0 gap-4">
      {/* main div  */}

      {/* first div  */}
      <div className=" flex flex-col gap-6 md:w-[50%] md:gap-10 md:top-[-2.7em] md:relative md:px-4">
        <h1 className="text-4xl font-bold">
          {' '}
          Training <span className="text-orange-500">Video</span>
        </h1>
        <h5>
          Here you'll find a wide variety of fitness videos that cater to
          different levels of experience and fitness goals. Our expert trainers
          have carefully designed each workout to help you get the most out of
          your gym sessions and achieve your fitness goals faster. <br /> Our
          video library includes everything from high-intensity interval
          training (HIIT) to strength training, yoga, and Pilates. Whether
          you're looking to build muscle, lose weight, improve flexibility or
          simply want to incorporate some exercise into your daily routine,
          we've got you covered.
        </h5>
        <a
          href="https://instagram.com/romine_fitness?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <button className="bg-orange-500 px-4 py-2 font-semibold rounded-lg">
            View More
          </button>
        </a>
      </div>
      {/* second div  */}
      <div className="md:w-[50%] flex flex-wrap ">
        <img src={video1} alt="" class="w-[50%] sm:w-[50%] p-4" />
        <img src={video2} alt="" class="w-[50%] sm:w-[50%] p-4" />
        <img src={video3} alt="" class="w-[50%] sm:w-[50%] p-4" />
        <img src={video4} alt="" class="w-[50%] sm:w-[50%] p-4" />
      </div>
    </div>
  );
};

export default Tranning;
