import React from 'react'
import './Header.css'
import Calla from '../images/Calla.jpg'

function Header() {
  return (
    <div className='header'>
        
        <div className='text'>
        <h1> Hi, I'm Calla, a junior sofware developer and School of Code graduate</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus velit sit amet sapien porta egestas. 
        Nunc et nunc neque. Donec non feugiat est, non pellentesque ipsum. Donec sed accumsan justo, vel pulvinar turpis. 
        Etiam a tristique quam, nec luctus augue. Quisque eleifend dui et velit pellentesque, eget dictum nulla tempus. 
        Phasellus sapien neque, imperdiet id semper eget, consectetur ac eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam cursus velit sit amet sapien porta egestas. Nunc et nunc neque. Donec non feugiat est, non pellentesque ipsum. 
        Donec sed accumsan justo, vel pulvinar turpis. Etiam a tristique quam, nec luctus augue. 
        Quisque eleifend dui et velit pellentesque, eget dictum nulla tempus. Phasellus sapien neque, imperdiet id semper eget, consectetur ac eros. </p>
        
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

