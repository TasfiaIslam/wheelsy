
import React, { useState } from "react";
import Link from 'next/link'
import CarList from "../components/CarList"

export default function Home() {
  const [query, updateQuery] = useState("");
  return (
    <div className="p-4 ml-5">
      <div className="search">
        <input onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                value={query} />
      </div>
      <CarList search={query} />
      <h1 className="text-3xl text-gray-500 my-4 text-center">Homepage</h1>
      <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      <Link href="/cars">
        <a className="border-yellow-400">See Car Listing</a>
      </Link>      
    </div>
  )
}



