import React, { useState} from "react";
import "../styles/AddHotel.css";
import {localities} from "../pages/localities";
import upload from "../assets/upload_area.png";
import axios from "axios";

 function AddHotel(){
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");         
  const [locality, setLocality] = useState("");    
  const [price, setPrice] = useState("");
  const [map, setMap] = useState("");
  const [amenities, setAmenities] = useState({
    ac: false,
    tv: false,
    wifi: false,
    geyser: false,
    powerBackup: false,
  });
  const [bed, setBed] = useState({
    single: false,
    kingsize: false,
    queensize: false,
  });
  const [image, setImage] = useState([]);


  const handleAmenityChange = (e) => {
    setAmenities({
      ...amenities,
      [e.target.name]: e.target.checked,
    });
  };
  const handleBedChange = (e) => {
    setBed({
      ...bed,
      [e.target.name]: e.target.checked,
    });
  };


  const handleSubmit=async(e)=>{
    e.preventDefault();
   // if(image.length < 1){
   //   alert("Please upload at least one image");
   //    return;
   //  }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("locality", locality);
    formData.append("contact", contact);
    formData.append("price", price);
    formData.append("map", map);
    formData.append("address", address);
    formData.append("wifi", amenities.wifi);
    formData.append("tv", amenities.tv);
    formData.append("geyser", amenities.geyser);
    formData.append("powerBackup", amenities.powerBackup);
    formData.append("single", bed.single);
    formData.append("kingsize", bed.kingsize);
    formData.append("queensize", bed.queensize);
    Object.keys(amenities).forEach((key) => formData.append(key, amenities[key]));
    Object.keys(bed).forEach((key) => formData.append(key, bed[key]));
 //   image.forEach((file) => formData.append("images", file));
 // if (image.length > 0) {
 //   formData.append("mainImage", image[0]); // First image
 //   image.slice(1).forEach((file) => formData.append("additionalImages", file)); // Rest
 //    }

    try {
      const response = await axios.post("https://alphastay.vercel.app/api/addhotel", formData, {
          headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.data.success) {

          alert("Hotel added successfully!");
      }
  } catch (error) {
      console.error("Error adding hotel:", error);
      alert("Failed to add hotel.");
  }
  }

  return (
    <div className="addhotel" id="addhotel">
      <form className="flex-col" >
   
        {/* <div className="add-hotel-id flex-col">
          <p>Hotel Id</p>
          <input type="text" name="name" value={adminEmail} readOnly />
        </div> */}
       

        <div className="add-hotel-name flex-col">
          <p>Hotel Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Hotel Name"
            required
          />
        </div>
        <div className="add-hotel-description flex-col">
          <p>Hotel Description</p>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of the hotel"
            rows="6"
            required
          />
        </div>
        <div className="add-locality-price">
          <div className="add-locality flex-col">
            <p>Hotel Locality</p>
            <select
              name="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            >
           {localities.map((loc,index)=>(
            <option key={index} value={loc}>{loc}</option>
           ))}
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Room Price</p>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="650"
              required
            />
          </div>
          <div className="add-price flex-col">
            <p>Contact Number</p>
            <input
              type="number"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="xxxxx-xxxxx"
              maxLength={10}
              minLength={10}
              required
            />
          </div>
        </div>
        <div className="add-hotel-address flex-col">
          <p>Hotel Address</p>
          <textarea
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address of the hotel"
            rows="6"
            required
          />
        </div>
        
        <div className="add-amenities flex-col">
             <p>Map to the Hotel</p>
          <input
            type="text"
            name="location"
            value={map}
            onChange={(e) => setMap(e.target.value)}
            placeholder="Paste the location of the hotel"
            required
          />
        </div>
        
        <div className="add-amenities flex-col">
             <p>Amenities</p>
          <div className="amenities-list">
            <label>
              <input
                type="checkbox"
                name="ac"
                checked={amenities.ac}
                onChange={handleAmenityChange}
              />
              A.C
            </label>
            <label>
              <input
                type="checkbox"
                name="tv"
                checked={amenities.tv}
                onChange={handleAmenityChange}
              />
              T.V
            </label>
            <label>
              <input
                type="checkbox"
                name="wifi"
                checked={amenities.wifi}
                onChange={handleAmenityChange}
              />
              Wifi
            </label>
            <label>
              <input
                type="checkbox"
                name="geyser"
                checked={amenities.geyser}
                onChange={handleAmenityChange}
              />
              Geyser
            </label>
            <label>
              <input
                type="checkbox"
                name="powerBackup"
                checked={amenities.powerBackup}
                onChange={handleAmenityChange}
              />
              Power Backup
            </label>
          </div>
        </div>
       
        <div className="add-amenities flex-col">
                  <p>Types of Beds</p>
          <div className="amenities-list">
            <label>
              <input
                type="checkbox"
                name="single"
                checked={bed.single}
                onChange={handleBedChange}
              />
              Single Bed
            </label>
            <label>
              <input
                type="checkbox"
                name="kingsize"
                checked={bed.kingsize}
                onChange={handleBedChange}
              />
              King Size Bed
            </label>
            <label>
              <input
                type="checkbox"
                name="queensize"
                checked={bed.queensize}
                onChange={handleBedChange}
              />
              Queen SIze Bed
            </label>
          </div>
        </div>

        <button  className="add-btn" onClick={handleSubmit}>
          ADD
        </button>
      </form>
    </div>
  );
}
export default AddHotel;
