import React, { useContext, useState } from "react";
import "../styles/HotelView.css";
import { HotelContext } from "../Context/HotelContext";
import Hotel from "./Hotel";
import HotelDetails from "./HotelDetails";
import axios from "axios";

function HotelView({ category }) {
  const { hotel_list, url, setHotelList, fetchHotelList, filteredHotels } =
    useContext(HotelContext);
  const [selectedRental, setSelectedRental] = useState(null);

  const handleViewDetails = (rental) => {
    setSelectedRental(rental);
  };

  // const searchHandler = async (event) => {
  //   event.preventDefault();
  //   let key = event.target.elements.searchInput.value;
  //   if (key) {
  //     let result = await axios.get(`https://alphastay.vercel.app/api/search/${key}`);
  //     const data = result.data;
  //     if (data) {
  //       setHotelList(data);
  //     }
  //   } else {
  //     fetchHotelList();
  //   }
  // };

  return (
    <section className="hotelview" id="hotelview">
      <div class="hotelview_container">
    
  </div>
      <h2 className="hotelview_header" align="center">
       Popular Hotels
      </h2>
     
      <div className="hotel-display-list">
        {hotel_list.map((item) => {
          if (category === "All" || category === item.locality) {
            return (
              <Hotel
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                rating={item.averageRating}
                image={item.image}
                onViewDetails={handleViewDetails}
              />
            );
          }
          return null;
        })}
      </div>
      {selectedRental && (
        <HotelDetails
          id={selectedRental._id}
          name={selectedRental.name}
          description={selectedRental.description}
          contact={selectedRental.contact}
          map={selectedRental.ma}
          price={selectedRental.price}
          amenities={selectedRental.amenities}
          bed={selectedRental.bed}
          image={selectedRental.image}
          url={url}
        />
      )}
    </section>
  );
}

export default HotelView;
