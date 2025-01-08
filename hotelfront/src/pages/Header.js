import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div >
      
        <div className="home_container">
          <div className="home_content" id='home_content'>
            <h1>Hotels At Your Fingertips</h1>
            <p className="line" style={{ color: 'red' }}>━</p>
            <p>Browse Listing - Direct Contact - Book With Confidence</p>
            <div className="home_buttons">
              <Link to='/'>
                <button className="find-hotels-btn">Find Hotels</button>
              </Link>
              <Link to='/login'>
                <button className="register-hotels-btn">Register Hotels</button>
              </Link>
            </div>
          </div>
        </div>
      
      <div className="boxMission">
        <section id="ourMission" className="section_container our_mission_container">
          <div className="our_mission_content">
            <h1>Our Mission ?</h1>
            <p className="line" style={{ color: 'white' }}>━</p>
            <p style={{ color: 'white' }}>To simplify this experience. We set out to create a platform where hotels can seamlessly list their properties, travellers can access comprehensive information, and direct communication becomes the norm. Say goodbye to sign-up hassle and hello to hassle-free stays. Welcome to Alpha Stay, where convenience meets quality!</p>
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
      <div className="section_container list_property">
        <section id='listing' className="list_property_content">
          <h1>Work With Alpha Stay</h1>
          <p className="line" style={{ color: 'white', margin: '-8px 0 -15px 0' }}>━</p>
          <button className="list_property_btn">List Your Property</button>
        </section>
      </div>
      <div className="box">
        <section id="ourMission" className="section_container our_mission_container">
          <div className="our_mission_content">
            <h1>Report Issues & Help Us Improve</h1>
            <p className="line" style={{ color: 'white' }}>━</p>
            <p style={{ color: 'white' }}>Dear valued customers, your trust is at the heart of our service. If you ever feel misled or cheated by any hotel, we urge you to file a complaint and fill out the form below. This will help us address your concerns promptly and prevent similar issues from happening again. Your feedback ensures we uphold our commitment to fairness and transparency. Thank you for helping us improve and serve you better!</p>
          <br/>
          <p><a href='https://docs.google.com/forms/d/e/1FAIpQLSc5BlfCV0BcFpM7zN804UnP3xuCgh-nN8G8cDMIqqSskECk_Q/viewform?usp=sf_link' target='_blank' className='help_form'>Kindly Fill the Complaint Form</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
