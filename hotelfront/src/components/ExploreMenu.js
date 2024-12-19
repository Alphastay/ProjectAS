import React, { useContext } from 'react'
import "../styles/ExploreMenu.css";
import axios from "axios"
import {HotelContext} from "../Context/HotelContext";

function ExploreMenu({category,setCategory}) {
  const {menu_list, setHotelList,fetchHotelList}=useContext(HotelContext) || {menu_list:[]}

  const searchHandler = async (event) => {
    event.preventDefault();
    let key = event.target.elements.searchInput.value;
    if (key) {
      let result = await axios.get(`http://localhost:4000/api/search/${key}`);
      const data = result.data;
      if (data) {
        setHotelList(data);
      }
    } else {
      fetchHotelList();
    }
  };

  return (
    <div className='explore-menu explore-menu-container' id="explore-menu">
     <div className="explore_image_container">
      <div className="exploreHeader_content">
        <h1>Welcome To Alpha Stay!</h1>
        <p>Book Verified Hotels, Rooms and stay packages at lowest price.</p>
      </div>
  
      <form className="search_container" onSubmit={searchHandler}>
        <input type="text" id="searchInput" name="searchInput" placeholder="Search hotels manually by name..." />
        <button type="submit">Search</button>
      </form>
    </div>
    <div className='explore-menu-list'>
      {menu_list && menu_list.map((item, index) => {
        return (
          <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
            <p  className={category === item.menu_name ? "active" : ""} >{item.menu_name}</p>
          </div>
        )
      })}
    </div>
    <hr />
  </div>
  )
}

export default ExploreMenu