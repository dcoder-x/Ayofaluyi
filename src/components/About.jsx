import React from 'react'
import portrait from '../assets/aboutme.png'
import styles from '../styles/about.css'
import Spline from '@splinetool/react-spline';


const About = () => {
  return (
    
    <div id='about'>
        <div className="title">
          ABOUT ME
        </div>
        <div className="content">
          <div className="about-image">
              {/* <img src={portrait} alt="" /> */}
              <Spline scene="https://prod.spline.design/j-uhMGplO45OZEJ1/scene.splinecode" />

          </div>
          <div className="personal-info">
              <h1>
                  BIO
              </h1>
              <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas 
              illum perferendis laborum qui autem minus quos dolores aut soluta 
              omnis velit voluptate ut, eligendi et ratione, earum, commodi fugiat?
              </h4>
              <h1>
                Experience
              </h1>
              <div className="experience">
                <span>
                  <p className='Jobtype'>
                    Freelance Front-End developer
                  </p>
                  <p className="job-location">
                    Freelance
                  </p>
                  <p className="job-duration">
                    2020-Present
                  </p>
                </span>
                <hr />
                <span>
                  <p className='Jobtype'>
                    FullStack developer
                  </p>
                  <p className="job-location">
                    Bekkah Ai
                  </p>
                  <p className="job-duration">
                    2022-Present
                  </p>
                </span>
                <hr />
              </div>
        
              <a href="src\assets\background minatures\backend.png" download={true}>
                <button className='cv-button'>
                  Download CV
                </button>
                
              </a>
            
          </div>
        </div>
        
    </div>
  )
}

export default About