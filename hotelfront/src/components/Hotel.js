import React, { useContext,useState } from 'react'
import { HotelContext } from '../Context/HotelContext';
import "../styles/Hotel.css";
import {Link} from "react-router-dom";

function Hotel({ id, name, price, rating,description, images, onViewDetails }) {

const {url} =useContext(HotelContext);
  return (
    <section className='box'>
    <section className="hotel_container">
      <div className="popular_grid">
        <div className="popular_card">
             <div className="image-gallery">
           {images && images.length > 0 ? (
                <img
                  src={`${url}/images/${images[0].split('/').pop()}`} 
                  alt={`Hotel ${name} Main Image`}
                  className="hotel-image"
                />
              ) : (
                <img
                  src={`${url}/images/default-hotel.jpg`} 
                  alt="Default Hotel"
                  className="hotel-image"
                />
              )}
            </div>
          <div className="popular_content">
            <div className="popular_card_header">
              <h4>{name}</h4>
              <h4>Rs.{price}</h4>
            </div>
            <p>{description}</p>
            <p>{rating}</p>
            <Link to={`/hotel_details/${id}`}>
            <button  className="hotelButton" onClick={onViewDetails}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
    </section>
  )
}

export default Hotel
