import React from 'react'
import './Posts.css'
import { LinkedInEmbed } from 'react-social-media-embed';

function Posts() {
  return (
    <div className='posts'>

      <div>

        <div className='recent-posts'>
          <p> Recent posts </p>
        </div>

        <div className='linked-in'>
          <a href="https://www.linkedin.com/in/calla-sullivan-drage-88a7a5139/" target="_blank" rel="noreferrer"> See all </a>
        </div>

      </div>

    <div className='linkedin-posts'>
      <div className='individual-post'>
        <LinkedInEmbed className='linked-in-post'
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:7028289844053200897"
          postUrl="https://www.linkedin.com/posts/calla-sullivan-drage-88a7a5139_100daysofcode-learningtocode-tech-activity-7028289844556529664-zDFy?utm_source=share&utm_medium=member_desktop"
          width={325}
          height={570}
        />
      </div>

      <div className='individual-post'>
        <LinkedInEmbed className='linked-in-post'
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:7024847121790984192"
          postUrl="https://www.linkedin.com/posts/calla-sullivan-drage-88a7a5139_devault-activity-7024847122709520384-AbTq?utm_source=share&utm_medium=member_desktop"
          width={325}
          height={570}
        />
      </div>

      <div className='individual-post'>
      <LinkedInEmbed className='linked-in-post'
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:7024065387793145856"
          postUrl="https://www.linkedin.com/posts/calla-sullivan-drage-88a7a5139_100daysofcode-learningtocode-tech-activity-7024065388896243712-siYi?utm_source=share&utm_medium=member_desktop"
          width={325}
          height={570}
        />
      </div>

      <div className='individual-post'>
        <LinkedInEmbed className='linked-in-post'
          url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7001952522110132224"
          postUrl="https://www.linkedin.com/posts/calla-sullivan-drage-88a7a5139_100daysofcode-learningtocode-tech-activity-7001952641173889024-mWb3?utm_source=share&utm_medium=member_desktop"
          width={325}
          height={570}
        />
      </div>

      </div>


    </div>

  )
}

export default Posts;

