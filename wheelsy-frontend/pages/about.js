const  About = () => {
    return (
        <div>
            <div className="px-14 pt-14 md;pb-14 bg-gray-50">
                <div className="flex flex-wrap md:px-4">
                    <div className="w-full md:w-1/2  flex justify-center items-center">
                        <img className="h-64 md:h-80 w-full md:w-full shadow-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZG2_f_iX4KPXK5lkCgOnSRBhdLnCuW89cA&usqp=CAU"   />
                    </div>
                    
                    <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:pl-16">
                        <p className="mt-4 md:mt-0 text-gray-500 uppercase w-full">About Us</p>
                        <h1 className="font-semibold text-4xl text-black py-4">Wheelsy is the best place to get your dream car</h1>
                        <p className="text-gray-700 text-opacity-75 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="py-5 my-5">
                    <div>
                        <p className="text-center text-lg font-semibold text-red-500">Wheelsy</p>
                        <h1 className="text-center font-semibold text-4xl text-black py-4">Why Choose Us</h1>
                        <p className="text-center px-12 md:px-36 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                    </div>
                    <div className="pt-8 md:pb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="flex flex-col px-16">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500 fill-current h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <h2 className="py-4 font-semibold text-lg text-black">The best price that you really expect</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="flex flex-col px-16">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500 fill-current h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <h2 className="py-4 font-semibold text-lg text-black">Support Ready 24/7 to serve you</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="flex flex-col px-16">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500 fill-current h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <h2 className="py-4 font-semibold text-lg text-black">Top brands in the world</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
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
            </div>
           
        </div>
      );
}
 
export default About;