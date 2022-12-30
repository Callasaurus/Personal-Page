import React from 'react'
import './About.css'
import soc from '../images/soc.png'
import yougov from '../images/yougov.png'
import cello from '../images/cello.png'
import uob from '../images/uob.png'
import Footer from './Footer'

function About() {
  return (
    <div className='about'>

      <h1 id='about-h1'> ABOUT ME </h1>

      <div className='about-items'>
        <h1 className='about-h1'> The School of Code </h1>
        <hr className='hr-item-about' />
        <p className='about-p'>  Previous to my coding journey, I spent a few years working in market research, which was partly influenced by the fact that I did a research-focused masters.
          Although I enjoyed what I did, I always felt like I wasn't challenging myself enough and always planned on making a move into tech when I had a chance.
          <br /><br />
          I've always been super interested in tech (mainly through gaming) and I'm a featured co-author on <a href='https://policy.bristoluniversitypress.co.uk/virtual-reality-methods' target="_blank" rel="noreferrer"> published book on Virtual Reality </a>
          and how it can be used in social science research. I found the <a href='https://www.schoolofcode.co.uk/' target="_blank" rel="noreferrer"> School of Code </a> through a mutual friend who was a graduated bootcamper, 
          and felt it was the perfect opportunity for me to make my first steps into the tech world!
          <br /><br />
          The School of code is a coding bootcamp that is specialised for full-stack JavaScript development. The Curriculum includes: HTML, CSS, JavaScript, TypeScript, React.js, Node.js, APIs and Databases, PostgreSQL, Cloud Hosting, GitHub, Figma, Software deployment, 
          Testing, Debugging and much more. There is an emphasis on teamwork (frequent group work and pair programming with a new partner each week), problem solving, computational thinking and industry best practices(such as AGILE working). </p>
        <hr className='hr-item-about' />
        <img className='about-images' src={soc} alt=''></img>
      </div>

      <hr className='hr-about' />

      <div className='about-items'>
        <h1 className='about-h1'> YouGov </h1>
        <hr className='hr-item-about' />
        <p className='about-p'> Having spent two years working at Cello Health Insight, I felt it was time for me to make a change and move to another market research company that were researching things that were of more interest and
          importance to me. I made the move to YouGov - a company that research a wide variety of different topics for a range of industries, including: social research; charity research; public sector research and private sector research.
          <br /><br />
          My responsibilities included: conducting fieldwork (interviews, focus groups, online communities and more); analysing in-house research and producing presentations and insights for clients; presenting data to clients; creating research
          materials (e.g. recruitment screeners, discussion guides) and handling recruitment via YouGov's panel and by using their bespoke scripting software and language.
          <br /><br />
          Over the time I spent working with the scripting software I gained
          a passion for it (learning the syntax, problem-solving, improving and finding ways to streamline the recruitment process). This sparked my interest in a career as a software developer.
        </p>
        <hr className='hr-item-about' />
        <img className='about-images' src={yougov} alt=''></img>
      </div>

      <hr className='hr-about' />

      <div className='about-items'>
        <h1 className='about-h1'> Cello Health Insight</h1>
        <hr className='hr-item-about' />
        <p className='about-p'> After finishing my research-focused masters and gaining a keen interest in conducting research, I ventured into the field of market research with Cello Health Insight. At the time of joining,
          Cello Health Insight were ranked as one of the Sunday Times top 100 companies to work for and were producing interesting and important research for the healthcare and pharmaceutical industry.
          <br /><br />
          During my time at Cello, I primarily worked in Qualitative market research, conducting: fieldwork with a variety of different people (e.g. doctors, patients, stakeholders and more); analysing datasets from multiple markets
          and producing actionable insights for clients. </p>
        <hr className='hr-item-about' />
        <img className='about-images' src={cello} alt=''></img>
      </div>

      <hr className='hr-about' />

      <div className='about-items'>
        <h1 className='about-h1'> The University of Birmingham</h1>
        <hr className='hr-item-about' />
        <p className='about-p'> During my time at the University of Birmigham I undertook a BSc in Geography and Economics (2:1) and an MSc in Research in Human Geography (Distinction).
          <br /><br />
          BSc Geography and Economics offered me the analytical rigor of Economics and provided me with a firm understanding of advanced economic and statistical models.
          It also exposed me to cutting-edge debates in Human Geography, Environmental Science and related fields.
          <br /><br />
          MSc Research in Human Geography combines advanced interdisciplinary expertise from Geography, Political Science and International Studies. The course also provided me with advanced training in qualitative and
          quantitative social science research methodologies and their application in social research.
        </p>
        <hr className='hr-item-about' />
        <img className='about-images' src={uob} alt=''></img>
      </div>

      <Footer />

    </div>
  )
}

export default About;