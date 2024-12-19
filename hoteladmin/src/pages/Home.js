import React from 'react'
import "../styles/Home.css";
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
    <div className="section_container header_container" >
    <div className="header_image_container">
      <div className="header_content" id='home'>
        <h1>Welcome to AlphaStay Family</h1>
        <p className="line">━</p>
        <p>Thank you for choosing AplhaStay. We help Hotels reach a wider audience and establish a direct connection. </p>
        <div className="header_buttons">
          <Link to='/addhotel'>
            <button className="find-hotels-btn">Register Hotel</button>
            </Link>
            <Link to='/updatehotel'>
            <button className="register-hotels-btn">Update Details</button>
            </Link>
        </div>
      </div>
    </div>
  </div>
        <div className="box">
        <section id="ourMission" className="section_container our_mission_container">
          <div className="our_mission_content">
            <h1> To the Members of AlphaStay</h1>
            <p className="line" style={{ color: 'white' }}>━</p>
            <p style={{ color: 'white' }}>At AlphaStay, our mission is to connect you directly with a broad audience of potential guests, ensuring that you retain your hard-earned revenue without the need for third-party intermediaries. Our unique service model charges a simple monthly fee, allowing you to showcase your hotel to thousands of prospective customers.</p>
<br/>
            <p style={{ color: 'white' }}>We are committed to helping your hotel reach its fullest potential and providing a seamless, cost-effective solution for both you and your guests. Together, we can create exceptional experiences for travelers while maximizing your business growth.</p>
          </div>
        </section>
      </div>

      <div className="section_container why_choose_AlphaStay">
        <section id="why_choose_AlphaStay" className="why_choose_AlphaStay_container">
          <h1>Why Choose Alpha Stay</h1>
          <p className="line" style={{ color: 'red' }}>━</p>
          <div className="services-section">
            <div className="service-box">
              <i className='bx bxl-sketch'></i>
              <h3>Best Prices <br />Available</h3>
              <p>Our platform guarantees transparent pricing with no hidden fees or surprises.</p>
            </div>
            <div className="service-box">
              <i className='bx bx-laptop'></i>
              <h3>No Signup<br /> Required</h3>
              <p>Simply explore our listings and connect directly with the hotels that catch your eye.</p>
            </div>
            <div className="service-box">
              <i className='bx bx-globe'></i>
              <h3>Comprehensive Hotel Data</h3>
              <p>Discover property specifics: rooms, amenities, and location highlights.</p>
            </div>
            <div className="service-box">
              <i className='bx bx-heart'></i>
              <h3>Hotels at your Fingertips</h3>
              <p>With Alpha Stay, you have access to curated selection of hotels right at your fingertips.</p>
            </div>
          </div>
        </section>
      </div>
      
      </div>
  )
}

export default Home