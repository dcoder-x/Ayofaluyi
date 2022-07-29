import React from 'react'
import styles from '../styles/contact.css'
import Spline from '@splinetool/react-spline';


const Contact = () => {
  return (
    
    <div id='contact'>
        <div className="title">
          Let's talk
        </div>
        <div className="content">
          <div className="contact-image">
              {/* <img src={portrait} alt="" /> */}
              <Spline scene="https://prod.spline.design/TBEzl5G018nODs-j/scene.splinecode" />

          </div>
          <div className="contact-form">
              <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' />
                <label htmlFor="subject">Subject</label>
                <input type="text" id='name' />
                <label htmlFor="message">Message</label>
                <input type="text" id='message' className='message' />
                <button className='cv-button'>
                  Submit
                </button>
              </form>
        
              
            
          </div>
        </div>

    </div>
  )
}

export default Contact