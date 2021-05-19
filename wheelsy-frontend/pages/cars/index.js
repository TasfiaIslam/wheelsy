
import React, { useState } from "react";
import Link from 'next/link'
import CarList from "../../components/CarList"

export default function Cars() {
  const [query, updateQuery] = useState("");
  return (
    <div className="p-4 ml-5">
      <CarList search={query} />     
    </div>
  )
}



