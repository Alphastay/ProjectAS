import Geyser from "../assets/hot.png";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import HotelReview from "./HotelReview";
import { HotelContext } from "../Context/HotelContext";
import "../styles/HotelDetails.css";

function HotelDetails({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };
  const { hotelId } = useParams();
  const { hotel_list, url } = useContext(HotelContext);

  const selectedHotel = hotel_list.find((hotel) => hotel._id === hotelId);

  if (!selectedHotel) {
    return <div>Loading...</div>; // You can add a loading state or message
  }

  const { name,description, address, price, amenities,contact, bed,map, image } = selectedHotel;

  return (
    <>
      {/* <img src={`${url}/images/${image}`} alt={name} /> */}
      <div className="section_container header_container">
        <div className="header_image_container">
          <div className="slider">
            <button className="slider_button prev" onClick={prevSlide}>
              ❮
            </button>
            <div className="slides">
        {image && image.length > 0 ? (
          image.map((img, index) => (
            <div
              className="slide"
              key={index}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
                width: "100%",
              }}
            >
              <img
                src={`${url}/images/${img}`}
                alt={`${name} Image ${index}`}
                className="hotel-image"
                style={{ width: "100%" }} // Ensure the image takes full width
              />
            </div>
          ))
        ) : (
          <div className="slide">
            <img
              src={`${url}/images/${image}`}
              alt={name}
              className="hotel-image"
              style={{ width: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
          <button className="slider_button next" onClick={nextSlide}>
            ❯
          </button>
        </div>
        <div className="section_container hotel_details">
          <div class="hotel_details_content">
            <h2>{name}</h2>
            <p><b>About:</b> {description}</p>
            <p><b>Price:</b> Rs.{price}/night</p>
            <p><b>Address:</b> {address}</p>
            <p><b>Phone Number:</b>{contact}</p>

            <div className="bed-types">
              <h3>Bed Types</h3>
              <ul>
                {bed &&
                  Object.keys(bed).map(
                    (bedType, index) =>
                      bed[bedType] && <li key={index}>{bedType}</li>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section_container amenties" id="amenties">
        <div className="amenties_container">
          <h1>Amenities</h1>
          <p className="line" style={{ color: "red" }}>
            ━
          </p>
          <div className="services-section">
            {amenities.wifi ? (
              <div className="service-box">
                <i class="bx bx-wifi" style={{ color: "#ae1010" }}></i>
                <h3>Wifi</h3>
                <p>
                  Our platform guarantees transparent pricing with no hidden
                  fees or surprises.
                </p>
              </div>
            ) : null}
            {amenities.geyser ? (
              <div className="service-box">
                <img src={Geyser} style={{ width: "60px" }} />
                <h3>Geyser</h3>
                <p>
                  Simply explore our listings and connect directly with the
                  hotels that catch your eye.
                </p>
              </div>
            ) : null}
            {amenities.ac ? (
              <div className="service-box">
                <i class="bx bx-wind" style={{ color: "#ae1010" }}></i>
                <h3>AC</h3>
                <p>
                  Discover property specifics: rooms, amenities, and location
                  highlights.
                </p>
              </div>
            ) : null}
            {amenities.tv ? (
              <div className="service-box">
                <i class="bx bx-tv" style={{ color: "#b20808" }}></i>
                <h3>TV</h3>
                <p>
                  With Alpha Stay, you have access to curated selection of
                  hotels right at your fingertips.
                </p>
              </div>
            ) : null}
            {amenities.powerBackup ? (
              <div className="service-box">
                <i class="bx bxs-car-battery" style={{ color: "#ae1010" }}></i>
                <h3>Power Backup</h3>
                <p>
                  With Alpha Stay, you have access to curated selection of
                  hotels right at your fingertips.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="map-container">
        <h1>Map to our hotel</h1>
        <p className="line" style={{ color: "red" }}>
            ━
          </p>
        {map}
      </div>


      <HotelReview hotelId={hotelId} />

      <div
        className="section_container hotel_room_policy_container"
        id="hotel_room_policy"
      >
        <div className="hotel_room_policy_content">
          <h1>Hotel Room Policy</h1>
          <p className="line" style={{ color: "white" }}>
            ━
          </p>
          <div className="checkin-checkout">
            <label>Check-in</label>
            <button>12:00 PM</button>
            <label>Check-out</label>
            <button>11:00 AM</button>
          </div>
          <ul>
            <li>Couples are welcome</li>
            <li>
              Guests can check in using any local or outstation ID proof (PAN
              card not accepted).
            </li>
            <li>
              Policies are booking specific and would be informed to the guest
              at the time of booking or upon Check-In.
            </li>
            <li>
              Local People of the city are allowed
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default HotelDetails;
