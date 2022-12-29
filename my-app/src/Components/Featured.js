import React from 'react'
import './Featured.css'
import cocktail from '../images/cocktail.png'
import socglobe from '../images/socglobe.png'
import weather from '../images/weather.png'

function Featured() {
  return (

    <div className='featured'>

      <div className='h2-tag'>
      <p> Featured works </p>
      </div>

      <div className='featured-container'>
        <div className='featured-items'>
          <img className='featured-image' src={socglobe} alt=''></img>
          <p className='feat-p'> This was my 1-week team project on week 9 of the School of Code bootcamp. We were tasked to create a full-stack app for people like ourselves - bootcampers. View <a href='https://github.com/Callasaurus/Week9-soc-across-the-globe-project-1-week-team-project' target="_blank" rel="noreferrer"> here </a> on GitHub. </p>
        </div>
        <hr className='hr'/>
        <div className='featured-items'>
          <img className='featured-image' src={cocktail} alt=''></img>
          <p className='feat-p'> An app for avid cocktail enthusiasts that are looking for cocktail inspiration. This was an app I created after working with React for just over a week. View <a href='https://github.com/Callasaurus/Week8-React-API-Hackathon' target="_blank" rel="noreferrer"> here </a> on GitHub.  </p>
        </div>
        <hr className='hr'/>
        <div className='featured-items'>
          <img className='featured-image' src={weather} alt=''></img>
          <p className='feat-p'> This is a weather app I created using React and TypeScript. Are you bored of standard weather apps and want some vaiety? If so, this is for you. View <a href='https://github.com/Callasaurus/Week-12-Hackathon-TypeScript-Weather-App' target="_blank" rel="noreferrer"> here </a> on GitHub.  </p>
        </div>
      </div>

    </div>
  )
}

export default Featured;

