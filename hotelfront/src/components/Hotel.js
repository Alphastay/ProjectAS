import React, { useContext,useState } from 'react'
import { HotelContext } from '../Context/HotelContext';
import "../styles/Hotel.css";
import Hotel1 from "../assets/hotel2.jpg";
import {Link} from "react-router-dom";

function Hotel({ id, name, price, rating,description, images, onViewDetails }) {

const {url} =useContext(HotelContext);
  return (
    <section className='box'>
    <section className="hotel_container">
      <div className="popular_grid">
        <div className="popular_card">
             <div className="image-gallery">
           // {images && images.length > 0 ? (
           //      <img
           //        src={`https://alphastay.vercel.app/images/${images[0].split('/').pop()}`} 
           //        alt={`Hotel ${name} Main Image`}
           //        className="hotel-image"
           //      />
           //    ) : (
           //      <img
           //        src={Hotel1} 
           //        alt="Default Hotel"
           //        className="hotel-image"
           //      />
           //    )}

    <img
                src={Hotel1} // Always uses the local placeholder image
                alt={`Hotel ${name} Dummy Image`}
                className="hotel-image"
              />
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
