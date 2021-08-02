
import React, { useState } from "react";
import CarList from "../../components/CarList"

export default function Cars() {
  const [name, setNameQuery] = useState("");
  const [minPrice, setMinPriceQuery] = useState(20000);
  const [maxPrice, setMaxPriceQuery] = useState(60000);
  const [searchData, setSearchData] = useState({name,minPrice,maxPrice});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, minPrice, maxPrice };
    setSearchData(data);
  }

  return (
    <div className="p-4 ml-5">
        {/* searchbar start */}
        <div className="p-2 bg-gray-50">
          <form onSubmit={handleSubmit} className="flex flex-row space-x-4">
            <div class="p-2 w-1/4">
              <div class="bg-white flex items-center rounded-full shadow-md">
                <input class="rounded-l-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search Cars"
                onChange={e => setNameQuery(e.target.value.toLocaleLowerCase())}
                value={name}/>
                <div class="p-2">
                  <div class="focus:outline-none flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>  
            </div>
            <select 
                onChange={(e) => {setMinPriceQuery(parseFloat(e.target.value));}}
                value={minPrice}
                className="w-32 h-1/3 my-auto p-2 rounded-full focus:outline-none"
                aria-label="Min Price"
              >
                <option value="20000">Min Price</option>
                <option value="30000">$30,000</option>
                <option value="40000">$40,000</option>
            </select>
            <select 
                onChange={(e) => {setMaxPriceQuery(parseFloat(e.target.value));}}
                value={maxPrice}
                className="w-32 h-1/3 my-auto p-2 rounded-full focus:outline-none"
                aria-label="Max Price"
              >
                <option value="60000">Max Price</option>
                <option value="30000">$30,000</option>
                <option value="40000">$40,000</option>
            </select>
            <button className="w-24 h-1/3 my-auto p-2 bg-gray-900 hover:bg-gray-500 text-white font-semibold rounded-full focus:outline-none" type="submit">Find</button>
        </form>
       </div>
       {/* searchbar end */}
      <CarList searchData={searchData} />     
    </div>
  )
}



