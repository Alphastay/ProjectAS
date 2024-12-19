import React, { createContext,  useEffect, useState } from 'react';
import { menu_list } from '../assets/assets';
import axios from "axios";

export const HotelContext = createContext(null);
export const HotelContextProvider = (props) => {

const[hotel_list,setHotelList]=useState([]);

const url='https://alphastay.vercel.app/';

const fetchHotelList=async()=>{
  const response=await axios.get(`${url}/api/AlphaStay/hotels`);
  const data=response.data;
  setHotelList(data);
}


useEffect(()=>{
  fetchHotelList();
},[])

  const contextValue={
    menu_list,
    hotel_list,
    url,
    setHotelList,
    fetchHotelList,
  };

  return (
    <HotelContext.Provider value={contextValue}>
      {props.children}
    </HotelContext.Provider>
  );
};

export default HotelContextProvider;

