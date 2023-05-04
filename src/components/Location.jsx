import React from 'react';

const Location = () => {
  return (
    <section class=" relative block bg-gray-900 h-full text-white" id="contact">
      <div class="container mx-auto px-4 md:pt-24 pb-20 pt-20">
        <div class="flex flex-wrap text-center justify-center md:bg-gray-900">
          <div class="w-full lg:w-3/12 px-4">
            <h2 class="text-4xl font-luckiest-guy text-red-500 font-bold uppercase">
              location
            </h2>
            <p class="text-lg leading-relaxed mt-4 mb-4">
              301 W. Waterloo Rd. Unit 225, Edmond, Oklahoma 73025
            </p>
          </div>

          <div class="w-full md:w-3/12 px-4 mb-4">
            <h2 class="text-4xl font-luckiest-guy font-bold text-red-500 uppercase">
              hours
            </h2>
            <h4 class="text-lg leading-relaxed mt-4">Mon.Wed.Fri</h4>
            <p class="mb-2">6:00, 7:30</p>

            <h4 class="text-lg leading-relaxed mt-4">Tue.Thur</h4>
            <p>6:00, 7:30</p>
          </div>

          <div class="w-full md:w-3/12 px-4">
            <h2 class="text-4xl font-luckiest-guy font-bold text-red-500 uppercase">
              contact us
            </h2>
            <h4 class="text-lg leading-relaxed mt-4">(405)315-7978</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
