import React, { useState } from 'react'
import ExploreMenu from '../components/ExploreMenu'
import HotelView from "../components/HotelView";
import Login from "../components/Login";
import HotelDetails from '../components/HotelDetails';


function Home() {
 const [category,setCategory]=useState("All")

  return (
    <>
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <HotelView category={category}/>
     
    </div>
    
    </>
  )
}

export default Home