
import React, { useState } from "react";
import Link from 'next/link'


export default function Home() {
 
  return (
    <body className="flex flex-col min-h-screen">
      <main className="flex-auto">
        {/* <div className="w-full h-auto bg-gray-700 grid grid-rows-2 md:grid-cols-2">
            <div className="flex flex-col md:mt-10  p-4">
              <p className="text-white font-bold md:font-sans md:text-2xl">Research. Compare. Find What's Right for You.</p>
              <p className="text-gray-300 md:text-justify">Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.</p>
            </div>
            <div className="">
              <img className="h-full object-cover" src="https://image.freepik.com/free-photo/front-view-generic-brandless-moder-car_110488-502.jpg"/>
            </div>
        </div> */}
        <div class="flex flex-wrap overflow-hidden bg-black">

          <div class="w-full md:w-1/2  md:h-auto overflow-hidden md:mt-12 p-4">
              <p className="text-white font-bold md:font-sans md:text-2xl mb-2">Research. Compare. Find What's Right for You.</p>
              <p className="text-gray-300 md:text-justify">Use our extensive database to research and compare trims, photos, and reviews for every make and model, so you can find the car that fits your life.</p>
              <button class="mt-4 md:mt-10 bg-white hover:bg-gray-100 text-red-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center">
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
        <div className="bg-yellow-300">

        </div>
      </main>
    </body>
  )
}



