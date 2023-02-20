import React from 'react'
import './Featured.css'
import socglobe from '../images/socglobe.png'
import dashboard from '../images/dashboard.png'
import devault from '../images/devault.png'

function Featured() {
  return (

    <div className='featured'>

      <div className='h2-tag'>
        <p> Featured works </p>
      </div>

      <div className='featured-container'>
        <div className='featured-items'>
          <img className='featured-image' src={devault} alt=''></img>
          <p className='feat-p'> This was my 4-week team project on week 9 of the School of Code bootcamp. We were tasked to create a full-stack app that solves a real-world problem. View <a href='https://github.com/Callasaurus/deVault-SoC-4-week-team-project' target="_blank" rel="noreferrer"> here </a> on GitHub. </p>
        </div>
        <hr className='hr' />
        <div className='featured-items'>
          <img className='featured-image' src={socglobe} alt=''></img>
          <p className='feat-p'> This was my 1-week team project on week 9 of the School of Code bootcamp. We were tasked to create a full-stack app for people like ourselves - bootcampers. View <a href='https://github.com/Callasaurus/Week9-soc-across-the-globe-project-1-week-team-project' target="_blank" rel="noreferrer"> here </a> on GitHub. </p>
        </div>
        <hr className='hr' />
        <div className='featured-items'>
          <img className='featured-image' src={dashboard} alt=''></img>
          <p className='feat-p'> This is a frontend app I created as part of a take home technical test. It runs off of the GNews api and allows users to find news articles across categories and languages. View <a href='https://github.com/Callasaurus/Frontend-take-home-technical-test' target="_blank" rel="noreferrer"> here </a> on GitHub.  </p>
        </div>
      </div>

    </div>
  )
}

export default Featured;

