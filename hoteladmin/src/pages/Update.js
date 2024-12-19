import React from 'react'
import "../styles/Update.css";
function Update() {

  const handleButtonClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfkdOSCTPCwddiOjvzuNlnrzCS7ePHyob3bT8s_M2AL2QHi_g/viewform?usp=sf_link',
      '_blank'
    );
  }

  return (
    <div class="update_cont" id='update'>
    <h1>We're Under Development!</h1>
    <p>We are currently working hard to improve our app and will soon launch an admin self-update feature. 
       In the meantime, if you have updates to make regarding the hotel, please fill out the form below. 
       Our team will reach out to you promptly!</p>
       <button onClick={handleButtonClick}>Fill the Update Form</button>
</div>
  )
}

export default Update;
