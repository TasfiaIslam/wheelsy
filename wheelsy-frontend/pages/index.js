
import React, { useState } from "react";
import Link from 'next/link'


export default function Home() {
 
  return (
    <body className="flex flex-col min-h-screen">
      <main className="flex-auto">
        {/* 1st div */}
        <div class="flex flex-wrap overflow-hidden bg-black">

          <div class="w-full md:w-1/2  md:h-auto overflow-hidden md:mt-12 p-4">
              <p className="text-white font-bold md:font-sans text-xl md:text-2xl mb-2">Research. Compare. Find What's Right for You.</p>
              <p className="text-gray-300 md:text-justify">Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.</p>
              <div className="mt-4">
                <span className="text-gray-300 text-xs">Starting from</span>
                <h3 className="text-white text-lg font-bold">$ 599.999</h3>
              </div>
              <button class="mt-4 bg-white hover:bg-gray-100 text-red-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
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

        {/* 2nd div */}
        <div className="bg-gray-800 md:grid md:grid-flow-col md:gap-4 md:justify-center md:items-center md:p-4 md:h-48">
            <div className="p-4 md:p-0">
              <p className="md:my-2 text-white text-lg font-bold">Great Muscle Car</p>
              <p className="text-gray-300 md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue placerat tempus. Suspendisse eget ante eu nulla accumsan pulvinar sed quis ante.</p>
            </div>
            <div className="p-4 md:p-0">
              <p className="md:my-2 text-white text-lg font-bold">Classic Stylish</p>
              <p className="mb-2 text-gray-300 md:leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue placerat tempus. Suspendisse eget ante eu nulla accumsan pulvinar sed quis ante.</p>
            </div>
        </div>

        {/* 3rd div */}
        <div className="px-12 md:px-14 md:py-14 flex flex-wrap">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:pr-16 pb-4 md:pb-0">
                <p className="text-gray-500 uppercase w-full">About Us</p>
                <h1 className="font-semibold text-4xl text-black py-4">Wheelsy is the best place to get your dream car</h1>
                <p className="text-gray-700 text-opacity-75 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="w-full md:w-1/2  flex justify-center items-center">
                <img className="h-80 w-full md:w-full shadow-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn94mjwfKc2LlgNtN9zy5QKaghdPKDmu4Lzw&usqp=CAU"   />
            </div>
        </div>

        {/* 4th div - Our Vendor */}
        <div>
          <p>Our vendor</p>
          <ul>
            <li>Hondo</li>
            <li>Fort</li>
            <li>Toyoto</li>
            <li>Porce</li>
            <li>Mustibisha</li>
            <li>Dastin</li>
            <li>Sizuka</li>
          </ul>
        </div>

      </main>
    </body>
  )
}



