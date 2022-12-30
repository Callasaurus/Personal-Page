import React from 'react'
import './About.css'
import soc from '../images/soc.png'
import yougov from '../images/yougov.png'
import cello from '../images/cello.png'
import uob from '../images/uob.png'

function About() {
  return (
    <div className='about'>

      <h1 id='about-h1'> ABOUT ME </h1>

      <div className='about-items'>
        <h1 className='about-h1'> The School of Code </h1>
        <hr className='hr-item-about' />
        <p className='about-p'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lectus a massa interdum volutpat. Suspendisse sagittis, dui scelerisque porttitor tempus, enim odio bibendum diam, sed blandit purus dui sed lectus. Nullam eleifend auctor neque, quis tincidunt lorem pretium eu. Quisque porta bibendum risus non imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris elementum felis non vestibulum lacinia. Donec ante ipsum, rhoncus at elit vitae, molestie pulvinar diam. In erat ligula, tristique a tortor quis, vehicula condimentum leo. Vivamus cursus efficitur arcu, nec pretium libero viverra sed. Integer eu posuere tellus. Nunc non sem et arcu fermentum efficitur. Quisque tempor erat vulputate, iaculis libero non, rhoncus justo. Etiam ut faucibus lectus. Vestibulum non orci et dui mollis mollis quis quis tellus.Nunc quis magna quam. Praesent pharetra gravida tortor, ac efficitur quam semper a. Pellentesque volutpat ex at mauris cursus varius. Phasellus nec sem elit. Nunc ut congue diam. Mauris viverra diam eu metus interdum malesuada. Sed laoreet purus non enim ultrices ultricies.</p>
        <hr className='hr-item-about' />
        <img className='about-images' src={soc} alt=''></img>
      </div>

      <hr className='hr-about' />

      <div className='about-items'>
        <h1 className='about-h1'> YouGov </h1>
        <hr className='hr-item-about' />
        <p className='about-p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lectus a massa interdum volutpat. Suspendisse sagittis, dui scelerisque porttitor tempus, enim odio bibendum diam, sed blandit purus dui sed lectus. Nullam eleifend auctor neque, quis tincidunt lorem pretium eu. Quisque porta bibendum risus non imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris elementum felis non vestibulum lacinia. Donec ante ipsum, rhoncus at elit vitae, molestie pulvinar diam. In erat ligula, tristique a tortor quis, vehicula condimentum leo. Vivamus cursus efficitur arcu, nec pretium libero viverra sed. Integer eu posuere tellus. Nunc non sem et arcu fermentum efficitur. Quisque tempor erat vulputate, iaculis libero non, rhoncus justo. Etiam ut faucibus lectus. Vestibulum non orci et dui mollis mollis quis quis tellus.Nunc quis magna quam. Praesent pharetra gravida tortor, ac efficitur quam semper a. Pellentesque volutpat ex at mauris cursus varius. Phasellus nec sem elit. Nunc ut congue diam. Mauris viverra diam eu metus interdum malesuada. Sed laoreet purus non enim ultrices ultricies. </p>
        <hr className='hr-item-about' />
        <img className='about-images' src={yougov} alt=''></img>
      </div>

      <hr className='hr-about' />

      <div className='about-items'>
        <h1 className='about-h1'> Cello Health Insight </h1>
        <hr className='hr-item-about' />
        <p className='about-p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lectus a massa interdum volutpat. Suspendisse sagittis, dui scelerisque porttitor tempus, enim odio bibendum diam, sed blandit purus dui sed lectus. Nullam eleifend auctor neque, quis tincidunt lorem pretium eu. Quisque porta bibendum risus non imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris elementum felis non vestibulum lacinia. Donec ante ipsum, rhoncus at elit vitae, molestie pulvinar diam. In erat ligula, tristique a tortor quis, vehicula condimentum leo. Vivamus cursus efficitur arcu, nec pretium libero viverra sed. Integer eu posuere tellus. Nunc non sem et arcu fermentum efficitur. Quisque tempor erat vulputate, iaculis libero non, rhoncus justo. Etiam ut faucibus lectus. Vestibulum non orci et dui mollis mollis quis quis tellus.Nunc quis magna quam. Praesent pharetra gravida tortor, ac efficitur quam semper a. Pellentesque volutpat ex at mauris cursus varius. Phasellus nec sem elit. Nunc ut congue diam. Mauris viverra diam eu metus interdum malesuada. Sed laoreet purus non enim ultrices ultricies. </p>
        <hr className='hr-item-about' />
        <img className='about-images' src={cello} alt=''></img>
      </div>

      <hr className='hr-about' />

      <div className='about-items'>
        <h1 className='about-h1'> The University of Birmingham </h1>
        <hr className='hr-item-about' />
        <p className='about-p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum lectus a massa interdum volutpat. Suspendisse sagittis, dui scelerisque porttitor tempus, enim odio bibendum diam, sed blandit purus dui sed lectus. Nullam eleifend auctor neque, quis tincidunt lorem pretium eu. Quisque porta bibendum risus non imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris elementum felis non vestibulum lacinia. Donec ante ipsum, rhoncus at elit vitae, molestie pulvinar diam. In erat ligula, tristique a tortor quis, vehicula condimentum leo. Vivamus cursus efficitur arcu, nec pretium libero viverra sed. Integer eu posuere tellus. Nunc non sem et arcu fermentum efficitur. Quisque tempor erat vulputate, iaculis libero non, rhoncus justo. Etiam ut faucibus lectus. Vestibulum non orci et dui mollis mollis quis quis tellus.Nunc quis magna quam. Praesent pharetra gravida tortor, ac efficitur quam semper a. Pellentesque volutpat ex at mauris cursus varius. Phasellus nec sem elit. Nunc ut congue diam. Mauris viverra diam eu metus interdum malesuada. Sed laoreet purus non enim ultrices ultricies.</p>
        <hr className='hr-item-about' />
        <img className='about-images' src={uob} alt=''></img>
      </div>

    </div>
  )
}

export default About;