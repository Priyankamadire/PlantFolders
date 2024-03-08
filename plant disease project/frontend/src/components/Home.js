import React from 'react';
// import bgvideo from './images/video.mp4';
import { VideoHTMLAttributes } from 'react';
// import bgvideo from '../video/video.mp4';
import bgvideo from '../images/video.mp4'
const Home = () => {
  return (
    <div>
       { 
      //  <video src={bgvideo} width="1800" height="1000" controls="controls" autoplay="true" />
<video className='videoTag' autoPlay loop muted>
<source src={bgvideo} type='video/mp4' />
</video>
       

       
       }
    </div>
  )
}

export default Home
