import React from 'react'
import './Contact.css'
import deskman from '../images/deskman.png'
import Footer from './Footer'

function Contact() {
  return (
    <div className='contact-main'>

      <h1 className='contact-title'> CONTACT </h1>

      <div className='contact-info'>
        <img id='contact-img' src={deskman} alt=''></img>

        <div className='contact-buttons'>
          <a href='https://www.linkedin.com/in/calla-sullivan-drage-88a7a5139/' target="_blank" rel="noreferrer">
            <button className='indiv-buttons'> Reach me on LinkedIn</button>
          </a>
          <a href='mailto: c.sullivandrage@outlook.com' target="_blank" rel="noreferrer">
            <button className='indiv-buttons'> Email me </button>
          </a>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Contact;