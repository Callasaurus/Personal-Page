import React from 'react'
import Footer from './Footer'
import './Portfolio.css'
import { SocialIcon } from 'react-social-icons';

function Portfolio() {
  return (
    <div className='portfolio-main'>

      <h1 id='portfolio-title'> PORTFOLIO </h1>

      <div className='github-link'>
        <SocialIcon className='icon' url="https://github.com/Callasaurus" target="_blank" rel="noreferrer" />
        <p className='portfolio-p'> View all of my work on <b>GitHub</b></p>
      </div>

      <div class="grid">
        <a className='port-a-tag-1' href='https://github.com/Callasaurus/deVault-SoC-4-week-team-project' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Full-stack app for job-seeking developers </p>
          </div>
        </a>
        <a className='port-a-tag-2' href='https://github.com/Callasaurus/Week9-soc-across-the-globe-project-1-week-team-project' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Full-stack learning resource app for bootcampers </p>
          </div>
        </a>
        <a className='port-a-tag-3' href='https://github.com/Callasaurus/Frontend-take-home-technical-test' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Frontend take-home technical test </p>
          </div>
        </a>
        <a className='port-a-tag-4' href='https://github.com/Callasaurus/Backend-take-home-technical-test' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Backend take-home technical test </p>
          </div>
        </a>
        <a className='port-a-tag-5' href='https://github.com/Callasaurus/Personal-Page' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Personal webpage process </p>
          </div>
        </a>
        <a className='port-a-tag-6' href='https://github.com/Callasaurus/Week-12-Hackathon-TypeScript-Weather-App' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> TypeScript weather app </p>
          </div>
        </a>
        <a className='port-a-tag-7' href='https://github.com/Callasaurus/Week8-React-API-Hackathon' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Cocktail inspiration app </p>
          </div>
        </a>
        <a className='port-a-tag-8' href='https://github.com/Callasaurus/Week11-Full-stack-deployed-shoppinglist' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Full-stack shopping list app </p>
          </div>
        </a>
        <a className='port-a-tag-9' href='https://github.com/Callasaurus/Week11-Hackathon-Full-stack-Deployed-Custom-Hooks-useContext' target="_blank" rel="noreferrer">
          <div className='grid-item'>
            <p className='paragraph-item'> Imagorium: a full-stack app for screensaver inspiration </p>
          </div>
        </a>
      </div>

      <Footer />

    </div>
  )
}

export default Portfolio;