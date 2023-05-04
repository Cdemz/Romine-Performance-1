import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/img1_634x951.jpg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3_634x951.jpg';
import img4 from '../assets/img-4.jpeg';

const Programs = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1500, once: false });
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* parent div */}
      <div className=" bg-white flex flex-col items-center text-center justify-center ">
        {/* choose program */}
        <div className=" flex flex-col items-center text-center justify-center w-[80%] md:w-[55%] gap-1 my-8">
          <h1 className="font-extrabold">
            CHOOSE <span className="text-orange-500">PROGRAM</span>{' '}
          </h1>
          <p>
            Our programs are designed by experienced trainers and are suitable
            for all fitness levels, whether you are a beginner or an experienced
            athlete.
          </p>
        </div>

        {/* the program */}
        <div className="flex md:flex-row flex-col px-10">
          {/* program 1 */}
          <div className=" flex flex-col items-center text-center justify-center md:justify-between w-[ 70%] md:w-[30%] gap-1 mx-auto my-4 ">
            <img
              data-aos="flip-right"
              src={img4}
              alt="fit-personnel"
              className="object-contain w-full h-full md:w-[12em]"
            />
            <h1 className="font-extrabold">CrossFit</h1>
            <p>
              High-intensity workout program that combines elements of
              weightlifting, gymnastics, and cardio exercises.
            </p>
            <button className="bg-orange-500 py-1 px-10 rounded-[10em] text-white">
              Register
            </button>
          </div>

          {/* program 2 */}
          <div className=" flex flex-col items-center text-center justify-center md:justify-between w-[ 70%] md:w-[30%] gap-1 mx-auto my-4 ">
            <img
              data-aos="flip-right"
              src={img2}
              alt="fit-personnel"
              className="object-contain w-full h-full md:w-[12em]"
            />
            <h1 className="font-extrabold">Strength Training</h1>
            <p>
              It involves using resistance, such as weights or resistance bands,
              to challenge the muscles and promote growth. Help's improve
              overall fitness.
            </p>
            <button className="bg-orange-500 py-1 px-10 rounded-[10em] text-white">
              Register
            </button>
          </div>

          {/* program 3 */}
          <div className=" flex flex-col items-center text-center justify-center md:justify-between w-[ 70%] md:w-[30%] gap-1 mx-auto my-4 ">
            <img
              data-aos="flip-right"
              src={img3}
              alt="fit-personnel"
              className="object-contain w-full h-full md:w-[12em]"
            />
            <h1 className="font-extrabold">Yoga</h1>
            <p>
              It is an excellent option for reducing stress,improve flexibility,
              balance, promoting relaxation, and improving overall well-being.
            </p>
            <button className="bg-orange-500 py-1 px-10 rounded-[10em] text-white">
              Register
            </button>
          </div>

          {/* program 4 */}
          <div className=" flex flex-col items-center text-center justify-center md:justify-between w-[ 70%] md:w-[30%] gap-1 mx-auto my-4 ">
            <img
              data-aos="flip-right"
              src={img1}
              alt="fit-personnel"
              className="object-contain w-full h-full md:w-[12em]"
            />
            <h1 className="font-extrabold">CrossFit</h1>
            <p>
              It involves using resistance, such as weights or resistance bands,
              to challenge the muscles and promote growth. Help's improve
              overall fitness.
            </p>
            <button className="bg-orange-500 py-1 px-10 rounded-[10em] text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
