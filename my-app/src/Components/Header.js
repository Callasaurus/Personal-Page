import React from 'react'
import './Header.css'
import Calla from '../images/Calla.jpg'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import ts from '../images/ts.png'
import react from '../images/react.png'
import node from '../images/node.png'

function Header() {
  return (
    <div className='header'>

      <div className='text'>
        <h1 id='h1-tag'> Hi, I'm Calla, a junior software developer and graduate of the 16-week School of Code bootcamp</h1>


        <div className='stack-icons'>
          <img src={html} alt='' className='icons-stack'></img>
          <img src={css} alt='' className='icons-stack'></img>
          <img src={js} alt='' className='icons-stack'></img>
          <img src={ts} alt='' className='icons-stack'></img>
          <img src={react} alt='' className='icons-stack'></img>
          <img src={node} alt='' className='icons-stack'></img>
        </div>

        <p id='p-tag'> I'm a software developer and graduate of the <a href='https://www.schoolofcode.co.uk/' target="_blank" rel="noreferrer"> School of Code </a> 16-week bootcamp.
          Previous to my coding journey, I spent a few years working in market research, which was influenced by the fact that I did a research-focused masters.
          Although I enjoyed what I did, I always felt like I wasn't challenging myself enough and always planned on making a move into tech when I had a chance.
          I've always been super interested in tech (mainly through gaming) and I'm a featured co-author on a <a href='https://policy.bristoluniversitypress.co.uk/virtual-reality-methods' target="_blank" rel="noreferrer"> published book on Virtual Reality </a>
          and how it can be used in social science research. I found the School of Code through a mutual friend who was a graduated bootcamper, and felt it was the perfect opportunity for me to make my first steps into the tech world!
          <br /><br />
          This page gives you a glimpse into my journey from never seeing a line of code prior to the course, to where I am now. Feel free to have a look at some of my projects, my CV and don't hesitate to get in touch! 
        </p>


        <div>
            <button id="cv-button" onClick={() => window.open(require('../images/CV - Calla Sullivan-Drage - Jan 2023.pdf'), '_none')}> Download CV ??? </button>
        </div>

      </div>

      <img id='pic-calla' src={Calla} alt=''></img>
    </div>
  )
}

export default Header;

