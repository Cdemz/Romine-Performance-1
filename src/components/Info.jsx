import React from 'react';

const Info = () => {
  return (
    <div>
      contact
      <section class="pb-20 relative block bg-gray-500 text-white">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"></div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold  uppercase">Contact Us</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4">
                Contact us to ask any questions, aquire a membership, talk to
                our trainers or anything else.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact form -->  */}
      <section class="relative block py-24 lg:pt-0 bg-gray-500">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                data-aos="fade-up-right"
              >
                <div class="flex-auto p-5 lg:p-10 bg-orange-500 text-white">
                  <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                  <p class="leading-relaxed mt-1 mb-4">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-xs font-bold mb-2"
                      for="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase t text-xs font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-xs font-bold mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-black text-orange-500 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
