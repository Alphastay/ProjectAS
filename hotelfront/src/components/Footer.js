import React from 'react'
import "../styles/Nav.css"
function Footer () {
  return (
    <div>
        <div className="section_container contact" id="contact">
        <div className="contact_content">
          <h1>Let's Get In Touch</h1>
          <p className="line" style={{ color: 'red' }}>━</p>
          <p>Lets build a Community where we can connect hotels to clients in the best way possible. If you have any suggestion Send us a messages and we will get back to you as soon as possible!</p>
          <div className="social-btn">
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-whatsapp'></i>
            <i className='bx bx-envelope'></i>
          </div>
        </div>
      </div>
      <footer>
        Copyright &copy; 2024 - Alpha Tech
      </footer>
    </div>
  )
}

export default Footer