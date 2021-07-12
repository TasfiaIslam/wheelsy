
import React, { useState } from "react";
import Link from 'next/link'


export default function Home() {
 
  return (
    <body className="flex flex-col min-h-screen">
      <main className="flex-auto">

        {/* 1st div */}
        <div className="bg-black">
          <div className="md:w-11/12 mx-auto flex flex-wrap overflow-hidden">
            <div className="w-full md:w-1/2  md:h-auto overflow-hidden md:mt-12 p-4">
                <p className="text-white font-bold md:font-sans text-xl md:text-4xl mb-8">Research. Compare. Find What's Right for You.</p>
                <p className="text-gray-300 md:text-justify">Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.</p>
                <div className="mt-8">
                  <span className="text-gray-300 text-xs">Starting from</span>
                  <h3 className="text-white text-xl font-bold">$ 599.999</h3>
                </div>
                <button class="mt-8 bg-white hover:bg-gray-100 text-red-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
                  <span>Discover More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
            </div>
            <div class="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img className="h-full object-cover" src="https://image.freepik.com/free-photo/front-view-generic-brandless-moder-car_110488-502.jpg"/>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="bg-gray-900">
          <div className="md:w-11/12 mx-auto md:grid md:grid-flow-col md:gap-4 md:justify-center md:items-center md:p-4 md:h-48">
              <div className="p-4 md:p-0">
                <p className="md:my-8 text-white text-2xl font-bold">Great Muscle Car</p>
                <p className="text-gray-300 md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue placerat tempus. Suspendisse eget ante eu nulla accumsan pulvinar sed quis ante.</p>
              </div>
              <div className="p-4 md:p-0">
                <p className="md:my-8 text-white text-2xl font-bold">Classic Stylish</p>
                <p className="mb-2 text-gray-300 md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue placerat tempus. Suspendisse eget ante eu nulla accumsan pulvinar sed quis ante.</p>
              </div>
          </div>
        </div>

        {/* 3rd div */}
        <div className="">
          <div className="md:w-11/12 mx-auto  md:py-14 flex flex-wrap">
              <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:pr-16 pb-4 md:pb-0">
                  <p className="mt-2 md:mt-0 text-gray-500 uppercase w-full">About Us</p>
                  <h1 className="py-4 text-xl md:text-2xl font-bold md:font-sans text-black">Wheelsy is the best place to get your dream car</h1>
                  <p className="text-gray-700 text-opacity-75 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <div className="w-full md:w-1/2  flex justify-center items-center">
                  <img className="h-64 md:h-80 w-full shadow-lg object-cover" src="https://image.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg"   />
              </div>
          </div>
        </div>

        {/* 4th div - Our Vendor */}
        <div className="p-4 text-center bg-gray-50">
          <p className="text-xl font-bold mb-4 md:mb-8">Our vendor</p>
          <ul className="text-gray-700 text-opacity-75 uppercase md:inline-flex md:space-x-4 md:mb-8">
            <li>Hondo</li>
            <li>Fort</li>
            <li>Toyoto</li>
            <li>Porce</li>
            <li>Mustibisha</li>
            <li>Dastin</li>
            <li>Sizuka</li>
          </ul>
        </div>

        {/* 5th div - Get your fav car */}
        <div className="p-4 flex flex-col justify-center items-center">
          <h3 className="text-xl md:text-2xl font-bold">Get your favorite car with us</h3>
          <p className="my-2 md:my-4 md:w-2/5 text-gray-700 text-opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue placerat tempus. Suspendisse eget ante eu nulla accumsan pulvinar sed quis ante.</p>
          <img className="w-full md:w-5/12 object-cover" src="https://image.freepik.com/free-photo/grey-blue-cars-put-each-other-cloudy-sky_181624-16862.jpg"/>
        </div>

      </main>
    </body>
  )
}



