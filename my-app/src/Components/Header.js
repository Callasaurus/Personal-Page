import React from 'react'
import './Header.css'
import Calla from '../images/Calla.jpg'

function Header() {
  return (
    <div className='header'>

      <div className='text'>
        <h1 id='h1-tag'> Hi, I'm Calla, a junior software developer on the 16-week School of Code bootcamp</h1>
        <p id='p-tag'> I'm an aspiring software developer who is currently on the <a href='https://www.schoolofcode.co.uk/' target="_blank" rel="noreferrer"> School of Code </a> 16-week bootcamp.
          Previous to my coding journey, I spent a few years working in market research, which was partly influenced by the fact that I did a research-focused masters.
          Although I enjoyed what I did, I always felt like I wasn't challenging myself enough and always planned on making a move into tech when I had a chance.
          I've always been super interested in tech (mainly through gaming) and I'm a featured co-author on a <a href='https://policy.bristoluniversitypress.co.uk/virtual-reality-methods' target="_blank" rel="noreferrer"> published book on Virtual Reality </a>
          and how it can be used in social science research. I found the School of Code through a mutual friend who was a graduated bootcamper, and felt it was the perfect opportunity for me to make my first steps into the tech world!
          <br /><br />
          This page gives you a glimpse into my journey from never seeing a line of code prior to the course, to where I am now. Feel free to have a look at some of my projects, my CV and don't hesitate to get in touch!
        </p>

        <div>
          <a id='a-tag' href='https://pdfhost.io/v/2dEXrThRO_CV_Calla_SullivanDrage_Dec22' target="_blank" rel="noreferrer">
            <button id="cv-button"> Download CV ↓ </button>
          </a>

        </div>

      </div>

      <img id='pic-calla' src={Calla} alt=''></img>
    </div>
  )
}

export default Header;

